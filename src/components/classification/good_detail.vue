<template>
	<div class="good_detail">
		<!-- 顶部选项 -->
		<div class="detail_tab">
			<img @click="back" class="back" src="../../assets/img/return.png" height="34" width="20" alt="">
			<div class="tab_three">
				<span @click="set_span_active(index)" :class="{span_active:active=='tab-container'+index}" v-for="(item,index) in span_content">{{item}}</span>
			</div>
			<div class="more">
				<i class="icon-更多"></i>
			</div>
		</div>

		<mt-tab-container v-model="active" swipeable v-if="this.good_detail_data!=null">
			<!-- 商品 -->
		  	<mt-tab-container-item id="tab-container0">
			    <div>
			    	<div @touchmove.stop="">
						<mt-swipe :auto="4000">
							<mt-swipe-item :key="item.id" v-for="item in good_detail_data.item.thumb_alisa">
								<img :src="item" alt="">
							</mt-swipe-item>
						</mt-swipe>
					</div>
					<div class="good_main">
						<p class="good_title">{{good_detail_data.item.title}}</p>
						<p class="good_price">¥{{good_detail_data.item.marketprice}}</p>
						<div class="coupon">
							<span>领卷</span>
							<img src="../../assets/img/juan.png" alt="">
							<img src="../../assets/img/juan.png" alt="">
							<i class="i_more"></i>
						</div>
						<div class="specification" @click="change_popupVisible()">
							<span>未选</span>
							<span>强选择商品状态</span>
							<i class="i_more"></i>
						</div>
						<div class="service">
							<span>服务</span>
							<img src="../../assets/img/7.png" alt="">
							<span>支持7天无理由退货</span>
						</div>	
					</div>
			    </div>
		  	</mt-tab-container-item>


		  	<!-- 详情 -->
		  	<mt-tab-container-item id="tab-container1">
		    	<div>详情</div>
		  	</mt-tab-container-item>


		  	<!-- 评价 -->
		  	<mt-tab-container-item id="tab-container2">
		    	<div class="evaluation">
		    		暂无评价功能
		    	</div>
		  	</mt-tab-container-item>
		</mt-tab-container>

		<mt-popup v-model="popupVisible"
			position="bottom"
		>
			<div style="width:100vw;height:1.33rem">1234564564654654</div>
		</mt-popup>

	</div>
</template>
<script>

import Vue from "vue"
import { TabContainer, TabContainerItem , Swipe, SwipeItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default{
	data(){
		return {
			active:'tab-container0',
			span_content:['商品','详情','评价'],
			good_detail_data:null,
			popupVisible:false
		}
	},
	methods:{
		set_span_active(index){
			this.active='tab-container'+index;
		},
		back(){
			this.$router.go(-1);
		},
		change_popupVisible(){
			this.popupVisible=!this.popupVisible;
		}
	},
	activated(){		
		this.$http.get('v1/Goods/item.json',{
			params:{
				goodsId:this.$route.params.goodId
			}
		}).then(function(response){
			this.good_detail_data=response.data.data;
		},function(error){
			console.log(error)
		})
	}
}
</script>
<style scoped>
	@import '../../assets/css/classification/good_detail.css'
</style>