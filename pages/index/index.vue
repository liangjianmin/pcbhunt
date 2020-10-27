<template>
	<view class="h-index">
		<view class="prompt row verCenter">
			<text class="iconfont iconnotice"></text>
			<text class="text">限时折扣:满500元95折, 满1000元93折,满1500元9折</text>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">板子尺寸</text>
				<view class="wrap input-type1 row bothSide verCenter">
					<view class="row verCenter">
						<input type="text" placeholder="请输入" class="w1" placeholder-style="color:#cccccc;" />
						<text class="txt">X</text>
						<input type="text" placeholder="请输入" class="w1" placeholder-style="color:#cccccc;" />
					</view>
					<text class="unit">cm</text>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">板子数量</text>
				<view class="wrap input-type1 row bothSide verCenter">
					<view class="row verCenter"><input type="text" placeholder="请选择" placeholder-style="color:#cccccc;" /></view>
					<view class="unit row rowCenter verCenter">
						<text class="t1">PCS</text>
						<text class="iconfont iconyoujiantou"></text>
					</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">板子层数</text>
				<view class="wrap list row">
					<view class="box row rowCenter verCenter">1</view>
					<view class="box row rowCenter verCenter">2</view>
					<view class="box row rowCenter verCenter curr">4</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">板子厚度</text>
				<view class="wrap list row mb">
					<view class="box row rowCenter verCenter">0.8</view>
					<view class="box row rowCenter verCenter">1.0</view>
					<view class="box row rowCenter verCenter curr">1.2</view>
					<view class="box row rowCenter verCenter">1.6</view>
					<view class="box row rowCenter verCenter">2.0</view>
					<view class="box row rowCenter verCenter">2.4</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">拼版款数</text>
				<view class="wrap input-type1 row bothSide verCenter">
					<view class="row verCenter"><input type="text" placeholder="请输入" placeholder-style="color:#cccccc;" /></view>
				</view>
			</view>
			<view class="pcb-input row  h2">
				<text class="label">拼版款数</text>
				<view class="wrap list row mb2">
					<view class="box row rowCenter verCenter">单片资料单片出货</view>
					<view class="box row rowCenter verCenter curr">按客户资料拼板出货</view>
					<view class="box row rowCenter verCenter">猎板代拼</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">拼版方式</text>
				<view class="wrap input-type1 row bothSide verCenter">
					<view class="row verCenter">
						<input type="text" placeholder="请输入" class="w1" placeholder-style="color:#cccccc;" />
						<text class="txt">X</text>
						<input type="text" placeholder="请输入" class="w1" placeholder-style="color:#cccccc;" />
					</view>
					<text class="unit">PCS</text>
				</view>
			</view>
			<text class="tip row verCenter">* 工厂按 5 SET = 5单片(pcs) 制作</text>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">分割方式</text>
				<view class="wrap list row verCenter nowrap">
					<view class="box row rowCenter verCenter">无</view>
					<view class="box row rowCenter verCenter curr">V割</view>
					<view class="box row rowCenter verCenter">锣槽</view>
					<view class="box row rowCenter verCenter">V割+锣槽</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">板材类型</text>
				<view class="wrap list row">
					<view class="box row rowCenter verCenter">FR-4</view>
					<view class="box row rowCenter verCenter curr">CEM-1</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">铜箔厚度</text>
				<view class="wrap list row type1">
					<view class="box row rowCenter verCenter">1/1oz</view>
					<view class="box row rowCenter verCenter curr">2/2oz</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row h2">
				<text class="label">最小线宽/线距</text>
				<view class="wrap list row mb">
					<view class="box row rowCenter verCenter curr">4/4mil</view>
					<view class="box row rowCenter verCenter">5/5mil</view>
					<view class="box row rowCenter verCenter">6/6mil</view>
					<view class="box row rowCenter verCenter">8/8mil</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">最小孔径</text>
				<view class="wrap list row mb">
					<view class="box row rowCenter verCenter curr">0.25mm</view>
					<view class="box row rowCenter verCenter">0.3mm</view>
					<view class="box row rowCenter verCenter">0.35mm</view>
					<view class="box row rowCenter verCenter">0.4mm</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">阻焊颜色</text>
				<view class="wrap list row mb">
					<view class="box row rowCenter verCenter curr">icon绿色</view>
					<view class="box row rowCenter verCenter">icon绿色</view>
					<view style="margin-right: 0;" class="box row rowCenter verCenter">icon绿色</view>
					<view class="box row rowCenter verCenter">icon绿色</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">字符颜色</text>
				<view class="wrap list row mb">
					<view class="box row rowCenter verCenter curr">icon绿色</view>
					<view class="box row rowCenter verCenter">icon绿色</view>
					<view style="margin-right: 0;" class="box row rowCenter verCenter">icon绿色</view>
					<view class="box row rowCenter verCenter">icon绿色</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">焊盘喷镀</text>
				<view class="wrap list row mb">
					<view class="box row rowCenter verCenter curr">无铅喷锡</view>
					<view class="box row rowCenter verCenter">有铅喷锡</view>
					<view class="box row rowCenter verCenter">沉金</view>
					<view style="margin-bottom: 0;" class="box row rowCenter verCenter">OSP</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">阻焊覆盖</text>
				<view class="wrap list row verCenter nowrap">
					<view class="box row rowCenter verCenter curr">过孔盖油</view>
					<view class="box row rowCenter verCenter">过孔开窗</view>
					<view style="margin-right: 0;" class="box row rowCenter verCenter">过孔塞油</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">测试选项</text>
				<view class="wrap list row verCenter"><view class="box row rowCenter verCenter curr">测试免费</view></view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">金手指倒斜边</text>
				<view class="wrap list row verCenter">
					<view class="box row rowCenter verCenter curr">不需要</view>
					<view class="box row rowCenter verCenter">需要</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">BGA数量</text>
				<view class="wrap list row verCenter">
					<view class="box row rowCenter verCenter curr">无</view>
					<view class="box row rowCenter verCenter">有</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">阻抗控制</text>
				<view class="wrap list row verCenter">
					<view class="box row rowCenter verCenter curr">无</view>
					<view class="box row rowCenter verCenter">50Ω</view>
					<view class="box row rowCenter verCenter">10Ω</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">确认生产稿</text>
				<view class="wrap list row verCenter">
					<view class="box row rowCenter verCenter curr">不需要</view>
					<view class="box row rowCenter verCenter">需要</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row">
				<textarea class="t-area" placeholder="请填写工艺备注" placeholder-style="color:#CCCCCC;"></textarea>
				<text class="limit">0/300</text>
			</view>
		</view>
		<view class="btn-box row bothSide">
			<view class="btn-1 row rowCenter verCenter">计算价格</view>
			<view class="btn-2 row rowCenter verCenter">加入购物车</view>
		</view>
		<view class="tip row rowCenter">
			<text class="t1">加入购物车表示已同意</text>
			<text class="t2">《计价工艺免责声明》</text>
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
	onShow() {},
	onPullDownRefresh() {
		this.refresh();
	},
	methods: {
		getData() {},
		refresh() {
			uni.stopPullDownRefresh();
			this.getData();
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/index/index.scss';
</style>
