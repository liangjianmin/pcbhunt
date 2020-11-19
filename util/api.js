const API_BASE = 'http://apitest.pcbhunt.com'


const API = {
	/**
	 * 计价接口
	 * */
	calPrice: API_BASE + "/api/Quote/CalPrice",
	/**
	 * 加入购物车
	 * **/
	addToCart: API_BASE + "/api/Cart/AddPcbCart",
	/**
	 * 购物车列表带明细
	 * */
	cartList: API_BASE + "/api/Cart/GetCartList",
	/**
	 * 短信登录发送验证码(滑块验证)
	 * */
	MessageSendValidCodeAfs: API_BASE + "/api/Member/MessageSendValidCodeAfs",

}




module.exports = {
	API
}
