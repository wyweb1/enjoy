<!-- 含有底部tab切换的主要页面展示的父级组件 -->
<template>
    <div id="indexPage" class="commonFbox">
       
       <router-view></router-view>
       <FooterTab v-bind:list="tabList" />
    </div>
</template>
<script>
import Read from './read/Read.vue'
import FooterTab from './FooterTab.vue'

    export default{
        name:'IndexPage',
        components:{
    Read,
    FooterTab
},
        data(){
            return{
                tabList:[
                    {
                        title:'read',
                        unactpic:'/static/image/tab/tab1.png',
                        actpic:'/static/image/tab/tab1_act.png',
                        path:'read',
                        isact:true,
                    },
                    {
                        title:'music',
                        unactpic:'/static/image/tab/tab2.png',
                        actpic:'/static/image/tab/tab2_act.png',
                        path:'music',
                        isact:false,
                    },
                    {
                        title:'publish',
                        unactpic:'/static/image/tab/tab3.png',
                        actpic:'/static/image/tab/tab3_act.png',
                        path:'homeset',
                        isact:false,
                    },
                    {
                        title:'user',
                        unactpic:'/static/image/tab/tab4.png',
                        actpic:'/static/image/tab/tab4_act.png',
                        path:'homeset',
                        isact:false,
                    }
                ],
            }
        },
        methods:{

        }
    }
</script>