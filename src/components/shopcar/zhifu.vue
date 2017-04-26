<template>
	<div class="zhifu" v-if="message!=null">
		<div class="head">
			 <div class="shopcarBack" @click="goback"><</div>
			<p>确认订单</p>
		</div>
		<div class="adress">
			<div class="adress_left"></div>
			<div class="adress_center"><p><span>{{message.address.realname}}</span><span>{{message.address.mobile}}</span></p><p>{{message.address.address}}</p></div>
			<div class="adress_right"></div>
		</div>
		<ul class="ulzhifu">
			<li class="storeGoods" v-for="goods in message.seller">
				<p class="store">
					<i class="icon-店铺"></i><span>{{goods.seller_name}}</span>
				</p>
				<div class="goods" v-for="good in goods.goods">
					<router-link :to="{name:'shopcarDetail'}">
						<div class="center">
							<img :src="good.thumb" alt="">
						</div>
						<div class="right">
							<div class="title">
							
								<p><span>{{good.title}}</span><span class="num" >￥{{good.marketprice}}</span></p>
								<p class="name">X{{good.amount}}</p>
							</div>
						</div>
					</router-link>
				</div>
				<p class="yf"><span>运费</span><span>包邮</span></p>
				<p><span>店铺优惠</span><span>暂无可使用优惠卷</span></p>
				<p>共计{{goods.total_num}}件商品 合计：<span>{{goods.goods_price}}</span></p>
				<p><span>商城优惠</span><span>暂无可使用优惠卷</span></p>
				<p>温馨提示：商城优惠券与店铺优惠券暂时不可同时使用。</p>
				<p>买家留言</p>
			</li>
			<div class="footer"><span>合计：{{message.goods_price}}</span><span class="qr"  @click="goumai">确认</span></div>
		</ul>
		
		<mt-popup
		  	v-model="popupVisible"
		  	position="bottom">
		  	<div v-for="(pays,index) in pay">
		  	<p @click="payway(index)">{{pays.payname}}</p>
		  	</div>
		</mt-popup>
	</div>

</template>
<script>
export default{
	data() {
		return {
			goodsIds:[],
			goods:[],
			message:null,
			Amount:[],
			optionid:[],
			popupVisible:false,
			address:null,
			pay:null,
			voucher:[]

        }
	}, 
	created:function(){
		this.goodsIds=this.$route.params.goodsIds
		this.actId=this.$route.params.actId
		this.Amount=this.$route.params.Amount
		this.optionid=this.$route.params.optionid
		console.log(this.optionid)
		for(var i=0;i<this.goodsIds.length;i++){
			this.goods.push(JSON.parse('{"goodsId":"'+this.goodsIds[i]+'","amount":"'+this.Amount[i]+'","act_id":"1","optionid":"'+this.optionid[i]+'"}'))
		}
		this.$http.post('v1/Order/confirm.json?pin=5000694123',{
			"goods":this.goods
		}).then(function(response){
			console.log(response)
			this.message=response.body.data
			console.log(111)
			console.log(this.message)
			for(var i=0;i<this.message.seller.length;i++){
				this.voucher.push(JSON.parse('{"sellerid":"'+this.message.seller[i].sellerid+'","voucher_user_id":""}'))
			}
			console.log(11111111)
			console.log(this.voucher)

		
		},function(error){
			console.log(error)
		})
	},
	mounted: function () {

	},
	methods: {
	    goback(){
	    	this.$router.go(-1);
	    },
		goumai:function(){
			this.popupVisible=true
			this.$http.post('v1/Pay/Payment.json?pin=5000694123').then(function(response){
				console.log(response)
				this.pay=response.body.data
				
			},function(error){
				console.log(error)
			})
		},
		/*/Order/checkout.json*/
		payway:function(index){
			if(index==3){
				console.log(222)
				console.log(this.goods)
				console.log(this.message.address.addressId)
				console.log(this.message.address.addressId,)
				this.$http.post('v1/Order/checkout.json?pin=5000694123',{
					"goods":this.goods,
					"addressId":this.message.address.addressId,
					"paytype":"balance",
					"voucher":[]

				}).then(function(response){
					console.log(111)
					console.log(response)
				},function(error){
					console.log(error)
				})				
			}
		}
	}
}
</script>
<style socped>
.zhifu{height:100%;width:100%;}
.head{position:fixed;left:0;top:0;width:100%;z-index:100;}
.head .shopcarBack{width:40px;height:40px;position:absolute;left:20px;top:10px;text-align: center;border:1px solid gray;}
.head p{text-align:center;height:70px;background:orange;line-height:70px;font-size:30px;color:white;}
.adress{margin-top:70px;width:100%;overflow:hidden;border-bottom:5px solid red;}
.adress_left{width:15%;height:2rem;float:left;}
.adress_center{width:65%;height:2rem;float:left;}
.adress_right{width:20%;height:2rem;float:left;}
ul.ulzhifu{width:100%;margin-top:0;}
.goods{height:2.4rem;box-sizing: border-box;padding-left:0.266667rem;}
.goods .left{height:2.4rem;line-height:2.4rem;float:left;}
.goods .center{float:left;height:2.133333rem;width:2.133333rem;}
.goods img{width:100%;height:100%;padding-top:0.13rem;padding-right:0.266667rem;}
.goods .right{float:right;height:100%;}
.goods .right
.goods .title,.goods .title2{height:100%;}
.title .name{height:0.8rem;line-height:0.8rem;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;color:black;text-align: right;padding-top:50px;}
.title p span.num{float:right;color:black;font-weight:normal;}
.title p{color:black;}

.title2 i{height:2.2rem;width:0.694444rem;background:red;color:white;float:right;line-height: 2.2rem;margin:0.1rem 0 0.1rem 0rem} 
.title2 .bBox{margin-top:0.694444rem;margin-left:40px;float:left;}
.title2 b,.title2 input{display:inline-block;width:0.694444rem;height:0.694444rem;text-align: center;line-height:0.694444rem;border:1px solid gray;color:black;}
.goods .title2 .bBox input{margin-right:0;}
.footer{position:fixed;left:0;bottom:0;height:60px;width:100%;font-size:25px;line-height: 60px;text-align: right;border-top:1px solid black;background:white;}
.footer .qr{background:red;display:inline-block;width:80px;height:100%;text-align: center;color:white;margin-left:20px;}

.mint-popup{width:100%;}
.mint-popup p{height:40px;line-height: 40px;text-align: center;border-bottom:1px solid black;}
</style>