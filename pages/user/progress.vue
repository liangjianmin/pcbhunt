<template>
	<view class="progress">
		<view class="top row verCenter bothSide">
			<text class="t1">当前工序：{{OrderStepList.CurProcessStep}}</text>
			<text class="t1">预计交期：{{OrderStepList.CurProcessTime}}</text>
		</view>
		<view class="content">
			<view class="box" :class="{ curr: index == 0 }" v-for="(item, index) in OrderStepList.OrderProductStepList" :key="index">
				<template v-if="index == 0">
					<text class="iconfont icontongyi"></text>
				</template>
				<template v-else>
					<text class="circle"></text>
				</template>
				<view class="txt column">
					<text class="t1">{{ item.StepName }}</text>
					<text class="t2">{{ item.StepTime }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
export default {
	data() {
		return {
			FactoryNo: '',
			OrderStepList: []
		};
	},
	onLoad(options) {
		this.FactoryNo = options.FactoryNo;
	},
	onShow() {
		this.getData();
	},
	methods: {
		getData() {
			this.request(API.GetOrderStepList, 'POST', { FactoryNo: this.FactoryNo }, true).then(res => {
				if (res.Code === 200) {
					this.OrderStepList = res.Data;
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
@import '../../assets/css/user/progress.scss';
</style>
