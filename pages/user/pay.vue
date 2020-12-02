<template>
	<view class="pay-box">
		<view class="pay">
			<view class="box row bothSide verCenter" @click="tab(index)" :class="{ curr: active == index }" v-for="(item, index) in itemtext" :key="index">
				<view class="row verCenter">
					<template v-if="index == 0">
						<text class="iconfont iconiconpayzhifubao1"></text>
					</template>
					<template v-else-if="index == 1">
						<text class="iconfont iconiconpayzhifubao"></text>
					</template>
					<text class="t1">{{ item }}</text>
				</view>
				<text class="iconfont icon1ElementRadioOn"></text>
			</view>
		</view>
		<view class="tip row verCenter">
			<text class="iconfont iconiconpayzhifubao2"></text>
			<text class="t1">对公转账</text>
			<text class="t2">（移动端暂不支持，请至PC端操作）</text>
		</view>
		<view class="btn-box row bothSide verCenter">
			<view class="row verCenter">
				<text class="t1">应付总额</text>
				<text class="t2">¥</text>
				<text class="t3">{{ totalPrice }}</text>
			</view>
			<view class="btn row rowCenter verCenter" @click="submit()">提交订单</view>
		</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
export default {
	data() {
		return {
			totalPrice: '0.00',
			itemtext: ['支付宝支付', '微信支付'],
			active: 0
		};
	},
	onLoad(options) {},
	methods: {
		tab(index) {
			this.active = index;
		},
		submit() {}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/pay.scss';
</style>
