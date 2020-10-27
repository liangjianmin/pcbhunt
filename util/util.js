import API_BASE from '../util/api.js'


/**
 * 手机号码验证
 */
const myreg = /^[1][1,3,2,4,5,7,8,9][0-9]{9}$/

/**
 * 邮箱校验
 */
const checkemail = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/

/**
 * 身份证验证
 */
const checkId_card=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

/**
 * 请求封装
 */
const request = (url = '', type = 'GET', params = {}, Loading) => {
	const token = uni.getStorageSync('token');

	let platform = undefined; //平台标志

	// #ifdef APP-PLUS
	platform = 'APP';
	// #endif

	// #ifdef MP-WEIXIN
	platform = 'MP-WEIXIN';
	// #endif

	//是否启动加载
	if (Loading) {
		uni.showLoading({
			title: ''
		});
	}

	const header = {
		"Content-Type": "applciation/json",
		"Authorization": token,
		"platform": platform
	};

	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: url,
			data: params,
			header: header,
			dataType: 'json',
		}).then((response) => {
			uni.hideLoading();
			let [error, res] = response;
			if (res.data.code === 10000) {
				resolve(res.data);
			} else if (res.data.code === 10003) {
				//未登录状态
				uni.redirectTo({
					url: '/pages/user/login'
				})
			} else {
				resolve(res.data);
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
	getPlatform,
	myreg,
	checkemail,
	checkId_card
}
