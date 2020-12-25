<template>
	<view class="user-order">
		<view class="user-search row bothSide verCenter">
			<view class="search">
				<input type="text" value="" placeholder="请输入订单编号/文件名" placeholder-style="color:#CCCCCC;" class="inp" v-model="KeyWords" @input="onKeyInput"/>
				<view class="iconfont iconShape" @click="canels()"></view>
			</view>
			<view class="btn" @click="search()">搜索</view>
		</view>
		<view class="tab row avarage verCenter">
			<view @click="tab(index)" :class="{ curr: active == index }" v-for="(item, index) in itemtext" :key="index" class="box  row rowCenter verCenter">
				{{ item }}({{ numArr[index] || 0 }})
			</view>
		</view>
		<view class="list" :style="{ display: isAvisible }">
			<template v-if="confirmOrderLis.length > 0">
				<view class="wrap" v-for="(item, index) in confirmOrderLis" :key="index">
					<view class="box">
						<view class="top row bothSide verCenter">
							<view class="l row verCenter">
								<text class="t1">订单包：{{ item.MainNo }}</text>
								<text class="t2">{{ item.AddAt }}</text>
							</view>
							<view class="r">
								<template v-if="item.PayStatus === 10">
									<navigator hover-class="none" :url="'/pages/user/pay?Id=' + item.MainId + '&MainNo=' + item.MainNo + '&totalAmout=' + item.AllFee"class="t3 row verCenter rowCenter">
										立即付款
									</navigator>
								</template>
								<template v-else-if="item.PayStatus === 20">
									<navigator hover-class="none" :url="'/pages/user/pay?Id=' + item.MainId + '&MainNo=' + item.MainNo + '&totalAmout=' + item.AllFee"class="t3 row verCenter rowCenter">
										支付尾款
									</navigator>
								</template>
								<template v-else>
									<text class="t1">{{ item.StatusShow }}</text>
								</template>
							</view>
						</view>
						<view class="li row bothSide" v-for="v in item.InfoApi">
							<view class="li-l">
								<view class="a">
									<text class="t1">{{ v.OrderNo }}</text>
									<text class="t2">{{ v.PcbFileName }}</text>
								</view>
								<view class="b">{{ v.OrderInfoDesc }}</view>
							</view>
							<view class="li-r column">
								<view class="a">{{ v.StatusShow }}</view>
								<view class="time row verCenter">
									<template v-if="v.LeadTimeHours == 28">
										<image src="../../static/24h.png" mode="aspectFill"></image>
									</template>
									<template v-else-if="v.LeadTimeHours == 48">
										<image src="../../static/48h.png" mode="aspectFill"></image>
									</template>
								</view>
								<view class="b">
									<text class="t1">￥</text>
									<text class="t2">{{ v.OrderFee }}</text>
									<text class="t3">(含税)</text>
								</view>
							</view>
						</view>
						<view class="hide-text row bothSide verCenter" v-if="arr[index]">
							<text class="y1">物流费用</text>
							<view class="y2">
								<text class="t1">￥</text>
								<text class="t2">{{ item.ShipFee }}</text>
								<text class="t3">(含税)</text>
							</view>
						</view>
						<view class="hide-text row bothSide verCenter" v-if="arr[index]">
							<text class="y1">合计</text>
							<view class="y2">
								<text class="t1">￥</text>
								<text class="t2">{{ item.AllFee }}</text>
								<text class="t3">(含税)</text>
							</view>
						</view>
						<view class="bottom row rowCenter verCenter" @click="toggle(index, arr[index])">
							<text class="t1">{{ text[index] }}</text>
							<text class="iconfont iconarrowzhankai"></text>
						</view>
					</view>
				</view>
				<uni-load-more :status="more" v-if="confirmOrderLis.length >= PageSize"></uni-load-more>
			</template>
			<template v-else>
				<view class="no-data-box column rowCenter">
					<view class="bg"></view>
					<text class="text">很抱歉，暂无订单数据</text>
				</view>
			</template>
		</view>
		<view class="list" :style="{ display: isBvisible }">
			<template v-if="placeOrderList.length > 0">
				<view class="wrap" v-for="(item, index) in placeOrderList" :key="index">
					<view class="box">
						<view class="top row bothSide verCenter">
							<view class="l row verCenter">
								<text class="t1">订单包：{{ item.MainNo }}</text>
								<text class="t3">{{ item.AddAt }}</text>
							</view>
						</view>
						<view class="li row bothSide" v-for="v in item.InfoApi">
							<view class="li-l">
								<view class="a">
									<text class="t1">{{ v.OrderNo }}</text>
									<text class="t2">{{ v.PcbFileName }}</text>
								</view>
								<view class="b">{{ v.OrderInfoDesc }}</view>
							</view>
							<view class="li-r column">
								<view class="a">{{ v.StatusShow }}</view>
								<view class="time row verCenter">
									<template v-if="v.LeadTimeHours == 28">
										<image src="../../static/24h.png" mode="aspectFill"></image>
									</template>
									<template v-else-if="v.LeadTimeHours == 48">
										<image src="../../static/48h.png" mode="aspectFill"></image>
									</template>
								</view>
								<template v-if="item.Status == 40">
									<template v-if="item.ShipStatus === 30">
										<navigator hover-class="none" :url="'/pages/user/logistics?OrderInfoId=' + v.InfoId" class="btn row rowCenter verCenter">
											查看物流
										</navigator>
									</template>
								</template>
								<template v-if="item.Status == 30">
									<template v-if="v.ProcessStatus === 10 && v.FactoryNo != null">
										<navigator hover-class="none" :url="'/pages/user/progress?FactoryNo=' + v.FactoryNo" class="btn row rowCenter verCenter">
											生产进度
										</navigator>
									</template>
								</template>
								<view class="b">
									<text class="t1">￥</text>
									<text class="t2">{{ v.OrderFee }}</text>
									<text class="t3">(含税)</text>
								</view>
							</view>
						</view>
						<view class="hide-text row bothSide verCenter" v-if="arr[index]">
							<text class="y1">物流费用</text>
							<view class="y2">
								<text class="t1">￥</text>
								<text class="t2">{{ item.ShipFee }}</text>
								<text class="t3">(含税)</text>
							</view>
						</view>
						<view class="hide-text row bothSide verCenter" v-if="arr[index]">
							<text class="y1">合计</text>
							<view class="y2">
								<text class="t1">￥</text>
								<text class="t2">{{ item.AllFee }}</text>
								<text class="t3">(含税)</text>
							</view>
						</view>
						<view class="bottom row rowCenter verCenter" @click="toggle(index, arr[index])">
							<text class="t1">{{ text[index] }}</text>
							<text class="iconfont iconarrowzhankai"></text>
						</view>
					</view>
				</view>
				<uni-load-more :status="more" v-if="placeOrderList.length >= PageSize"></uni-load-more>
			</template>
			<template v-else>
				<view class="no-data-box column rowCenter">
					<view class="bg"></view>
					<text class="text">很抱歉，暂无订单数据</text>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
