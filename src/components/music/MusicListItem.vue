<template>
    <li class="musicListItem commonFlex" @click="$router.push({path:'/musicdetail',query:{id:item2.id}})">
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
        name:'MusicListItem',
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
.musicListItem{
    width: 100%;
    height: auto;
    padding: 20px 40px;
    justify-content:start;
    background: #9999991c;
    /* background: #CCCC99; */
    margin-bottom: 20px;

}  
.musicListItem .picBox{
   width: 100px; 
   margin-right: 20px;
   /* margin-left: 40px; */
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
}
.musicListItem .picBox img{
    width: 100%;
    
}
.musicListItem .info{
    width:calc(100% - 120px);
}
.musicListItem .info p{
    text-align: left;
}
.musicListItem .info .title1{
    font-size: 24px;
    color:#232323;


}
.musicListItem .info .title2{
    font-size: 20px;
    color:#666;
    
}
.musicListItem {}
</style>