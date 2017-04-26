import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

var state={ //数据
	// num:10,
	shopnum:100
}

const actions={ //向mutations发送事件
	// ADD:({commit,state})=>{
	// 	commit('ADD')
	// }
}


const mutations={ //处理事件
	// ADD(state){
	// 	state.num = 20;
	// }
}

const getters={  //获取数据
	// num(state){
	// 	return state.num;
	// }
	shopnum(state){
		return state.shopnum
	}
}


export default { //导出
	actions,
	mutations,
	state,
	getters
}