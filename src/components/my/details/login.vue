<template>
	<div class="login">
		<div class="login_header">
			<div class="login_header">
				<span @click="login_hide"></span>
				<i>帮助</i>
			</div>
		</div>
		<div class="login_nav">
			<img src="../../../assets/img/logo.png" alt="">
		</div>
		<form action="">
			<div class="login_main">
				<input type="text" placeholder="手机/邮箱" v-model="input1">
				<input type="password" placeholder="请输入密码" v-model="input2">
			</div>
			<div class="login_aside">
				忘记密码
			</div>
			<div class="login_footer">
				<input type="submit" value="登录" id="submit"  :class="{ba:input1!=''&&input2!=''}">
			</div>
		</form>
		
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex';
	export	default{
		data:function(){
			return {
				input1:'',
				input2:'',
			}
		},
		computed:mapGetters([

		]),
		created:function(){

		},
		methods:mapActions([
			'login_hide'
		])
	}
</script>

<style>
.login{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #fff;
	z-index: 101
}
.login_header{
	width: 100%;
	height: 1.944444rem;
	line-height: 1.263889rem;
}
.login_header span{
	float: left;
	width: 0.305556rem;
	height: 0.513889rem;
	margin-left: 0.486111rem;
	margin-top: 0.763889rem;
	background: url(../../../assets/img/return.png) no-repeat;
	background-size: 100% 100%;
}
.login_header i{
	float: right;
	font-size: 0.416667rem;
	margin-right: 0.555556rem;
	margin-top: 0.416667rem;
}
.login_nav{
	width: 100%;
	height: 2.180556rem;
	text-align: center;
}
.login_nav img{
	width: 2.180556rem;
	height: 2.180556rem;
	border-radius: 50%;
}
.login_main{
	width: 100%;
	height: 3.430556rem;
	text-align: center;
}
.login_main input{
	display: block;
	width: 9.194444rem;
	height: 0.638889rem;
	margin-top: 1.111111rem;
	margin-left: 0.416667rem;
	border: none;
	border-bottom: 1px solid red;
}
.login_aside{
	float: right;
	width: 1.583333rem;
}
.login_footer {
	width: 100%;
	margin-top: 0.805556rem;
	text-align: center;
	clear: both;
}
.login_footer .ba{
	margin: 0;
	width: 9.194444rem;
	height: 1.25rem;
	background: red;
	border-radius: 0.694444rem;
	border: none;
}
.login_footer input{
	margin: 0;
	width: 9.194444rem;
	height: 1.25rem;
	background: linear-gradient(to right, #ffd3a4 , #fdc0a1);
	border-radius: 0.694444rem;
	border: none;
}

</style>