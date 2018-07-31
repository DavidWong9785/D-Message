import messageTemplate from './message.vue'

//默认配置
const defaultProp = {
	content: 'Hello D-Message',	// 默认文案
	position: 'bottom',   // 默认显示位置
	duration: 3000,     // 持续时间
	closable : false,
	callback : ''
}

//清除Message
function clearMessage(){
	//清除定时器
	clearTimeout(Message.timer)
	//不显示Message
	Message.showMessage = false
	//移除Message节点
	document.body.removeChild(Message.MessageInstance.$mount().$el)
	//清除Message
	Message.MessageInstance = null
}

const Message = {
	//Mseeage控制展示
	showMessage: false,
	//Message节点实例
	MessageInstance: null,
	// 定时器
	timer: null,  	
	// vue导入使用外部插件(vue.use)，传入参数是install方法
	install (Vue) {
		//获取Vue对象
		if (typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue
		}
		// 注册组件
		Vue.component('Message', messageTemplate)
		// 把逻辑封装到Vue原型的$msg方法上，参数obj是msg样式参数
		let msg = (type, options) => {
			//如果Message还在显示，就先删除Message和定时器，重置默认信息
			if (Message.showMessage || Message.MessageInstance) {
				clearMessage();
			}
			//如果Message为null，就创建一个Message
			if (!Message.MessageInstance) {
				// 创建构造器，定义好提示信息的模板
				let MessageT = Vue.extend({
					  template: `<transition name='fade-up'>
					  				<div class="D-Message ${options.position}" v-show="show">
										 <div class="D-Message-Content" style="background: #eee">
										 	<i class="icon-${type}"></i>  
											<p style="display:inline-block;margin:3px 0">${options.content}</p>
											<i class="icon-cross"  @click="close()" v-show="${options.closable} == true"></i>
					  					</div>
					  					<Message>
					  					</Message>
					  				</div>
					  			</transition>`,
					data () {
						return {
							show: Message.showMessage
						}
					},
					methods : {
						close : function(){
							clearMessage();
							if (typeof options['callback'] === 'function') {
								options['callback']()
							}
						}
					}
				})
				// 创建实例
				Message.MessageInstance = new MessageT()
				// 挂载到Vue
				let tpl = Message.MessageInstance.$mount().$el
				//把实例节点写到文档
				document.body.appendChild(tpl)
				//showMessage为true，展示Message
				Message.MessageInstance.show = Message.showMessage = true
			}
			//定时器，duration秒后消失
			Message.timer = setTimeout(function () {
				Message.MessageInstance.show = Message.showMessage = false
				//如果有回调就执行回调
				// console.log(typeof options['callback']);
				if (typeof options['callback'] === 'function') {
					options['callback']()
				}
			}, options.duration)
		}

		Vue.prototype.$Message = {
			message (type, options) {
				//传入参数为空时用默认属性
				if(options === undefined){
					options = defaultProp;
				}else if (typeof options === 'string') {
					//传入参数为字符串时，把字符串加入到content，其余用默认属性
					options = {
						content: options
					};
					for(let prop in defaultProp){
						if(prop != 'content'){
							options[prop] = defaultProp[prop]
						}
					}
				}else{
					//当参数是对象，把对象没有的属性加入默认属性
					for(let prop in defaultProp){
						if(!options.hasOwnProperty(prop)){
							options[prop] = defaultProp[prop]
						}
					}
				}
				msg.call(this, type, options);
			},
			info (options) {
				this.message('info', options);
			},
			success (options) {
				this.message('smile', options);
			},
			warning (options) {
				this.message('baffled', options);
			},
			error (options) {
				this.message('cancel-circle', options);
			},
			loading (options) {
				this.message('spinner2', options);
			},
			destroy () {
				clearMessage();
			}
		}
	}
}
export default Message
