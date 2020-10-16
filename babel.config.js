module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'Vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      'Vant'
    ]
  ]
};
