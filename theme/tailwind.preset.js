const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          A100: 'var(--color-primary-A100)',
          A200: 'var(--color-primary-A200)',
          A400: 'var(--color-primary-A400)',
          A700: 'var(--color-primary-A700)',
          'contrast-50': 'var(--color-primary-contrast-50)',
          'contrast-100': 'var(--color-primary-contrast-100)',
          'contrast-200': 'var(--color-primary-contrast-200)',
          'contrast-300': 'var(--color-primary-contrast-300)',
          'contrast-400': 'var(--color-primary-contrast-400)',
          'contrast-500': 'var(--color-primary-contrast-500)',
          'contrast-600': 'var(--color-primary-contrast-600)',
          'contrast-700': 'var(--color-primary-contrast-700)',
          'contrast-800': 'var(--color-primary-contrast-800)',
          'contrast-900': 'var(--color-primary-contrast-900)',
          'contrast-A100': 'var(--color-primary-contrast-A100)',
          'contrast-A200': 'var(--color-primary-contrast-A200)',
          'contrast-A400': 'var(--color-primary-contrast-A400)',
          'contrast-A700': 'var(--color-primary-contrast-A700)',
        },
        success: 'var(--color-success)',
        error: 'var(--color-error)',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
