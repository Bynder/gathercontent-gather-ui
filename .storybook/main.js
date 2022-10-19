const path = require('path');

module.exports = {
  stories: ['../lib/**/*.stories.js', '../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-notes',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config, { configType }) => {
    // storybook doesnt play well with postcss8 which latest tailwind requires
    // if we have two css rules it errors, so we need to strip out storybook's
    const rules = config.module
      ? config.module.rules.filter(rule => {
          const storybooksCssTest = new RegExp(/\.css$/);
          return rule && rule.test.toString() !== storybooksCssTest.toString();
        })
      : [];
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...rules,
          {
            test: /\.s?css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['tailwindcss', 'autoprefixer', 'pixrem']
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('sass')
                }
              }
            ],
            include: [path.resolve(__dirname, '../')]
          }
        ]
      }
    };
  }
};
