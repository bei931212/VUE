<template>
	<div class="register">
		<div class="register_header">
			<span @click="register_hide"><img src="../../../assets/img/return.png" height="34" width="20" alt=""></span>
			<i>帮助</i>
		</div>
		<div class="register_nav">
			<img src="../../../assets/img/logo.png" alt="">
		</div>
		<div class="register_footer">
			<div @click="register_login">登&nbsp;&nbsp;录</div>
			<div>新用户注册</div>
		</div>
		<login v-show="login_show"></login>
		<userRegister></userRegister>
	</div>
</template>

<script>
    import login from './login.vue';
    import userRegister from './userRegister.vue';
	import {mapGetters,mapActions} from 'vuex';
	export default{
		data: function(){
			return {
				
			}
		},
		computed:mapGetters([
			'login_show'
		]),
		methods:mapActions([
			'register_login',
			'register_hide',
		]),
		components:{
			'login':login,
			'userRegister':userRegister
		}
	}
</script>

<style>
	@import '../../../assets/css/my/details/register.css'
</style>