<template>
	<view class="h-index-param">
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">工艺边参数</text>
				<view class="wrap list row">
					<view @click="tab(index, 'LayerEdgeRail')" class="box row rowCenter verCenter" :class="{ curr: LayerEdgeRailIndex == index }" v-for="(item, index) in LayerEdgeRail" :key="index">{{ item }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">单边尺寸</text>
				<view class="wrap list row"><view class="box row rowCenter verCenter curr">5mm</view></view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">分割方式</text>
				<view class="wrap list row">
					<view class="box row rowCenter verCenter">无</view>
					<view class="box row rowCenter verCenter curr">V割</view>
					<view class="box row rowCenter verCenter">落槽</view>
					<view class="box row rowCenter verCenter">V割+落槽</view>
				</view>
			</view>
			<view class="pcb-input h1">
				<view class="input-type1 row verCenter">
					<text class="t1">垂直槽间距</text>
					<input type="text" value="" placeholder="请输入" placeholder-style="color:#CCCCCC;" class="inp"/>
					<text class="t1">水平槽间距</text>
					<input type="text" value="" placeholder="请输入" placeholder-style="color:#CCCCCC;" class="inp"/>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input h1">
				<view class="input-type1 row verCenter">
					<text class="t1">拼板数量</text>
					<input type="text" value="" placeholder="请输入" placeholder-style="color:#CCCCCC;" class="inp"/>
					<text class="t1">单片数量</text>
					<input type="text" value="" placeholder="请输入" placeholder-style="color:#CCCCCC;" class="inp"/>
				</view>
			</view>
			<view class="pcb-input h1">
				<view class="input-type2 row verCenter bothSide">
					<view class="row verCenter">
						<text class="t1">拼板</text>
						<input type="text" value="" placeholder="请输入" placeholder-style="color:#CCCCCC;" class="inp"/>
					</view>
					<text class="t2">（纵列片数）PCS</text>
				</view>
			</view>
			<view class="pcb-input h1">
				<view class="input-type2 row verCenter bothSide">
					<view class="row verCenter">
						<text class="t1">拼板</text>
						<input type="text" value="" placeholder="请输入" placeholder-style="color:#CCCCCC;" class="inp"/>
					</view>
					<text class="t2">（横列片数）PCS</text>
				</view>
			</view>
		</view>
		<view class="pcb-boxs">
			<view class="title-bar row bothSide verCenter">
				<text class="t1">拼板尺寸</text>
				<text class="t2">查看拼板效果图</text>
			</view>
			<view class="text">
				<view class="t1">单个板子尺寸</view>
				<view class="row verCenter">
					<text class="t2">高:</text>
					<text class="t3">5cm</text>
					<text class="t2">宽:</text>
					<text class="t4">4cm</text>
				</view>
			</view>
			<view class="text-box column">
				<text class="t1">拼板后的尺寸</text>
				<view class="t2">
					<text class="t2a">高:</text>
					<text class="t2b">12.00cm x 1 =12cm</text>
				</view>
				<view class="t2">
					<text class="t2a">宽:</text>
					<text class="t2b">12.00cm x 1 + 1 = 13cm</text>
				</view>
			</view>
		</view>
		<view class="bottom-text">
			*如果您对我们的拼板方式有疑问，请联系我们的在线<text>客服人员</text>
		</view>
		<view class="btn-box row bothSide verCenter">
			<navigator url="/pages/index/index" hover-class="none" class="btn-1 row rowCenter verCenter">返回计价</navigator>
			<view class="btn-2 row rowCenter verCenter">保存</view>
		</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';

export default {
	data() {
		return {
			LayerEdgeRail: ['无', '上下', '左右', '四边'],
			LayerEdgeRailIndex: 0
		};
	},
	onLoad(options) {},
	onShow() {},
	methods: {
		tab(index, type) {
			if (type == 'LayerEdgeRail') {
				this.LayerEdgeRailIndex = index;
			} else if (type == 'BoardThickness') {
				this.BoardThicknessIndex = index;
			} else if (type == 'BoardLayers') {
				this.BoardLayersIndex = index;
			}
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/index/param.scss';
</style>
