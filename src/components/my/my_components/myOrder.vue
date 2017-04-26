<template>
	<div class="myOrder">
		<div class="myOrder_header">
			<div class="myOrder_nav">
				<span>我的订单</span>
				<span></span>
			</div>
			<div class="myOrder_list">
				<ul>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/paid.png" alt="">
							<p>待付款</p>
							<span></span>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/Pending_payment.png" alt="">
							<p>待发货</p>
							<span></span>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/received.png" alt="">
							<p>待收货</p>
							<span></span>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/commented.png" alt="">
							<p>待评价</p>
							<span></span>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/Refund_after_sale.png" alt="">
							<p>退款/售后</p>
							<span></span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="myOrder_footer">
				<ul>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/Balance.png" alt="">
							<p>余额</p>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/collection.png" alt="">
							<p>我的收藏</p>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/address.png" alt="">
							<p>收货地址</p>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/Check_in.png" alt="">
							<p>签到</p>
						</router-link>
					</li>
				</ul>
				<hr>
				<ul>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/coupon.png" alt="">
							<p>优惠券</p>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/pingjia.png" alt="">
							<p>我的评价</p>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../../assets/img/help.png" alt="">
							<p>服务中心</p>
						</router-link>
					</li>
				</ul>
		</div>
	</div>
</template>

<script>
	export	default{
		
	}
</script>

<style scoped>
	@import '../../../assets/css/my/myComponent/myOrder.css'
</style>