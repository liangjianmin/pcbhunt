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
					<view @click="tab(item.Value, 'BoardLayers')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.BoardLayers == item.Value }" v-for="(item, index) in InitDatas.BoardLayersValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">板子厚度</text>
				<view class="wrap list row mb4">
					<view @click="tab(item.Value, 'BoardThickness')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.BoardThickness == item.Value, disabled: disabledBoardThickness(item.Value) }" v-for="(item, index) in InitDatas.BoardThicknessValues" :key="index">{{ item.Title }}</view>
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
					<view @click="tab(item.Value, 'PcbUnitSel')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.PcbUnitSel == item.Value }" v-for="(item, index) in InitDatas.PcbUnitSelValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<!-- 按客户资料拼板出货参数 -->
			<template v-if="PcbUnitSel20Show">
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
		<view class="pcb-box" v-if="PcbUnitSel20Show">
			<view class="pcb-input row verCenter h1">
				<text class="label">分割方式</text>
				<view class="wrap list row verCenter nowrap">
					<view @click="tab(item.Value, 'VCut')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.VCut == item.Value }" v-for="(item, index) in InitDatas.VCutValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1" >
				<text class="label">接受打叉板</text>
				<view class="wrap list row verCenter nowrap">
					<view @click="tab(item.Value, 'AcceptCrossed')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.AcceptCrossed == item.Value }" v-for="(item, index) in AcceptCrossedValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
		</view>
		
		<!-- 猎板代拼参数显示 -->
		<view class="pcb-sel" v-if="PcbUnitSel30Show">
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
				<text class="label">板材类型</text>
				<view class="wrap list row">
					<view @click="tab(item.Value, 'BoardType')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.BoardType == item.Value }" v-for="(item, index) in InitDatas.BoardTypeValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">铜箔厚度</text>
				<view class="wrap list row type1">
					<view @click="tab(item.Value, 'CopperThickness')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.CopperThickness == item.Value }" v-for="(item, index) in InitDatas.CopperThicknessValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row h2">
				<text class="label">最小线宽/线距</text>
				<view class="wrap list row mb3">
					<view @click="tab(item.Value, 'LineWeight')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.LineWeight == item.Value }" v-for="(item, index) in InitDatas.LineWeightValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">最小孔径</text>
				<view class="wrap list row mb3">
					<view @click="tab(item.Value, 'Vias')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.Vias == item.Value }" v-for="(item, index) in InitDatas.ViasValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row h2">
				<text class="label">阻焊颜色</text>
				<view class="wrap list row mb6">
					<view @click="tab(item.Value, 'SolderColor')" class="color-box box row rowCenter verCenter" :class="{ curr: QuoteObj.SolderColor == item.Value }" v-for="(item, index) in InitDatas.SolderColorValues" :key="index">
					 <text :class="item.Color"></text>
					<text class="t">{{ item.Title }}</text>
					</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">字符颜色</text>
				<view class="wrap list row">
					<view @click="tab(item.Value, 'FontColor')" class="color-box box row rowCenter verCenter" :class="{ curr: QuoteObj.FontColor == item.Value }" v-for="(item, index) in InitDatas.FontColorValues" :key="index">
					 <text :class="item.Color"></text>
					<text class="t">{{ item.Title }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row h2">
				<text class="label">焊盘喷镀</text>
				<view class="wrap list row mb3">
					<view @click="tab(item.Value, 'SurfaceFinish')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.SurfaceFinish == item.Value }" v-for="(item, index) in InitDatas.SurfaceFinishValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">阻焊覆盖</text>
				<view class="wrap list row verCenter nowrap">
					<view @click="tab(item.Value, 'SolderCover')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.SolderCover == item.Value }" v-for="(item, index) in InitDatas.SolderCoverValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">测试选项</text>
					<view class="wrap list row verCenter  nowrap">
				<view @click="tab(item.Value, 'TestType')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.TestType == item.Value }" v-for="(item, index) in InitDatas.TestTypeValues" :key="index">{{ item.Title }}</view>
			</view>
			</view>
			<view class="pcb-input row verCenter h2">
				<text class="label">金手指倒斜边</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'Goldfinger')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.Goldfinger == item.Value }" v-for="(item, index) in InitDatas.GoldfingerValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">BGA数量</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'IsBGA')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.IsBGA == item.Value }" v-for="(item, index) in InitDatas.IsBGAValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">阻抗控制</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'ImpedanceSize')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.ImpedanceSize == item.Value }" v-for="(item, index) in InitDatas.ImpedanceSizeValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1" v-if="getImpedanceReportShow">
				<text class="label">阻抗报告</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'IsImpedanceReport')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.IsImpedanceReport == item.Value }" v-for="(item, index) in InitDatas.IsImpedanceReportValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">确认生产稿</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'PCBFileConfirm')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.PCBFileConfirm == item.Value }" v-for="(item, index) in InitDatas.PCBFileConfirmValues" :key="index">{{ item.Title }}</view>
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
			InitDatas:{
				BoardThicknessValues:[
					{Title:'0.6',Value:0.6},
					{Title:'0.8',Value:0.8},
					{Title:'1.0',Value:1.0},
					{Title:'1.2',Value:1.2},
					{Title:'1.6',Value:1.6},
					{Title:'2.0',Value:2.0},
					{Title:'2.4',Value:2.4},
				],
				BoardLayersValues:[
					{Title:'1',Value:1},
					{Title:'2',Value:2},
					{Title:'4',Value:4},
				],
				PcbUnitSelValues:[
					{Title:'单片资料单片出货',Value:10},
					{Title:'按客户资料拼板出货',Value:20},
					{Title:'猎板代拼',Value:30},
				],
				AcceptCrossedValues:[
					{Title:'接受',Value:true},
					{Title:'不接受',Value:false},
				],
				VCutValues:[
					{Title:'无',Value:10},
					{Title:'V割',Value:20},
					{Title:'锣槽',Value:30},
					{Title:'V割+锣槽',Value:40},
				],
				BoardTypeValues:[
					{Title:'FR-4',Value:10},
					{Title:'CEM-1',Value:40},
				],
				BoardBrandValues:[
					{Title:'建滔A级',Value:10},
					{Title:'不指定品牌',Value:100},
				],
				CopperThicknessValues:[
					{Title:'1/1oz',Value:1},
					{Title:'2/2oz',Value:2},
				],
				LineWeightValues:[
					{Title:'4/4mil',Value:4},
					{Title:'5/5mil',Value:5},
					{Title:'6/6mil',Value:6},
					{Title:'8/8mil↑',Value:8},
				],
				ViasValues:[
					{Title:'0.2mm',Value:0.2},
					{Title:'0.25mm',Value:0.25},
					{Title:'0.3mm',Value:0.3},
					{Title:'0.35mm',Value:0.35},
					{Title:'0.4mm',Value:0.4},
				],
				SolderColorValues:[
					{Title:'绿色',Value:10,Color:'color1'},
					{Title:'白色',Value:30,Color:'color2'},
					{Title:'黑色',Value:20,Color:'color3'},
					{Title:'蓝色',Value:60,Color:'color4'},
					{Title:'黄色',Value:40,Color:'color5'},
					{Title:'红色',Value:50,Color:'color6'},
					{Title:'哑黑',Value:70,Color:'color7'},
					{Title:'哑绿',Value:80,Color:'color8'},
				],
				FontColorValues:[
					{Title:'白色',Value:30,Color:'color2'},
					{Title:'黑色',Value:20,Color:'color3'},
				],
				SolderCoverValues:[
					{Title:'过孔盖油',Value:10},
					{Title:'过孔开窗',Value:20},
					{Title:'过孔塞油',Value:30},
				],
				SurfaceFinishValues:[
					{Title:'无铅喷锡',Value:10},
					{Title:'有铅喷锡',Value:20},
					{Title:'沉金',Value:30},
					{Title:'OSP',Value:40},
					{Title:'裸铜',Value:50},
				],
				ImGoldThincknessValues:[
					{Title:'1u"',Value:1},
					{Title:'2u"',Value:2},
				],
				GoldfingerValues:[
					{Title:'不需要',Value:false},
					{Title:'需要',Value:true},
				],
				TestTypeValues:[
					{Title:'AOI+飞针全测',Value:10},
					{Title:'AOI+测试架',Value:20},
					{Title:'飞针抽测',Value:30},
				],
				IsBGAValues:[
					{Title:'无',Value:false},
					{Title:'有',Value:true},
				],
				ImpedanceSizeValues:[
					{Title:'无',Value:'无'},
					{Title:'50Ω',Value:'50Ω'},
					{Title:'100Ω',Value:'100Ω'},
				],
				IsImpedanceReportValues:[
					{Title:'不需要',Value:false},
					{Title:'需要',Value:true},
				],
				PCBFileConfirmValues:[
					{Title:'不需要',Value:false},
					{Title:'需要',Value:true},
				],
				IsNeedShipReportValues:[
					{Title:'不需要',Value:false},
					{Title:'需要',Value:true},
				]
			},
			PcbUnitSel30Show: false,
			PcbUnitSel20Show: false,
			IsImpedanceReportShow:false,
			QuoteObj: {
				PcbUnit: 10,
				SetType: 0,
				PcbUnitSel: 10,
				BoardWidth: 0,
				BoardHeight: 0,
				PanelWayX: 1,
				PanelWayY: 1,
				VCut: 10,
				EdgeRail: 10,
				EdgeRailWidth: 0,
				GrooveWidth: 0,
				GrooveHeight: 0,
				Num: 0,
				BoardLayers: 2,
				PcbKinds: 1,
				BoardType: 10,
				BoardThickness: 1.6,
				CopperThickness: 1,
				InnerCopperThickness: 1,
				LineWeight: 8,
				Vias: 0.4,
				SolderColor: 10,
				FontColor: 30,
				SolderColorBottom: 10,
				FontColorBottom: 30,
				SurfaceFinish: 20,
				ImGoldThinckness: 1,
				SolderCover: 10,
				TestType: 10,
				Goldfinger: false,
				ImpedanceSize: '无',
				PCBFileConfirm: false,
				FR4Tg: 'TG130',
				AcceptCrossed: true,
				Note: '',
				IsImpedanceReport: false,
				IsBGA: true,
				BoardBrand: 10,
				IsNeedShipReport: false
			}
		};
	},
	onLoad(options) {},
	onShow() {},
	onPullDownRefresh() {
		this.refresh();
	},
	computed: {
		// 计算属性的 getter
		getSupportThickness: function() {
			if (this.QuoteObj.BoardLayers == 1) return [1.0, 1.2, 1.6];
			else if (this.QuoteObj.BoardLayers == 2) {
				return [0.6, 0.8, 1.0, 1.2, 1.6, 2.0, 2.4];
			} else if (this.QuoteObj.BoardLayers == 4) {
				return [0.8, 1.0, 1.2, 1.6, 2.0];
			}
		},
		getIsSupportThickness: function() {
			return !(this.getSupportThickness.indexOf(this.QuoteObj.BoardThickness) == -1);
		},
		getSupportBoardLayer: function() {
			if (this.QuoteObj.BoardType == 10) return [1, 2, 4];
			else if (this.QuoteObj.BoardType == 40) {
				return [1];
			}
		},
		getSupportCopperThickness: function() {
			if (this.QuoteObj.BoardLayers == 1) return [1];
			else if (this.QuoteObj.BoardLayers == 2) {
				return [1, 2];
			} else if (this.QuoteObj.BoardLayers == 4) {
				return [1, 2];
			}
		},
		getSupportLineWeight: function() {
			if (this.QuoteObj.CopperThickness == 2) return [6, 8];
			else if (this.QuoteObj.CopperThickness == 1) {
				return [4, 5, 6, 8];
			}
		},
		getImpedanceReportShow:function(){
			if(this.QuoteObj.ImpedanceSize=="无")
			{
				return false;
			}else{
				return true;
			}
		}
	},
	watch: {
		QuoteObj: function(val) {
			console.log('watch:' + val);
		},
		'QuoteObj.BoardType': function(old, val) {
			if (val == 40) this.QuoteObj.BoardLayers = 1;
		},
		'QuoteObj.BoardLayers': function(val) {
			if (this.getIsSupportThickness == false) {
				this.QuoteObj.BoardThickness = 1.6;
			}
			if (this.getSupportCopperThickness.indexOf(this.QuoteObj.CopperThickness) == -1) {
				this.QuoteObj.CopperThickness = 1;
			}
			if (this.QuoteObj.BoardLayers == 4) return (this.QuoteObj.InnerCopperThickness = 0.5);
			else if (this.QuoteObj.BoardLayers == 2 || this.QuoteObj.BoardLayers == 1) {
				return (this.QuoteObj.InnerCopperThickness = 1);
			}
		},
		'QuoteObj.CopperThickness': function(val) {
			if (this.getSupportLineWeight.indexOf(this.LineWeight) == -1) {
				this.LineWeight = 8;
			}
		}
	},
	methods: {
		bindPickerChange() {},
		getData() {},
		disabledBoardThickness(val) {
			return this.getSupportThickness.indexOf(val) == -1;
		},
		tab(index, type) {
			if (type == 'PcbUnitSel') {
				//出货方式
				this.QuoteObj.PcbUnitSel = index;
				this.PcbUnitSel30Show = false;
				this.PcbUnitSel20Show = false;
				this.LayerVCutShow = false;

				 if (index == 20) {
					this.PcbUnitSel20Show = true;
					//this.LayerVCutShow = true;
				} else if (index == 30) {
					this.PcbUnitSel30Show = true;

					uni.navigateTo({
						url: '/pages/index/param'
					});
				}
			}else{
				for(var name in this.QuoteObj){
					if(name==type){
						this.QuoteObj[name]=index;
					}
				}
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
