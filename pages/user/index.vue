<template>
	<view class="user-order">
		<view class="user-search row bothSide verCenter">
			<view class="search">
				<input type="text" value="" placeholder="请输入订单编号/文件名" placeholder-style="color:#CCCCCC;" class="inp" />
				<text class="iconfont iconShape"></text>
			</view>
			<view class="btn">搜索</view>
		</view>
		<view class="tab row avarage verCenter">
			<view class="box curr row rowCenter verCenter">确认中(5)</view>
			<view class="box row rowCenter verCenter">已下单(5)</view>
		</view>
		<view class="list">
			<view class="wrap">
				<view class="box">
					<view class="top row bothSide verCenter">
						<view class="l row">
							<text class="t1">订单包：G584826</text>
							<text class="t2">2020/07/20 18:00</text>
						</view>
						<view class="r"><text class="t1">已生产</text></view>
					</view>
					<view class="li">
						<view class="d1 row bothSide verCenter">
							<view class="row verCenter">
								<text class="t1">NO#: #H2W-298921</text>
								<text class="t2">珠海市猎板PCB打样.doc</text>
							</view>
							<view class="time row verCenter"><image src="../../static/24h.png" mode=""></image></view>
						</view>
						<view class="d2">建滔A级，绿油白字，有铅喷锡，50000PCS，1.6，</view>
						<view class="d3 row bothSide verCenter">
							<text class="t1">2层，69.00x72.00cm</text>
							<view>
								<text class="t2">￥</text>
								<text class="t3">3,232.00</text>
								<text class="t4">(含税)</text>
							</view>
						</view>
					</view>
					<view class="li">
						<view class="d1 row bothSide verCenter">
							<view class="row verCenter">
								<text class="t1">NO#: #H2W-298921</text>
								<text class="t2">珠海市猎板PCB打样.doc</text>
							</view>
							<view class="time row verCenter"><image src="../../static/48h.png" mode=""></image></view>
						</view>
						<view class="d2">建滔A级，绿油白字，有铅喷锡，50000PCS，1.6，</view>
						<view class="d3 row bothSide verCenter">
							<text class="t1">2层，69.00x72.00cm</text>
							<view>
								<text class="t2">￥</text>
								<text class="t3">3,232.00</text>
								<text class="t4">(含税)</text>
							</view>
						</view>
					</view>
					<view class="bottom row rowCenter verCenter">
						<text class="t1">全部子订单</text>
						<text class="iconfont iconarrowzhankai"></text>
					</view>
				</view>
			</view>
			<view class="wrap">
				<view class="box">
					<view class="top row bothSide verCenter">
						<view class="l row">
							<text class="t1">订单包：G584826</text>
							<text class="t2">2020/07/20 18:00</text>
						</view>
						<view class="r">
							<navigator class="link row rowCenter verCenter" url="/pages/user/logistics" hover-class="none">查看物流</navigator>
						</view>
					</view>
					<view class="li">
						<view class="d1 row bothSide verCenter">
							<view class="row verCenter">
								<text class="t1">NO#: #H2W-298921</text>
								<text class="t2">珠海市猎板PCB打样.doc</text>
							</view>
							<view class="time row verCenter"><image src="../../static/24h.png" mode=""></image></view>
						</view>
						<view class="d2">建滔A级，绿油白字，有铅喷锡，50000PCS，1.6，</view>
						<view class="d3 row bothSide verCenter">
							<text class="t1">2层，69.00x72.00cm</text>
							<view>
								<text class="t2">￥</text>
								<text class="t3">3,232.00</text>
								<text class="t4">(含税)</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="wrap">
				<view class="box">
					<view class="top row bothSide verCenter">
						<view class="l row">
							<text class="t1">订单包：G584826</text>
							<text class="t2">2020/07/20 18:00</text>
						</view>
						<view class="r"><text class="t2">审单中</text></view>
					</view>
					<view class="li">
						<view class="d1 row bothSide verCenter">
							<view class="row verCenter">
								<text class="t1">NO#: #H2W-298921</text>
								<text class="t2">珠海市猎板PCB打样.doc</text>
							</view>
							<view class="time row verCenter"><image src="../../static/24h.png" mode=""></image></view>
						</view>
						<view class="d2">建滔A级，绿油白字，有铅喷锡，50000PCS，1.6，</view>
						<view class="d3 row bothSide verCenter">
							<text class="t1">2层，69.00x72.00cm</text>
							<view>
								<text class="t2">￥</text>
								<text class="t3">3,232.00</text>
								<text class="t4">(含税)</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="wrap">
				<view class="box">
					<view class="top row bothSide verCenter">
						<view class="l row">
							<text class="t1">订单包：G584826</text>
							<text class="t2">2020/07/20 18:00</text>
						</view>
						<view class="r"><text class="t3">支付尾款</text></view>
					</view>
					<view class="li">
						<view class="d1 row bothSide verCenter">
							<view class="row verCenter">
								<text class="t1">NO#: #H2W-298921</text>
								<text class="t2">珠海市猎板PCB打样.doc</text>
							</view>
							<view class="time row verCenter"><image src="../../static/24h.png" mode=""></image></view>
						</view>
						<view class="d2">建滔A级，绿油白字，有铅喷锡，50000PCS，1.6，</view>
						<view class="d3 row bothSide verCenter">
							<text class="t1">2层，69.00x72.00cm</text>
							<view>
								<text class="t2">￥</text>
								<text class="t3">3,232.00</text>
								<text class="t4">(含税)</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="wrap">
				<view class="box">
					<view class="top row bothSide verCenter">
						<view class="l row">
							<text class="t1">订单包：G584826</text>
							<text class="t2">2020/07/20 18:00</text>
						</view>
						<view class="r">
							<text class="iconfont icondetele"></text>
							<text class="t4">已取消</text>
						</view>
					</view>
					<view class="li">
						<view class="d1 row bothSide verCenter">
							<view class="row verCenter">
								<text class="t1">NO#: #H2W-298921</text>
								<text class="t2">珠海市猎板PCB打样.doc</text>
							</view>
							<view class="time row verCenter"><image src="../../static/24h.png" mode=""></image></view>
						</view>
						<view class="d2">建滔A级，绿油白字，有铅喷锡，50000PCS，1.6，</view>
						<view class="d3 row bothSide verCenter">
							<text class="t1">2层，69.00x72.00cm</text>
							<view>
								<text class="t2">￥</text>
								<text class="t3">3,232.00</text>
								<text class="t4">(含税)</text>
							</view>
						</view>
					</view>
				</view>
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
