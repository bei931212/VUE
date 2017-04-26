<template>
	<div class="order">
		<div class='order_header'>
				<span @click="order_show"></span>
				<h1>我的订单</h1>
		</div>
		<div class="order_nav">
			<ul>
				<li v-for="(item,index) in arr" :class="{order_line:index==setorder_line}" @click="setclass(index)">
					<span>{{item}}</span>
				</li>
				<!-- <li class="order_line"><span>全部</span></li>
				<li><span>待付款</span></li>
				<li><span>待发货</span></li>
				<li><span>待收货</span></li> -->
			</ul>
		</div>
		<orderAll></orderAll>
		<payment></payment>
		<popup v-show="popup"></popup>
	</div>
</template>

<script>
	import orderAll from './orderAll.vue';
	import payment from './payment.vue';
	import popup from './popup.vue';
	import {mapGetters,mapActions} from 'vuex';
	export default {
		data(){
			return {
				arr:['全部',"待付款",'待发货','待收货'],
			}
		},
		computed:mapGetters([
			'setorder_line',
			'order',
			'popup'
		]),
		components:{
			'orderAll' : orderAll,
			'payment' : payment,
			'popup' : popup
		},
		// methods:{
		// 	setclass(index){
		// 		this.setorder_line=index;
		// 	},
		// },
		// methods:mapActions([
		// 	'setclass'
		// ])
		methods:{
			setclass(index){
				this.$store.dispatch('setclass',{
					index:index
				})
			},
			order_show(){
				this.$store.dispatch('order_show')
			},
		}
	};
</script>

<style>
	@import '../../../assets/css/my/details/order.css'
</style>