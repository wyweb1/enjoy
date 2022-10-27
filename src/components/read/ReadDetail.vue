<template>
    <div id="readDetail">
        <ShowHeadTitleVue v-bind:title="title" v-bind:classStyle="classObj"/>
      
        <!-- header -->
        <div class="info commonFlex">
            <div class="picBox"><img v-bind:src="book.mainPic" alt=""></div>
            <div class="content">
                <p class="name">{{book.name}}</p>
                <p class="author">author：{{book.author}}</p>
                <div class="action commonFlex">
                    <div class="downLoad">read</div>
                    <div class="downLoad" @click="goDownLoad">txt</div>
                    <a v-bind:href="['/static/book/'+id+'.txt']"  v-bind:download="book.name">txt2</a>
                </div>
                
            </div>
        </div>
        <!-- info -->
        <div class="bookInfo">
            {{book.info}}
        </div>
    </div>
</template>
<script>
import ShowHeadTitleVue from '../ShowHeadTitle.vue'
//逻辑根据跳转时传过来的readid在store里调去对应的数据展示
import {store} from '../../store/store'
    export default{
        name:'ReadDetail',
        props:{

        },
        components:{
            ShowHeadTitleVue,
        },
        data(){
            return{
                title:'detail',
                id:-1,//当前read id,没点击进入前设置为-1
                book:[],//该书信息
                classObj:{'color':'#336666','background':'rgba(220,235,225,0.5)'},//该组件标题样式
            }
        },
        methods:{
            goDownLoad(){
                //后期需要在手机上测试是不是下载到手机内存文件里了
                 //方法一  
                window.location.href = `/static/book/${this.id}.txt`;
                //方法二
               
            }
        },
        created(){
            // 根据传参过来的id在store查找响应的值并返回替代book
            let that = this;
            let id= that.$route.query.id;
           
            this.book =  store.findReadId(id);
            //设置id
            this.id = id;
            
       
        }

    }
</script>
<style scoped>
#readDetail{
    width: 100%;
}
.info{
    justify-content: start;
    /* align-items:baseline; */
    padding: 20px;
}
.info .picBox{ 
    width: 200px;
    margin-right: 20px;
}

.info .picBox img{
    width: 100%;
    height: auto; 
}
.info .content{ 
    padding-top: 10px;
    width: calc(100% - 220px);
    text-align: left;
}
.info .content .name{
    font-size: 35px;
    color: #000;
    font-weight: 600;
 }
.info .content .author{ 
    margin-top: 20px;
    font-size: 25px;
    color: #666;
    
}
.bookInfo {
    padding: 20px;
    text-indent: 20px;
    font-size: 30px;
    line-height: 40px;
    text-align: left;
 }

.action{
    justify-content: start;
    margin-top: 40px;
}
.action div,.action a{
    font-size: 30px;
    line-height: 30px;
    text-align: left;
    margin-right: 20px;
    padding: 10px;
    background: #e6e6e6;
    display:inline-block;
}


</style>