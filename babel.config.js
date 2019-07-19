module.exports = api => {
  console.log('IS IT TEST: ', api.env('test'));
  const isTest = api.env('test');

  if (!isTest) {
    return {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              browsers: ['Explorer 11']
            },
            modules: false
          }
        ],
        '@babel/react'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        'inline-react-svg',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-export-default-from',
      ]
    };
  }

  return {
    presets: [
      '@babel/react',
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      'inline-react-svg',
    ]
  };
};
