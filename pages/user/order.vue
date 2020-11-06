<template>
	<view class="order-box">
		<navigator class="order-address column rowCenter verCenter" url="/pages/user/address" hover-class="none">
			<view class="top row bothSide verCenter">
				<text class="t1">张双合 152*****3912</text>
				<view class="row verCenter">
					<text class="default row rowCenter verCenter">默认</text>
					<text class="iconfont iconyoujiantou"></text>
				</view>
			</view>
			<view class="text">浙江省杭州市拱墅区祥符街勾庄道杭行路666号万达广场C座1601室</view>
		</navigator>
		<view class="tab row avarage verCenter">
			<view class="box row rowCenter verCenter curr">分开发货(速度快)</view>
			<view class="box row rowCenter verCenter">合并发货(最实惠)</view>
		</view>
		<view class="list column">
			<view class="box">
				<view class="top row bothSide verCenter">
					<text class="t1">订单包1</text>
					<text class="t2">交期：2020-09-16 18:00</text>
				</view>
				<view class="wrap row bothSide">
					<view class="column">
						<text class="t1">20081200016</text>
						<text class="t2 mb">尺寸：25.00*25.00cm</text>
						<text class="t2">层数：2层</text>
					</view>
					<view class="column">
						<text class="t1">珠海市猎板PCB打样.doc</text>
						<text class="t2 mb">数量：300PCS</text>
						<view>
							<text class="price">￥</text>
							<text class="pricenum">3,232.00</text>
						</view>
					</view>
				</view>
				<view class="wrap row bothSide">
					<view class="column">
						<text class="t1">20081200016</text>
						<text class="t2 mb">尺寸：25.00*25.00cm</text>
						<text class="t2">层数：2层</text>
					</view>
					<view class="column">
						<text class="t1">珠海市猎板PCB打样.doc</text>
						<text class="t2 mb">数量：300PCS</text>
						<view>
							<text class="price">￥</text>
							<text class="pricenum">3,232.00</text>
						</view>
					</view>
				</view>
				<navigator class="coupon row bothSide verCenter" url="/pages/user/coupon" hover-class="none">
					<text class="t1">优惠券明细</text>
					<view class="row verCenter">
						<text class="t2">5张可用</text>
						<text class="iconfont iconyoujiantou"></text>
					</view>
				</navigator>
			</view>
			<view class="box">
				<view class="top row bothSide verCenter">
					<text class="t1">订单包1</text>
					<text class="t2">交期：2020-09-16 18:00</text>
				</view>
				<view class="wrap row bothSide">
					<view class="column">
						<text class="t1">20081200016</text>
						<text class="t2 mb">尺寸：25.00*25.00cm</text>
						<text class="t2">层数：2层</text>
					</view>
					<view class="column">
						<text class="t1">珠海市猎板PCB打样.doc</text>
						<text class="t2 mb">数量：300PCS</text>
						<view>
							<text class="price">￥</text>
							<text class="pricenum">3,232.00</text>
						</view>
					</view>
				</view>
				<view class="wrap row bothSide">
					<view class="column">
						<text class="t1">20081200016</text>
						<text class="t2 mb">尺寸：25.00*25.00cm</text>
						<text class="t2">层数：2层</text>
					</view>
					<view class="column">
						<text class="t1">珠海市猎板PCB打样.doc</text>
						<text class="t2 mb">数量：300PCS</text>
						<view>
							<text class="price">￥</text>
							<text class="pricenum">3,232.00</text>
						</view>
					</view>
				</view>
				<navigator class="coupon row bothSide verCenter" url="/pages/user/coupon" hover-class="none">
					<text class="t1">优惠券明细</text>
					<view class="row verCenter">
						<text class="t2">5张可用</text>
						<text class="iconfont iconyoujiantou"></text>
					</view>
				</navigator>
			</view>
		</view>
		<view class="show-data column">
			<view class="box row bothSide verCenter">
				<text class="t1">快递物流</text>
				<view class="row verCenter">
					<text class="t2">1.35KG 顺丰空运</text>
					<text class="iconfont iconyoujiantou"></text>
				</view>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">商品合计</text>
				<text class="t2">￥198.00</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">运费</text>
				<view class="row verCenter">
					<text class="bg row verCenter rowCenter">满300元免基础邮费</text>
					<text class="t2">￥0.00</text>
				</view>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">优惠券金额</text>
				<text class="t2">￥0.00</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">税费</text>
				<text class="t2">￥0.00</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">活动优惠</text>
				<view class="row verCenter">
					<text class="bg row verCenter rowCenter">移动端首单减免8元</text>
					<text class="t2">￥0.00</text>
				</view>
			</view>
		</view>
		<view class="show-data column">
			<view class="box row bothSide verCenter">
				<text class="t1">发票信息</text>
				<text class="t2">订单完成后开具</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">发货单选项</text>
				<view>
					<switch checked  class="switch" color="#008AFF"/>
				</view>
			</view>
		</view>
		<view class="textarea-box">
			<textarea placeholder="请填写订单包备注" placeholder-style="color:#CCCCCC;"></textarea>
			<text class="txt">0/300</text>
		</view>
		<view class="pay">
			<view class="box row bothSide verCenter">
				<view class="row verCenter">
					<text class="iconfont iconiconpayzhifubao1"></text>
					<text class="t1">支付宝支付</text>
				</view>
				<text class="iconfont icon1ElementRadioOn"></text>
			</view>
			<view class="box row bothSide verCenter">
				<view class="row verCenter">
					<text class="iconfont iconiconpayzhifubao"></text>
					<text class="t1">微信支付</text>
				</view>
			</view>
		</view>
		<view class="btn-box row bothSide verCenter">
			<view class="row verCenter">
				<text class="t1">应付总额</text>
				<text class="t2">¥</text>
				<text class="t3">1199.00</text>
			</view>
			<navigator class="btn row rowCenter verCenter" hover-class="none" url="/pages/user/status">提交订单</navigator>
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
@import '../../assets/css/user/order.scss';
</style>
