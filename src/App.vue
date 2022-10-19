<!-- 不含有底部tab切换的其他页面展示的祖父组件 -->

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "思源黑体 CN" ;
}
input,textarea{outline: none;}
a{text-decoration: none;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.commonFbox{
  width: 750px;
}
.commonFlex{
  display: -webkit-flex;  /* 新版本语法: Chrome 21+ */
  display: flex;          /* 新版本语法: Opera 12.1, Firefox 22+ */
  display: -webkit-box;   /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box;      /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;   /* 混合版本语法: IE 10 */   

}
</style>
