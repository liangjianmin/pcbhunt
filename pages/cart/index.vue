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
										<view class="tt">
											<text class="tt-a">20081200016</text>
											<text class="tt-b" @click="detail()">明细</text>
										</view>
										<text class="t1">尺寸：25.00*25.00cm</text>
										<text class="t1">数量：300PCS</text>
										<text class="t2">层数：2层</text>
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
										<view class="tt">
											<text class="tt-a">20081200016</text>
											<text class="tt-b">明细</text>
										</view>
										<text class="t1">尺寸：25.00*25.00cm</text>
										<text class="t1">数量：300PCS</text>
										<text class="t2">层数：2层</text>
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
									<view class="default"></view>
									<view class="text column">
										<view class="tt">
											<text class="tt-a">20081200016</text>
											<text class="tt-b">明细</text>
										</view>
										<text class="t1">尺寸：25.00*25.00cm</text>
										<text class="t1">数量：300PCS</text>
										<text class="t2">层数：2层</text>
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
									<view class="default"></view>
									<view class="text column">
										<view class="tt">
											<text class="tt-a">20081200016</text>
											<text class="tt-b">明细</text>
										</view>
										<text class="t1">尺寸：25.00*25.00cm</text>
										<text class="t1">数量：300PCS</text>
										<text class="t2">层数：2层</text>
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
			<view class="next row rowCenter verCenter">下一步</view>
		</view>
		<!-- 明细信息 -->
		<uni-popup ref="detail" type="center">
			<view class="layer-box">
				<view class="layer-title-box row verCenter rowCenter">
					<text class="title">明细信息</text>
					<view class="layer-btn" @click="close()">确定</view>
				</view>
				<view class="car-detail">
					<view class="box row bothSide">
						<text class="t1">下单方式</text>
						<text class="t2">猎板代拼</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">拼版款数</text>
						<text class="t2">2</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">板子厚度</text>
						<text class="t2">1.6mm</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">线宽/线距</text>
						<text class="t2">4/4mil</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">最小孔径</text>
						<text class="t2">0.25mm</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">阻焊颜色</text>
						<text class="t2">绿色</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">字符颜色</text>
						<text class="t2">白色</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">焊盘喷锡</text>
						<text class="t2">有铅喷锡</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">金手指选项</text>
						<text class="t2">不需要</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">测试选项</text>
						<text class="t2">免费测试</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">BGA数量</text>
						<text class="t2">无</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">阻抗控制</text>
						<text class="t2">100Ω</text>
					</view>
					<view class="box row bothSide">
						<text class="t1">生产确认稿</text>
						<text class="t2">不需要</text>
					</view>
				</view>
			</view>
		</uni-popup>
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
		detail(){
			this.$refs.detail.open();
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
