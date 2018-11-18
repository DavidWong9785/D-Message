# D-Message
A Vue component to show Message

## Demo Address
  http://component.davidwong.cn/d-message

## Build Setup
* setup
<pre>
  npm install d-message --save
</pre>

* import
  <pre>
    import Vue form 'vue'
    import DMessage from 'd-message'
    Vue.use(DMessage);
  </pre>
* attributes
  <pre>
    content: default value is 'Hello D-Message'
    position: have three options -- top | center | bottom, default value is bottom
    animation: have four options -- fade | translate | scale | rotate, default value is rotate
    duration: message's time of existence, default value is 3 second
    closable: default value is false
    callback: no default value, you can decide whether use it
  </pre>
* use
  <pre>
    this.$Message.info();
    this.$Message.warning({
    	content: 'warning Message，default animation -- rotate，default position -- bottom，default duration -- 3s'
    })
    this.$Message.success({
    	content: 'success Message，animation -- scale，default position -- bottom，duration -- 1s，动画为scale',
    	duration: 1000,
    	animation: 'scale'
    })
    this.$Message.loading({
    	content: 'loading Message，animation -- fade，position -- top，default duration -- 3s',
    	animation: 'fade',
    	position: 'top'
    })
    this.$Message.error({
    	content: 'error Message，animation -- translate，position -- center，duration -- 2s',
    	animation: 'translate',
    	duration: 2000,
    	position: 'center'
    })
    this.$Message.error({
    	content: 'error Message，closable -- true, animation -- translate，position -- top，duration -- 2s',
    	closable: true,
    	animation: 'translate',
    	duration: 2000,
    	position: 'top'
    })
    this.$Message.loading({
    	animation: 'fade',
    	position: 'center',
    	content: 'loading Message，closable -- true, animation -- fade，position -- center，duration -- 1s',
    	duration: 1000,
      closable: true
    	callback : () => {
    		this.$Message.success({
    			content:'when loading Message was disappeared, it will excute callback, if you close the Message, also excute callback immediately',
    			duration: 100000,
    			closable: true
    		})
    	},
    })
  </pre>