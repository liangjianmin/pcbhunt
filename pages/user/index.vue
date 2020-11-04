<template>
	<view class="user-order">
		<view class="user-search row bothSide verCenter">
			<view class="search">
				<input type="text" value="" placeholder="请输入订单编号/文件名" placeholder-style="color:#CCCCCC;" class="inp"/>
				<text class="iconfont iconShape"></text>
			</view>
			<view class="btn">搜索</view>
		</view>	
		<view class="tab row avarage verCenter">
			<view class="box curr row rowCenter verCenter">确认中(5)</view>
			<view class="box row rowCenter verCenter">已下单(5)</view>
		</view>
		<view class="list">
			<view class="box row">
				<view class="time column rowCenter">
					<text class="t1 row rowCenter verCenter">下单</text>
					<text class="t2 row rowCenter verCenter">07-15</text>
				</view>
				<view class="txt column">
					<text class="t1">订单包：39994949224</text>
					<view>
						<text class="t2">金额：300.00</text>
						<text class="t3">子订单：3</text>
					</view>
					<view class="bar row verCenter">
						<text class="t4">预计交货：2020-10-20 18:00</text>
						<image src="../../static/24h.png" mode="aspectFill" class="im"></image>
					</view>
				</view>
				<view class="status1 row rowCenter verCenter">已支付</view>
			</view>
			<view class="box row">
				<view class="time column rowCenter">
					<text class="t1 row rowCenter verCenter">下单</text>
					<text class="t2 row rowCenter verCenter">07-15</text>
				</view>
				<view class="txt column">
					<text class="t1">订单包：39994949224</text>
					<view>
						<text class="t2">金额：300.00</text>
						<text class="t3">子订单：3</text>
					</view>
					<view class="bar row verCenter">
						<text class="t4">预计交货：2020-10-20 18:00</text>
						<image src="../../static/48h.png" mode="aspectFill" class="im"></image>
					</view>
				</view>
				<view class="status2 row rowCenter verCenter">审单中</view>
			</view>
			<view class="box row">
				<view class="time column rowCenter">
					<text class="t1 row rowCenter verCenter">下单</text>
					<text class="t2 row rowCenter verCenter">07-15</text>
				</view>
				<view class="txt column">
					<text class="t1">订单包：39994949224</text>
					<view>
						<text class="t2">金额：300.00</text>
						<text class="t3">子订单：3</text>
					</view>
					<view class="bar row verCenter">
						<text class="t4">预计交货：2020-10-20 18:00</text>
						<image src="../../static/48h.png" mode="aspectFill" class="im"></image>
					</view>
				</view>
				<view class="status3 row rowCenter verCenter">余额支付</view>
			</view>
			<view class="box row">
				<view class="time column rowCenter">
					<text class="t1 row rowCenter verCenter">下单</text>
					<text class="t2 row rowCenter verCenter">07-15</text>
				</view>
				<view class="txt column">
					<text class="t1">订单包：39994949224</text>
					<view>
						<text class="t2">金额：300.00</text>
						<text class="t3">子订单：3</text>
					</view>
					<view class="bar row verCenter">
						<text class="t4">预计交货：2020-10-20 18:00</text>
						<image src="../../static/48h.png" mode="aspectFill" class="im"></image>
					</view>
				</view>
				<view class="status1 row rowCenter verCenter">审单完成</view>
			</view>
			<view class="box row">
				<view class="time column rowCenter">
					<text class="t1 row rowCenter verCenter">下单</text>
					<text class="t2 row rowCenter verCenter">07-15</text>
				</view>
				<view class="txt column">
					<text class="t1">订单包：39994949224</text>
					<view>
						<text class="t2">金额：300.00</text>
						<text class="t3">子订单：3</text>
					</view>
					<view class="bar row verCenter">
						<text class="t4">预计交货：2020-10-20 18:00</text>
						<image src="../../static/48h.png" mode="aspectFill" class="im"></image>
					</view>
				</view>
				<view class="status1 row rowCenter verCenter">审单完成</view>
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
@import '../../assets/css/user/index.scss';
</style>
