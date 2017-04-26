<template>
	<div class="classification" v-if="this.class_data!=null">
		<Vsearch></Vsearch>	
		<!-- 分类列表 -->
		<div class="class_list_left" ref="scrollLeft">
			<ul>

				<li v-for="(list,index) in class_data.categoryList" @click="add_data(index),setActive(index)" :class="{active:index==setActiveNum}">
					{{list.name}}
					<span class="border-left"></span>
				</li>
			</ul>
		</div>

		<!-- 商品列表 -->
		<div class="goods_list">
			<p class="title">{{good_data.name}}</p>
			<ul>
				<li @click="getData()">
					<router-link to="/goodList">
						<img :src="good_data.thumb" alt="">
						<p>全部</p>
					</router-link>
				</li>
				<li v-for="list in good_data.children" @click="getData(list.categoryId)">
					<router-link to="/goodList">
						<img :src="list.thumb" alt="">
						<p>{{list.name}}</p>
					</router-link>
				</li>
			</ul>
		</div>

	</div>
</template>
<script>
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui';
import Search from "../search.vue"
import {mapGetters,mapActions} from 'vuex'

export default{
	data(){
		return{
			class_data:null,
			good_data:null,
			setActiveNum:0
		}
	},
	computed:mapGetters([
		"shopnum"
	]),
	methods:{
		initScroll:function(){
	        this.LfteScroll = new BScroll(this.$refs.scrollLeft,{
	          	click: true,
	          	bounce:false,
	        });
    	},
    	add_data(index){
    		this.good_data=this.class_data.categoryList[index];
    	},
    	setActive(index){
    		this.setActiveNum=index;
    	},
    	// al(){
    	// 	this.$store.dispatch('ADD')
    	// }
    	getData(categoryId){
    		this.$store.dispatch("Class_good_http",{
    			categoryId:categoryId
    		})
    	}
	},
	created(){
		Indicator.open("加载中...");
		this.$http.get("v1/Category/all.json").then(function (response) {
			this.class_data=response.data.data;
			this.good_data=response.data.data.categoryList[0];
			this.$nextTick(function(){
				this.initScroll();
				Indicator.close();
			})
		},function(error){
			console.log(error)
		});
	},
	components:{
		'Vsearch':Search
	},
	beforeDestroy(){
		Indicator.close();
	}
}
</script>
<style scoped>
@import '../../assets/css/classification/classification.css'
</style>