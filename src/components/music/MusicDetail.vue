<template>
    <div class="musicDetail">
        <ShowHeadTitleVue v-bind:title="title" />
        <div class="animateRevolve">
            <div class="bg commonFlex">
                <div class="centerBox commonFlex">
                    <span class="center"></span>
                </div>
                
            </div>
        </div>
            <audio class='music' src="http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" controls="controls">您的浏览器不支持音频播放</audio>
      
        
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
.music{
    width: 500px;
    height: 100px;
    margin:0 auto;
}
.animateRevolve {
    width: 500px;
    height: 500px;
    background: rgba(0,0,0,0.1);
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
}
.animateRevolve .bg{
    background: url('/static/image/music/musicpic.png') no-repeat;
    background-size: auto;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.animateRevolve .centerBox{
    width: 300px;
    height: 300px;
    margin:  auto;
    background: url('/static/image/music/musicpic.png') no-repeat;
    background-size: cover;
    border-radius: 50%;
    box-shadow: 3px 3px 26px 18px rgb(0 0 0 / 10%);
    justify-content: center;
    align-items: center;
}
.animateRevolve .centerBox .center{
    background: #989191;
    border: 4px solid #000;
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 50%;
}

</style>