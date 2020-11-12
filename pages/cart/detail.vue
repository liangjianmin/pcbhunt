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
			<view class="text row bothSide verCenter"><text class="t1">层数：2层</text></view>
		</view>
		<view class="upload row rowCenter verCenter">
			<text class="iconfont iconiconxinxiupload"></text>
			<text class="t1">上传工程文件</text>
		</view>
		<view class="uploaddone row bothSide verCenter">
			<text class="t1">蓝牙功放板20200916.zip</text>
			<text class="t2">重新上传</text>
		</view>
		<view class="param-content">
			<view class="top row bothSide verCenter">
				<text class="t1">参数详情</text>
				<text class="t2">返回修改</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">下单方式</text>
				<text class="t2">猎板代拼</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">拼版款数</text>
				<text class="t2">2</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">板子厚度</text>
				<text class="t2">1.6mm</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">线宽/线距</text>
				<text class="t2">4/4mil</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">最小孔径</text>
				<text class="t2">0.25mm</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">阻焊颜色</text>
				<text class="t2">绿色</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">字符颜色</text>
				<text class="t2">白色</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">焊盘喷锡</text>
				<text class="t2">有铅喷锡</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">测试选项</text>
				<text class="t2">免费测试</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">金手指选项</text>
				<text class="t2">不需要</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">BGA数量</text>
				<text class="t2">无</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">阻抗控制</text>
				<text class="t2">100Ω</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">生产确认稿</text>
				<text class="t2">不需要</text>
			</view>
		</view>
		<view class="text-box column">
			<text>19点前付款的当天计算交期；19点后付款、19点30分后更新文件</text>
			<text>或20点确认工程问题，交期将增加1天；</text>
			<text>周六19点后和周日付款的按照周一的订单计算交期。</text>
		</view>
		<view class="btn-box row bothSide verCenter">
			<view class="text row">
				<text class="price-text">应付总额</text>
				<text class="unit-text">¥</text>
				<text class="num">1199.00</text>
			</view>
			<navigator class="btn-1 row rowCenter verCenter"  open-type="switchTab" url="/pages/cart/index" hover-class="none">返回购物车</navigator>
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
		return {};
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
