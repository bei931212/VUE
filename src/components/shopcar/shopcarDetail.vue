<template>
	<div class="detail" v-if="good_detail_data!=null">

		<div class="head">
			<div class="shopcarBack" @click="goback"><</div>
			<div class="tab">
		<span @click="set_active(index)" :class="{span_active:active=='tab-container'+index}" v-for="(Item,index) in span_content">{{Item}}</span>
			</div>
		</div>
		<mt-tab-container v-model="active" swipeable>
		  	<mt-tab-container-item id="tab-container0">
		<div class="lb" @touchmove.stop="" >
			<mt-swipe :auto="3000">
			  <mt-swipe-item v-for="img in good_detail_data.thumb_alisa" >
			  	<div class="banner">
			<img :src="img" alt="">
		</div>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="detail">            
			<p class='title p dian'>{{good_detail_data.title}}</p>
			<p class="price p"><span>￥</span><span>{{good_detail_data.marketprice}}</span><i>市场价</i><b>￥{{good_detail_data.productprice}}</b></p>
			<p class="p colorSure" @click="color">请选择颜色<span>></span></p>
			<mt-popup
			  v-model="popupVisible"
			  position="bottom">
			  <div>
			  	<div class="pop">
			  		<img :src="goodsDetail.img" alt="">
			  		<p>￥127.00</p>
			  		<p>库存742</p>
			  		<p>蜂蜜那代售点</p>
			  	</div>
			  	<div class="zj">
			  		<span>数量</span>
			  		<b>-</b>
			  		<input type="text" v-model="num" disabled> 
			  		<b>+</b>
