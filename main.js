import Vue from 'vue'
import App from './App'
import { request } from './util/util.js'

/**
 * @param {Object} backpage  登录后返回的页面
 * @param {Object} backtype  打开页面的类型[1 : redirectTo 2 : switchTab]
 * @param {Object} param 携带的参数
 */
Vue.prototype.checkLogin = function(backpage, backtype, params) {
	var TOKEN = uni.getStorageSync('token'),
		url = [];

	for (let i in params) {
		url.push('&' + i + '=' + params[i]);
	}

	if (TOKEN == '') {
		uni.redirectTo({ url: '/pages/user/login?backpage=' + backpage + '&backtype=' + backtype + url.join('') });
		return false;
	}
	return [TOKEN];
}

Vue.config.productionTip = true;
Vue.prototype.request = request;

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
