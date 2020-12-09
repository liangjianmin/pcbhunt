<template>
	<view class="order-box">
		<navigator v-if="recommendAddress.ContactMobile" class="order-address column rowCenter verCenter" url="/pages/user/address" hover-class="none">
			<view class="top row bothSide verCenter">
				<text class="t1">{{ recommendAddress.ContactName }} {{ recommendAddress.ContactMobile }}</text>
				<view class="row verCenter">
					<text class="default row rowCenter verCenter">默认</text>
					<text class="iconfont iconyoujiantou"></text>
				</view>
			</view>
			<view class="text">{{ recommendAddress.ProvinceName }}{{ recommendAddress.CityName }}{{ recommendAddress.AreaName }}{{ recommendAddress.Address }}</view>
		</navigator>
		<navigator v-else class="order-address-empty row verCenter bothSide" url="/pages/user/address" hover-class="none">
			<text class="t1">请选择收货地址</text>
			<text class="iconfont iconyoujiantou"></text>
		</navigator>
		<view class="tab row avarage verCenter">
			<view @click="tab(index)" :class="{ curr: active == index }" v-for="(item, index) in itemtext" :key="index" class="box row rowCenter verCenter">{{ item }}</view>
		</view>
		<view class="list column" v-if="cartList">
			<view class="box" v-for="(item, index) in cartList" :key="index">
				<view class="top row bothSide verCenter">
					<text class="t1">订单包{{ index + 1 }}</text>
					<text class="t2">交期：{{ item.LeadTimeEnd }}</text>
				</view>
				<view class="wrap row bothSide" v-for="(v, indexs) in item.CartList" :key="indexs">
					<view class="column">
						<text class="t1">{{ v.CartNo }}</text>
						<text class="t2 mb">尺寸：{{ v.Cart_DetailPCB.BoardWidth }}*{{ v.Cart_DetailPCB.BoardHeight }}cm</text>
						<text class="t2">层数：{{ v.Cart_DetailPCB.BoardLayers }}层</text>
					</view>
					<view class="column flex-end">
						<text class="t1" v-if="v.PcbFileName">{{ v.PcbFileName }}</text>
						<text class="t2 mb">数量：{{ v.Num }}PCS</text>
						<view>
							<text class="price">￥</text>
							<text class="pricenum">{{ v.ProFee }}</text>
						</view>
					</view>
				</view>
				<view class="coupon row bothSide verCenter" style="border-bottom: 1px solid #e7e7e7;" @click="toCoupon(item.CartList, index)">
					<text class="t1">优惠券明细</text>
					<view class="row verCenter">
						<template v-if="coupon.length > 0">
							<template v-if="coupon[index].CouponId">
								<text class="num">-￥{{ coupon[index].DisAmount }}</text>
								<text class="iconfont iconyoujiantou"></text>
							</template>
							<template v-else>
								<text class="num">{{ item.UseCouponNum }}</text>
								<text class="t2">张可用</text>
								<text class="iconfont iconyoujiantou"></text>
							</template>
						</template>
						<template v-else>
							<text class="num">{{ item.UseCouponNum }}</text>
							<text class="t2">张可用</text>
							<text class="iconfont iconyoujiantou"></text>
						</template>
					</view>
				</view>
				<navigator v-if="IsMerge" class="coupon row bothSide verCenter" hover-class="none" @click="toLogistics(recommendAddress.ProvinceID, recommendAddress.CityId, recommendAddress.AreaId, item.CartDatas.TotalWeight, index)">
					<text class="t1">快递物流</text>
					<view class="row verCenter">
						<text class="t2">{{ item.CartDatas.TotalWeight }}KG</text>
						<template v-if="item.ShipPriceDto">
							<text class="t2">{{ item.ShipPriceDto.ShipName }}</text>
						</template>
						<text class="iconfont iconyoujiantou"></text>
					</view>
				</navigator>
			</view>
		</view>
		<view class="show-data column">
			<view v-if="!IsMerge" class="box row bothSide verCenter" @click="toLogistics(recommendAddress.ProvinceID, recommendAddress.CityId, recommendAddress.AreaId, cartList[0].CartDatas.TotalWeight, 0)">
				<text class="t1">快递物流</text>
				<view class="row verCenter">
					<text class="t2">{{ cartList[0].CartDatas.TotalWeight }}KG</text>
					<template v-if="cartList[0].ShipPriceDto">
						<text class="t2">{{ cartList[0].ShipPriceDto.ShipName }}</text>
					</template>
					<text class="iconfont iconyoujiantou"></text>
				</view>
			</view>
			<navigator class="box row bothSide verCenter" url="/pages/user/contacts" hover-class="none">
				<text class="t1">订单联系人</text>
				<view class="row verCenter">
					<text class="t2">{{ ContactNameTech || '默认为当前收件人' }}</text>
					<text class="iconfont iconyoujiantou"></text>
				</view>
			</navigator>
		</view>
		<view class="show-data column">
			<view class="box row bothSide verCenter">
				<text class="t1">商品合计</text>
				<text class="t2">￥{{ orderFeeDetail.OrderFee || 0.0 }}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">运费</text>
				<view class="row verCenter">
					<text class="t2">￥{{ orderFeeDetail.ShipFee || 0.0 }}</text>
				</view>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">优惠券金额</text>
				<text class="t2">￥{{ orderFeeDetail.OffFee || 0.0 }}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">税费</text>
				<text class="t2">￥{{ orderFeeDetail.TaxFee || 0.0 }}</text>
			</view>
		</view>
		<view class="show-data column">
			<view class="box row bothSide verCenter">
				<text class="t1">发票信息</text>
				<text class="t2">订单完成后开具</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">发货单选项</text>
				<view><switch @change="switchChange" checked class="switch" color="#008AFF" /></view>
			</view>
		</view>
		<view class="textarea-box">
			<textarea @input="inputChange" placeholder="请填写订单包备注" placeholder-style="color:#CCCCCC;" v-model="Note"></textarea>
			<text class="txt">0/300</text>
		</view>
		<view class="btn-box row bothSide verCenter">
			<view class="row verCenter">
				<text class="t1">应付总额</text>
				<text class="t2">¥</text>
				<text class="t3">{{ orderFeeDetail.AllFee || 0.0 }}</text>
			</view>
			<view class="btn row rowCenter verCenter" @click="submit()">提交订单</view>
		</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import Util from '@/util/index.js';

