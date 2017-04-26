<template>
	<div class="payment">
		<ul>
			<!-- <li v-for="item in arr">{{item}}</li> -->
			<li>付款</li>
			<li @click="popup_show">取消订单</li>
		</ul>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex';
	export default{
		data(){
			return {
				arr:['付款','取消订单']
			}
		},
		computed:mapGetters([
			
		]),
		methods:mapActions([
			'popup_show'
		])
	}
</script>

<style>
	.payment{
		width: 100%;
		height: 1.111111rem;
		border-bottom: 1px solid #ddd;
	}
	.payment li{
		float: right;
		width: 1.708333rem;
		height: 0.763889rem;
		text-align: center;
		line-height: 0.763889rem;
		margin-top: 0.180556rem;
		margin-right: 0.180556rem;
		border-radius: 0.069444rem;
	}
	.payment li:first-child{
		border:1px solid #ff8929;
		color: #ff8929;
	}
	.payment li:last-child{
		border:1px solid #aaa;
		color: #aaa;
	}
</style>