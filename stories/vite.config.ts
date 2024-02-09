import { defineConfig } from 'vite';
import packageJson from './package.json';
import { commonUserConfig } from '../buildCommon';
import path from 'path';

export default defineConfig(
  commonUserConfig(packageJson, path.resolve(__dirname, 'src/index.ts'))
);
