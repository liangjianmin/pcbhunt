<template>
	<view class="cart-detail">
		<view class="prompt row verCenter">
			<text class="iconfont iconnotice"></text>
			<text class="text">关于如何手机端上传文件教程，点击查看</text>
		</view>
		<view class="param-box">
			<view class="box row bothSide verCenter">
				<text class="t1">交期时间</text>
				<text class="t2">24H</text>
			</view>
			<view class="box bor row bothSide verCenter">
				<text class="t1">预计发货</text>
				<text class="t2">2020-08-17</text>
			</view>
			<view class="text row bothSide verCenter">
				<text class="t1">尺寸：25.00*25.00cm</text>
				<text class="t2">数量：300PCS</text>
			</view>
			<view class="text row bothSide verCenter">
				<text class="t1">层数：2层</text>
			</view>
		</view>
		<view class="upload row rowCenter verCenter">
			<text class="iconfont iconiconxinxiupload"></text>
			<text class="t1">上传工程文件</text>
		</view>
		<view class="btn-box row bothSide verCenter">
			<view class="text row">
				<text class="price-text">应付总额</text>
				<text class="unit-text">¥</text>
				<text class="num">1199.00</text>
			</view>
			<view class="btn-1 row rowCenter verCenter" @click="joinCar()">加入购物车</view>
		</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';

export default {
	data() {
		return {
			
		};
	},
	onLoad(options) {},
	onShow() {},
	methods: {
		getData() {}
	},
	components: { uniSwipeAction, uniPopup, uniPopupMessage, uniPopupDialog }
};
</script>

<style scoped lang="scss">
@import '../../assets/css/cart/detail.scss';
</style>
