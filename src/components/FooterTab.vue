<template>
    <ul class="footerTab commonFlex">
       <li v-for="item in list" v-bind:key="item.title" @click="goPage(item.path)" >
            <img v-bind:src="item.isact?item.actpic:item.unactpic" alt="">
            <p v-bind:class="item.isact?'act_font':''">{{item.title}}</p>
       </li>
    </ul>
</template>
<script >
    export default{
        name:'FooterTab',
        props:{
            list:Array,
        },
        data(){
            return{

            }
        },
        methods:{
            //tab切换
            goPage(path){
                this.list.forEach(item => item.path==path?item.isact=true:item.isact=false);
                this.$router.push(path);
            }
        },


    }
</script>
<style scoped>
.footerTab {
    list-style: none;
    width:100%;
    justify-content: space-between;
    padding: 20px 60px;
    
    align-items: center;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    background: #fff;
    box-shadow: 1px 2px 33px 1px rgb(0 0 0 / 10%);
}
.footerTab li{

}
.footerTab img{
    width: 40px;
    height: 40px;
}
.footerTab p{
    text-align: center;
    color:#000;
    font-size: 16px;
}
.footerTab .act_font{
    color: #c8db8c;
}
.footerTab {}
.footerTab {}
.footerTab {}



</style>