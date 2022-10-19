<template>
    <div class="showTitle">
        <p v-bind:style="classStyle">{{title}}</p>
    </div>
</template>
<script>
    export default{
        name:'ShowHeadTitle',
        props:{
            title:String,
            classStyle:Object,
        }
    }
</script>
<style scoped>
.showTitle{
    width: 100%;
    height: 88px;
}
.showTitle p{
    width: 100%;
    height: 88px;
    line-height: 88px;
    font-size: 30px;
    
}
</style>