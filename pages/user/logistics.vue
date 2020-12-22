<template>
	<view class="logistics">
		<view class="tab row avarage verCenter">
			<view class="box row verCenter" @click="tab(index)" :class="{ curr: active == index }" v-for="(item, index) in OrderInfoShunFeng" :key="index">
				包裹{{ textArr[index] }}
			</view>
		</view>
		<view class="top column  verCenter" v-if="OrderInfoShunFeng[active]">
			<text class="t1">快递公司：{{ OrderInfoShunFeng[active].ShipName }}</text>
			<text class="t1">发货数量：{{ OrderInfoShunFeng[active].SendPcs }}</text>
			<text class="t1">快递单号：{{ OrderInfoShunFeng[active].ShipNo }}</text>
			<text class="t2">发货编号：{{ OrderInfoShunFeng[active].SendNo }}</text>
		</view>
		<view class="kefu row rowCenter verCenter">
			<text class="iconfont iconiconoderkefu"></text>
			<text class="t1">联系跟单客服</text>
		</view>
		<view class="list">
			<view class="box column" :class="{ curr: index == 0 }" v-for="(item, index) in OrderInfoShunFeng[active].RoutInfoDtoApiList">
				<template v-if="index == 0">
					<text class="iconfont icontongyi"></text>
				</template>
				<template v-else>
					<text class="circle"></text>
				</template>
				<text class="t1">{{ item.Remark }}</text>
				<text class="t2">{{ item.Accept_Time }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import Util from '@/util/index.js';
export default {
	data() {
		return {
			active: 0,
			orderInfoIds: [],
			OrderInfoShunFeng: [],
			textArr: []
		};
	},
	onLoad(options) {
		let arr = options.OrderInfoId.split(',');
		this.orderInfoIds = arr;
	},
	onShow() {
		this.getData();
	},
	methods: {
		tab(index) {
			this.active = index;
		},
		getData() {
			this.request(API.GetOrderInfoShunFeng, 'POST', { orderInfoIds: this.orderInfoIds }, true).then(res => {
				if (res.Code === 200) {
					this.OrderInfoShunFeng = res.Data;
					for (let i = 0; i < res.Data.length; i++) {
						this.textArr.push(Util.toChinesNum(i + 1));
					}
				} else {
					uni.showToast({
						title: res.Message,
						icon: 'success',
						duration: 2000
					});
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/logistics.scss';
</style>
