<template>
	
</template>

<script>
  import './assets/style.css';
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

<style lang="scss">
	.D-Message{
		position:fixed;
		width:100%;
		opacity:1;
		z-index: 999;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		.D-Message-Content{
			cursor:default;
			box-sizing:border-box;
			display:inline-block;
			user-select: none;
			word-wrap: break-word;
			width:auto;
			max-width: 80%;
			border-radius:5px;
			font-size:13px;
			color:#495060;
			line-height:1.5;
			padding: 6px 12px;
		}
		@media screen and ( max-width: 566px) {
			.D-Message-Content p{
				max-width: 330px;
			}
		}
		@media screen and ( max-width: 500px) {
			.D-Message-Content p{
				max-width: 280px;
			}
		}
		@media screen and ( max-width: 435px) {
			.D-Message-Content p{
				max-width: 220px;
			}
		}
		@media screen and ( max-width: 360px) {
			.D-Message-Content p{
				max-width: 180px;
			}
		}
		&.bottom{
			bottom: 15%;
			left:0;
			transform:translate(0,0);
			&.fade-up-enter{
				opacity: 0;
				transform:translate(0, 80px);
			}
		}
		&.center{
			top: 46%;
			left:0;
			transform:translate(0,-50%);
			&.fade-up-enter{
				opacity: 0;
				transform:translate(0,calc(-50% + 10px));
			}
		}
		&.top{
			top: 15%;
			left:0;
			transform:translate(0,0);
			&.fade-up-enter{
				opacity: 0;
				transform:translate(0, -80px);
			}
		}
		&.fade-up-enter-to, &.fade-up-leave-to{
			transition: all .3s ease-in-out;
		}
		&.fade-up-leave-to{
			opacity: 0;
		}
	}
</style>