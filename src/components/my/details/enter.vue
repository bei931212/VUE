<template>
	<div class="enter" v-show="show" style="margin-bottom:500px">
		<div class="enter_header">
			<span></span>
			<i @click="submit()">登录</i>
		</div>
		<div class="enter_form">
			<div class="enter_user">
				<span></span>
				<input type="text" v-model="username" placeholder="请输入账号" >
				{{username}}
			</div>
			<div class="enter_pwd">
				<span></span>
				<input type="text" v-model="password" placeholder="请输入密码">
			</div>
		</div>

	</div>
</template>

<script>
	export	default{
		data(){
			return{
				show:false,
				username:'jhgfgjhggg',
				password:'123456',
				captcha:'1234'

			}
		},
		methods:{
             submit: function () {

                 this.$http.post("v1/User/login.json",{
                 	
					username:this.username,
					password:this.password,
					captcha:this.captcha
				   
                 }).then(function(res){
                     console.log(res.data);
                 },function(error){
                    console.log(error);
                 })
            }
		}
		/*created(){
			this.$http.get('../../../static/my1.json',{
				params:{
					username:username,
					password:password
				}
			}).then(
			 (response)=>{
				//this.data=response.data.data;
			 },(error)=>{
				console.log(error);
			}
		  );
		}*/

	}	
</script>

<style>
	@import '../../../assets/css/my/details/enter.css'
</style>