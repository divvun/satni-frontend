module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  viteFinal: async (config) => {
    // Remove the problematic @vitejs/plugin-react
    config.plugins = config.plugins.filter(
      (plugin) =>
        !plugin || !plugin.name || !plugin.name.includes('vite:react-babel'),
    );

    return {
      ...config,
      define: {
        ...config.define,
        global: 'globalThis',
        'process.env': {},
        'process.browser': true,
        React: 'globalThis.React',
      },
      optimizeDeps: {
        include: ['react', 'react-dom'],
        esbuildOptions: {
          loader: {
            '.js': 'jsx',
            '.jsx': 'jsx',
            '.ts': 'tsx',
            '.tsx': 'tsx',
          },
          define: {
            global: 'globalThis',
            React: 'globalThis.React',
          },
          jsxFactory: 'React.createElement',
          jsxFragment: 'React.Fragment',
        },
      },
      resolve: {
        alias: {
          utils: '/Users/bga001/repos/divvun/satni-frontend/src/utils.ts',
          'utils.data':
            '/Users/bga001/repos/divvun/satni-frontend/src/utils.data.ts',
        },
      },
    };
  },
};
