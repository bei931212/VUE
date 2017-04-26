<template>
	<div class="registered">
		<div class="container">
			<div class="registered_header">
				<span @click='prev'></span>
				<span>注册</span>
			</div>
		</div>
		<div class="registered_nav">
			<img src="../../assets/img/logo.png" alt="">
		</div>
		<div class="registered_main">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<input type="text" placeholder="请输入用户名" v-model="name" @change='userName'>
			<input type="text" placeholder="请输入手机号" v-model='tel' @change='phone'>
			<input type="password" placeholder="请输入密码" v-model='password' @change='pwd'>
		</div>
		<div class="registered_footer">
			<router-link to='/logining' @click.native='registered' id='registered' :class="{bg_color:name!=''&&tel!=''&&password!=''}">
				注册
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				name: '',
				tel: '',
				password: '',
			}
		},
		methods:{
			userName(){
				var regName=/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$/;
				if(!regName.test(this.name)){
					console.log(1);
				}else{
					
				}
			},
			phone(){
				var regTel=/^1(3|4|5|7|8)\d{9}$/;
				if(!regTel.test(this.tel)){
					console.log('手机号码不正确');
				}else{
					return true;
				}
			},
			pwd(){
				var regPwd=/^[A-Za-z0-9]{6,20}$/;
				if(!regPwd.test(this.password)){
					console.log('6-20位字母数字组合');
				}else{
					return true;
				}
			},
			registered(){
				this.$http.post('v1/User/register.json',{
					regType:this.tel,username:this.name,password:this.password,mobile_code:'1234',mobile:this.tel
				}).then(function(response){
					console.log(response);
				},function(error){
					console.log(error)
				})
			},
			prev(){
				this.$router.go(-1);
			}
		}

	}
</script>

<style>
	@import '../../assets/css/my/registered.css'
</style>