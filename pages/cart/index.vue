<template>
	<view class="cart">
		<view class="prompt row verCenter">
			<text class="iconfont iconnotice"></text>
			<text class="text">关于如何手机端上传文件教程，点击查看</text>
		</view>
		<view class="list" v-if="cartList">
			<view class="boxs" v-for="(item, index) in cartList" :key="index">
				<view class="title row verCenter">交期：{{ item.LeadTimeEnd }}</view>
				<view class="data-box">
					<uni-swipe-action>
						<uni-swipe-action-item :right-options="options" @click="bindClick(1, 1)" @change="swipeChange($event, index)" v-for="(v, indexs) in item.CartList" :key="indexs">
							<view class="box row bothSide verCenter">
								<view class="left-bar row verCenter">
									<view class="iconfont icontongyi"></view>
									<view class="text column">
										<view class="tt row">
											<text class="tt-a">{{ v.CartNo }}</text>
											<navigator class="tt-b" url="/pages/cart/detail" hover-class="none">明细</navigator>
										</view>
										<text class="t1">尺寸：{{ v.Cart_DetailPCB.BoardWidth }}*{{ v.Cart_DetailPCB.BoardHeight }}cm</text>
										<text class="t1">数量：{{ v.Num }}PCS</text>
										<text class="t2">层数：{{ v.Cart_DetailPCB.BoardLayers }}层</text>
									</view>
								</view>
								<view class="right-bar column">
									<text class="t1">更新时间:{{ v.AddAt }}</text>
									<!-- #ifdef MP-WEIXIN -->
									<view class="btn row rowCenter verCenter">上传文件</view>
									<!-- #endif -->

									<!-- #ifdef H5 -->
									<template v-if="v.PcbFilePath">
										<view class="btn-re row rowCenter verCenter" @click="uploadFilesFun(v.Id)">重新上传</view>
										<view class="re-text">{{ v.PcbFileName }}</view>
									</template>
									<template v-else>
										<view class="btn row rowCenter verCenter" @click="uploadFilesFun(v.Id)">上传文件</view>
									</template>
									<!-- #endif -->

									<view>
										<text class="t2">￥</text>
										<text class="t3">{{ v.ProFee }}</text>
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
		<uni-popup ref="popup" type="dialog"><uni-popup-dialog title="操作确认提示" content="是否将该计价移除购物车删除将无法找回" type="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog></uni-popup>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
import Util from '@/util/index.js';

export default {
	data() {
		return {
			cartList: {},
			totalPrice: '',
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
	onShow() {
		this.getData();
	},
	mounted() {},
	watch: {
		cartList: function(val) {}
	},
	methods: {
		getData() {
			this.request(API.GetCartList, 'POST', { IsMerge: false },true).then(res => {
				if (res.Code === 200) {
					this.cartList = res.Data;
				}
			});
		},
		uploadFilesFun(id) {
			// #ifdef H5
			var self = this;
			var x = document.createElement('input');
			x.setAttribute('type', 'file');
			x.click();
			x.onchange = function() {
				var file = this.files[0];
				var formdata = new FormData();
				formdata.append('file', file);
				var token = Util.getCookie('token');
				const header = {
					Authorization: token != '' ? 'Bearer ' + token : ''
				};

				$.ajax({
					url: 'http://apitest.pcbhunt.com/api/Cart/UploadCartFile?CartId=' + id,
					type: 'POST',
					data: formdata,
					headers: header,
					contentType: false,
					processData: false,
					success: function(res) {
						if (res.Code === 200) {
							uni.showToast({
								title: '上传成功',
								icon: 'success',
								duration: 2000
							});
							setTimeout(() => {
								self.getData();
							}, 2000);
						}
					}
				});
			};
			// #endif
		},
		submit() {
			uni.navigateTo({
				url: '/pages/user/order'
			});
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
