<template>
    <div class="musicDetail">
        <ShowHeadTitleVue v-bind:title="title" />
        <div class="animateRevolve">
            <div class="bg commonFlex">
                <div class="centerBox commonFlex" v-bind:class="{animateRing:iSring}" v-bind:style="bgObj">
                    <span class="center" ></span>
                </div>
                
            </div>
            <!-- player ui -->
            <div class="playerUI">
                <img class="playerBlock" src="/static/image/music/player_block_03.png" alt="" />
                <img class="playerLine"  src="/static/image/music/player_zhen_03.png" alt="" v-bind:class="{animatePlayer:iSring}" />
            </div>
        </div>
        <div class="otherBox commonFlex">
            <p class="name">{{music.name}}</p>
            <div class="heart" @click="onCollect">
                 <span  v-if="isCollect" class="heartFill"></span>
                <span  v-else  class="heartFree"></span>
               
            </div>
        
        </div>
        
            <audio  
                class='music' 
                src="http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" 
                controls="controls" 
                autoplay
                @ended="onOverAudio"
                @pause="onPause"
                @play="onPlay"
            >您的浏览器不支持音频播放</audio>
      
        
    </div>
</template>
<script>
import ShowHeadTitleVue from '../ShowHeadTitle.vue';
import {store} from '../../store/store'
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
                music:[],//个数据
                bgObj:{},//cd 背景图片设置
                iSring:false,//CD是否转动
                isCollect:false,//是否收藏
            }
        },
        methods:{
            onOverAudio(e){//音频播放完毕

            },
            onPause(e){//暂停
               
                this.iSring=false;
            },
            onPlay(e){//音频播放
              
                this.iSring=true;
            },


            onCollect(){//收藏
                this.isCollect=!this.isCollect;
            }

        },
        created(){
            let that = this;
            let id= that.$route.query.id;
            let music = store.findMusicId(id);
            that.music = music;

            //设置cd图片属性
            that.bgObj = {'background':`url(${music.img})`};
           
          
        },
    }
</script>
<style scoped>
.musicDetail{
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,0.1);
}
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
    position: relative;
}
.animateRevolve .bg{
    /* background: url('/static/image/music/musicpic.png') no-repeat; */
    /* filter:opacity(50%); */
    background: rgba(0,0,0,0.2);
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
    /* opacity: 0.5; */
}
.animateRevolve .centerBox .center{
    background: #fff;
    border: 4px solid #cfd0c7;
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 50%;
}
/* CD旋转动画 */
.animateRing{
    animation: ring 10s infinite linear;

}

@keyframes ring {
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

.playerUI{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
}
.playerUI .playerBlock{
    width: 100px;
    height: auto;
    position: absolute;
    right: 41px;
    top: 10px;
}
.playerUI .playerLine {
    width: 100px;
    height: auto;
    position: absolute;
    right: 122px;
    bottom: 85px;

    transform-origin:87% 5% ;
   transition: all 1s linear;
}
/* cd指针转动动画 */
.animatePlayer{
   
    transform: rotate(27deg);
}

.otherBox{
    justify-content: space-between;
    align-items: center;
    padding: 50px;
}
.otherBox .name{
    margin-top: 20px;
    font-size: 40px;
    text-align: left;
 
}
.otherBox .heart{
    width: 50px;
    height: 50px;
    overflow: hidden;
}
.otherBox .heart>span{
    display: block;
   
    width: 50px; 
    height: 50px;
}
.otherBox .heartFree{
    background: url('/static/image/music/heart.png') no-repeat;
    background-size: cover;
}
.otherBox .heartFill{
    background: url('/static/image/music/heart-fill.png') no-repeat;
    background-size: cover;
}
</style>