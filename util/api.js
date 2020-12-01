const API_BASE = 'http://apitest.pcbhunt.com'

//const API_BASE = 'http://localhost:5001'

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
	/**
	 * 短信登录注册
	 * */
	UserMessageLogin: API_BASE + "/api/Member/UserMessageLogin",
	/**
	 * 获取购物车列表，带明细
	 * */
	GetCartList: API_BASE + "/api/Cart/GetCartList",
	/**
	 * 上传附件
	 * */
	UploadCartFile: API_BASE + "/api/Cart/UploadCartFile",
	/**
	 * 获取地址列表
	 * */
	GetAllAddress: API_BASE + "/api/MbInfo/GetAllAddress",
	/**
	 * 获取默认地址
	 * */
	GetRecommendAddress: API_BASE + "/api/MbInfo/GetRecommendAddress",
	/**
	 * 新增地址
	 * */
	AddModel: API_BASE + "/api/MbInfo/AddModel",
	/**
	 * 更新地址
	 * */
	UptModel: API_BASE + "/api/MbInfo/UptModel",
	/**
	 * 删除地址
	 * */
	UptModel: API_BASE + "/api/MbInfo/DelModel",
	/**
	 * 更新当前选择为默认
	 * */
	UptDefault: API_BASE + "/api/MbInfo/UptDefault",
	/**
	 * 获取省份数据
	 * */
	GetProvinceList: API_BASE + "/api/Ship/GetProvinceList",
	/**
	 * 获取城市数据
	 * */
	GetCityList: API_BASE + "/api/Ship/GetCityList",
	/**
	 * 获取地区数据
	 * */
	GetAreaList: API_BASE + "/api/Ship/GetAreaList"
}




module.exports = {
	API
}
