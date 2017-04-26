<template>
	<div>
		<div class="my">
			<div class="my_container" @click="show_myBox">
				<div class="header">
					<div class="_list">
						<span class="setting"></span>
						<span class="avatar"><img src="" alt=""></span>
						<span class="news"></span>
					</div>
					<p>请登录账号</p>
				</div>
				<myOrder></myOrder>
			</div>
		</div>
		<div class="my_box" v-show="show">
			<div class="prompt_box">
				<p>亲,你还没登录哟!</p>
				<span class="box_left" @click='hide_myBox'>先逛逛</span>
				<router-link to='/login' @click.native='hide_myBox'>
					<span>去登陆</span>
				</router-link>
			</div>
		</div>
	</div>
	
</template>

<script>
	import myOrder from './my_components/myOrder.vue'
	export	default{
		data(){
			return{
				'show':false,
			}
		},
		methods:{
			show_myBox(){
				this.show=true
			},
			hide_myBox(){
				this.show=false
			}
		},
		components:{
			'myOrder':myOrder
		}
	}
</script>
	
<style scoped>
	@import '../../assets/css/my/my.css'
</style>