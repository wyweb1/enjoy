<template>
    <div class="onlineBook">
        <!-- online book -->
        <p class="title">{{book.name}}</p>
        <div ref="content" class="content">{{book.content}}</div>
        <div class="gotop" @click="goToTop" ></div>
    </div>
</template>
<script>

    // import ShowHeadTitleVue from '../ShowHeadTitle.vue';//使用store数据不能给页面一打开就需要的组件传递数据时使用，会调去不到
    import {store} from '../../store/store';
    export default{
        name:'ReadOnlineBook',
        props:{
            
        },
        data(){
            return{//在vue里data不是数组对象是一个函数且一旦写了必须写返回值否则报错！
                // title2:this.book.name,
                id:-1,//当前read id,没点击进入前设置为-1
                book:[],//该书信息
               
            }
        },

        methods:{
            goToTop(){
               
            //  let scroTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                
                // let offsetTop = document.querySelector('#bookonlinecontent').offsetTop;  // 要滚动到顶部吸附的元素的偏移量
             
              // 回到顶部
              
                this.$refs.content.scrollTop= 0;
           
            
             
            },
        },
        created(){
            // 根据传参过来的id在store查找响应的值并返回替代book
            let that = this;
            let id= that.$route.query.id;
           
            this.book =  store.findReadId(id);
            //设置id
            this.id = id;
          
            
       
        },
       
        mounted(){
            // window.addEventListener('scroll',this.goToTop) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
        
        },
        beforeMount(){//挂在开始之前被调用？
            // setTimeout(function(){
            //     console.log(this.book,'ppp')
            // },1000)



        },

    }
</script>
<style scoped>
.onlineBook {
    height: 100vh;
    width: 100v;
    /* background: #CC9966; */
    background: #fff;

}
.onlineBook *{
    font-size: 25px;
    line-height: 40px;
}
.title{
    width: 100%;
    height: 88px;
    line-height: 88px;
    font-size: 30px;
    text-align: center;
    
}
.content{
    text-align: left;
    text-indent: 20px;
    height: 100vh;
    overflow-y: auto;
    padding: 20px;
    padding-bottom:120px;
    transition: all 0.5s;
}
.gotop{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
    position: fixed;
    bottom: 100px;
    right: 50px;
    box-shadow: 1px 1px 19px 2px rgb(0 0 0 / 38%);
}
</style>