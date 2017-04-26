import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)


var state={ //数据
	class_good_list:null,
}

const actions={ //向mutations发送事件
	Class_good_http({commit,state},categoryId){
		commit('Class_good_http',categoryId)
	},
	set_list_local({commit,state}){
		commit("set_list_local")
	}
}


const mutations={ //处理事件
	Class_good_http(state,categoryId){
		Vue.http.get('v1/Category/goodsList.json',{
			params: {
   				categoryId:categoryId.categoryId,
      		}
		}).then(function(response){
			state.class_good_list=response.data.data;
			localStorage.setItem('class_good_list', JSON.stringify(response.data.data));
		},function(error){
			console.log(error)
		})
	},
	set_list_local(state){
		if(localStorage.getItem("class_good_list")){ 
			state.class_good_list=JSON.parse(localStorage.getItem("class_good_list"));
		}
	}
}

const getters={  //获取数据
	class_good_list(state){
		return state.class_good_list;
	},
}


export default { //导出
	actions,
	mutations,
	state,
	getters
}