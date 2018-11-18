<template>
	
</template>

<script>
  import './assets/style.css';
  import './assets/fade.css'
  import './assets/translate.css'
  import './assets/rotate.css'
  import './assets/scale.css'

  export default {
  	name: 'D-Message',
  	data () {
  		return {
			
  		}
	  },
	methods : {
		
	},
  	mounted () {
  	}
  }
</script>

<style>
	.D-Message {
		position:fixed;
		opacity:1;
		z-index: 999;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
	}
  .D-Message-Content {
  	margin: 0 auto;
  	cursor:default;
  	box-sizing:border-box;
  	user-select: none;
  	word-wrap: break-word;
  	max-width: 48%;
  	border-radius:5px;
  	font-size:13px;
  	color:#495060;
  	line-height:1.5;
  	padding: 6px 12px;
  	box-shadow: 0 2px 8px 0 rgba(7,17,27,.16);
  	background: #fff;
  	display: flex;
  	align-items: center;
  	justify-content: center;
  }
  .D-Message-left-icon {
  	padding-right: 8px
  }
  .D-Message-Content-text {
  	word-break: break-word;
  	word-wrap: break-word;
  	display:inline-block;
  	margin:3px 0
  }
  @media screen and ( max-width: 566px) {
  	.D-Message-Content-text{
  		max-width: 330px;
  	}
  }
  @media screen and ( max-width: 500px) {
  	.D-Message-Content-text{
  		max-width: 280px;
  	}
  }
  @media screen and ( max-width: 435px) {
  	.D-Message-Content-text{
  		max-width: 220px;
  	}
  }
  @media screen and ( max-width: 360px) {
  	.D-Message-Content-text{
  		max-width: 180px;
  	}
  }
  .D-Message-Animation-bottom{
      bottom: 15%;
  }
  .D-Message-Animation-center{
      top: 46%;
  }
  .D-Message-Animation-top{
      top: 15%;
  }
</style>