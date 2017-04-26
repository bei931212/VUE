<template>
	<div class="Home_Activity">
	<share></share>
		<ul>
			<!-- <li v-for="item in list">
			    <img v-lazy="item">
			</li> -->
			<li>
				<img src="https://img.shunliandongli.com/attachment/images/2016/06/c9X18eIOLt0cB9c1b001JB6Jj0C70B.jpg" alt="">
				<p>茶礼世家野生牡丹王茶饼福建特产名茶白茶饼福鼎大白茶茶叶350g</p>
			</li>
			<li>
				<img src="https://img.shunliandongli.com/attachment/images/2016/06/3lOgGKK4V28ONO1Lg23BMT4gVdbob2.jpg" alt="">
				<p>美臣 美优美 粉红女人女士香水（活力奔放）</p>
			</li>			
		</ul>
	</div>
</template>
<script>
import Vue from 'vue'
import Share from '../share.vue'
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
import {mapGetters,mapActions} from 'vuex'

export default{
	components:{
		'share':Share
	},
	computed:mapGetters([
    	'Home_Activity'
	])
}
</script>
<style>
.Home_Activity{width: 100%;overflow: hidden;background: #f7f7f7;}
.Home_Activity ul{width: 100%;padding:0.15625rem;overflow: scroll;box-sizing: border-box;}
.Home_Activity ul li{width:4.6875rem;overflow: hidden;float: left;padding:0.078125rem;margin-bottom:0.15625rem}
.Home_Activity ul li img{width: 100%;}
.Home_Activity ul li p{width: 100%;overflow: hidden;white-space:nowrap;text-overflow:ellipsis;}
</style>
