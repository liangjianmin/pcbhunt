import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		loginUrl: {
			url: '',
			query: {}
		},
	},
	getters: {
		loginUrl: state => state.loginUrl,
	},
	mutations: {
		SET_LOGIN_URL(state, data) {
			state.loginUrl = data
		}
	},
	actions: {

	}
})

export default store
