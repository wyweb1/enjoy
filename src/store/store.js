// 简单状态管理模式store--全局共享数据或者方法存放处
export const store={
    state:{//公共数据
        read:{
            list:[
                {
                    id:1,
                    name:'人间测试',
                    author:'wu',
                    info:'测测试测试测试测试测试测试试',
                    mainPic:'/static/image/read/7.png',
                    content:'hhhhhhhhhhh',
                },
                {
                    id:2,
                    name:'测试2',
                    author:'wu',
                    info:'测测试测试测试测试测试测试试',
                    mainPic:'/static/image/read/4.jpg',
                    content:'hhhhhhhhhhh',
                },
                {
                    id:3,
                    name:'测试3',
                    author:'wu',
                    info:'测测试测试测试测试测试测试试',
                    mainPic:'/static/image/read/1.jpg',
                    content:'hhhhhhhhhhh',
                },
            ]
        },
        musicData:{},
        // data:{
        //     read:{
        //         list:[
        //             {id:1,name:'人间测试',author:'wu',info:'测试',mainPic:'/static/image/read/7.png'},
        //         ]
        //     },
        //     music:[],
        //     user:[],
        // }

    },
    // 公共方法
    findReadId(id){ //根据read id查找对应的数据并返回
        return  this.state.read.list.find(function(item){
                return item.id == id;
            })
       
    }
}