export default {
	data() {
		return {
			recommendAddress: {},
			cartList: [],
			IsMerge: true,
			itemtext: ['分开发货(速度快)', '合并发货(最实惠)'],
			active: 0,
			isAvisible: 'block',
			isBvisible: 'none',
			UsedCouponId: [],
			form: [],
			ContactNameTech: '',
			ContactMobileTech: '',
			ContactQQTech: '',
			IsShipNote: true,
			Note: '',
			ShipId: [],
			idList: '',
			length: 0,
			express: [],
			coupon: [],
			orderFeeDetail: {},
			ProvinceId: '',
			CityId: '',
			AreaId: ''
		};
	},
	onLoad(options) {
		if (options.idList) {
			this.idList = options.idList.split(',');
		}

		// #ifdef H5
		Util.delCookie('ContactNameTech');
		Util.delCookie('ContactMobileTech');
		Util.delCookie('ContactQQTech');
		Util.delCookie('express');
		Util.delCookie('coupon');
		// #endif

		// #ifdef MP-WEIXIN
		uni.removeStorageSync('ContactNameTech');
		uni.removeStorageSync('ContactMobileTech');
		uni.removeStorageSync('ContactQQTech');
		uni.removeStorageSync('express');
		uni.removeStorageSync('coupon');
		// #endif
	},
	onShow() {
		this.getRecommendAddress();

		// #ifdef H5
		this.ContactNameTech = decodeURIComponent(Util.getCookie('ContactNameTech'));
		this.ContactMobileTech = Util.getCookie('ContactMobileTech');
		this.ContactQQTech = Util.getCookie('ContactQQTech');
		try {
			//物流
			if (Util.getCookie('express')) {
				this.express = JSON.parse(decodeURIComponent(Util.getCookie('express')));
			}

			//优惠券
			if (Util.getCookie('coupon')) {
				this.coupon = JSON.parse(decodeURIComponent(Util.getCookie('coupon')));
			}
		} catch (e) {}
		// #endif

		// #ifdef MP-WEIXIN
		this.ContactNameTech = uni.getStorageSync('ContactNameTech') || '';
		this.ContactMobileTech = uni.getStorageSync('ContactMobileTech') || '';
		this.ContactQQTech = uni.getStorageSync('ContactQQTech') || '';
		try {
			//物流
			if (uni.getStorageSync('express')) {
				this.express = JSON.parse(uni.getStorageSync('express'));
			}
			//优惠券
			if (uni.getStorageSync('coupon')) {
				this.coupon = JSON.parse(uni.getStorageSync('coupon'));
			}
		} catch (e) {}
		// #endif
	},
	methods: {
		updateParam() {
			//更新CartIdList参数
			var temp = [];
			for (var i = 0; i < this.cartList.length; i++) {
				temp.push([]);
				this.form.push({
					AddrId: this.AddrId,
					ShipId: this.cartList[i].ShipPriceDto.Id,
					ShipName: this.cartList[i].ShipPriceDto.ShipName,
					CartIdList: [],
					ContactNameTech: this.ContactNameTech,
					ContactMobileTech: this.ContactMobileTech,
					ContactQQTech: this.ContactQQTech,
					IsNeedInvoice: true,
					IsShipNote: this.IsShipNote,
					Note: this.Note,
					CouponId: 0
				});
				for (let j = 0; j < this.cartList[i].CartList.length; j++) {
					temp[i].push(this.cartList[i].CartList[j].Id);
					this.$set(this.form[i], 'CartIdList', temp[i]);
				}
			}

			//更新物流参数
			if (this.express.length > 0) {
				this.$set(this.form[this.express[0].index], 'ShipId', this.express[0].ShipId);
				this.$set(this.form[this.express[0].index], 'ShipName', this.express[0].ShipName);
				this.$set(this.cartList[this.express[0].index], 'ShipPriceDto.ShipName', this.express[0].ShipName);
				this.$set(this.cartList[this.express[0].index], 'ShipPriceDto.ShipId', this.express[0].ShipId);
			}

			//更新优惠券参数
			if (this.coupon.length > 0) {
				for (let i = 0; i < this.form.length; i++) {
					this.$set(this.form[i], 'CouponId', this.coupon[i].CouponId);
				}
			}

			//更新已使用优惠券id
			if (this.coupon.length > 0) {
				this.UsedCouponId = [];
				for (let i = 0; i < this.coupon.length; i++) {
					if (this.coupon[i].CouponId != 0) {
						this.UsedCouponId.push(this.coupon[i].CouponId);
					}
				}
			}

			this.getOrderFeeDetail(); //获取订单费用明细
		},
		getOrderFeeDetail() {
			this.request(API.GetOrderFeeDetail, 'POST', this.form, true).then(res => {
				if (res.Code === 200) {
					this.orderFeeDetail = res.Data;
				}
			});
		},
		getRecommendAddress() {
			this.request(API.GetRecommendAddress, 'GET', {}, true).then(res => {
				if (res.Code === 200) {
					this.recommendAddress = res.Data;

					this.AddrId = res.Data.Id; //提交订单所需要的地址id

					this.ProvinceId = res.Data.ProvinceID;
					this.CityId = res.Data.CityId;
					this.AreaId = res.Data.AreaId;

					this.getData();
				}
			});
		},
		getData() {
			this.request(API.GetCartList, 'POST', { IsMerge: this.IsMerge, idList: this.idList, ProvinceId: this.ProvinceId, CityId: this.CityId, AreaId: this.AreaId }).then(res => {
				this.form = [];
				if (res.Code === 200) {
					this.cartList = res.Data;
					this.length = this.cartList.length;
					this.updateParam();
				}
			});
		},
		inputChange(e) {
			var val = e.target.value;
			this.getData();
		},
		switchChange(e) {
			this.IsShipNote = e.target.value;
			this.getData();
		},
		tab(index) {
			this.active = index;
			this.isAvisible = 'none';
			this.isBvisible = 'none';
			if (index == 0) {
				this.IsMerge = true;
				index == 0 ? (this.isAvisible = 'block') : (this.isAvisible = 'none');
			} else if (index == 1) {
				this.IsMerge = false;
				index == 1 ? (this.isBvisible = 'block') : (this.isBvisible = 'none');
			}

			//恢复选择的物流
			// #ifdef H5
			Util.delCookie('express');
			// #endif

			// #ifdef MP-WEIXIN
			uni.removeStorageSync('express');
			// #endif
			this.express = [];

			this.getData();
		},
		toCoupon(obj, index) {
			var arr = [];
			for (let i = 0; i < obj.length; i++) {
				arr.push(obj[i].Id);
			}
			uni.navigateTo({
				url: '/pages/user/coupon?IdList=' + arr.join(',') + '&UsedCouponId=' + this.UsedCouponId.join(',') + '&length=' + this.length + '&index=' + index
			});
		},
		toLogistics(ProvinceID, CityId, AreaId, Weight, index) {
			uni.navigateTo({
				url: '/pages/user/express?ProvinceID=' + ProvinceID + '&CityId=' + CityId + '&AreaId=' + AreaId + '&Weight=' + Weight + '&length=' + this.length + '&index=' + index
			});
		},
		submit() {
			this.request(API.SubmitV2, 'POST', this.form, true).then(res => {
				if (res.Code === 200) {
					var Id = [],
						MainNo = [];
					for (let i = 0; i < res.Data.length; i++) {
						Id.push(res.Data[i].Id);
						MainNo.push(res.Data[i].MainNo);
					}
					uni.navigateTo({
						url: '/pages/user/pay?Id=' + Id.join(',') + '&totalAmout=' + this.orderFeeDetail.AllFee + '&MainNo=' + MainNo.join(',')
					});
				} else {
					uni.showToast({
						title: res.Message,
						icon: 'none',
						duration: 2000
					});
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/order.scss';
</style>
