<template>
  <div id="app">
  	<keep-alive>
  		<router-view></router-view>
  	</keep-alive>	
    <tab v-if="$route.meta.tab_show"></tab>
    
  </div>
</template>
<script>
import Tab from './components/tab/tab.vue'
export default {
  components:{
  	'tab':Tab
  },
}
</script>

<style scoped>
  @import './assets/css/home/home.css'
</style>
