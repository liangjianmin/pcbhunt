const API_BASE = 'http://localhost:5001'


const API = {
	/**
	 * 获取广告
	 */
	getBanner: API_BASE + '/index/getBanner',
	/**
	 * 计价接口
	 * */
	calPrice:API_BASE+"/api/Quote/CalPrice",
	
	/**
	 * 加入购物车
	 * **/
	addToCart:API_BASE+"/api/Cart/AddPcbCart",
	
	/**
	 * 购物车列表带明细
	 * */
	cartList:API_BASE+"/api/Cart/GetCartList",
	
}




module.exports = {
	API
}
