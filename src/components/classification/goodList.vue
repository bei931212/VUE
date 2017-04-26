<template>
	<div class="class_goodList">
		<share></share>
		<div class="sort">
			<div class="sort_box">销量</div>
			<div class="sort_box">时间</div>
			<div class="sort_box">人气</div>
			<div class="sort_box">价格</div>
		</div>
		<!-- <ul>
			<li v-for="item in class_good_list.items">
				<img :src="item.thumb" alt="">
			</li>
		</ul> -->
		<div class="load_more"  v-if="class_good_list!=null">
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore" :autoFill="allLoaded" @top-status-change="handleTopChange">
			  	<ul>
					<li v-for="(item,index) in class_good_list.items" :class="{marginRight:(index+1)%2==1}">
						<router-link :to="{name:'goodDetail',params:{goodId:item.goodsId}}" >
							<div class="img_box">
								<img :src="item.thumb" alt="">
							</div>
							<p class="title">{{item.title}}</p>
							<p class="price">¥{{item.marketprice}}</p>
						</router-link>
					</li>	
				</ul>
				<div slot="top" class="mint-loadmore-top">
			      	<span v-show="topStatus !== 'loading'" :class="{ rotate: topStatus === 'drop' }">↓</span>
			      	<span v-show="topStatus === 'loading'"><mt-spinner type="snake"></mt-spinner></span>
			    </div>
			</mt-loadmore>
		</div>



	</div>
</template>
<script>
import Vue from 'vue'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
import {mapGetters,mapActions} from 'vuex'
import Share from '../share.vue'

export default{
	data(){
		return {
			allLoaded:false,
			topStatus:'',
		}
	},
	computed:mapGetters([
		"class_good_list",
	]),
	components:{
		'share':Share
	},
	methods:{
		loadBottom() {
	 		this.$refs.loadmore.onBottomLoaded();
		},
		loadTop(){
			var that=this;
			setTimeout(function(){
				that.$refs.loadmore.onTopLoaded();
			},2000)
		},
		handleTopChange(status){
			this.topStatus = status;
		}
	},
	activated(){
		this.$store.dispatch("set_list_local");
	},
	
}

</script>
<style scoped>
	@import '../../assets/css/classification/goodList.css'
</style>