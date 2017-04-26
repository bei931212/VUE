<template>
	<div class="myLogin"  v-if='this.my_data!=null'>
		<div class="myLogin_container">
			<div class="header">
				<div class="_list">
					<span class="setting"></span>
					<span class="avatar"><img :src='my_data.memberInfo.avatar' alt=""></span>
					<span class="news"></span>
				</div>
				<p>{{my_data.memberInfo.shareNickname}}</p>
				<p>收藏的商品{{my_data.favoriteCount.goods}}|收藏的店铺{{my_data.favoriteCount.shop}}</p>
			</div>
			<div class="nav">
				<div class="nav_header">
					<router-link to='/myOrder'>
						<div class="nav_header_container">
							<span>我的订单</span>
							<span></span>
						</div>
					</router-link>
				</div>
				<div class="nav_list">
					<ul>
						<li>
							<router-link to='./myOrder'>
								<img src="../../assets/img/paid.png" alt="">
								<p>待付款</p>
								<span v-if='my_data.orderCount.pending!=0?true:false'>{{my_data.orderCount.pending}}</span>
							</router-link>
						</li>
						<li>
							<router-link to='./myOrder'>
								<img src="../../assets/img/Pending_payment.png" alt="">
								<p>待发货</p>
								<span v-if='my_data.orderCount.waitsend!=0?true:false'>{{my_data.orderCount.waitsend}}</span>
							</router-link>
						</li>
						<li>
							<router-link to='./myOrder'>
								<img src="../../assets/img/received.png" alt="">
								<p>待收货</p>
								<span  v-if='my_data.orderCount.receipt!=0?true:false'>{{my_data.orderCount.receipt}}</span>
							</router-link>
						</li>
						<li>
							<router-link to='./myOrder'>
								<img src="../../assets/img/commented.png" alt="">
								<p>待评价</p>
								<span v-if='my_data.orderCount.uncomment!=0?true:false'>{{my_data.orderCount.uncomment}}</span>
							</router-link>
						</li>
						<li>
							<router-link to=''>
								<img src="../../assets/img/Refund_after_sale.png" alt="">
								<p>退款/售后</p>
								<span v-if='my_data.orderCount.return!=0?true:false'>{{my_data.orderCount.return}}</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="banner">
				<ul>
					<li>
						<router-link to=''>
							<img src="../../assets/img/Balance.png" alt="">
							<p>余额</p>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../assets/img/collection.png" alt="">
							<p>我的收藏</p>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../assets/img/address.png" alt="">
							<p>收货地址</p>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../assets/img/Check_in.png" alt="">
							<p>签到</p>
						</router-link>
					</li>
				</ul>

				<ul class="banner_noline">
					<li>
						<router-link to=''>
							<img src="../../assets/img/coupon.png" alt="">
							<p>优惠券</p>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../assets/img/pingjia.png" alt="">
							<p>我的评价</p>
						</router-link>
					</li>
					<li>
						<router-link to=''>
							<img src="../../assets/img/help.png" alt="">
							<p>服务中心</p>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="myLogin_footer banner">
				<div class="footer_nav">
					<p>创客家园</p>
				</div>
				<div>
					
					<ul>
						<li>
							<router-link to=''>
								<img src="../../assets/img/hero.png" alt="">
								<p>创业大赛</p>
							</router-link>
						</li>
						<li>
							<router-link to=''>
								<img src="../../assets/img/sales_data.png" alt="">
								<p>销售数据</p>
							</router-link>
						</li>
						<li>
							<router-link to=''>
								<img src="../../assets/img/setting.png" alt="">
								<p>店铺设置</p>
							</router-link>
						</li>

						<li>
							<router-link to=''>
								<img src="../../assets/img/power.png" alt="">
								<p>动力指数</p>
							</router-link>
						</li>
					</ul>
					
					<ul>
						<li>
							<router-link to=''>
								<img src="../../assets/img/Store_members.png" alt="">
								<p>小店会员</p>
							</router-link>
						</li>
						<li>
							<router-link to=''>
								<img src="../../assets/img/Shop_order.png" alt="">
								<p>小店订单</p>
							</router-link>
						</li>
						<li>
							<router-link to=''>
								<img src="../../assets/img/User_Code.png" alt="">
								<p>用户守则</p>
							</router-link>
						</li>
						<li>
							<router-link to=''>
								<img src="../../assets/img/code.png" alt="">
								<p>二维码</p>
							</router-link>
						</li>
					</ul>
					<ul>
						<li>
							<router-link to=''>
								<img src="../../assets/img/settled_in.png" alt="">
								<p>厂商入驻</p>
							</router-link>
						</li>
					</ul>
			
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				my_data:null,
			}
		},
		created(){
			this.$http.get('v1/My/home.json?pin=5000694123').
				then(function(response){
					 this.my_data=response.body.data
					 console.log(this.my_data)
				},function(error){
					console.log(error)
				})
		},
		methods(){
			// payment(){

			// }
		}
	} 
</script>

<style scoped>
	@import '../../assets/css/my/myLogin.css'
</style>