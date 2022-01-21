module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@test': './jest',
            '@module': './src/modules',
            '@navigation': './src/navigation',
          },
        },
      ],
    ],
  };
};
