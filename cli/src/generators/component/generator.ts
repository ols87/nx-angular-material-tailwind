import { libraryGenerator } from '@nx/angular/generators';
import { Tree } from '@nx/devkit';
import { CreateLibGeneratorSchema } from './schema';

export async function createLibGenerator(
  tree: Tree,
  options: CreateLibGeneratorSchema,
) {
  const { path } = options;

  const projectName = path.replace(/\//g, '-');

  await libraryGenerator(tree, {
    name: projectName,
    directory: `components/${path}`,
    standalone: true,
    strict: true,
    style: 'scss',
    prefix: '',
    displayBlock: true,
    flat: true,
    simpleName: true,
    projectNameAndRootFormat: 'as-provided',
  });
}

export default createLibGenerator;
