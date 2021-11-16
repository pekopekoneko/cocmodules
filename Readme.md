app.js 是express的测试程序
webpack --config webpack.config.js

webpack 报错 webpack : 无法加载文件 C:\Users\Nekohub\AppData\Roaming\npm\webpack.ps1
set-ExecutionPolicy RemoteSigned

反复报错Do you want to install 'webpack-cli' (yes/no): 
npm install webpack-cli -g
解决了问题

具体模式是index.js为入口，将一个应用挂载到根节点

使用npm run build 可以编译网站
在dist里的html中查看