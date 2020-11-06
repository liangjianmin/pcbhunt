<template>
	<view class="add-address">
		<view class="list column">
			<view class="box row verCenter">
				<text class="t1">姓名</text>
				<view class="wrap"><input type="text" placeholder="输入收货人姓名" placeholder-style="color:#CCCCCC;" /></view>
			</view>
			<view class="box row verCenter">
				<text class="t1">手机号码</text>
				<view class="wrap"><input type="text" placeholder="输入手机号码" placeholder-style="color:#CCCCCC;" /></view>
			</view>
			<view class="box row verCenter">
				<text class="t1">所在区域</text>
				<view class="wrap"><input type="text" placeholder="选中所在省份、城市、区县" placeholder-style="color:#CCCCCC;" /></view>
			</view>
			<view class="box row verCenter">
				<text class="t1">详细地址</text>
				<view class="wrap row bothSide verCenter">
					<input type="text" placeholder="街道、楼牌号等详细地址" placeholder-style="color:#CCCCCC;" />
					<text class="iconfont iconyoujiantou"></text>
				</view>
			</view>
		</view>
		<view class="default">
			<text class="iconfont icontongyi"></text>
			<text class="t1">设为默认收货地址</text>
		</view>
		<view class="btn row rowCenter verCenter">保存</view>
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
@import '../../assets/css/user/addAddress.scss';
</style>
