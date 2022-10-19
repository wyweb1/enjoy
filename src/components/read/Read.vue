<template>
    <div id="read">
        <ShowHeadTitle v-bind:title="title" v-bind:classStyle="classObj"/>
        <ReadList v-bind:list="readData" />
    </div>
</template>
<script>
import ShowHeadTitle from '../ShowHeadTitle.vue'
import ReadList from '../read/ReadList.vue'
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