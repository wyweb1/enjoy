<template>
    <li class="readListItem commonFlex">
        <div class="picBox">
            <img v-bind:src="item2.img" alt="">
        </div>
        <div class="info">
            <p class="title1">{{item2.name}}</p>
            <p class="title2">{{item2.info}}</p>
        </div>
    </li>
</template>
<script>
    export default{
        name:'ReadListItem',
        props:{
            item2:Object,
        },
        data(){
            return{

            }
        },
    }
</script>
<style scoped>
.readListItem{
    width: 100%;
    height: auto;
    padding: 20px 40px;
    justify-content:start;
    background: #9999991c;
    /* background: #CCCC99; */
    margin-bottom: 20px;

}  
.readListItem .picBox{
   width: 100px; 
   margin-right: 20px;
   /* margin-left: 40px; */
}
.readListItem .picBox img{
    width: 100%;
    
}
.readListItem .info{
    width:calc(100% - 120px);
}
.readListItem .info p{
    text-align: left;
}
.readListItem .info .title1{
    font-size: 24px;
    color:#232323;


}
.readListItem .info .title2{
    font-size: 20px;
    color:#666;
    
}
.readListItem {}
</style>