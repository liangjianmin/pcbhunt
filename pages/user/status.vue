<template>
	<view class="status-box">
		<view class="text-bar column rowCenter">
			<!-- 成功 -->
			<text class="iconfont iconsucess"></text>
			<!-- 等待 -->
			<!-- <text class="iconfont iconwait"></text> -->
			<!-- 失败 -->
			<!-- <text class="iconfont iconShape"></text> -->
			<text class="t1">支付失败</text>
			<text class="t2">支付金额：{{TotalAmout}}元</text>
			<text class="t3">订单编号：{{MainNo}}</text>
		</view>
		<view class="btn-box">
			<navigator open-type="switchTab" url="/pages/user/index" hover-class="none" class="btn1 row rowCenter verCenter">查看订单</navigator>
			<navigator open-type="switchTab" url="/pages/index/index" hover-class="none" class="btn2 row rowCenter verCenter">继续下单</navigator>
		</view>
		<view class="text column">
			<text class="t1">温馨提示：</text>
			<text class="t2">猎板网不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作。</text>
		</view>
	</view> 
</template>

<script>
import { API } from '@/util/api.js';
export default {
	data() {
		return {
			TotalAmout:'',
			MainNo:''
		}; 
	},
	onLoad(options) {
		this.TotalAmout=options.TotalAmout;
		this.MainNo=options.MainNo;
	},
	methods: {}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/status.scss';
</style>
