<template>
	<div class="myIndent" v-if='this.data!=null'>
		<div class="myIndent_container">
			<div style='background:#f5f5f5'>
				<div class="myIndent_header">
					<span @click='prev'></span>
					<span>我的订单</span>
				</div>
				<div class="myIndent_nav">
					<ul>
						<li v-for='(item , index) in arr' v-bind:class="{line_color:isline_color==index}"  @click='list(index,item.status)'>
							{{item.name}}
						</li>
					</ul>
				</div>
				<div class="myIndent_main">
					<ul>
						<li v-for="order in data" v-if='this_status==order.status'>
							<div v-for="(good,index) in order.goods" class="myIndent_main_container" @click='getOrdersn(index)'>
								<router-link to='./orderDetail'>
								<div class="myIndent_main_header">
										<span class="span1"></span>
										<span class="span2">{{arrs[order.status]}}</span>
										<p>{{good.title}}</p>
								</div>
								<div class="myIndent_main_main">
										<img :src='good.thumb' alt="">
										<p class="p1">实打实的，三品撒娇，的dsad sadsa绝对，路径萨拉科技，手里骄傲dsadsadppp的科技三路家里看书记得健，康萨克的阿dasdsa斯达所dsadsa多撒多撒旦撒旦萨达萨达的萨达萨达萨达答湿哒哒撒
										</p>
										<p class="p2">{{good.optionname}}</p>
										<span class="price">{{good.marketprice}}</span>
										<span class="quantity">x{{good.total}}</span>
								</div>
								<div class="myIndent_main_footer">
									<p>共计{{good.total}}件商品 合计:{{good.marketprice*good.total}}(含运费{{order.freight}})</p>
								</div>
								</router-link> 
							</div>	
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
				arr:[{name:'全部',status:'all'},{name:"待付款",status:'0'},{name:"待发货",status:'1'},{name:"待收货",status:'2'},{name:"待评价",status:'-30'}],
				isline_color:'1',
				data:null,
				arrs:{
					"0":'待付款',
					"1":'待发货',
					"2":'待收货',
					"3":'已完成',
					"-1":'已取消',
					"-2":'退款中',
					"-3":'换货中',
					"-4":'退货中',
					"-5":'已退货',
					"-6":'已退款',
					"-30":'待评价',
					"-31":'已评价',
				},
				this_status:'all',
				
			}
		},
		created(){
			this.$http.get('v1/Order/all.json?pin=5000694123')
			.then(function(response){
				this.data=response.body.data.orders

				// console.log(this.data.orders[0].ordersn)
				console.log(this.data)
				// for(var i=0;i<response.body.data.orders.length;i++){
				// 	this.get_ordersn=response.body.data.orders[i].ordersn
				// 	// console.log(this.get_ordersn)
				// }
				// console.log(this.get_ordersn)
			},function(error){
				console.log(error)
			})

		},
		methods:{
			list(index,status){
				this.isline_color=index;
				this.this_status=status;
			},
			prev(){
				this.$router.go(-1)
			},
			getOrdersn(index){
				this.$store.dispatch(
					'get_ordersn',{
						index:index
					}
				)
			}
		}
	}
</script>

<style>
	@import '../../assets/css/my/myOrder.css'
</style>