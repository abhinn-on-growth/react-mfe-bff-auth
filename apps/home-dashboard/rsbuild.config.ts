import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'homeDashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './HomePage': './src/pages/HomePage.tsx',
        './DashboardPage': './src/pages/DashboardPage.tsx',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        'react-router-dom': { singleton: true, eager: true },
        '@app/shared': { singleton: true, eager: true },
      },
    }),
  ],
});
