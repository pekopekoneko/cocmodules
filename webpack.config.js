const path = require('path');
const VueloaderPlugin = require('vue-loader/lib/plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
const { ModuleFilenameHelpers } = require('webpack');
module.exports = {
    //指定入口文件,本文件夹的index.js文件
    entry:path.join(__dirname,'index.js'),
    //指定输出的文件位置和文件名称,本文件夹中的dist文件夹
    output:{
        path:path.join(__dirname,'dist'),
        filename:'build.js'
    },
    plugins:[
        //引入这个插件
        new VueLoaderPlugin()
    ],
    module:{
        //指定规则
        rules:[
            //解析vue文件规则
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
        ]
    }
}