<template>
    <div id="music" class="commonFbox">
        <ShowHeadTitle v-bind:title="title" v-bind:classStyle="classObj"/>
        <MusicList v-bind:list="musicData" />
    
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
                musicData:[
                    {id:1,name:'lemon',img:'/static/image/music/musicpic.png',info:'sad a life',},
                    {id:2,name:'moonandsix',img:'/static/image/read/4.jpg',info:'sad a life',},
                    {id:3,bname:'glass',img:'/static/image/read/1.jpg',info:'sad a life',},
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