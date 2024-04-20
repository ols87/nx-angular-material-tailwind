const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../theme/tailwind.preset')],
  content: [
    join(__dirname, 'src/**/!(*.spec).{ts,html}'),
    join(__dirname, '../../components/**/!(*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
