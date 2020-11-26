import API_BASE from '../util/api.js'
import Util from '../util/index.js'
/**
 * 请求封装
 */
const request = (url = '', type = 'GET', params = {}, Loading) => {
	
	// #ifdef MP-WEIXIN
	var token = uni.getStorageSync('token');
	// #endif
	
	
	// #ifdef H5
	var token = Util.getCookie('token');
	// #endif
	
	if(token==null)
		token="";
	// #ifdef APP-PLUS
	var platform = 'APP';
	// #endif

	// #ifdef MP-WEIXIN
	var platform = 'MP-WEIXIN';
	// #endif

	//是否启动加载
	if (Loading) {
		uni.showLoading({
			title: ''
		});
	}

	const header = {
		"Content-Type": "application/json; charset=utf-8",
		"Authorization": token!=""? "Bearer " + token:""
	};
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: url,
			data: params,
			header: header,
			dataType: 'json',
		}).then((response) => {

			if (Loading) {
				uni.hideLoading();
			}

			let [error, res] = response;
			if (res.statusCode == 401) {
				uni.redirectTo({
					url: '/pages/user/login'
				});
			} else {
				if (res.data.Code === 200) {
					resolve(res.data);
				} else {
					resolve(res.data);
				}
			}
		}).catch(error => {
			uni.hideLoading();
			let [err, res] = error;
			reject(err);
		})
	});
}

const getPlatform = () => {

	let platform = undefined;

	// #ifdef APP-PLUS
	platform = 'APP';
	// #endif

	// #ifdef MP-WEIXIN
	platform = 'MP-WEIXIN';
	// #endif

	return platform;

}


module.exports = {
	request,
	getPlatform
}
