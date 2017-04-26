<template>
	<div class="userRegister">
		<div class="userRegister_header">
			<span><img src="../../../assets/img/back_n@2x.png"  alt=""></span>
			<b>注册</b>
			<i>用户登录</i>
		</div>
		<div class="userRegister_nav">
			<form action="" class="userRegister_form">
				<input type="tel" placeholder="请输入手机号" v-model="tel" pattern="^(0|86|17951)?1[0-9]{10}" required id="tel" oninvalid="setCustomValidity('请输入11位手机号');" oninput="setCustomValidity('')">
				<span class="userRegister_img" @click="userRegister_delete"><img src="../../../assets/img/delete.png" height="31" width="31" alt=""></span>
				<input class="userRegister_verify" @click="userRegister_box_show"  v-model="verify" type="submit">
				<input type="number" placeholder="请输入短信验证码" class="userRegister_number">
			</form>
		</div>
		<div class="userRegister_next">
			<div>下一步</div>
			<div>
				<span class="userRegister_next_img"><img src="../../../assets/img/choose.png" height="36" width="36" alt=""></span>
				<span class="userRegister_next_span1">我已同意并阅读</span><span class="userRegister_next_span2">顺联动力网络服务协议</span>
			</div>
		</div>
		<div class="userRegister_box" v-show="userRegister_box">
			<p>请输入验证码</p>
			<input type="text" placeholder="请输入验证码">
			<div class="d1">
				<span>5369</span><span>看不清,换一张</span>
			</div>
			<div class="d2">
				<span>取消</span><span>确定</span>
			</div>
			<img src="../../../assets/img/close.png" height="29" width="29" alt="">
		</div>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex';
	export default{
		data(){
			return{

			}	
		},
		computed:mapGetters([
			'tel',
			'userRegister_box',
			'verify',
			'time',
		]),
		methods:mapActions([
			'userRegister_delete',
			'userRegister_box_show',
		])
	}
</script>

<style>
.userRegister{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: url(../../../assets/img/bg.png) no-repeat;
	background-size: 100% 100%;
	color: #fff;
}
.userRegister_header{
	width: 100%;
	height: 1.32rem;
}
.userRegister_header span{
	float: left;
	width: 0.319444rem;
	height: 0.5rem;
	margin-left: 0.486111rem;
	margin-top: 0.777778rem;
}
.userRegister_header span img{
	width: 100%;
	height: 100%;
}
.userRegister_header b{
	position: absolute;
	left: 4.541667rem;
	top: 0.777778rem;
}
.userRegister_header i{
	float: right;
	margin-top: 0.777778rem;
	margin-right: 0.333333rem;
}
.userRegister_nav{
	margin-top: 1.76rem;
}
.userRegister_form .userRegister_number{
	width: 9.24rem;
}
.userRegister_form input{
	margin:0;
	background-color:transparent;
	border: none;
	width: 7.133333rem;
	height: 0.8rem;
	margin-left: 0.386667rem;
	font-size: 100%;
	border-bottom: 1px solid #aaa;
	color: #fff;
	caret-color:red;
}
.userRegister_form{
	position: relative;
}
.userRegister_form .userRegister_img{
	position: absolute;
	left: 7.0rem;
	top: 0.186667rem;
	width: 0.48rem;
	height: 0.48rem;
}
.userRegister_img img{
	width: 100%;
	height: 100%;
}
.userRegister_form .userRegister_verify{
	display: inline-block;
	width: 1.866667rem;
	height: 0.786667rem;
	background: #656666;
	color: #fff;
	text-align: center;
	line-height: 0.786667rem;
	border:none;
	margin: 0;
}
.userRegister_next{
	width: 100%;
	margin-top: 1.066667rem;
}
.userRegister_next div:first-child{
	width: 9.213333rem;
	height: 1.093333rem;
	text-align: center;
	line-height: 1.093333rem;
	background: #ed6d00;
	border-radius: 0.266667rem;
	font-size: 0.48rem;
	margin-left: 0.4rem;
}
.userRegister_next div:last-child{
	margin-top: 0.293333rem;
	margin-left: 0.4rem;
	height: 0.48rem;
	line-height: 0.48rem;
}
.userRegister_next_img{
	float: left;
	width: 0.48rem;
	height: 0.48rem;
}
.userRegister_next_img img{
	width: 100%;
	height: 100%;
}
.userRegister_next_span1{
	margin-left: 0.36rem;
}
.userRegister_next_span2{
	color: #ed6d00;
}
.userRegister_box{
	position: fixed;
	left: 1.013333rem;
	top: 6.76rem;
	background: #f7f7f7;
	width: 8.0rem;
	height: 4.293333rem;
	color: #111;
	border-radius: 0.133333rem;
	text-align: center;
}
.userRegister_box p{
	width: 100%;
	height: 1.226667rem;
	line-height: 1.226667rem;
	text-align: center;
}
.userRegister_box input{
	width: 6.44rem;
	height: 0.853333rem;
	border: none;
	border-radius: 0.066667rem;
}
.userRegister_box .d1{
	width: 100%;
	height: 1.146667rem;
	line-height: 1.146667rem;
}
.userRegister_box .d1 span{
	display: inline-block;
	box-sizing: border-box;
	width: 50%;
}
.userRegister_box .d1 span:last-child{
	color: #aaa;
}
.userRegister_box .d2{
	width: 100%;
	height: 1.093333rem;
	text-align: center;
	line-height: 1.093333rem;
	border-top: 1px solid #aaa;
}
.userRegister_box .d2 span{
	display: inline-block;
	box-sizing: border-box;
	width: 50%;
	font-size: 0.32rem;
	color: #ed6d00;
}
.userRegister_box .d2 span:first-child{
	border-right:1px solid #aaa; 
}
.userRegister_box img{
	position: absolute;
	left: 7.4rem;
	top: 0.2rem;
}
</style>