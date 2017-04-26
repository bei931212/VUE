<template>
	<div class="popup">
		<div class="popup_container">
			<div class="popup_header"><span>亲，您真的要取消订单吗？</span></div>
			<div class="popup_footer">
				<!-- <span v-for='item in arr'>
					{{item}}
				</span> -->
				<span @click="popup_hide">先逛逛</span>
				<span>是的</span>
			</div>			
		</div>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex';
	export default{
		data(){
			return {
				// arr:['先逛逛','是的']
				// show_popup:false,
			}
		},
		computed:mapGetters([

		]),
		methods:mapActions([
			'popup_hide'
		])
	}
</script>

<style>
	.popup{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(60,60,62,0.5);
	}
	.popup_container{
		position: absolute;
		left: 1.611111rem;
		top: 7.736111rem;
		width: 6.791667rem;
		height: 2.333333rem;
		background: #fff;
		border-radius: 15px;
	}
	.popup_header{
		width: 100%;
		height: 1.263889rem;
		border-bottom: 1px solid #ddd;
		text-align: center;
		line-height: 1.263889rem;
		font-size: 0.416667rem;
		color: #000;
	}
	.popup_footer{
		/*width: 100%;
		height: 1.083333rem; */
	}
	.popup_footer span{
		float: left;
		/*display: inline-block;*/
		box-sizing: border-box;
		width: 50%;
		height: 1.083333rem;
		line-height: 1.083333rem;
		text-align: center;
		font-size: 0.416667rem;
	}
	.popup_footer span:first-child{
		color: #087efc;
		border-right: 1px solid #ddd;
	}
	.popup_footer span:last-child{
		color: #e36a00;
	}
</style>