export default {
	data() {
		return {
			active: 0,
			itemtext: ['确认中', '已下单'],
			isAvisible: 'block',
			isBvisible: 'none',
			PageSize: 10,
			Page: 1,
			confirmOrderLis: [],
			placeOrderList: [],
			status: false,
			flag: false,
			more: 'more',
			arr: [],
			text: [],
			numArr: [0, 0],
			KeyWords: ''
		};
	},
	onLoad(options) {},
	onReachBottom() {
		if (this.flag) return;
		this.Page++;
		if (this.active == 0) {
			this.getConfirmOrderLis();
		} else if (this.active == 1) {
			this.getPlaceOrderList();
		}
	},
	onShow() {
		this.getConfirmOrderLis();
		this.getPlaceOrderList();
	},
	methods: {
		toUrl(obj) {
			var arr = [];
			for (let i = 0; i < obj.length; i++) {
				arr.push(obj[i].InfoId);
			}
			uni.navigateTo({
				url: '/pages/user/logistics?OrderInfoId=' + arr.join(',')
			});
		},
		search() {
			this.getConfirmOrderLis();
			this.getPlaceOrderList();
		},
		getConfirmOrderLis() {
			this.more = 'loading';
			this.request(API.GetConfirmOrderList, 'POST', { PageSize: 10, Page: this.Page, KeyWords: this.KeyWords }, true).then(res => {
				this.arr = [];
				if (res.Code === 200) {
					this.numArr[0] = res.Pager.TotalCount;
					if (res.Data.length > 0) {
						if (res.Pager.TotalCount >= this.PageSize) {
							this.confirmOrderLis = this.confirmOrderLis.concat(res.Data);
						} else {
							this.confirmOrderLis = res.Data;
						}
						for (let i = 0; i < res.Pager.TotalCount; i++) {
							this.arr.push(false);
							this.text.push('展开全部订单信息');
						}
					} else {
						if (this.KeyWords != '') {
							this.confirmOrderLis = [];
						}
						this.flag = true;
						this.more = 'noMore';
					}
				}
			});
		},
		getPlaceOrderList() {
			this.more = 'loading';
			this.request(API.GetPlaceOrderList, 'POST', { PageSize: 10, Page: this.Page, KeyWords: this.KeyWords }, true).then(res => {
				this.arr = [];
				if (res.Code === 200) {
					this.numArr[1] = res.Pager.TotalCount;
					if (res.Data.length > 0) {
						if (res.Pager.TotalCount >= this.PageSize) {
							this.placeOrderList = this.placeOrderList.concat(res.Data);
						} else {
							this.placeOrderList = res.Data;
						}
						for (let i = 0; i < res.Pager.TotalCount; i++) {
							this.arr.push(false);
							this.text.push('展开全部订单信息');
						}
					} else {
						if (this.KeyWords != '') {
							this.placeOrderList = [];
						}
						this.flag = true;
						this.more = 'noMore';
					}
				}
			});
		},
		canels(){
			this.KeyWords='';
			this.search();
		},
		onKeyInput(event){
			let value=event.target.value;
			if(value == ''){
				this.search();
			}
		},
		toggle(index, status) {
			if (status) {
				this.$set(this.text, index, '展开全部订单信息');
			} else {
				this.$set(this.text, index, '收起信息');
			}
			this.$set(this.arr, index, !this.arr[index]);
		},
		tab(index) {
			this.active = index;
			this.isAvisible = 'none';
			this.isBvisible = 'none';
			this.Page = 1;
			if (index == 0) {
				index == 0 ? (this.isAvisible = 'block') : (this.isAvisible = 'none');
				this.getConfirmOrderLis();
			} else if (index == 1) {
				index == 1 ? (this.isBvisible = 'block') : (this.isBvisible = 'none');
				this.getPlaceOrderList();
			}
		}
	},
	components: { uniLoadMore }
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/index.scss';
</style>
