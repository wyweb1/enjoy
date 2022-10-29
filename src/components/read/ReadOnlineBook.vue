<template>
    <div class="onlineBook">
        <!-- online book -->
        <ShowHeadTitleVue v-bind:title="book.name" />
        onlineBook
    </div>
</template>
<script>
    import ShowHeadTitleVue from '../ShowHeadTitle.vue';
    import {store} from '../../store/store';
    export default{
        name:'ReadOnlineBook',
        props:{
            ShowHeadTitleVue,
        },
        data(){
            return{//在vue里data不是数组对象是一个函数且一旦写了必须写返回值否则报错！
                title:'',
                id:-1,//当前read id,没点击进入前设置为-1
                book:[],//该书信息
            }
        },
        created(){
            // 根据传参过来的id在store查找响应的值并返回替代book
            let that = this;
            let id= that.$route.query.id;
           
            this.book =  store.findReadId(id);
            //设置id
            this.id = id;
            
       
        }

    }
</script>