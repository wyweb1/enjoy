<template>
    <div id="read" class="commonFbox">
        <ShowHeadTitle v-bind:title="title" v-bind:classStyle="classObj"/>
        <ReadList v-bind:list="readData" />
        <div class="readPulishBox" @click="$router.push('/readpublish')">
            <img class="readPulish" src="/static/image/tab/tab3.png" alt="">
        </div>
        
    </div>
</template>
<script>
import ShowHeadTitle from '../ShowHeadTitle.vue'
import ReadList from '../read/ReadList.vue'
import {store} from '../../store/store'
    export default{
        name:'Read',
        components:{
            ShowHeadTitle,
            ReadList,
        },
        data(){
            return{
                title:'read',
                classObj:{'color':'#336666','background':'#fff'},//该组件标题样式
                // readData:[//不确定和store里的read-list是不是一个表，先不用store覆盖
                //     {name:'xusanguanmaixueji',img:'/static/image/read/7.png',info:'sad a life',id:1},
                //     {name:'moonandsix',img:'/static/image/read/4.jpg',info:'sad a life',id:2},
                //     {name:'glass',img:'/static/image/read/1.jpg',info:'sad a life',id:3},
                // ],
                readData:[],

            }
        },
        methods:{

        },
        beforeMount(){//挂在开始之前被调用？
            //初始化数据
            let data = store.state.read.list;
            this.readData=data;
            console.log(1)
        },
        mounted(){
        // 挂在完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。
    
    },
        created(){
         
        }
    }
</script>
<style scoped>
    #read{
        margin-bottom: 200px;
        position: relative;
        
    }
    .readPulishBox{
        width: 88px;
        height: 88px;
        position: absolute;
        top:0;
        right: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .readPulish{
        width: 40px;
        height: 40px;
       display: block;
       /* margin: auto; */
    }
</style>