import type { StorybookConfig } from '@storybook/react-vite';
import { defineConfig } from 'vite';
import fixReactVirtualized from 'esbuild-plugin-react-virtualized'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
    },
  },
  viteFinal: async (config) => {
    return defineConfig({
      ...config,
      optimizeDeps: {
        esbuildOptions: {
          plugins: [fixReactVirtualized],
        },
      },
    });
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
