import { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

interface PackageJson {
  name: string;
  peerDependencies?: object;
}

const commonGlobals = {
  '@emotion/react': 'emReact',
  '@emotion/styled': 'emStyled',
  react: 'React',
  'react-dom': 'ReactDOM',
};

const getExternal = (
  peerDependencies: PackageJson['peerDependencies']
): string[] => (peerDependencies ? Object.keys(peerDependencies) : []);

const getGlobals = (external: string[]) => {
  if (!external || !external.length) {
    return {};
  }

  const existingGloabls: string[] = external.filter(
    (value) => !!commonGlobals[value]
  );
  const existingGloablsEntries = existingGloabls.map((value) => [
    value,
    commonGlobals[value],
  ]);

  return Object.fromEntries(existingGloablsEntries);
};

export const commonUserConfig = (
  packageJson: PackageJson,
  entry: string
): UserConfig => {
  const { name, peerDependencies } = packageJson;
  const external = getExternal(peerDependencies);
  const globals = getGlobals(external);

  return {
    plugins: [
      react(),
      dts({
        exclude: ['src/*.mdx', 'src/*.stories.@(js|jsx|mjs|ts|tsx)'],
      }),
    ],
    build: {
      copyPublicDir: false,
      emptyOutDir: true,
      outDir: 'dist',
      lib: {
        entry,
        name,
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        input: {
          main: entry,
        },
        external,
        output: {
          globals,
        },
      },
    },
  };
};
