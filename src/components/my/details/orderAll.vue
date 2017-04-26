<template>
	<div class="orderAll" >
		<ul>
			<li class="orderAll_header">
				<span class="orderAll_img"></span>
				<span class="orderAll_title">惠农专营店</span>
				<span class="orderAll_pay">待付款</span>
			</li>
			<li class="orderAll_main">
				<div><img src="../../../assets/img/3.jpg" height="113" width="113" alt=""></div>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iusto voluptatum assumenda, natus optio, velit dolorem cupiditate vitae recusandae fuga ex dignissimos praesentium? Distinctio cupiditate inventore aliquid dolorum repudiandae earum.
					</p>
				</div>
				<div>
					<ul>
						<li><span>￥88.00</span></li>
						<li><span class="orderAll_count">x1</span></li>
					</ul>
				</div>
			</li>
			<li class="orderAll_footer">
				<p>
					共计<span>1</span>件商品 合计:￥<span>88.00</span>(含运费￥:<span>0.00</span>)	
				</p>
			</li>
		</ul>	
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				data:null
			}
		},
		created(){
			var _this=this
			this.$http.get("v1/Order/all.json").then(
			(response)=>{
			   /* var data=response.body;*/
				console.log(response.body);
			},(error)=>{
				console.log(error);
			})
		}
	}
</script>

<style>
	@import '../../../assets/css/my/details/orderAll.css'
</style>