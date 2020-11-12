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
				<picker class="pick-box" @change="bindPickerChange" :value="index" :range="array">
					<view class="pick-wrap input-type1 row bothSide verCenter">
						<view class="row verCenter"><input type="text" placeholder="请选择" placeholder-style="color:#cccccc;" /></view>
						<view class="unit row rowCenter verCenter">
							<text class="t1">PCS</text>
							<text class="iconfont iconyoujiantou"></text>
						</view>
					</view>
				</picker>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">板子层数</text>
				<view class="wrap list row">
					<view @click="tab(index, 'BoardLayers')" class="box row rowCenter verCenter" :class="{ curr: BoardLayersIndex == index }" v-for="(item, index) in BoardLayers" :key="index">{{ item }}</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">板子厚度</text>
				<view class="wrap list row mb4">
					<view @click="tab(index, 'BoardThickness')" class="box row rowCenter verCenter" :class="{ curr: BoardThicknessIndex == index, disabled: index == 3 }" v-for="(item, index) in BoardThickness" :key="index">{{ item }}</view>
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
				<text class="label">出货方式</text>
				<view class="wrap list row mb1">
					<view @click="tab(index, 'PcbUnitSel')" class="box row rowCenter verCenter" :class="{ curr: PcbUnitSelIndex == index }" v-for="(item, index) in PcbUnitSel" :key="index">{{ item }}</view>
				</view>
			</view>
			<!-- 按客户资料拼板出货参数 -->
			<template v-if="PcbUnitSelShows">
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
			</template>
		</view>
		<!-- 分隔方式 -->
		<view class="pcb-box" v-if="LayerVCutShow">
			<view class="pcb-input row verCenter h1">
				<text class="label">分割方式</text>
				<view class="wrap list row verCenter nowrap">
					<view class="box row rowCenter verCenter">无</view>
					<view class="box row rowCenter verCenter">V割</view>
					<view class="box row rowCenter verCenter curr">V锣槽</view>
					<view class="box row rowCenter verCenter" style="margin-right: 0;">V割+锣槽</view>
				</view>
			</view>
		</view>
		<!-- 猎板代拼参数显示 -->
		<view class="pcb-sel" v-if="PcbUnitSelShow">
			<view class="wrap">
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">拼版方式</text>
					<text class="t2">2x1</text>
				</view>
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">工艺边</text>
					<text class="t2">左5mm右4mm</text>
				</view>
				<view class="pcb-sel-box row bothSide verCenter bor">
					<text class="t1">单片数量</text>
					<text class="t2">150PCS</text>
				</view>
			</view>
			<view class="wrap">
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">分割方式</text>
					<text class="t2">V割+落槽</text>
				</view>
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">垂直槽间距</text>
					<text class="t2">2mm</text>
				</view>
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">水平槽间距</text>
					<text class="t2">0mm</text>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">接受打叉板</text>
				<view class="wrap list row verCenter nowrap">
					<view class="box row rowCenter verCenter">接受</view>
					<view class="box row rowCenter verCenter curr">不接受</view>
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
				<view class="wrap list row mb3">
					<view class="box row rowCenter verCenter curr">4/4mil</view>
					<view class="box row rowCenter verCenter">5/5mil</view>
					<view class="box row rowCenter verCenter">6/6mil</view>
					<view class="box row rowCenter verCenter">8/8mil</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">最小孔径</text>
				<view class="wrap list row mb3">
					<view class="box row rowCenter verCenter curr">0.25mm</view>
					<view class="box row rowCenter verCenter">0.3mm</view>
					<view class="box row rowCenter verCenter">0.35mm</view>
					<view class="box row rowCenter verCenter">0.4mm</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row h2">
				<text class="label">阻焊颜色</text>
				<view class="wrap list row mb6">
					<view class="color-box row rowCenter verCenter">
						<text class="color1"></text>
						<text class="t">绿色</text>
					</view>
					<view class="color-box row rowCenter verCenter">
						<text class="color2"></text>
						<text class="t">白色</text>
					</view>
					<view class="color-box row rowCenter verCenter">
						<text class="color3"></text>
						<text class="t">黑色</text>
					</view>
					<view class="color-box row rowCenter verCenter">
						<text class="color4"></text>
						<text class="t">蓝色</text>
					</view>
					<view class="color-box row rowCenter verCenter">
						<text class="color5"></text>
						<text class="t">黄色</text>
					</view>
					<view class="color-box row rowCenter verCenter">
						<text class="color6"></text>
						<text class="t">红色</text>
					</view>
					<view class="color-box row rowCenter verCenter">
						<text class="color7"></text>
						<text class="t">哑黑</text>
					</view>
					<view class="color-box row rowCenter verCenter">
						<text class="color8"></text>
						<text class="t">哑绿</text>
					</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">字符颜色</text>
				<view class="wrap list row">				
					<view class="color-box row rowCenter verCenter">
						<text class="color2"></text>
						<text class="t">白色</text>
					</view>
					<view class="color-box row rowCenter verCenter">
						<text class="color3"></text>
						<text class="t">黑色</text>
					</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row h2">
				<text class="label">焊盘喷镀</text>
				<view class="wrap list row mb3">
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
		<view class="btn-box row bothSide verCenter">
			<view class="text row">
				<text class="price-text">应付总额</text>
				<text class="unit-text">¥</text>
				<text class="num">1199.00</text>
			</view>
			<view class="btn-2 row rowCenter verCenter" @click="joinCar()">加入购物车</view>
		</view>
		<view class="tip row rowCenter">
			<text class="t1">加入购物车表示已同意</text>
			<text class="t2" @click="tip()">《计价工艺免责声明》</text>
		</view>
		<uni-popup ref="pop" type="center">
			<view class="layer-box">
				<view class="layer-title-box row verCenter rowCenter">
					<text class="title">计价工艺免责声明</text>
					<view class="layer-btn" @click="close()">确定</view>
				</view>
				<view class="txt column">
					<text>猎板重构了传统PCB工厂生产管理模式，以互联网+工业4.0技术为依托，利用大数据、云计算、物联网等新技术，全面实现了线上线下协同生产。其利用数据化技术自主研发的PCB在线计价、、自助下单、上传文件、查看订单进度等生产管理系统，缩短了传统生产交期，为用户提供1-8层PCB板24小时极速打样、48小时小批量生产服务。</text>
					<text>猎板以“让电子制造更高效”为企业使命，秉承“ 诚信为本，质量第一”的发展理念,为用户提供更优质的PCB定制服务。我们承诺：不流入不良品、不生产不良品、不流出不良品，用心做好每一块板。</text>
					<text>猎板极速PCB智慧工厂年产能25万平方米，占地面积数万平方米，核心设备数量160+，员工人数200+，多层线路板工程师50+。猎板深知产品的交期和品质的重要性，坚持使用行业一线品牌设备 (台湾东台钻机、台湾竞铭自动沉铜、台湾竞铭电镀线等)，坚持优质的设备工艺配置，选用真空蚀刻、高解析光源灯组、进口西风精铣主轴.</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';

