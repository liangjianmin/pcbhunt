<template>
	<view class="h-index">
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
				<text class="label">板材类型</text>
				<view class="wrap list row">
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardType==10 }" @click="changeBoardType(10)">FR-4</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardType==40 }" @click="changeBoardType(40)">CEM-1</view>
				</view>
			</view>
			
		</view>
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">板子层数</text>
				<view class="wrap list row">
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardLayers==1 }" @click="changeLayer(1)">1</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardLayers==2 }" @click="changeLayer(2)">2</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardLayers==4 }" @click="changeLayer(4)">4</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">板子厚度</text>
				<view class="wrap list row mb">
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardThickness==0.8 }" @click="changeBoardThickness(0.8)">0.8</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardThickness==1.0 }" @click="changeBoardThickness(1.0)">1.0</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardThickness==1.2 }" @click="changeBoardThickness(1.2)">1.2</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardThickness==1.6 }" @click="changeBoardThickness(1.6)">1.6</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardThickness==2.0 }" @click="changeBoardThickness(2.0)">2.0</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:BoardThickness==2.4 }" @click="changeBoardThickness(2.4)">2.4</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">拼版款数</text>
				<view class="wrap input-type1 row bothSide verCenter">
					<view class="row verCenter"><input type="text" placeholder="请输入" placeholder-style="color:#cccccc;" /></view>
				</view>
			</view>
			<view class="pcb-input row  h2">
				<text class="label">出货方式</text>
				<view class="wrap list row mb2">
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:PcbUnitSel==10 }" @click="changePcbUnitSel(10)">单片资料单片出货</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:PcbUnitSel==20 }" @click="changePcbUnitSel(20)">按客户资料拼板出货</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:PcbUnitSel==30 }" @click="changePcbUnitSel(30)">猎板代拼</view>
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
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:VCut==10 }" @click="changeVCut(10)">无</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:VCut==20 }" @click="changeVCut(20)">V割</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:VCut==30 }" @click="changeVCut(30)">锣槽</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:VCut==40 }" @click="changeVCut(40)">V割+锣槽</view>
				</view>
			</view>
			
			<view class="pcb-input row verCenter h1">
				<text class="label">铜箔厚度</text>
				<view class="wrap list row type1">
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:CopperThickness==1 }" @click="changeCopperThickness(1)">1/1oz</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:CopperThickness==2 }" @click="changeCopperThickness(2)">2/2oz</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row h2">
				<text class="label">最小线宽/线距</text>
				<view class="wrap list row mb">
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:LineWeight==4 }" @click="changeLineWeight(4)">4/4mil</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:LineWeight==5 }" @click="changeLineWeight(5)">5/5mil</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:LineWeight==6 }" @click="changeLineWeight(6)">6/6mil</view>
					<view class="box row rowCenter verCenter" v-bind:class="{ curr:LineWeight==8 }" @click="changeLineWeight(8)">8/8mil</view>
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
			PcbUnit: 10,
			SetType: 0,
			PcbUnitSel:10,
			BoardWidth:0,
			BoardHeight:0,
			PanelWayX:1,
			PanelWayY:1,
			VCut:10,
			EdgeRail: 10,
			EdgeRailWidth:0,
			GrooveWidth:0,
			GrooveHeight: 0,
			Num:0,
			BoardLayers:2,
			PcbKinds:1,
			BoardType:10,
			BoardThickness:1.6,
			CopperThickness:1,
			InnerCopperThickness:1,
			LineWeight:8,
			Vias:0.4,
			SolderColor:10,
			FontColor:30,
			SolderColorBottom:10,
			FontColorBottom:30,
			SurfaceFinish:20,
			ImGoldThinckness:1,
			SolderCover:10,
			TestType:10,
			Goldfinger:false,
			ImpedanceSize:"",
			PCBFileConfirm:false,
			FR4Tg:"TG130",
			AcceptCrossed:true,
			Note:"",
			IsImpedanceReport:false,
			IsBGA:true,
			BoardBrand:10,
			IsNeedShipReport:false
		};
	},
	onLoad(options) {console.log('onLoad');},
	onShow() {console.log('onShow');},
	onPullDownRefresh() {
		this.refresh();
	},
	computed: {
		// 计算属性的 getter
		getSupportThickness: function () {
			if(this.BoardLayers==1)
				return  [1.0,1.2,1.6];
			else if(this.BoardLayers==2){
				return  [0.6,0.8,1.0,1.2,1.6,2.0,2.4];
			}else if(this.BoardLayers==4){
				return  [0.8,1.0,1.2,1.6,2.0];
			}
		},
		getSupportBoardLayer: function () {
			if(this.BoardType==10)
				return  [1,2,4];
			else if(this.BoardType==40){
				return  [1];
			}
		},
		getSupportCopperThickness: function () {
			if(this.BoardLayers==1)
				return  [1];
			else if(this.BoardLayers==2){
				return  [1,2];
			}else if(this.BoardLayers==4){
				return  [1,2];
			}
		},
		getSupportLineWeight: function () {
			if(this.CopperThickness==2)
				return  [6,8];
			else if(this.CopperThickness==1){
				return  [4,5,6,8];
			}
		}
	  },
	watch: {
	    BoardType: function (val) {
	      if(val==40)
			this.BoardLayers=1;
	    },
		BoardLayers:function(val)
		{
			if(this.getSupportThickness.indexOf(this.BoardThickness)==-1)
			{
				this.BoardThickness=1.6;
			}
			if(this.getSupportCopperThickness.indexOf(this.CopperThickness)==-1)
			{
				this.CopperThickness=1;
			}
			if(this.BoardLayers==4)
				return this.InnerCopperThickness=0.5;
			else if(this.BoardLayers==2||this.BoardLayers==1){
				return  this.InnerCopperThickness=1;
			}
		},
		CopperThickness:function(val){
			if(this.getSupportLineWeight.indexOf(this.LineWeight)==-1)
			{
				this.LineWeight=8;
			}
		}
	},
	methods: {
		getData() {
			console.log('getData');
		},
		changeLayer(val){
			this.BoardLayers=val;
			console.log(this.getSupportThickness);
		},
		changeBoardThickness(val){
			this.BoardThickness=val;
		},
		changePcbUnitSel(val){
			this.PcbUnitSel=val;
		},
		changeVCut(val){
			this.VCut=val;
		},
		changeBoardType(val){
			this.BoardType=val;
		},
		changeCopperThickness(val){
			this.CopperThickness=val;
		},
		changeLineWeight(val){
			this.LineWeight=val;
		},
		tip(){
			console.log('tip');
			this.$refs.pop.open();
		},
		close(){
			console.log('close');
			this.$refs.pop.close();
		},
		joinCar() {
			console.log('joinCar');
			uni.navigateTo({
				url: '/pages/user/login'
			});
		},
		refresh() {
			console.log('refresh');
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
