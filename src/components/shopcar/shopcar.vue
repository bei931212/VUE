<template>
	<div class="shopcar">
		<h3>购物车<span @click="bj" v-show="show">编辑</span><span v-show="showBj" @click='wc'>完成</span></h3>
		<ul class="ulshopcar">
			<li class="storeGoods" v-for="(good,index) in goods" >
				<p class="store">
					<b class=" radio" v-bind:class="{'check':good.checked}" @click="mailSelect(good,goods)"></b><i class="icon-店铺"></i><span>{{good.seller_name}}</span>
				</p>
				<div class="goods" v-for="(food,Index) in good.goods">
					<div class="left">
						<b class="radio" v-bind:class="{'check':food.checked}" @click="selected( food, good, goods)"></b>
					</div>
					<router-link :to="'/shopcarDetail/'+food.goodsid">
					<!-- :to="'/article/'+food.goodsid" -->
					<!-- :to="{name:'shopcarDetail',params:{goodsId:food.goodsid}}" -->
						<div class="center">
							<img :src="food.thumb" alt="">
						</div>
						<div class="right">
							<div class="title" v-show="show">
								<p class="name1">{{food.title}}</p>
								<p><span>{{food.marketprice}}</span><span class="num" >X{{food.total}}</span></p>
							</div>
							<div class="title2" v-show="showBj" v-on:click.prevent>
								<div class="bBox"><b v-on:click.prevent="changeMoney(food,-1)">-</b><input type="text" v-model="food.total" disabled><b v-on:click.prevent="changeMoney(food,1)">+</b></div>
								<i @click="remove(food,Index,good,index)">删除</i>
							</div>
						</div>
					</router-link>
				</div>
			</li>
		</ul>
		<div class="sell" v-show="sell">
			<div class="left">
				<b class="radio" :class="{'check':checkAllFlag}" @click="checkAll(goods)"></b>
				<b>全选</b>
			</div>
			<div class="right">
				<div class="yf" v-show="show">
					<p><span>合计：</span><b>{{totalMoney}}</b></p>
					<p>不含运费</p>
				</div>
				<div class="js" v-show="show" @click="jiesuan(goods)">结算(<span>{{num}}</span>)</div>
				<p class="yd" v-show="showBj">移动收藏夹</p>
				<p class="sc" v-show="showBj" @click="allRemove">删除</p>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data() {
		return {
			goods:[],
			totalMoney:0,
			checkAllFlag:false,
			num:0,
			checkAllMail:false,
			show:true,
			showBj:false,
			sell:true,
			goodsSelect:[]
      }
	},
	created() {
		var _this=this
		this.$http.get('v1/Cart/goodsList.json?pin=5000693214').then(function(response){
			var res = response.body.data;
	        	_this.goods=res.goodsList
	        	console.log(_this.goods)
		}).catch(function(error){
			console.log(error);
		});
	},
	methods:{

		selected: function(item, parent,goods){
			if(typeof item.checked == 'undefined'){
				//Vue.set(item,"checked",true)
				this.$set(item,"checked",true)
			}else{
				item.checked=!item.checked;
			}
			var status = true;
			var Status = false;
			for(var idx=0; idx<parent.goods.length;idx++){
				if(parent.goods[idx].checked == undefined || parent.goods[idx].checked == false){
					status = false;
					break;
				}else{
					status = true;
				}
			}
			parent.checked = status;
			for(var i=0;i<goods.length;i++){
				if(goods[i].checked == undefined || goods[i].checked == false){
					Status = false;
					break;
				}else{
					Status = true;
				}
			}
			this.checkAllFlag=Status 
			this.calcTotalMoney();
			this.calTatalNum()
		},
		jiesuan:function(goods){
			var _this=this
			var status=0
			var arrGoodsId=[]
			var arrOptionId=[]
			var arrAmount=[]
			var arrActId=[]
			for(var i=0;i<goods.length;i++){
				for(var j=0;j<goods[i].goods.length;j++){
					if(goods[i].goods[j].checked==true){
						arrGoodsId.push(goods[i].goods[j].goodsid)
						arrOptionId.push(goods[i].goods[j].optionid)
						arrAmount.push(this.goods[i].goods[j].total)
					}else{
						
					}
				}
			}
			if(arrGoodsId.length>=1){
				_this.$router.push({name:'zhifu',params:{goodsIds:arrGoodsId,Amount:arrAmount,optionid:arrOptionId}})
			}else{
				alert("请选择商品")
			}
		},
		mailSelect: function(item,goods){
			if(typeof item.checked == 'undefined'){
				this.$set(item,"checked",true)
			}else{
				item.checked=!item.checked;
			}
			var _this=this;
			var status=true;
			item.goods.forEach(function(Item,Index){
				if(typeof Item.checked == 'undefined'){
					_this.$set(Item,"checked",true)
				}else{
					Item.checked=item.checked
				}
			})
			for(var i=0;i<goods.length;i++){
				if(goods[i].checked == undefined || goods[i].checked == false){
					status = false;
					break;
				}else{
					status = true;
				}
			}
			this.checkAllFlag=status;
			this.calcTotalMoney();
			this.calTatalNum()
		},
		checkAll:function(goods){
			this.checkAllFlag=!this.checkAllFlag;
			var _this=this;
				this.goods.forEach(function(item,index){
					if(typeof item.checked == 'undefined'){
							_this.$set(item,"checked",_this.checkAllFlag)
						}else{
							item.checked=_this.checkAllFlag
						}
					
					_this.goods[index].goods.forEach(function(Item,Index){
						if(typeof Item.checked == 'undefined'){
							_this.$set(Item,"checked",_this.checkAllFlag)
						}else{
							Item.checked=_this.checkAllFlag
						}
					})	
				})
			this.calcTotalMoney();
			this.calTatalNum();
		},
		calcTotalMoney: function () {
			let totalMoney = 0;
			var  _this=this;
			this.goods.forEach(function (item,index) {
				_this.goods[index].goods.forEach(function(Item,Index){
					if(Item.checked){
						totalMoney+=Item.marketprice*Item.total;
					}
				})
			});
			this.totalMoney = totalMoney;
		},
		calTatalNum:function(){
			let num=0;
			var _this=this;
			this.goods.forEach(function (item,index) {
				_this.goods[index].goods.forEach(function(Item,Index){
					if(Item.checked){
						num++
					}
				})
				
			});
			this.num=num;
		},
		bj:function(){
			this.show=false,
			this.showBj=true
		},
		wc:function(){
			this.show=true,
			this.showBj=false
		},
		changeMoney: function (food,way) {
			if(way>0){
				food.total++;
			}else{
				food.total--;
				if(food.total<1){
					food.total=1;
				}
			}
		},
		remove:function(food,Index,good,index){
			var _this=this
			if(food.checked){
				_this.goods[index].goods.splice(Index,1)
				if(_this.goods[index].goods.length==0){
					_this.goods.splice(index,1)
				}
			}else{
			
			}
		},
		allRemove:function(){
			var _this=this;
			var state=true
			for(var i=0;i<this.goods.length;i++){
				if(_this.goods[i].checked){
					state=true
				}else{
					state=false
					break
				}
			}
			if(state){
				this.goods.splice(0,this.goods.length)
				this.sell=false

			}
			
		}
	}
}	
</script>
<style socped>
	@import '../../assets/css/shopcar/shopcar.css'
</style>          
