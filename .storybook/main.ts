import type { StorybookConfig } from '@storybook/react-vite';
import { getPackagesStoriesPaths } from './storiesUtils';

const config: StorybookConfig = {
  stories: getPackagesStoriesPaths(),
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
