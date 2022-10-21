<template>
    <div id="music" class="commonFbox">
        <ShowHeadTitle v-bind:title="title" v-bind:classStyle="classObj"/>
        <MusicList v-bind:list="readData" />
    
    </div>
</template>
<script>
import ShowHeadTitle from '../ShowHeadTitle.vue'
import MusicList from '../music/MusicList.vue'
    export default{
        name:'Read',
        components:{
            ShowHeadTitle,
            MusicList,
        },
        data(){
            return{
                title:'music',
                classObj:{'color':'#336666','background':'#fff'},//该组件标题样式
                readData:[
                    {name:'xusanguanmaixueji',img:'/static/image/read/7.png',info:'sad a life',},
                    {name:'moonandsix',img:'/static/image/read/4.jpg',info:'sad a life',},
                    {name:'glass',img:'/static/image/read/1.jpg',info:'sad a life',},
                ],

            }
        },
        methods:{

        }
    }
</script>
<style scoped>
    #music{
        margin-bottom: 200px;
    }
</style>