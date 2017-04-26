import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

var state = {
	// ba:""
	// gordersn:''
	get_ordersn:''
}

const actions = {
	sendMessage:({commit},key)=>{
		// console.log(key)
		commit('sendMessage',key)
	},
	get_ordersn:({commit},index)=>{
		commit('get_ordersn',index)
		console.log(index)
	}
}

const mutations = {
	sendMessage(state,key){
		Vue.http.post('v1/User/login.json',{
			username:key.user,password:key.password,captcha:'1234'
		}).then(function(response){
				console.log(response)
				state.ba=response.body.status;
				console.log(state.ba);	
			},function(error){
				console.log(error);
			})
	},

	get_ordersn(state,index){
		// console.log(index)
		Vue.http.get('v1/Order/all.json?pin=5000694123').then(
			function(response){
				console.log(index)
					state.get_ordersn=response.body.data.orders[index.index].ordersn
					console.log(state.get_ordersn)
			},function(error){
				console.log(error)
			}
		)
	}
}

const getters = {

	// ba(state){
	// 	return state.ba
	// },
	
	// get_ordersn(state){
	// 	return state.get_ordersn
	// }
}
export default{
	state,
	getters,
	actions,
	mutations
}