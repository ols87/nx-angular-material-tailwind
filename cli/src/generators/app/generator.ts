import { E2eTestRunner, applicationGenerator } from '@nx/angular/generators';
import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
  updateProjectConfiguration,
} from '@nx/devkit';
import { AppGeneratorSchema } from './schema';

export async function appGenerator(tree: Tree, options: AppGeneratorSchema) {
  const { name } = options;

  const camelCasePath = name
    .split('-')
    .map((path) => {
      const lowercased = path.toLowerCase();
      return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
    })
    .join('');

  const componentName = `${camelCasePath}AppComponent`;

  await applicationGenerator(tree, {
    name,
    directory: `apps/${name}`,
    strict: true,
    standalone: true,
    addTailwind: true,
    routing: true,
    prefix: name,
    style: 'scss',
    projectNameAndRootFormat: 'as-provided',
    e2eTestRunner: E2eTestRunner.None,
  });

  const componentRoot = readProjectConfiguration(tree, name).root;

  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files'),
    joinPathFragments(componentRoot),
    { ...options, componentName },
  );

  await formatFiles(tree);

  tree.delete(`${componentRoot}/src/app/nx-welcome.component.ts`);
  tree.delete(`${componentRoot}/src/app/app.component.html`);
  tree.delete(`${componentRoot}/src/app/app.component.scss`);

  const projectConfig = readProjectConfiguration(tree, name);

  projectConfig.targets.build.options.stylePreprocessorOptions = {
    includePaths: ['theme'],
  };

  updateProjectConfiguration(tree, name, projectConfig);
}

export default appGenerator;
