<template>
	<div class="home_ms" v-if="Home_Ms!=null">
		<share></share>
		<ul>
			<li v-for="(item,index) in Home_Ms.items">
				<img :src="item.thumb" alt="">
				<p>{{item.title}} <span>{{item.goodsId}}</span></p>
			</li>
		</ul>
	</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import Share from '../share.vue'
export default{
	components:{
		'share':Share
	},
	computed:mapGetters([
    	'Home_Ms'
	])
}
</script>
<style scoped>
	@import '../../assets/css/home/home_ms.css'
</style>
