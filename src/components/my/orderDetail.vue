<template>
	<div class="orderDetail" v-if='this.data!=null'>
		<div class="orderDetail_container">
			<div class="orderDetail_header">
				<span @click='prev'></span>
				<span>订单详情</span>
			</div>
			<div class="orderDetail_nav">
				<span class="orderDetail_icon"></span>
				<span class="orderDetail_name">姓名</span>
				<span class="orderDetail_phone">152****5252</span>
				<p class="orderDetail_address">沙拉酱大家撒解放啦几十块的积分</p>
				<img src="../../assets/img/stripe.png" alt="">
			</div>
			<div class="orderDetail_goods">
				<div class="orderDetail_goods_header">
					<span class="orderDetail_goods_img"></span>
					<span class="orderDetail_goods_status">订单状态</span>
					<span>大家撒进得来</span>
				</div>
				<div class="orderDetail_goods_footer">
					<img src="../../assets/img/logo.png" alt="">
					<p class="p3">实打实的，三品撒娇，的dsad sadsa绝对，路径萨拉科技，手里骄傲dsadsadppp的科技三路家里看书记得健，康萨克的阿dasdsa斯达所dsadsa多撒多撒旦撒旦萨达萨达的萨达萨达萨达答湿哒哒撒
					</p>
					<p class="p4">卡斯达拉斯</p>
					<span class="price1">$32.00</span>
					<span class="quantity1">x1</span>
				</div>
			</div>
			<div class="orderDetail_main">
				<ul>
					<li>
						<div class="orderDetail_main_msg">
							<span></span>
							<span></span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:null,
			}
		},
		created(){
			this.$http.get('v1/Order/item.json?pin=5000694123&ordersn=1701052S490142474222',{
				//ordersn:'1701052S490142474222'
			}).then(function(response){
				this.data=response.body;
				console.log(this.data)
			},function(error){
				console.log(error)
			})
		},
		methods:{
			prev(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	@import '../../assets/css/my/orderDetail.css'
</style>