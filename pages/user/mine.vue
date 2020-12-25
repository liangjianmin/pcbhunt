<template>
	<view class="mine">
		<view class="head row verCenter">
			<image :src="memberBase.HeadPhoto || '/static/head.png'" class="im"></image>
			<view class="text column">
				<text class="t1">{{ memberBase.UserNo }}</text>
				<text class="t2">{{ memberBase.Mobile }}</text>
			</view>
		</view>
		<view class="list">
			<view class="box row bothSide  verCenter" @click="tel(memberBase.SellerMobile)">
				<text class="t1">{{ memberBase.SellerName }}</text>
				<view class="row verCenter">
					<text class="t2">{{ memberBase.SellerMobile }}</text>
					<text class="iconfont iconyoujiantou"></text>
				</view>
			</view>
			<view class="box row bothSide  verCenter" @click="tel(memberBase.FollowerMobile)">
				<text class="t1">{{ memberBase.FollowerName }}</text>
				<view class="row verCenter">
					<text class="t2">{{ memberBase.FollowerMobile }}</text>
					<text class="iconfont iconyoujiantou"></text>
				</view>
			</view>
			<view class="box row bothSide  verCenter">
				<text class="t1">余额</text>
				<view class="row verCenter">
					<text class="t2">¥ {{ memberBase.Balance || 0.0 }}</text>
				</view>
			</view>
		</view>
		<view class="btn row rowCenter verCenter" @click="signout()">退出登录</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import Util from '@/util/index.js';

export default {
	data() {
		return {
			memberBase: {}
		};
	},
	onLoad(options) {},
	onShow() {
		this.getData();
	},
	methods: {
		getData() {
			this.request(API.GetMemberBase, 'GET', {}, true).then(res => {
				if (res.Code === 200) {
					this.memberBase = res.Data;
				}
			});
		},
		tel(val) {
			uni.makePhoneCall({
				phoneNumber: val
			});
		},
		signout() {
			var self = this;
			uni.showModal({
				title: '',
				content: '确定退出登录？',
				success: function(res) {
					if (res.confirm) {
						self.request(API.UserSignOut, 'POST', {}, true).then(res => {
							if (res.Code === 200) {
								// #ifdef H5
								Util.delCookie('token');
								// #endif

								// #ifdef MP-WEIXIN
								uni.removeStorageSync('token');
								// #endif

								setTimeout(() => {
									uni.switchTab({
										url: '/pages/index/index'
									});
								}, 0);
							}
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/mine.scss';
</style>
