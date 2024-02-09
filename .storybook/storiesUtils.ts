import path from 'path';
import fs from 'fs';

/**
 * Recursively find all files in a directory with given pattern
 * @param {string} baseDirectory - base directory path
 * @param {RegExp} pattern - file pattern
 * @param {string[]} [files]
 * @param {string[]} [result]
 * @returns all files in a directory with given pattern
 */
const recursivelyFindFilesByRegex = (
  baseDirectory: string,
  pattern: RegExp,
  files?: string[],
  result?: string[]
): string[] => {
  files = files || fs.readdirSync(baseDirectory);
  result = result || [];
  files.forEach(function (file) {
    var newbase = path.join(baseDirectory, file);
    if (fs.statSync(newbase).isDirectory()) {
      result = recursivelyFindFilesByRegex(
        newbase,
        pattern,
        fs.readdirSync(newbase),
        result
      );
    } else {
      if (pattern.test(file)) {
        result = result || [];
        result.push(newbase);
      }
    }
  });
  return result;
};

const getDirectories = (path: string): string[] => {
  // Read the contents of the directory
  const directoryContents: fs.Dirent[] = fs.readdirSync(path, {
    withFileTypes: true,
  });

  // Filter out only directories
  const directories: string[] = directoryContents
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  return directories;
};

const pattern: RegExp = /(\.stories\.(js|jsx|mjs|ts|tsx)|\.mdx)$/;

/**
 * Collect all story paths from monorepo workspaces.
 *
 * @returns story paths
 */
export const getPackagesStoriesPaths = (): string[] => {
  const currentDirectoryPath: string = __dirname;
  const packagesRootDirectoryPath: string = currentDirectoryPath.replace(
    '.storybook',
    'packages'
  );

  const packageDirectoryNames: string[] = getDirectories(
    packagesRootDirectoryPath
  );

  const allStoryFilePaths: string[] = packageDirectoryNames.flatMap(
    (packageName) => {
      const packageBaseDirectoryPath: string = `${packagesRootDirectoryPath}/${packageName}/src`;

      const packageAllFilePaths: string[] = recursivelyFindFilesByRegex(
        packageBaseDirectoryPath,
        pattern
      );

      return packageAllFilePaths;
    }
  );

  return allStoryFilePaths;
};
