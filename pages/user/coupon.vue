<template>
	<view class="coupon-box">
		<view class="tab row avarage verCenter">
			<view class="box row rowCenter verCenter curr">可用优惠券</view>
			<view class="box row rowCenter verCenter">不可用优惠券</view>
		</view>
		<view class="list">
			<view class="box row verCenter">
				<view class="price column rowCenter">
					<view class="row rowCenter wrap">
						<text class="t1">￥</text>
						<text class="t2">10</text>
					</view>
					<text class="t3 row rowCenter">满100元可用</text>
				</view>
				<view class="text row verCenter">
					<view class="column">
						<text class="t1">全品类通用券</text>
						<text class="t2">使用类型：PCB订单</text>
						<text class="t2">有效期至：2020-10-20</text>
						<text class="t3">详细说明</text>
					</view>
					<view class="btn row rowCenter verCenter">立即使用</view>
				</view>
				<text class="status1 row rowCenter verCenter">将到期</text>
			</view>
			<view class="box row verCenter">
				<view class="price column rowCenter">
					<view class="row rowCenter wrap">
						<text class="t1">￥</text>
						<text class="t2">10</text>
					</view>
					<text class="t3 row rowCenter">满100元可用</text>
				</view>
				<view class="text row verCenter">
					<view class="column">
						<text class="t1">全品类通用券</text>
						<text class="t2">使用类型：PCB订单</text>
						<text class="t2">有效期至：2020-10-20</text>
						<text class="t3">详细说明</text>
					</view>
					<view class="btn row rowCenter verCenter">立即使用</view>
				</view>
				<text class="status2 row rowCenter verCenter">新到</text>
			</view>
			<view class="box row verCenter disabled">
				<view class="price column rowCenter">
					<view class="row rowCenter wrap">
						<text class="t1">￥</text>
						<text class="t2">10</text>
					</view>
					<text class="t3 row rowCenter">满100元可用</text>
				</view>
				<view class="text row verCenter">
					<view class="column">
						<text class="t1">全品类通用券</text>
						<text class="t2">使用类型：PCB订单</text>
						<text class="t2">有效期至：2020-10-20</text>
						<text class="t3">详细说明</text>
					</view>
					<view class="btn row rowCenter verCenter">立即使用</view>
				</view>
				<text class="status3 row rowCenter verCenter">已过期</text>
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
@import '../../assets/css/user/coupon.scss';
</style>
