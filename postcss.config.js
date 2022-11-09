// 安装完postcss-pxtorem后无需再main.js配置，需在根目录下新建一个文件
module.exports = {
    plugins:{
        'postcss-pxtorem':{
            rootValue(){//转换参考值，写UI设计稿宽度的1/10，假设UI设计稿宽度是750px所以写75，如UI设计稿是375px则写37.5
                return 75;
            },
            propList:['*'],//表示哪些属性的px转换为rem， '*' 表示所有属性都转换
        }
    }
}