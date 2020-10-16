
const path = require("path");
function resolve(dir) {
    return path.join(__dirname,".", dir);
  }
module.exports={
  lintOnSave: false,
    devServer:{
        open:true,
        host: '0.0.0.0',
        port: 9999,
        https: false,
        proxy: {// 设置代理
            '/api': {
              target: 'http://192.168.24.116:99/smart-community',
              changeOrigin: true,
              pathRewrite: {
                '^/api': '/api'
              }
            }
        }

    },
     // svg配置
     chainWebpack: config => {
        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
        config.module
          .rule('svg-sprite-loader')
          .test(/\.svg$/)
          .include
          .add(resolve('src/icons')) //处理svg目录
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'
          })
      },

      css: {
        loaderOptions: {
          less: {
            // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
            lessOptions: {
              modifyVars: {
                // 直接覆盖变量
              
                // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                hack: `true; @import "${path.resolve(__dirname,'src/styles/less/index.less')}";`,
              },
            },
          },
        },
      },
}



// module.exports = {
//     runtimeCompiler: true,
//     publicPath: './',  //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
//     devServer: {
//       port: 8888 //端口
//     }
//   }