# D-Message
A Vue component to show Message

## 演示地址
  http://component.davidwong.cn/d-message

## 快速上手
* 安装
<pre>
  npm install d-message --save
</pre>

* 导入
  <pre>
    import Vue form 'vue'
    import DMessage from 'd-message'
    Vue.use(DMessage);
  </pre>
* 在组件中使用
  <pre>
    this.$Message.info();
    this.$Message.warning({
        content: '我是警告Message，内容自定义!'
    });
    this.$Message.success({
        content: '我是成功Message，持续时间为设为1s，默认为3s',
        duration: 1000
    });
    this.$Message.loading({
        content: '我是加载Message，显示在屏幕上方，默认在下方',
        position: 'top'
    })
	......
  </pre>