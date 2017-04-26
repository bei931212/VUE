<template>
	<div class="home" v-if="this.home_data!=null">
		<vue-search></vue-search>
		<!-- 首页轮播图 -->
		<mt-swipe :auto="3000" class="home_mint_swipe">
		  <mt-swipe-item v-for='item in home_data.banner' :key="item.id">
		  	<img :src="item.img" alt="">
		  </mt-swipe-item>		  
		</mt-swipe>
		<!-- 首页分类 -->
		<div class="home_list">
			<ul>				
				<li v-for='item in home_data.category_new'>
					<router-link to="/goodList.vue">
						<img :src="item.icon" alt="">
						<p>{{item.name}}</p>
					</router-link>		
				</li>							
			</ul>
		</div>
		<!-- 商城公告 -->
		<div class="home_news">
			<div class="home_news_pic">
				<img src="../../assets/img/home_news.png" alt="">
			</div>
			<p v-for='item in home_data.news'>{{item.title}}</p>
		</div>
		<!-- 天天特惠 -->
		<div class="home_pre">
			<ul>				
				<li v-for='item in home_data.bangdanList'>
					<router-link to="/home_active">
						<img :src="item.img" alt="" @click="Home_Active_Data(item.itemId)">
					</router-link>	
				</li>							
			</ul>
		</div>
		<!-- 48小时秒杀 -->
		<div class="home_miaosha">
			<div class="home_miaosha_pic">
				<img src="../../assets/img/home_ms.png" alt="">
			</div>
			<ul>
				<li v-for="item in home_data.miaoshaList">
					<router-link to="/home_ms">
						<img :src="item.img" alt="" @click="Home_Ms_Data(item.goodsId)">
					</router-link>					
				</li>
			</ul>
		</div>
		<!-- 拼团 -->
		<div class="home_pintuan">
			<div class="home_pintuan_pic">
				<img src="../../assets/img/home_pintuan_pic.png" alt="">
				<span>查看更多</span>
			</div>
			<div class="home_pintuan_list">
				<ul>
					<li>
					</li>
				</ul> 
			</div>
		</div>
	</div>	
</template>
<script>  
import Search from '../search.vue'
import {mapGetters,mapActions} from 'vuex'
	export default{
		data() {
	      	return {
	        	home_data: null
	    	} 
		},
	    created() {
	        this.$http.get('v1/Home/all.json').then(function (response){
			    this.home_data=response.data.data;
	  		}).catch(function (error) {
	  		    console.log(error);
	  		});
	    },
	    methods:{
	    	Home_Active_Data(itemId){
	    		this.$store.dispatch("Home_Activity_http",{
	    			Home_Activity_id:itemId
	    		})
	    	},
	    	Home_Ms_Data(goodsId){
	    		this.$store.dispatch("Home_Ms_http",{
	    			Home_Ms_id:goodsId
	    			
	    		})
	    	}
	    },
	    components:{
		  	'vue-search':Search
		}
	}
</script>
<style scoped>
	@import '../../assets/css/home/home.css';
</style>
