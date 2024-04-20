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
  const { name, directory } = options;

  const paths = (directory || name).split('/');

  const camelCasePath = paths
    .map((path) => {
      const lowercased = path.toLowerCase();
      return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
    })
    .join('');

  const componentName = `${camelCasePath}Component`;

  await applicationGenerator(tree, {
    name,
    directory: `apps/${directory ? `${directory}/` : ''}${name}`,
    strict: true,
    addTailwind: true,
    standalone: true,
    routing: true,
    prefix: name,
    style: 'scss',
    projectNameAndRootFormat: 'as-provided',
    e2eTestRunner: E2eTestRunner.None,
  });

  const componentRoot = readProjectConfiguration(tree, options.name).root;

  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files'),
    joinPathFragments(componentRoot),
    { ...options, componentName },
  );

  await formatFiles(tree);

  tree.delete(`${componentRoot}/src/app/nx-welcome.component.ts`);
  tree.delete(`${componentRoot}/src/app/app.component.spec.ts`);
  tree.delete(`${componentRoot}/src/app/app.component.html`);
  tree.delete(`${componentRoot}/src/app/app.component.scss`);

  const projectConfig = readProjectConfiguration(tree, options.name);

  projectConfig.targets.build.options.stylePreprocessorOptions = {
    includePaths: ['theme'],
  };

  updateProjectConfiguration(tree, options.name, projectConfig);
}

export default appGenerator;
