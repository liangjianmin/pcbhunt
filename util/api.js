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
	 * 获取省市区数据
	 * */
	GetProvinceCityList: API_BASE + "/api/Ship/GetProvinceCityList",
	/**
	 * 获取指定物流公司物流价格
	 * */
	GetShipPrice: API_BASE + "/api/Ship/GetShipPrice",
	/**
	 * 获取物流公司价格列表
	 * */
	GetShipPriceList: API_BASE + "/api/Ship/GetShipPriceList",
	/**
	 * 获取中文的省市区地址
	 * */
	GetChineseDistricts: API_BASE + "/api/Ship/GetChineseDistricts",
	/**
	 * 获取优惠券限定的规则条件
	 * */
	GetChineseDistricts: API_BASE + "/api/Coupon/GetVerifyParamsByCoupon",
	/**
	 * 获取优惠券列表
	 * */
	GetCanUseCoupon: API_BASE + "/api/Coupon/GetCanUseCoupon",
	/**
	 * 提交订单
	 * */
	SubmitV2: API_BASE + "/api/Order/SubmitV2"

}




module.exports = {
	API
}
