<template>
	<!-- 搜索框 -->
	<div class="share">
		<img src="../assets/img/return.png" alt="" class="return" @click="back()">
		<form action="">
			<i class="icon-收索 share_icon"></i>
			<input type="text" class="share_input" placeholder="收索商品">
		</form>
		<i class="icon-分享 share_icon share_icon1"></i>
	</div>
</template>
<script>
import "../../static/svg.css"

export default{
	methods:{
		back(){
			this.$router.go(-1)
		}
	}
}
</script>
<style scoped>
.return{
	float: left;
	margin:0.173333rem 0.366667rem;
}
.share_icon{
	color:#000;
	float: left;
	font-size:0.533333rem;
	margin-top: 0.133333rem;
}
.share_icon1{
	margin-left:0.26rem;
	color:#666;
}
.share{
	padding:0.146667rem 0.146667rem;
	box-sizing: border-box;
	width:100%;
	height:1.173333rem;
	line-height:0.826667rem;
	background:#f7f7f7;
	position: fixed;
	top: 0;
	z-index: 100;
}
.share form{
	width:7.016667rem;
	height: 0.853333rem;
	float: left;
	border:1px solid #fff;
	background:#fff;
	border-radius:0.066667rem;
	padding:0 0.253333rem;
	line-height: 0.853333rem;
	font-size: 0.32rem;
	color: #aaa;
}
.share_input{
	border:0;
	height: 0.853333rem;
	line-height: 0.853333rem;
	float: left;
}
</style>