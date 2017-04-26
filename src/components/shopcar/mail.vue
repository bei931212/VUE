<template>
		<div class="head">
			<div class="shopcarBack" @click="goback"><</div>
		</div>
</template>
<script>
export default{
	data(){
		return {

        }
	}, 
	created:function(){
				var _this=this
		this.$http.get('../../../static/shopcar.json').then(function(response){
			var res = response
	        	console.log(res)
		}).catch(function(error){
			console.log(error);
		});
	},
	mounted: function () {

	},
	methods: {
	    goback(){
	    	this.$router.go(-1);
	    }
	}
}
</script>
<style>
.head{position:fixed;left:0;top:0;width:100%;z-index:100;}
		.head .shopcarBack{width:40px;height:40px;position:absolute;left:20px;top:10px;text-align: center;border:1px solid gray;}
</style>
