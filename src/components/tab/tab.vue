<template>
	<div class="tab-bar">
		<router-link to="/home">
			<div class="box">
				<i class="icon-首页-首页"></i>
				<span>首页</span>
			</div>
		</router-link>
		<router-link to="/classification">
			<div class="box">
				<i class="icon-分类"></i>
				<span>分类</span>
			</div>
		</router-link>
		<router-link to="/shopcar">
			<div class="box">
				<i class="icon-购物车"></i>
				<span>购物车</span>
			</div>
		</router-link>
		<router-link to="/my" v-if='show' >
			<div class="box">
				<i class="icon-我的"></i>
				<span>我的</span>
			</div>
		</router-link>
		<router-link to="/myLogin" v-else >
			<div class="box">
				<i class="icon-我的"></i>
				<span>我的</span>
			</div>
		</router-link>	
	</div>
</template>
<script>
import '../../assets/css/tab/tab.css'
import '../../../static/svg.css'
import {mapGetters} from 'vuex'
export default{
	data(){
		return{
			'show':true
		}
	},
	computed:mapGetters([
			// 'ba'
	]),
	created(){
		this.$http.get('v1/User/login.json').then(function(response){
				// console.log(response.body.status)
				console.log(response.body.status)
				this.OK=response.body.status
				if(this.OK==40){
					this.show=true
				}else{
					this.show=false
				}
			},function(error){
				console.log(error);
			})
	},
	methods:{
		// my(){
		// 	console.log(this.ba)
		// 	if(this.ba==50){
		// 		this.show=true
		// 	}else{
		// 		this.show=false
		// 	}
		// }
	}
}
</script>
<style>
	
</style>
