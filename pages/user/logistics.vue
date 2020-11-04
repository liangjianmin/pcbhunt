<template>
	<view class="logistics">
		<view class="top row rowCenter">
			<view class="box row bothSide verCenter">
				<view class="column">
					<text class="t1">快递公司：顺丰快递</text>
					<text class="t2">快递单号：5354158535132511</text>
				</view>
				<view class="pic">
					<image src="../../static/sf.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>	
		<view class="kefu row rowCenter verCenter">
			<text class="iconfont iconiconoderkefu"></text>
			<text class="t1">联系跟单客服</text>
		</view>
		<view class="list">
			<view class="box column curr">
				<text class="iconfont icontongyi"></text>
				<text class="t1">订单已签收，期待再次为您服务</text>
				<text class="t2">2020-10-09 14:25:20</text>
			</view>
			<view class="box column">
				<text class="circle"></text>
				<text class="t1">到达目的地网点广东深圳公司，快件将进行派送</text>
				<text class="t2">2020-10-09 14:25:20</text>
			</view>
			<view class="box column">
				<text class="circle"></text>
				<text class="t1">在广东深圳公司进行发出扫描</text>
				<text class="t2">2020-10-09 14:25:20</text>
			</view>
			<view class="box column">
				<text class="circle"></text>
				<text class="t1">在分拨中心广东深圳公司进行卸车扫描</text> 
				<text class="t2">2020-10-09 14:25:20</text>
			</view>
		</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
export default {
	data() {
		return {};
	},
	onLoad(options) {},
	methods: {}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/logistics.scss';
</style>
