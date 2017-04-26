<template>
	<div class="login">
		<div class="container">
			<div class="login_header">
				<router-link to='/my'>
					<span></span>
				</router-link>
				<span>帮助</span>
			</div>
			<div class="login_nav">
				<img src="../../assets/img/logo.png" alt="">
			</div>
			<div class="login_button">
				<router-link to='/logining'>登录</router-link>
				<router-link to='/registered'>注册</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped>
	@import '../../assets/css/my/login.css'
</style>