<!-- 			  		<b v-on:click.prevent="changeMoney(food,-1)">-</b><input type="text" v-model="food.g_total" disabled><b v-on:click.prevent="changeMoney(food,1)">+</b> -->

			  	</div>
			  	<p class="qd" @click="qd">确定</p>

			  </div>
			</mt-popup>
			<p class="service p"><span>服务</span><i>7</i><b></b><span>七天无理由退换货</span></p>
			<router-link to="/mail" @click.native="alert">
		<p class="mail p"><span>{{good_detail_data.seller_name}}</span><b>进店逛逛</b></p>
			</router-link>
			<router-link to="/shCar">
		<div class="num ">
			<div><p>136</p><p>所有商品</p></div>
			<div><p>59905</p><p>累计成交</p></div>
			<div><p>785</p><p>收藏人数</p></div>
		</div>
			</router-link>
			<div class="bg"></div>
			<p class="pj p"  @click="goto_assess"><span>评价(1)</span><b>好评 0%</b></p>
			<ul>
		<li> 
			<div>
				<img src="./img.gif" alt="">
				<span>王结勇</span>
				<b>v1</b>
				<span>2天前</span>
			</div>
			<p>东西已经收到了，一下啊岁的卡卡的纱卡纱卡觉得哈数据库的ask的哈萨克觉得好看</p>
		</li>
			</ul>
			<div class="watch">
		<span @click="goto_assess">查看全部评价</span>
			</div>
			
		</div>
		<div class="foot"><span>加入购物车</span><span @click="buy">立刻购买</span></div>
		<mt-popup
			  v-model="popVisible"
			  position="bottom">
			  <div>
			  	<div class="pop">
			  		<img :src="good_detail_data.thumb" alt="">
			  		<p>￥{{good_detail_data.marketprice}}</p>
			  		<p>库存{{good_detail_data.stock}}</p>
			  		<p class="dian">{{good_detail_data.title}}</p>
			  	</div>
			  	<div class="zj">
			  		<span>数量</span>
			  		<b>-</b>
			  		<input type="text" disabled> 
			  		<b>+</b>

			  	</div>
			  	<p class="qd" @click="qd">确定</p>

			  </div>
			</mt-popup>
		  	</mt-tab-container-item>
		 	<mt-tab-container-item id="tab-container1">
		    	<mt-cell >详情页</mt-cell>
		    	<mt-cell >详情页</mt-cell>
		    	<mt-cell >详情页</mt-cell>
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="tab-container2">
		<mt-navbar v-model="selected" v-on:click.stop>
		  <mt-tab-item id="1" v-on:click.stop>
		  	<span>全部评价</span>
			<span>22</span>
		  </mt-tab-item>
		  <mt-tab-item id="2" v-on:click.stop>
		  	<span>好评</span>
			<span>22</span>
		  </mt-tab-item>
		  <mt-tab-item id="3" v-on:click.stop>
		  	<span>中评</span>
			<span>22</span>
		  </mt-tab-item>
		  <mt-tab-item id="4" v-on:click.stop> 
		  	<span>差评</span>
			<span>22</span>
		  </mt-tab-item>
		  <mt-tab-item v-on:click.stop>
		  	<span>好评率</span>
			<span>86.9%</span>
		  </mt-tab-item>
		</mt-navbar>
		tab-container
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <ul>
		<li> 
			<div>
				<img src="./img.gif" alt="">
				<span>王结勇</span>
				<b>v1</b>
				<span>2天前</span>
			</div>
			<p>东西已经收到了，一下啊岁的卡卡的纱卡纱卡觉得哈数据库的ask的哈萨克觉得好看</p>
			<p class="rq">购买日期：<span>2天前</span></p>
		</li>

		<li> 
			<div>
				<img src="./img.gif" alt="">
				<span>王结勇</span>
				<b>v1</b>
				<span>2天前</span>
			</div>
			<p>东西已经收到了，一下啊岁的卡卡的纱卡纱卡觉得哈数据库的ask的哈萨克觉得好看</p>
			<p class="rq">购买日期：<span>2天前</span></p>
		</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <ul>
		<li> 
			<div>
				<img src="./img.gif" alt="">
				<span>王结勇</span>
				<b>v1</b>
				<span>2天前</span>
			</div>
			<p>东西已经收到了，一下啊岁的卡卡的纱卡纱卡觉得哈数据库的ask的哈萨克觉得好看</p>
			<p class="rq">购买日期：<span>2天前</span></p>
		</li>
		<li> 
			<div>
				<img src="./img.gif" alt="">
				<span>王结勇</span>
				<b>v1</b>
				<span>2天前</span>
			</div>
			<p>东西已经收到了，一下啊岁的卡卡的纱卡纱卡觉得哈数据库的ask的哈萨克觉得好看</p>
			<p class="rq">购买日期：<span>2天前</span></p>
		</li>
		<li> 
			<div>
				<img src="./img.gif" alt="">
				<span>王结勇</span>
				<b>v1</b>
				<span>2天前</span>
			</div>
			<p>东西已经收到了，一下啊岁的卡卡的纱卡纱卡觉得哈数据库的ask的哈萨克觉得好看</p>
			<p class="rq">购买日期：<span>2天前</span></p>
		</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		<ul>
			<li> 
				<div>
					<img src="./img.gif" alt="">
					<span>王结勇</span>
					<b>v1</b>
					<span>2天前</span>
				</div>
				<p>东西已经收到了，一下啊岁的卡卡的纱卡纱卡觉得哈数据库的ask的哈萨克觉得好看</p>
				<p class="rq">购买日期：<span>2天前</span></p>
			</li>
			<li> 
				<div>
					<img src="./img.gif" alt="">
					<span>王结勇</span>
					<b>v1</b>
					<span>2天前</span>
				</div>
				<p>东西已经收到了，一下啊岁的卡卡的纱卡纱卡觉得哈数据库的ask的哈萨克觉得好看</p>
				<p class="rq">购买日期：<span>2天前</span></p>
			</li>

		</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="4">
			<ul>
		<li> 
			<div>
				<img src="./img.gif" alt="">
				<span>王结勇</span>
				<b>v1</b>
				<span>2天前</span>
			</div>
			<p>东西已经收到了，一下啊岁的卡卡的纱卡纱卡觉得哈数据库的ask的哈萨克觉得好看</p>
			<p class="rq">购买日期：<span>2天前</span></p>
		</li>
		<li> 
			<div>
				<img src="./img.gif" alt="">
				<span>王结勇</span>
				<b>v1</b>
				<span>2天前</span>
			</div>
			<p>东西已经收到了，一下啊岁的卡卡的纱卡纱卡觉得哈数据库的ask的哈萨克觉得好看</p>
			<p class="rq">购买日期：<span>2天前</span></p>
		</li>

			</ul>
		  </mt-tab-container-item>
		</mt-tab-container>


		  	</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
