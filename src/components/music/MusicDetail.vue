<template>
    <div class="musicDetail">
        <ShowHeadTitleVue v-bind:title="title" />
    </div>
</template>
<script>
import ShowHeadTitleVue from '../ShowHeadTitle.vue';
    export default{
        name:'MusicDetail',
        components:{
            ShowHeadTitleVue,
        },
        props:{
           
        },
        data(){
            return{
                title:'Mdetail',
                id:-1,//默认空值为-1；

            }
        },
        methods:{},
        created(){
            let that = this;
          
            let id= that.$route.query.id;
            console.log(id,'idd')
        },
    }
</script>
<style scoped>

</style>