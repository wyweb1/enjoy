<!-- 含有底部tab切换的主要页面展示的父级组件 -->
<template>
    <div id="indexPage">
       
       <router-view></router-view>
    </div>
</template>
<script>
import Read from './read/Read.vue'
    export default{
        name:'IndexPage',
        components:{
           Read,
        },
        data(){
            return{
                
            }
        },
        methods:{

        }
    }
</script>