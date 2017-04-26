<template>
	<!-- 搜索框 -->
	<div class="search">
		<form action="">
			<i class="icon-收索 search_icon"></i>
			<input type="text" class="search_input" placeholder="拼团">
		</form>
		<i class="icon-消息 search_icon search_icon1"></i>
	</div>
</template>
<script>
import "../../static/svg.css"
	export default{}
</script>
<style scoped>
.search_icon{
	color:#000;
	float: left;
	font-size:0.533333rem;
	margin-top: 0.133333rem;
}
.search_icon1{
	margin-left:0.16rem;
	color:#f08225;
}
.search{
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
.search form{
	width:8.416667rem;
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
.search_input{
	border:0;
	height: 0.853333rem;
	line-height: 0.853333rem;
	float: left;
}
</style>
