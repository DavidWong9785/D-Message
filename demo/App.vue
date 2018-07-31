<template>
  <div id="app">
    <div class="content">
      <h1 class="title">
        <i class="icon-baffled2"></i>
        D-Message
      </h1>
      <button @click="defaultMsg">默认提示</button>
      <button @click="contentMsg">自定义提示</button>
      <button @click="durationMsg">设置duration</button>
      <button @click="topMsg">从上出现</button>
      <button @click="centerMsg">从中间出现</button>
      <button @click="closeMsg">可关闭的Msg</button>
      <button @click="callbackMsg">Msg消失回调</button>
      <div class="code_link">
          <a href="https://github.com/DavidWong9785/D-Message" target="_blank">代码链接</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    defaultMsg () {
      this.$Message.info();
    },
    contentMsg () {
      this.$Message.warning({
        content: '我是警告Message，内容自定义!'
      })
    },
    durationMsg () {
      this.$Message.success({
        content: '我是成功Message，持续时间为设为1s，默认为3s',
        duration: 1000
      })
    },
    topMsg () {
      this.$Message.loading({
        content: '我是加载Message，显示在屏幕上方，默认在下方',
        position: 'top'
      })
    },
    centerMsg () {
      this.$Message.error({
        content: '我是错误Message，显示在屏幕中间，默认在下方',
        position: 'center',
        duration: 1800
      })
    },
    closeMsg () {
      this.$Message.error({
        content: '我是错误Message，可关闭',
        closable: true
      })
    },
    callbackMsg () {
      this.$Message.loading({
        position: 'center',
        content: '消失后执行回调，手动关闭也算',
        duration: 1000,
        callback : () => {
          this.$Message.success('这是Vue-Message结束之后的回调,在前一个msg消失的时候触发')
        },
        closable: true
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
  user-select:none;
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to right, #00FF7F, seagreen);
  font-weight: lighter;
  font-size: 10px;
  margin:0;
  padding:0;
}

.content{
  width:100%;
  height:auto;
  position:absolute;
  top:45%;
  transform:translate(0,-50%);
}

button{
  padding: 5px 15px;
  border:none;
  border-radius:4px;
  outline:0 none;
  color:#FFFAFA;
  margin:10px 5px;
  background:rgba(0,100,0,0.2);
  cursor:pointer;
  transition: all .3s;
  &:hover{
    background:rgba(0,100,0,0.5);
  }
}

.code_link{
  margin-top: 30px;
  a{
    font-size: 16px;
    color:#eee;
    text-decoration: none;
  }
}

.title{
  font-size:38px;
  font-weight:bold;
  color:#FFFAFA;
  margin:-30px auto 50px auto;
}

body,html{
  user-select:none;
  margin:0;
  padding:0;
}
</style>
