import API_BASE from '../util/api.js'
/**
 * 请求封装
 */
const request = (url = '', type = 'GET', params = {}, Loading) => {
	const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIzOTE2ODgxNTM5NjcxNjU0NCIsIlVzZXJObyI6IkEyMDA0MiAgICAgIiwiVXNlck5hbWUiOiIxNTg1ODI5NDg4MiIsIm5iZiI6MTYwNTU5NDQ1NCwiZXhwIjoxNjA1NjgwODU0LCJpYXQiOjE2MDU1OTQ0NTR9.-4BTE_Lv7ARZGhPtdwJHTXEO7mzcKqYoRr4DfVjGWak";
	// uni.getStorageSync('token');

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
		"Content-Type": "application/json; charset=utf-8",
		"Authorization": "Bearer "+token,
		"platform": platform
	};
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: url,
			data: params,
			header:header,
			dataType: 'json',
		}).then((response) => {
			uni.hideLoading();
			let [error, res] = response;
			if(res.statusCode==401)
			{
				uni.redirectTo({
					url: '/pages/user/login'
				});
			}
			else{
				if (res.data.Code === 200) {
					resolve(res.data);
				} 
				 else {
					 reject(res.data);
				}
			}
		}).catch(error => {
			uni.hideLoading();
			let [err, res] = error;
				uni.showToast({
					title:'系统错误',
				    duration: 2000,
					icon:'error'
				});
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
