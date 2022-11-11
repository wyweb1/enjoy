<template>
    <div class="readPublish">
        <ShowHeadTitle  v-bind:classStyle="classObj"/>
        <div class="readPulishBox"  @click="addReadItem">
            <img class="readPulish" src="/static/image/tab/tab3.png" alt="">
        </div>
       <div class="content">
        <ul class="formlist">
            <li><input type="text" v-model="name" placeholder="book name..."></li>
            <li><input type="text" v-model="author" placeholder="author..."></li>
        </ul>
        <div class="txt">
           <textarea v-model="info" placeholder="say you want..." name="" id="" cols="30" rows="10"></textarea>
        </div>
        <van-uploader preview-size="200px" v-model="fileList"  :after-read="afterRead" :max-count="1" multiple/>
       </div>
       
        
    </div>
</template>
<script>
import ShowHeadTitle from '../ShowHeadTitle.vue'
import {store} from '../../store/store'
    export default{
        name:'ReadPublish',
        components:{
            ShowHeadTitle,
        },
        data(){
            return{
                name:'',
                author:'',
                info:'',

                classObj:{'color':'#336666','background':'#f5f5f5'},//该组件标题样式
                
                fileList: [ //已上传的文件列表
                    // { 
                    // // url: 'https://img01.yzcdn.cn/vant/leaf.jpg',
                    // // status: 'uploading',
                    // // message: '上传中...', 
                    // },
                    // // Uploader 根据文件后缀来判断是否为图片文件
                    // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                    // { 
                    // // url: 'https://cloud-image', isImage: true,
                    // // status: 'failed',
                    // // message: '上传失败', 
                    // },
                ],
            }
        },
        methods:{
            afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file,'file');

            // 上传状态
                // file.status = 'uploading';
                // file.message = '上传中...';

                // setTimeout(() => {
                //     file.status = '';
                //     file.message = '上传成功';
                // }, 1000);

            },

            addReadItem(){
                // 获取本页面需要提交的数据 图片存储在数组里，字段 name 简介
                let list = this.fileList;
                let urlitem = list[0].content;//获取图片编码，即图片本身！！
                console.log(list,'000')
                console.log(urlitem,'0ww00')
                let name = this.name;
                let author = this.author;
                let info = this.info;

                let obj = {name,author,info,img:urlitem}
                store.addReadItem(obj);
                this.$router.push('/read');
               
            }
        }

    }
</script>
<style scoped>
   
    .readPulishBox{
        width:88px;
        height:88px;
        position: absolute;
        top:0;
        right:60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .readPulish{
        width:40px;
        height:40px;
       display: block;
       /* margin: auto; */
    }
    .content{
        padding:30px;
        height: auto;
    }
    .content .txt{
        width: 100%;
        height:100px;
        margin-top: 20px;
    }
    .content .txt textarea{
        width: 100%;
        border: none;
        height:100%;
        font-size:20px;
        color:#666;
        letter-spacing: 1px;

    }
    .content .txt textarea::placeholder{
        color: #999;
    }

    .van-uploader {
        display: block;
    }
    .formlist{
        list-style: none;
        width: 100%;
    }
    .formlist li{
        width: 100%;
        height: 60px;
    }
    .formlist input{
        width: 100%;
        height: 100%;
        font-size:20px;
        color:#666;
        letter-spacing: 1px;
    }
    .formlist input::placeholder{
        color: #999;
    }

    input{
        border: none;
    
    }
    
</style>