export default {
	data() {
		return {
			index: 0,
			array: ['5', '10', '15', '20'],
			PcbUnitSelShow: false,
			PcbUnitSelShows: false,
			LayerVCutShow: false,
			BoardLayers: [1, 2, 4],
			BoardLayersIndex: 0,
			BoardThickness: [0.8, 1.0, 1.2, 1.6, 2.0, 2.4],
			BoardThicknessIndex: 0,
			PcbUnitSel: ['单片资料单片出货', '按客户资料拼板出货', '猎板代拼'],
			PcbUnitSelIndex: 0
		};
	},
	onLoad(options) {},
	onShow() {},
	onPullDownRefresh() {
		this.refresh();
	},
	methods: {
		bindPickerChange() {},
		getData() {},
		tab(index, type) {
			if (type == 'PcbUnitSel') {
				//出货方式
				this.PcbUnitSelIndex = index;

				this.PcbUnitSelShow = false;
				this.PcbUnitSelShows = false;
				this.LayerVCutShow = false;

				if (index == 0) {
					this.LayerVCutShow = true;
				} else if (index == 1) {
					this.PcbUnitSelShows = true;
					this.LayerVCutShow = true;
				} else if (index == 2) {
					this.PcbUnitSelShow = true;
					uni.navigateTo({
						url: '/pages/index/param'
					});
				}
			} else if (type == 'BoardThickness') {
				this.BoardThicknessIndex = index;
			} else if (type == 'BoardLayers') {
				this.BoardLayersIndex = index;
			}
		},
		tip() {
			this.$refs.pop.open();
		},
		close() {
			this.$refs.pop.close();
		},
		joinCar() {
			uni.navigateTo({
				url: '/pages/user/login'
			});
		},
		refresh() {
			uni.stopPullDownRefresh();
			this.getData();
		}
	},
	components: { uniPopup, uniPopupMessage, uniPopupDialog }
};
</script>

<style scoped lang="scss">
@import '../../assets/css/index/index.scss';
</style>
