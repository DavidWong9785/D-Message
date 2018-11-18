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
      
    }
  },
  methods: {
    defaultMsg () {
      this.$Message.info({
        duration: 100000
      });
    },
    contentMsg () {
      this.$Message.warning({
        content: '我是自定义的警告Message，默认动画rotate，默认位置bottom，默认持续时间3s'
      })
    },
    durationMsg () {
      this.$Message.success({
        content: '我是自定义的成功Message，持续时间为设为1s，动画为scale，默认位置bottom',
        duration: 1000,
        animation: 'scale'
      })
    },
    topMsg () {
      this.$Message.loading({
        content: '我是自定义的加载Message，位置显示在屏幕上方，动画为fade，默认持续时间3s',
        animation: 'fade',
        position: 'top'
      })
    },
    centerMsg () {
      this.$Message.error({
        content: '我是自定义的错误Message，位置显示在屏幕中间，动画为translate，持续时间2s',
        animation: 'translate',
        duration: 2000,
        position: 'center'
      })
    },
    closeMsg () {
      this.$Message.error({
        content: '我是自定义的可关闭的错误Message，位置显示在屏幕上方，动画为translate，持续时间2s',
        closable: true,
        animation: 'translate',
        duration: 2000,
        position: 'top'
      })
    },
    callbackMsg () {
      this.$Message.loading({
        animation: 'fade',
        position: 'center',
        content: '我是自定义的可关闭的有回调函数的错误Message，消失后执行回调，手动关闭也算消失后执行回调，持续时间1s，动画为fade，位置显示在屏幕中间',
        duration: 1000,
        callback : () => {
          this.$Message.success({
            content:'这是D-Message结束之后的回调，在前一个msg消失的时候触发这是D-Message结束之后的回调，持续时间10s，可关闭',
            duration: 100000,
            closable: true
          })
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
