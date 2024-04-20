import { libraryGenerator } from '@nx/angular/generators';
import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
} from '@nx/devkit';
import { WORKSPACE } from 'workspace';
import { CreateLibGeneratorSchema } from './schema';

export async function serviceGenerator(
  tree: Tree,
  options: CreateLibGeneratorSchema,
) {
  const { path } = options;

  const projectName = path.replace(/\//g, '-');

  const paths = path.split('/');

  const camelCasePath = paths
    .map((path) => {
      const lowercased = path.toLowerCase();
      return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
    })
    .join('');

  const serviceName = `${camelCasePath}Service`;

  await libraryGenerator(tree, {
    name: projectName,
    directory: `services/${path}`,
    strict: true,
    prefix: WORKSPACE.component.prefix,
    flat: true,
    simpleName: true,
    projectNameAndRootFormat: 'as-provided',
  });

  const componentRoot = readProjectConfiguration(tree, projectName).root;

  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files'),
    joinPathFragments(componentRoot, 'src'),
    { ...options, serviceName, projectName },
  );

  function deleteComponentFiles(tree: Tree, directoryPath: string) {
    const directory = tree.children(directoryPath);

    for (const path of directory) {
      const fullPath = joinPathFragments(directoryPath, path);

      if (tree.isFile(fullPath) && path.includes('.component')) {
        tree.delete(fullPath);
      } else if (tree.children(fullPath).length > 0) {
        deleteComponentFiles(tree, fullPath);
      }
    }
  }

  deleteComponentFiles(tree, `services/${path}`);

  await formatFiles(tree);
}

export default serviceGenerator;
