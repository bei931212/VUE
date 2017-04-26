import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)

import classification from "./Modules/classification.js"
import home from "./Modules/home.js"
import my from "./Modules/my.js"
import shopcar from "./Modules/shopcar.js"

export default new Vuex.Store({
	modules:{
		classification,
		home,
		my,
		shopcar,
	}
})