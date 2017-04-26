import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

var state={ //数据
	Home_Activity:null,
	Home_Ms:null
}

const actions={ //向mutations发送事件
	Home_Activity_http({commit,state},Home_Activity_id){
		commit("Home_Activity_http",Home_Activity_id)
	},
	Home_Ms_http({commit,state},Home_Ms_id){
		commit("Home_Ms_http",Home_Ms_id)
	}
}

const mutations={ //处理数据的变化
	Home_Activity_http(state,Home_Activity_id){
		Vue.http.get('v1/Activity/item.json').then(function(response){
			state.Home_Activity=response.data.data;
			console.log(response.data.data)
		},function(error){
			console.log(error)
		})
	},
	Home_Ms_http(state,Home_Ms_id){
		Vue.http.get('v1/Category/goodsList.json').then(function(response){
			state.Home_Ms=response.data.data;
			console.log(response.data.data.items[0])
		},function(error){
			console.log(error)
		})
	}
}

const getters={  //获取数据
	Home_Activity(state){
		return state.Home_Activity;
	},
	Home_Ms(state){
		return state.Home_Ms;
	}
}
export default { //导出
	state,
	actions,
	mutations,	
	getters
}