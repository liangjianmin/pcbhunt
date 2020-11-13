<template>
	<view class="cart">
		<view class="prompt row verCenter">
			<text class="iconfont iconnotice"></text>
			<text class="text">关于如何手机端上传文件教程，点击查看</text>
		</view>
		<view class="list">
			<view class="boxs">
				<view class="title row verCenter">交期：2020-09-16 18:00</view>
				<view class="data-box">
					<uni-swipe-action>
						<uni-swipe-action-item :right-options="options" @click="bindClick(1, 1)" @change="swipeChange($event, index)">
							<view class="box row bothSide verCenter">
								<view class="left-bar row verCenter">
									<view class="iconfont icontongyi"></view>
									<view class="text column">
										<view class="tt row">
											<text class="tt-a">20081200016</text>
											<navigator class="tt-b" url="/pages/cart/detail" hover-class="none">明细</navigator>
										</view>
										<text class="t1">尺寸：25.00*25.00cm</text>
										<text class="t1">数量：300PCS</text>
										<text class="t2">层数：2层</text>
										<view>
											<text class="t3">预估到手价：</text>
											<text class="t4">￥</text>
											<text class="t5">356.22</text>
										</view>
									</view>
								</view>
								<view class="right-bar column">
									<text class="t1">更新时间:08-17 17:47</text>
									<view class="btn row rowCenter verCenter">上传文件</view>
									<view>
										<text class="t2">￥</text>
										<text class="t3">3,232.00</text>
									</view>
								</view>
							</view>
						</uni-swipe-action-item>
						<uni-swipe-action-item :right-options="options" @click="bindClick(item.id, item.unique)" @change="swipeChange($event, index)">
							<view class="box row bothSide verCenter">
								<view class="left-bar row verCenter">
									<view class="iconfont icontongyi"></view>
									<view class="text column">
										<view class="tt row">
											<text class="tt-a">20081200016</text>
											<navigator class="tt-b" url="/pages/cart/detail" hover-class="none">明细</navigator>
										</view>
										<text class="t1">尺寸：25.00*25.00cm</text>
										<text class="t1">数量：300PCS</text>
										<text class="t2">层数：2层</text>
										<view>
											<text class="t3">预估到手价：</text>
											<text class="t4">￥</text>
											<text class="t5">356.22</text>
										</view>
									</view>
								</view>
								<view class="right-bar column">
									<text class="t1">更新时间:08-17 17:47</text>
									<view class="btn-re row rowCenter verCenter">重新上传</view>
									<view class="re-text">珠海市猎板PCB打样.doc</view>
									<view>
										<text class="t2">￥</text>
										<text class="t3">3,232.00</text>
									</view>
								</view>
							</view>
						</uni-swipe-action-item>
					</uni-swipe-action>
				</view>
			</view>
			<view class="boxs">
				<view class="title row verCenter">交期：2020-09-16 18:00</view>
				<view class="data-box">
					<uni-swipe-action>
						<uni-swipe-action-item :right-options="options" @click="bindClick(item.id, item.unique)" @change="swipeChange($event, index)">
							<view class="box row bothSide verCenter">
								<view class="left-bar row verCenter">
									<view class="iconfont icontongyi"></view>
									<view class="text column">
										<view class="tt row">
											<text class="tt-a">20081200016</text>
											<navigator class="tt-b" url="/pages/cart/detail" hover-class="none">明细</navigator>
										</view>
										<text class="t1">尺寸：25.00*25.00cm</text>
										<text class="t1">数量：300PCS</text>
										<text class="t2">层数：2层</text>
										<view>
											<text class="t3">预估到手价：</text>
											<text class="t4">￥</text>
											<text class="t5">356.22</text>
										</view>
									</view>
								</view>
								<view class="right-bar column">
									<text class="t1">更新时间:08-17 17:47</text>
									<view class="btn row rowCenter verCenter">上传文件</view>
									<view>
										<text class="t2">￥</text>
										<text class="t3">3,232.00</text>
									</view>
								</view>
							</view>
						</uni-swipe-action-item>
						<uni-swipe-action-item :right-options="options" @click="bindClick(item.id, item.unique)" @change="swipeChange($event, index)">
							<view class="box row bothSide verCenter disabled">
								<view class="left-bar row verCenter">
									<view class="iconfont icontongyi"></view>
									<view class="text column">
										<view class="tt row">
											<text class="tt-a">20081200016</text>
											<navigator class="tt-b" url="/pages/cart/detail" hover-class="none">明细</navigator>
										</view>
										<text class="t1 dis">尺寸：25.00*25.00cm</text>
										<text class="t1 dis">数量：300PCS</text>
										<text class="t2 dis">层数：2层</text>
									</view>
								</view>
								<view class="right-bar column">
									<view class="time">
										<text class="t1">更新时间:08-17 17:47</text>
										<text class="txt">失效</text>
									</view>
									<view class="disabled-text">
										<view class="d-1">珠海市猎板PCB打样.doc</view>
										<view>
											<text class="d-2">￥</text>
											<text class="d-3">3,232.00</text>
										</view>
									</view>
								</view>
							</view>
						</uni-swipe-action-item>
					</uni-swipe-action>
				</view>
			</view>
		</view>
		<view class="total-box row bothSide verCenter">
			<view class="total row verCenter">
				<text class="iconfont icontongyi"></text>
				<text class="t1">全部</text>
				<text class="t2">商品总额</text>
				<text class="t3">¥</text>
				<text class="t4">1199.00</text>
			</view>
			<view class="next row rowCenter verCenter" @click="submit">下一步</view>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog title="操作确认提示"  content="是否将该计价移除购物车删除将无法找回" type="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
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
			options: [
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			]
		};
	},
	onLoad(options) {},
	onShow() {},
	methods: {
		getData() {},
		submit(){
			uni.navigateTo({
				url:'/pages/user/order'
			})
		},
		bindClick(id, unique) {
			this.$refs.popup.open();
		},
		swipeChange(e, index) {
			console.log('e' + e, 'index' + index);
		},
		close(done) {
			this.$refs.detail.close();
		},
		confirm(done, value) {
			console.log(value);
			done();
		}
	},
	components: { uniSwipeAction, uniPopup, uniPopupMessage, uniPopupDialog }
};
</script>

<style scoped lang="scss">
@import '../../assets/css/cart/index.scss';
</style>
