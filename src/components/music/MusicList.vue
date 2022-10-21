<template>
    <ul class="musicList commonFbox">
          <MusicListItem v-for="item in list" v-bind:key="item.name" v-bind:item2="item"/>
    </ul>
</template>
<script>
import MusicListItem from './MusicListItem.vue'
    export default{
        name:'MusicList',
        props:{
            list:Array,
        },
        components:{
            MusicListItem,
        },
        data(){
            return{

            }
        },
    }
</script>
<style scoped>
.musicList{
    list-style:none;
    width: 100%;
}  

</style>