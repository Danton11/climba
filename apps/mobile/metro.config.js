// Metro config for Expo + pnpm monorepo
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..'); // repo root

/** @type {import('metro-config').ConfigT} */
const config = getDefaultConfig(projectRoot);

// Let Metro follow pnpm symlinks & package exports
config.resolver.unstable_enableSymlinks = true;
config.resolver.unstable_enablePackageExports = true;

// Make Metro look in the repo root too
config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Optional, but helps with odd assets:
// config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

module.exports = config;

