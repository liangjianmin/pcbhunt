<template>
	<view class="cart">
		<view class="prompt row bothSide verCenter" v-if="cartList.length > 0">
			<view>
				<text class="iconfont iconnotice"></text>
				<text class="text">关于如何手机端上传文件教程，点击查看</text>
			</view>
			<text class="operation" @click="toggle">{{ text }}</text>
		</view>
		<view class="list" v-if="cartList.length > 0">
			<checkbox-group @change="checkboxChange">
				<view class="boxs" v-for="(item, index) in cartList" :key="index">
					<view class="title row verCenter">交期：{{ item.LeadTimeEnd }}</view>
					<view class="data-box">
						<uni-swipe-action>
							<uni-swipe-action-item
								:right-options="options"
								@click="bindClick(1, 1)"
								@change="swipeChange($event, index, v.Id)"
								v-for="(v, indexs) in item.CartList"
								:key="indexs"
							>
								<view class="box row bothSide">
									<view class="left-bar row verCenter">
										<checkbox :value="v.Id" :checked="v.checked" style="transform:scale(0.7)" @click="changeSingle(v.Id)" />
										<view class="text">
											<view class="number-detail row">
												<text class="num">{{ v.CartNo }}</text>
												<navigator class="detail" :url="'/pages/cart/detail?id=' + v.Id" hover-class="none">明细</navigator>
											</view>
											<view class="carInfoDesc">{{ v.Cart_DetailPCB.CarInfoDesc }}</view>
											<!-- #ifdef MP-WEIXIN -->
											<view class="btn row rowCenter verCenter">上传文件</view>
											<!-- #endif -->

											<!-- #ifdef H5 -->
											<template v-if="v.PcbFilePath">
												<view class="row verCenter afresh">
													<view class="btn-re row rowCenter verCenter" @click="uploadFilesFun(v.Id)">重新上传</view>
													<view class="re-text">{{ v.PcbFileName }}</view>
												</view>
											</template>
											<template v-else>
												<view class="btn row rowCenter verCenter" @click="uploadFilesFun(v.Id)">上传文件</view>
											</template>
											<!-- #endif -->
										</view>
									</view>
									<view class="right-bar column">
										<text class="t1">更新时间:{{ v.AddAtShow }}</text>
										<view class="price">
											<text class="p1">￥</text>
											<text class="p2">{{ v.ProFee }}</text>
										</view>
									</view>
								</view>
							</uni-swipe-action-item>
						</uni-swipe-action>
					</view>
				</view>
			</checkbox-group>
		</view>
		<template v-else>
			<view class="no-data-box column rowCenter">
				<view class="bg"></view>
				<text class="text">当前购物车为空</text>
				<navigator open-type="switchTab" class="link row rowCenter verCenter" url="/pages/index/index" hover-class="none">去计价</navigator>
			</view>
		</template>
		<view class="total-box row bothSide verCenter" v-if="cartList.length > 0">
			<view class="total row verCenter">
				<view class="row verCenter">
					<checkbox-group @change="changeBook">
						<label>
							<checkbox style="transform:scale(0.7)" :checked="allFlag" />
							<text class="t1">全部</text>
						</label>
					</checkbox-group>
				</view>
				<text class="t2">商品总额</text>
				<text class="t3">¥</text>
				<text class="t4">{{ totalPrice }}</text>
			</view>
			<template v-if="!isDelete">
				<view class="next row rowCenter verCenter" @click="submit()">下一步</view>
			</template>
			<template v-else>
				<view class="deleteCars row rowCenter verCenter" @click="deleteCars()">删除</view>
			</template>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog
				title="操作确认提示"
				content="是否将该计价移除购物车删除将无法找回"
				type="input"
				message="成功消息"
				:duration="2000"
				:before-close="true"
				@close="close"
				@confirm="confirm"
			></uni-popup-dialog>
		</uni-popup>
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
			allFlag: true,
			filterCheckbox: [],
			idList: [],
			cartList: {},
			totalPrice: 0.0,
			size: 0,
			cartIdList: [],
			isDelete: false,
			text: '管理',
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
		this.totalPrice = 0.0;
		this.getData();
	},
	mounted() {},
	methods: {
		getData() {
			this.request(API.GetCartList, 'POST', { IsMerge: true }, true).then(res => {
				if (res.Code === 200) {
					this.cartList = res.Data;
					var tempArr = [];
					for (let i = 0; i < this.cartList.length; i++) {
						for (let j = 0; j < this.cartList[i].CartList.length; j++) {
							tempArr.push({
								id: this.cartList[i].CartList[j].Id,
								proFee: this.cartList[i].CartList[j].ProFee,
								checked: false
							});
							this.idList.push(this.cartList[i].CartList[j].Id);
							this.totalPrice += this.cartList[i].CartList[j].ProFee;
						}
						this.cartList[i].CartList.map(item => this.$set(item, 'checked', true));
					}
					this.filterCheckbox = tempArr;
					this.size = tempArr.length;
				}
			});
		},
		changeBook(e) {
			if (this.allFlag) {
				for (let i = 0; i < this.cartList.length; i++) {
					this.cartList[i].CartList.map(item => this.$set(item, 'checked', false));
				}

				this.allFlag = false;
				this.totalPrice = 0.0;
				this.idList = [];
			} else {
				for (let i = 0; i < this.cartList.length; i++) {
					this.cartList[i].CartList.map(item => this.$set(item, 'checked', true));
					for (let j = 0; j < this.cartList[i].CartList.length; j++) {
						this.idList.push(this.cartList[i].CartList[j].Id);
					}
				}

				this.allFlag = true;
				var price = 0;
				for (var i = 0; i < this.filterCheckbox.length; i++) {
					price += this.filterCheckbox[i].proFee * 1;
				}
				this.totalPrice = price;
			}
			this.$forceUpdate();
		},
		changeSingle(id) {
			for (let i = 0; i < this.cartList.length; i++) {
				for (let j = 0; j < this.cartList[i].CartList.length; j++) {
					if (this.cartList[i].CartList[j].Id == id) {
						this.$set(this.cartList[i].CartList[j], 'checked', false);
					}
				}
			}
		},
		checkboxChange(e) {
			var value = e.detail.value;
			var price = 0;
			this.idList = value;

			if (value.length < this.size) {
				this.allFlag = false;
			} else {
				this.allFlag = true;
			}

			for (var i = 0; i < this.filterCheckbox.length; i++) {
				for (var j = 0; j < value.length; j++) {
					if (this.filterCheckbox[i].id == value[j]) {
						price += this.filterCheckbox[i].proFee * 1;
					}
				}
			}
			this.totalPrice = price;
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
					url: API.UploadCartFile + '?CartId=' + id,
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
						}else{
							uni.showToast({
								title: res.Message,
								icon: 'none',
								duration: 2000
							});
							
						}
					}
				});
			};
			// #endif
		},
		submit() {
			if (this.idList.length <= 0) {
				uni.showToast({
					title: '请选择商品',
					icon: 'none',
					duration: 2000
				});

				return false;
			}

			for (let i = 0; i < this.cartList.length; i++) {
				for (let j = 0; j < this.cartList[i].CartList.length; j++) {
					if (this.idList.includes(this.cartList[i].CartList[j].Id)) {
						if (this.cartList[i].CartList[j].PcbFilePath == null) {
							uni.showToast({
								title: 'pcb文件必须上传',
								icon: 'none',
								duration: 2000
							});

							return false;
						}
					}
				}
			}

			uni.navigateTo({
				url: '/pages/user/order?idList=' + this.idList.join(',')
			});
		},
		bindClick(id, unique) {
			this.$refs.popup.open();
		},
		swipeChange(e, index, id) {
			console.log(index, id);
			this.cartIdList = [];
			this.cartIdList.push(id);
		},
		close(done) {
			this.$refs.popup.close();
		},
		confirm(done, value) {
			this.request(API.DelCart, 'POST', { cartIdList: this.cartIdList }, true).then(res => {
				if (res.Code === 200) {
					this.getData();
				}
			});
			done();
		},
		toggle() {
			this.isDelete = !this.isDelete;
			if (this.isDelete) {
				this.text = '完成';
			} else {
				this.text = '管理';
			}
		},
		deleteCars() {
			var self=this;
			uni.showModal({
			    title: '',
			    content: '确认要删除这'+self.idList.length+'种商品吗？',
			    success: function (res) {
			        if (res.confirm) {
			           self.request(API.DelCart, 'POST', { cartIdList: self.idList }, true).then(res => {
			           	if (res.Code === 200) {
			           		self.getData();
			           	}
			           });
			        } else if (res.cancel) {
			            console.log('用户点击取消');
			        }
			    }
			});
		}
	},
	components: { uniSwipeAction, uniPopup, uniPopupMessage, uniPopupDialog }
};
</script>

<style scoped lang="scss">
@import '../../assets/css/cart/index.scss';
</style>
