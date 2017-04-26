<template>
	<div class="logining">
		<div class="loginging_header">
			<span @click='prev'></span>
			<span>登录</span>
		</div>
		<div class="logining_user">
			<div class="logining_name">
				<span class="userName"></span>
				<span v-bind:class="{delete_userName:user!=''}" @click='delete_text'></span>
				<input type="text" placeholder="请输入账号" v-model='user' @change='userName' id='user'>
			</div>
			<div class="logining_pwd">
				<span class="userPwd"></span>
				<span class="userUnsee" @click='change_icon' id='visible'></span>
				<input type="password" placeholder="请输入密码" v-model='password' id='pwd'>
			</div>
		</div>
		<div class="logining_button">
			<router-link to='/home' v-bind:class="{bg_color:user!=''&&password!=''}" @click.native='sendMessage'>登录</router-link>
		</div>
		<div class="logining_footer">
			<div class="logining_span">
				<span class="logining_line"></span>
				<span class="logining_word">快速登录</span>
				<span class="logining_line"></span>
			</div>
			<div class="logining_weixin">
				<img src="../../assets/img/weixin.png" alt="">
				<p>微信登录</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:'',
				password:''
			}
		},
		methods:{
			prev(){
				this.$router.go(-1);
			},
			delete_text(){
				this.user='';
			},
			change_icon(){
				var visible=document.getElementById('visible').classList;
				var pwd=document.getElementById('pwd');
				console.log(visible);
				
				if(visible=='userUnsee'){
					visible.remove('userUnsee');
					visible.add('userSee');
					
					pwd.setAttribute('type','text');
				}else if(visible=='userSee'){
					visible.remove('userSee');
					visible.add('userUnsee');
					pwd.setAttribute('type','password');
				}else{
					return false;
				}
			},
			userName(){
				var reg=/^1(3|4|5|7|8)\d{9}$/;
				if(!reg.test(this.user)){
					
				}else{

				}
			},
			sendMessage(){
				// this.$http.post('v1/User/login.json?pin=5000694123',{
				// 	username:this.user,password:this.password,captcha:'1234'
				// }).then(function(response){
				// 	this.status=response.body.status;
				// 	console.log(this.status);
				// },function(error){
				// 	console.log(error);
				// })
				this.$store.dispatch('sendMessage',{
					user:this.user,
					password:this.password
				})	
			}
		}
	}
</script>

<style>
	@import '../../assets/css/my/logining.css'
</style>