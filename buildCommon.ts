import { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

interface PackageJson {
  name: string;
  peerDependencies?: object;
}

const horusLibraryPrefix = '@horus-library/';

const formatWorkspaceUMDName = (value: string): string => {
  const workspaceDashedName = value.split(horusLibraryPrefix)[1];

  let prevDash = true;

  const camelCaseWorkspaceName = [...workspaceDashedName]
    .map((char) => {
      if (prevDash) {
        prevDash = false;
        return char.toUpperCase();
      }

      if (char === '-') {
        prevDash = true;
        return '';
      }

      return char;
    })
    .join('');

  return `HorusLibrary${camelCaseWorkspaceName}`;
};

const commonGlobals = {
  '@emotion/react': 'emotionReact',
  '@emotion/styled': 'emotionStyled',
  '@mui/material': 'MaterialUI',
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
    (value) => !!commonGlobals[value] || value.startsWith(horusLibraryPrefix)
  );
  const existingGloablsEntries = existingGloabls.map((value) => [
    value,
    commonGlobals[value] ?? formatWorkspaceUMDName(value),
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
  const umdName = formatWorkspaceUMDName(name);

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
          exports: 'named', // Disable warning for named and default exports together
          name: umdName,
        },
      },
    },
  };
};