import VueRouter from 'vue-router'
import Vue from 'vue'
export default{
	data() {
		return {
			selected:'1',
			goodsList:[],
			goodsDetail:[],
			goodsMail:[],
			active: 'tab-container0',
      		span_content: [' 商品 ', ' 详情 ', ' 评价 '],
      		popupVisible:false,
      		popVisible:false,
      		good_detail_data:null,
      		comment:null,
      		num:1,
      		goodsId:null
        }
	}, 
	mounted: function () {
		var _this=this


		this.$nextTick(function () {
		});
	},
	methods: {
	    set_active (index) {
	      this.active = 'tab-container' + index
	    },
	    goto_assess(){
	    	this.active='tab-container2'
	    },
	    goback(){
	    	this.$router.go(-1);
	    },
	    color(){
	    	this.popupVisible=true
	    },
	    buy(){
	    	this.popVisible=true
	    },
	    qd(){
	    	this.popupVisible=false
	    },
	    alert(){
	    	console.log(111);
	    }
	},
	created() {
		var reg=/\/shopcarDetail\/(\d+)/;
		this.goodsId=this.$route.path.match(reg)[1]
		this.$http.get('v1/Goods/item.json',{
			params:{
				goodsId:this.goodsId
			}
		}).then(function(response){
			this.good_detail_data=response.body.data.item

		},function(error){
			console.log(error)
		})
		this.$http.get('v1/Goods/comments.json',{
			params:{
				goodsId:this.goodsId
			}
		}).then(function(response){
			this.comment=response.body.data
		},function(error){
			console.log(error)
		})
	}
}
</script>
<style scoped>
		.banner{width:100%;height:10.0rem;}
		.banner img{width:100%;height:100%;}
		.detail .p{font-size:0.402222rem;height:0.902778rem;line-height: 0.902778rem;border-bottom:1px solid black;}
		.detail .price span{color:#e07115;float:left;}
		.detail .price i{width:1.111111rem;height:0.638889rem;float:left;border:1px solid black;line-height:0.638889rem;font-size:0.333333rem;margin-top:0.1rem;margin-left:0.4rem;}
		.detail .price b{text-decoration: line-through;font-weight:normal;}
		.detail .service i{margin-left:0.555556rem;border:1px solid #32b13c;color:#32b13c;width:0.625rem;height:0.625rem;display:inline-block;vertical-align:middle;line-height:0.625rem;border-radius: 50%;text-align: center;margin-right:20px;}
		.detail .mail b{float:right;padding-right:20px;}
		.detail .num p{border-bottom:none;font-size:0.347222rem;text-align: center;height:0.5rem;line-height:0.5rem;}
		.detail .num{display: flex;}
		.detail .num div{flex:1;height:1.180556rem;margin-top:10px;border-right:1px solid black;}
		.detail .num div:last-child{border-right:none;}
		.detail .pj b{float:right;padding-right:20px;}
		.detail .bg{height:6px;width:100%;background:#dfdfdf;margin-top:10px;}
		.detail ul div{width:100%;height:1.388889rem;}
		.detail ul li{border-bottom:1px solid black;padding-bottom:0.416667rem;}
		.detail ul div img{width:0.888889rem;height:0.888889rem;border-radius: 50%;float:left;margin-right:10px;}
		.detail ul div span{width:1.1rem;height:100%;line-height:1.388889rem;display:inline-block;float:left;font-size:0.347222rem;}
		.detail ul div b{width:0.694444rem;height:0.402778rem;line-height:0.402778rem;display:inline-block;float:left;margin-top:0.466667rem;background:#dddddd;color:white;text-align: center;border-radius: 20%;margin-left:10px;}
		.detail ul li p{line-height:0.613889rem;font-size:0.416667rem;}
		.detail ul div span:last-child{float:right;padding-right:20px;}
		.detail .watch{width:100%;height:1rem;margin-bottom:2rem;}
		.detail .watch span{width:6.944444rem;height:1rem;display:block;line-height:0.972222rem;text-align: center;margin:0 auto;background:white;color:#be7f30;border:1px solid #be7f30;border-radius: 5%;margin-top:20px;}
		.lb{height:10.0rem;}
		.is-selected{background:red;}
		.span_active{color:red;border-bottom:2px solid red;box-sizing: border-box;}
		.head{position:fixed;left:0;top:0;width:100%;z-index:100;}
		.head .shopcarBack{width:40px;height:40px;position:absolute;left:20px;top:10px;text-align: center;border:1px solid gray;}
		.tab{text-align: center;height:60px;width:100%;background:#dddddd;}
		.tab>span{width:20%;height:100%;text-align: center;display:inline-block;line-height: 60px;}
		.mint-tab-container{padding-top:60px;}
		 .mint-tab-item span{display: block;text-align: center;height:0.3rem;line-height:0.3rem;}
		 .mint-navbar .mint-tab-item{background:white;color:black;border-color:black;}
		.mint-popup {width:100%;}
		.pop{position:relative;height:1.5rem;border-bottom: 1px solid gray;margin-bottom:0.277778rem}
		.pop p{padding-left:4rem;}
		.zj input{width:0.4rem;height:0.4rem;margin-right:0;}
		.zj span{margin-right:6.777778rem;}
		.qd{height:0.694444rem;background:orange;color:white;line-height:0.694444rem;text-align:center;margin-top:0.277778rem;}
		.pop img{position:absolute;width:3rem;height:3rem;left:0.277778rem;top:-2rem;}
		.colorSure span{padding-left:7rem;}
		.dian{width:100%;white-space:nowrap;overflow: hidden;text-align: ellipsis;}
		.foot{position:fixed;left:0;bottom:0;height:100px;background:white;width:100%;}
		.foot span{display:inline-block;width:50%;height:100%;background:red;color:white;line-height:100px;text-align: center;}



</style>
