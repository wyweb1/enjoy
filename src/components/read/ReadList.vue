<template>
    <ul class="readList">
          <ReadListItem v-for="item in list" v-bind:key="item.name" v-bind:item2="item"/>
    </ul>
</template>
<script>
import ReadListItem from './ReadListItem.vue'
    export default{
        name:'ReadList',
        props:{
            list:Array,
        },
        components:{
            ReadListItem,
        },
        data(){
            return{

            }
        },
    }
</script>
<style scoped>
.readList{
    list-style:none;
}  

</style>