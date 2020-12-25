<template>
	<view class="h-index">
		<!-- 	<view class="prompt row verCenter">
			<text class="iconfont iconnotice"></text>
			<text class="text">新用户注册立享抵扣券</text>
		</view> -->
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">板子尺寸</text>
				<view class="wrap input-type1 row bothSide verCenter">
					<view class="row verCenter">
						<input type="text" placeholder="高度/y" v-model="QuoteObj.SingleBoardHeight" class="w1" placeholder-style="color:#cccccc;" />
						<text class="txt">X</text>
						<input type="text" placeholder="宽度/x" v-model="QuoteObj.SingleBoardWidth" class="w1" placeholder-style="color:#cccccc;" />
					</view>
					<text class="unit">cm</text>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">板子数量</text>
				<view class="pick-wrap input-type1 row bothSide verCenter" @click="choiceQty()">
					<view class="row verCenter"><input type="text" placeholder="请选择" disabled="disabled" v-model="QuoteObj.Num" placeholder-style="color:#cccccc;" /></view>
					<view class="unit row rowCenter verCenter">
						<text class="t1">{{ this.PcbUnitShow }}</text>
						<text class="iconfont iconyoujiantou"></text>
					</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">板材类型</text>
				<view class="wrap list row">
					<view @click="tab(item.Value, 'BoardType')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.BoardType == item.Value }" v-for="(item, index) in InitDatas.BoardTypeValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">板子层数</text>
				<view class="wrap list row">
					<view @click="!dis(item.Value, 'BoardLayers') && tab(item.Value, 'BoardLayers')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.BoardLayers == item.Value, disabled: dis(item.Value, 'BoardLayers') }" v-for="(item, index) in InitDatas.BoardLayersValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">拼版款数</text>
				<view class="wrap input-type1 row bothSide verCenter">
					<view class="row verCenter"><input type="text" placeholder="请输入" v-model="QuoteObj.PcbKinds" placeholder-style="color:#cccccc;" /></view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">板材品牌</text>
				<view class="wrap list row mb1">
					<view @click="tab(item.Value, 'BoardBrand')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.BoardBrand == item.Value, disabled: dis(item.Value, 'BoardBrand') }" v-for="(item, index) in InitDatas.BoardBrandValues" :key="index">{{ item.Title }}</view>
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
							<input type="text" placeholder="请输入" v-model="QuoteObj.PanelWayX" class="w1" placeholder-style="color:#cccccc;" />
							<text class="txt">X</text>
							<input type="text" placeholder="请输入" v-model="QuoteObj.PanelWayY" class="w1" placeholder-style="color:#cccccc;" />
						</view>
						<text class="unit">PCS</text>
					</view>
				</view>
				<text class="tip row verCenter">* 工厂按 {{ this.QuoteObj.Num }} SET = {{ this.TotalPcs }}单片(PCS) 制作</text>
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
			<view class="pcb-input row verCenter h1">
				<text class="label">接受打叉板</text>
				<view class="wrap list row verCenter nowrap">
					<view @click="tab(item.Value, 'AcceptCrossed')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.AcceptCrossed == item.Value }" v-for="(item, index) in InitDatas.AcceptCrossedValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
		</view>

		<!-- 猎板代拼参数显示 -->
		<view class="pcb-sel" v-if="PcbUnitSel30Show">
			<view class="wrap">
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">拼板尺寸</text>
					<text class="t2">{{ QuoteObj.BoardHeight }}x{{ QuoteObj.BoardWidth }}cm</text>
				</view>
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">拼版方式</text>
					<text class="t2">{{ QuoteObj.PanelWayX }}x{{ QuoteObj.PanelWayY }}</text>
				</view>
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">工艺边</text>
					<text class="t2">{{ QuoteObj.EdgeRailShow }}5mm</text>
				</view>
				<view class="pcb-sel-box row bothSide verCenter bor">
					<text class="t1">单片数量</text>
					<text class="t2">{{ TotalPcs }}PCS</text>
				</view>
			</view>
			<view class="wrap">
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">分割方式</text>
					<text class="t2">{{ VCutShow }}</text>
				</view>
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">垂直槽间距</text>
					<text class="t2">{{ QuoteObj.GrooveHeight }}mm</text>
				</view>
				<view class="pcb-sel-box row bothSide verCenter">
					<text class="t1">水平槽间距</text>
					<text class="t2">{{ QuoteObj.GrooveWidth }}mm</text>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row h2">
				<text class="label">板子厚度</text>
				<view class="wrap list row mb4">
					<view @click="!dis(item.Value, 'BoardThickness') && tab(item.Value, 'BoardThickness')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.BoardThickness == item.Value, disabled: dis(item.Value, 'BoardThickness') }" v-for="(item, index) in InitDatas.BoardThicknessValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">铜箔厚度</text>
				<view class="wrap list row type1">
					<view @click="!dis(item.Value, 'CopperThickness') && tab(item.Value, 'CopperThickness')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.CopperThickness == item.Value, disabled: dis(item.Value, 'CopperThickness') }" v-for="(item, index) in InitDatas.CopperThicknessValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row h2">
				<text class="label">最小线宽/线距</text>
				<view class="wrap list row mb3">
					<view @click="!dis(item.Value, 'LineWeight') && tab(item.Value, 'LineWeight')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.LineWeight == item.Value, disabled: dis(item.Value, 'LineWeight') }" v-for="(item, index) in InitDatas.LineWeightValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">最小孔径</text>
				<view class="wrap list row mb3">
					<view @click="tab(item.Value, 'Vias')" class="box row rowCenter verCenter" :val="item.Value" :class="{ curr: QuoteObj.Vias == item.Value }" v-for="(item, index) in InitDatas.ViasValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row h2">
				<text class="label">阻焊颜色</text>
				<view class="wrap list row mb6">
					<view @click="tab(item.Value, 'SolderColor')" class="color-box box row rowCenter verCenter" :val="item.Value" :class="{ curr: QuoteObj.SolderColor == item.Value }" v-for="(item, index) in InitDatas.SolderColorValues" :key="index">
						<text :class="item.Color"></text>
						<text class="t">{{ item.Title }}</text>
					</view>
				</view>
			</view>
			<view class="pcb-input row h2">
				<text class="label">字符颜色</text>
				<view class="wrap list row">
					<view @click="!dis(item.Value, 'FontColor') && tab(item.Value, 'FontColor')" :val="item.Value" class="color-box box row rowCenter verCenter" :class="{ curr: QuoteObj.FontColor == item.Value, disabled: dis(item.Value, 'FontColor') }" v-for="(item, index) in InitDatas.FontColorValues" :key="index">
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
					<view @click="tab(item.Value, 'SurfaceFinish')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.SurfaceFinish == item.Value }" v-for="(item, index) in InitDatas.SurfaceFinishValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row h2" v-if="ImGoldThincknessShow">
				<text class="label">沉金厚度</text>
				<view class="wrap list row mb3">
					<view @click="tab(item.Value, 'ImGoldThinckness')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.ImGoldThinckness == item.Value }" v-for="(item, index) in InitDatas.ImGoldThincknessValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">阻焊覆盖</text>
				<view class="wrap list row verCenter nowrap">
					<view @click="tab(item.Value, 'SolderCover')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.SolderCover == item.Value }" v-for="(item, index) in InitDatas.SolderCoverValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">测试选项</text>
				<view class="wrap list row verCenter  nowrap">
					<view v-if="getTestTypeShow(item.Value)" :val="item.Value" @click="tab(item.Value, 'TestType')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.TestType == item.Value }" v-for="(item, index) in InitDatas.TestTypeValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h2">
				<text class="label">金手指倒斜边</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'Goldfinger')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.Goldfinger == item.Value }" v-for="(item, index) in InitDatas.GoldfingerValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">BGA数量</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'IsBGA')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.IsBGA == item.Value }" v-for="(item, index) in InitDatas.IsBGAValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">阻抗控制</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'ImpedanceSize')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.ImpedanceSizeArr.indexOf(item.Value) != -1 }" v-for="(item, index) in InitDatas.ImpedanceSizeValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1" v-if="getImpedanceReportShow">
				<text class="label">阻抗报告</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'IsImpedanceReport')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.IsImpedanceReport == item.Value }" v-for="(item, index) in InitDatas.IsImpedanceReportValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">确认生产稿</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'PCBFileConfirm')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.PCBFileConfirm == item.Value }" v-for="(item, index) in InitDatas.PCBFileConfirmValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<view class="pcb-input row verCenter h1">
				<text class="label">出货报告</text>
				<view class="wrap list row verCenter">
					<view @click="tab(item.Value, 'IsNeedShipReport')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.IsNeedShipReport == item.Value }" v-for="(item, index) in InitDatas.IsNeedShipReportValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input row">
				<textarea class="t-area" placeholder="请填写工艺备注" v-model="QuoteObj.Note" placeholder-style="color:#CCCCCC;"></textarea>
				<text class="limit">0/300</text>
			</view>
		</view>
		<view class="btn-box row bothSide verCenter">
			<view>
				<view class="tt row">
					<text class="t1">交期日期：{{ CalResult.SendDate }}</text>
				</view>
				<view class="text row">
					<text class="price-text">{{ CalResult.Title }}</text>
					<text class="unit-text">¥</text>
					<text class="num">{{ CalResult.ProFee }}</text>
				</view>
				<view class="ttt row">
					<text class="t1">原价：</text>
					<text class="t2">￥{{ CalResult.OrignProFee }}</text>
				</view>
			</view>
			<view class="btn-2 row rowCenter verCenter" @click="joinCar()">加入购物车</view>
		</view>
		<!-- <view class="tip row rowCenter">
			<text class="t1">加入购物车表示已同意</text>
			<text class="t2" @click="tip()">《计价工艺免责声明》</text>
		</view> -->
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
		<uni-popup ref="qty" type="center">
			<view class="layer-box pb0">
				<view class="layer-title-box row verCenter rowCenter"><text class="title">选择数量</text></view>
				<view class="qty-box">
					<scroll-view scroll-y="true" style="height: 540rpx;">
						<view class="list row verCenter">
							<view @click="selnum(item, 'sel')" class="box row verCenter" :val="item" :class="{ curr: QuoteObj.Num == item }" v-for="(item, index) in InitDatas.BoardNumValues" :key="index">
								<text class="icon"></text>
								<text class="num">{{ item }}</text>
							</view>
						</view>
					</scroll-view>
					<view class="input-box row verCenter">
						<text>其他数量</text>
						<input type="text" value="" v-model="InputNum" placeholder="请输入" class="inp" placeholder-style="color:#CCCCCC;" />
					</view>
					<view class="btn row avarage verCenter">
						<view class="btn-1 row rowCenter verCenter" @click="selnum(0, 'close')">取消</view>
						<view class="btn-2 row rowCenter verCenter" @click="selnum(0, 'input')">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import { request } from '@/util/util.js';
import Util from '@/util/index.js'
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';

export default {
	data() {
		return {
			index: 0,
			InitDatas: {
				NumValues: [5, 10, 15, 20, 30, 40, 50],
				BoardThicknessValues: [
					{
						Title: '0.6',
						Value: 0.6
					},
					{
						Title: '0.8',
						Value: 0.8
					},
					{
						Title: '1.0',
						Value: 1.0
					},
					{
						Title: '1.2',
						Value: 1.2
					},
					{
						Title: '1.6',
						Value: 1.6
					},
					{
						Title: '2.0',
						Value: 2.0
					},
					{
						Title: '2.4',
						Value: 2.4
					}
				],
				BoardLayersValues: [
					{
						Title: '1',
						Value: 1
					},
					{
						Title: '2',
						Value: 2
					},
					{
						Title: '4',
						Value: 4
					},
					{
						Title: '6',
						Value: 6
					}
				],
				PcbUnitSelValues: [
					{
						Title: '单片资料单片出货',
						Value: 10
					},
					{
						Title: '按客户资料拼板出货',
						Value: 20
					},
					{
						Title: '猎板代拼',
						Value: 30
					}
				],
				AcceptCrossedValues: [
					{
						Title: '接受',
						Value: true
					},
					{
						Title: '不接受',
						Value: false
					}
				],
				VCutValues: [
					{
						Title: '无',
						Value: 10
					},
					{
						Title: 'V割',
						Value: 20
					},
					{
						Title: '锣槽',
						Value: 30
					},
					{
						Title: 'V割+锣槽',
						Value: 40
					}
				],
				BoardTypeValues: [
					{
						Title: 'FR-4',
						Value: 10
					},
					{
						Title: 'CEM-1',
						Value: 40
					}
				],
				BoardBrandValues: [
					{
						Title: '建滔A级',
						Value: 10
					},
					{
						Title: '不指定品牌',
						Value: 100
					}
				],
				CopperThicknessValues: [
					{
						Title: '1/1oz',
						Value: 1
					},
					{
						Title: '2/2oz',
						Value: 2
					}
				],
				LineWeightValues: [
					{
						Title: '4/4mil',
						Value: 4
					},
					{
						Title: '5/5mil',
						Value: 5
					},
					{
						Title: '6/6mil',
						Value: 6
					},
					{
						Title: '8/8mil↑',
						Value: 8
					}
				],
				ViasValues: [
					{
						Title: '0.2mm',
						Value: 0.2
					},
					{
						Title: '0.25mm',
						Value: 0.25
					},
					{
						Title: '0.3mm',
						Value: 0.3
					},
					{
						Title: '0.35mm',
						Value: 0.35
					},
					{
						Title: '0.4mm',
						Value: 0.4
					}
				],
				SolderColorValues: [
					{
						Title: '绿色',
						Value: 10,
						Color: 'color1'
					},
					{
						Title: '白色',
						Value: 30,
						Color: 'color2'
					},
					{
						Title: '黑色',
						Value: 20,
						Color: 'color3'
					},
					{
						Title: '蓝色',
						Value: 60,
						Color: 'color4'
					},
					{
						Title: '黄色',
						Value: 40,
						Color: 'color5'
					},
					{
						Title: '红色',
						Value: 50,
						Color: 'color6'
					},
					{
						Title: '哑黑',
						Value: 70,
						Color: 'color7'
					},
					{
						Title: '哑绿',
						Value: 80,
						Color: 'color8'
					}
				],
				FontColorValues: [
					{
						Title: '白色',
						Value: 30,
						Color: 'color2'
					},
					{
						Title: '黑色',
						Value: 20,
						Color: 'color3'
					}
				],
				SolderCoverValues: [
					{
						Title: '过孔盖油',
						Value: 10
					},
					{
						Title: '过孔开窗',
						Value: 20
					},
					{
						Title: '过孔塞油',
						Value: 30
					}
				],
				SurfaceFinishValues: [
					{
						Title: '无铅喷锡',
						Value: 10
					},
					{
						Title: '有铅喷锡',
						Value: 20
					},
					{
						Title: '沉金',
						Value: 30
					},
					{
						Title: 'OSP',
						Value: 40
					},
					{
						Title: '裸铜',
						Value: 50
					}
				],
				ImGoldThincknessValues: [
					{
						Title: '1u"',
						Value: 1
					},
					{
						Title: '2u"',
						Value: 2
					}
				],
				GoldfingerValues: [
					{
						Title: '不需要',
						Value: false
					},
					{
						Title: '需要',
						Value: true
					}
				],
				TestTypeValues: [
					{
						Title: 'AOI+飞针全测',
						Value: 10
					},
					{
						Title: 'AOI+测试架',
						Value: 20
					},
					{
						Title: '抽测免费',
						Value: 30
					}
				],
				IsBGAValues: [
					{
						Title: '无',
						Value: false
					},
					{
						Title: '有',
						Value: true
					}
				],
				ImpedanceSizeValues: [
					{
						Title: '无',
						Value: ''
					},
					{
						Title: '45Ω',
						Value: '45'
					},
					{
						Title: '50Ω',
						Value: '50'
					},
					{
						Title: '90Ω',
						Value: '90'
					},
					{
						Title: '100Ω',
						Value: '100'
					},
					{
						Title: '110Ω',
						Value: '110'
					}
				],
				IsImpedanceReportValues: [
					{
						Title: '不需要',
						Value: false
					},
					{
						Title: '需要',
						Value: true
					}
				],
				PCBFileConfirmValues: [
					{
						Title: '不需要',
						Value: false
					},
					{
						Title: '需要',
						Value: true
					}
				],
				IsNeedShipReportValues: [
					{
						Title: '不需要',
						Value: false
					},
					{
						Title: '需要',
						Value: true
					}
				],
				BoardBrandValues: [
					{
						Title: '建滔A级',
						Value: 10
					},
					{
						Title: '不指定品牌',
						Value: 100
					}
				],
				BoardNumValues: [5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 125, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000]
			},
			PcbUnitSel30Show: false,
			PcbUnitSel20Show: false,
			IsImpedanceReportShow: false,
			InputNum: '',
			QuoteObj: {
				PcbUnit: 10,
				SetType: 0,
				PcbUnitSel: 10,
				SingleBoardWidth: '',
				SingleBoardHeight: '',
				BoardWidth: '',
				BoardHeight: '',
				PanelWayX: 1,
				PanelWayY: 1,
				VCut: 20,
				EdgeRail: 10,
				EdgeRailWidth: 0,
				GrooveWidth: 0,
				GrooveHeight: 0,
				Num: '',
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
				ImpedanceSize: '',
				ImpedanceSizeArr: [''],
				PCBFileConfirm: false,
				FR4Tg: 'TG130',
				AcceptCrossed: true,
				Note: '',
				IsImpedanceReport: false,
				IsBGA: true,
				BoardBrand: 10,
				IsNeedShipReport: false
			},
			CalResult: {
				ProFee: 0.0,
				OrignProFee: 0.0,
				DisAmount: 0.0,
				SendDate: '',
				Title: '支付金额'
			}
		};
	},
	onLoad(options) {
		uni.$on('savepcbset', this.savepcbset);
		this.initQuote();
	},
	onUnload() {
		uni.$off('savepcbset');
	},
	onShow() {},
	onPullDownRefresh() {
		console.log('refresh');
		uni.stopPullDownRefresh();
	},
	computed: {
		// ImpedanceSize:function(){
		// 	return this.QuoteObj.ImpedanceSizeArr.join(',');
		// },
		getImpedanceReportShow: function() {
			if (this.QuoteObj.ImpedanceSizeArr.indexOf('') != -1) {
				return false;
			} else {
				return true;
			}
		},
		ImGoldThincknessShow: function() {
			if (this.QuoteObj.SurfaceFinish == 30) {
				return true;
			} else {
				return false;
			}
		},
		M2Area: function() {
			return (this.QuoteObj.BoardHeight * this.QuoteObj.BoardWidth * this.QuoteObj.Num) / 10000;
		},
		PcbUnitShow: function() {
			if (this.QuoteObj.PcbUnit == 10) {
				return 'PCS';
			} else {
				return 'SET';
			}
		},
		TotalPcs: function() {
			return this.QuoteObj.Num * this.QuoteObj.PanelWayX * this.QuoteObj.PanelWayY;
		},
		EdgeRail: function() {
			if (this.QuoteObj.EdgeRail == 10) return '无';
			if (this.QuoteObj.EdgeRail == 20) return '上下';
			if (this.QuoteObj.EdgeRail == 30) return '左右';
			if (this.QuoteObj.EdgeRail == 40) return '四边';
		},
		VCutShow: function() {
			if (this.QuoteObj.VCut == 10) return '无';
			if (this.QuoteObj.VCut == 20) return 'V割';
			if (this.QuoteObj.VCut == 30) return '锣槽';
			if (this.QuoteObj.VCut == 40) return 'V割+锣槽';
		}
	},
	watch: {
		'QuoteObj.PcbUnitSel': function(val, old) {
			if (val == 10) this.QuoteObj.PcbUnit = 10;
			else {
				this.QuoteObj.PcbUnit = 20;
				if (val == 20) this.QuoteObj.SetType = 10;
				else this.QuoteObj.SetType = 20;
			}
		},
		'QuoteObj.BoardLayers': function(val) {
			//console.log('11111'+val);
			if (this.getIsSupportThickness() == false) {
				this.QuoteObj.BoardThickness = 1.6;
			}
			if (this.getSupportCopperThickness().indexOf(this.QuoteObj.CopperThickness) == -1) {
				this.QuoteObj.CopperThickness = 1;
			}
			if (val == 4) {
				this.QuoteObj.InnerCopperThickness = 0.5;
			} else if (val == 2 || val == 1) {
				this.QuoteObj.InnerCopperThickness = 1;
			}
			if (val == 1) this.QuoteObj.TestType = 30;
			else this.QuoteObj.TestType = 10;
			if (this.QuoteObj.BoardType != 10 && this.QuoteObj.BoardLayers != 1) this.QuoteObj.BoardBrand = 10;
		},
		'QuoteObj.BoardThickness': function(val) {},
		'QuoteObj.CopperThickness': function(val) {
			if (this.getSupportLineWeight().indexOf(this.LineWeight) == -1) {
				this.QuoteObj.LineWeight = 8;
			}
		},
		'QuoteObj.Goldfinger': function(val) {
			if (val == true)
				//金手指默认沉金工艺
				this.QuoteObj.SurfaceFinish = 30;
		},
		'QuoteObj.SurfaceFinish': function(val) {
			if (val != 30)
				//金手指默认沉金工艺
				this.QuoteObj.Goldfinger = false;
		},
		'QuoteObj.SingleBoardWidth': function(val) {
			if (this.QuoteObj.SetType != 20) this.QuoteObj.BoardWidth = val;
			else {
				this.resetSize();
			}
		},
		'QuoteObj.SingleBoardHeight': function(val) {
			if (this.QuoteObj.SetType != 20) this.QuoteObj.BoardHeight = val;
			else {
				this.resetSize();
			}
		},
		'QuoteObj.SolderColor': function(val) {
			if (this.QuoteObj.SolderColor == 30) this.QuoteObj.FontColor = 20;
			if (this.QuoteObj.SolderColor == 20 || this.QuoteObj.SolderColor == 70) this.QuoteObj.FontColor = 30;
		},
		'QuoteObj.BoardType': function(val) {
			if (this.QuoteObj.BoardType != 10 && this.QuoteObj.BoardLayers != 1) this.QuoteObj.BoardBrand = 10;
			if (this.QuoteObj.BoardType == 40) this.QuoteObj.BoardLayers = 1;
		},

		M2Area: function(val) {
			if (val > 10) this.QuoteObj.TestType = 20;
			else {
				if (this.QuoteObj.BoardLayers == 1) {
					this.QuoteObj.TestType = 30;
				} else {
					this.QuoteObj.TestType = 10;
				}
			}
		},
		QuoteObj: {
			//监听参数变化 计价处理
			handler: function(val) {
				console.log('price');
				this.calPrice();
			},
			deep: true
		}
	},
	methods: {
		bindPickerChange(val) {
			console.log(val);
		},
		choiceQty() {
			this.$refs.qty.open();
		},
		selnum(val, key) {
			if (key == 'sel') {
				this.QuoteObj.Num = val;
				this.$refs.qty.close();
			} else if (key == 'input') {
				if (this.InputNum < 500 || this.InputNum % 50 !== 0) {
					uni.showToast({
						title: '自定义数量必须满足>500并且是50的倍数！',
						duration: 2000,
						icon: 'none'
					});
					return;
				} else {
					this.QuoteObj.Num = this.InputNum;
					this.$refs.qty.close();
				}
			} else if (key == 'close') {
				this.$refs.qty.close();
			}
		},
		getData() {},
		resetSize() {
			var edgeRail = this.QuoteObj.EdgeRail;
			var edgeRailWidth = 1;
			var leftRight = 0;
			var upDown = 0;

			if (edgeRail == 30 || edgeRail == 40) {
				leftRight = edgeRailWidth;
			}
			if (edgeRail == 20 || edgeRail == 40) {
				upDown = edgeRailWidth;
			}

			//水平槽间距
			var grooveWidth = 0;
			//垂直槽间距
			var grooveHeight = 0;
			var vcut = this.QuoteObj.VCut;
			if (vcut == 30 || vcut == 40) {
				grooveWidth = this.QuoteObj.GrooveWidth / 10;
				grooveHeight = this.QuoteObj.GrooveHeight / 10;
			}

			this.QuoteObj.BoardHeight = this.QuoteObj.SingleBoardHeight * this.QuoteObj.PanelWayX + upDown + grooveWidth * (this.QuoteObj.PanelWayX - 1);
			this.QuoteObj.BoardWidth = this.QuoteObj.SingleBoardWidth * this.QuoteObj.PanelWayY + leftRight + grooveHeight * (this.QuoteObj.PanelWayY - 1);
		},
		savepcbset(data) {
			this.QuoteObj.Num = data.Num;
			this.QuoteObj.PanelWayX = data.PanelWayX;
			this.QuoteObj.PanelWayY = data.PanelWayY;
			this.QuoteObj.VCut = data.VCut;
			this.QuoteObj.EdgeRail = data.EdgeRail;
			this.QuoteObj.GrooveHeight = data.GrooveHeight;
			this.QuoteObj.GrooveWidth = data.GrooveWidth;
			this.resetSize();
		},
		saveQuote() {
			var data=JSON.stringify(this.QuoteObj);
			// #ifdef MP-WEIXIN
			uni.setStorageSync('quote',data);
			// #endif
			
			// #ifdef H5
			 var quote=localStorage.setItem("quote",data)
			// #endif
		},
		initQuote() {
			// #ifdef MP-WEIXIN
			var quote = uni.getStorageSync('quote');
			// #endif
			
			// #ifdef H5
			 var quote=localStorage.getItem("quote");
			// #endif
			if(quote!=null){
			this.QuoteObj=JSON.parse(quote);}
		},delQuote() {
			// #ifdef MP-WEIXIN
			 uni.removeStorage('quote');
			// #endif
			
			// #ifdef H5
			localStorage.removeItem("quote");
			// #endif
		},
		getSupportThickness() {
			if (this.QuoteObj.BoardLayers == 1) return [1.0, 1.2, 1.6];
			else if (this.QuoteObj.BoardLayers == 2) {
				return [0.6, 0.8, 1.0, 1.2, 1.6, 2.0, 2.4];
			} else if (this.QuoteObj.BoardLayers == 4) {
				return [0.8, 1.0, 1.2, 1.6, 2.0];
			} else if (this.QuoteObj.BoardLayers == 6) {
				return [0.8, 1.0, 1.2, 1.6, 2.0];
			}
		},
		getIsSupportThickness() {
			return !(this.getSupportThickness().indexOf(this.QuoteObj.BoardThickness) == -1);
		},
		getSupportBoardLayer() {
			if (this.QuoteObj.BoardType == 10) return [1, 2, 4, 6];
			else if (this.QuoteObj.BoardType == 40) {
				return [1];
			}
		},
		getSupportCopperThickness() {
			if (this.QuoteObj.BoardLayers == 1) return [1];
			else if (this.QuoteObj.BoardLayers == 2) {
				return [1, 2];
			} else if (this.QuoteObj.BoardLayers == 4) {
				return [1, 2];
			} else if (this.QuoteObj.BoardLayers == 6) {
				return [1];
			}
		},
		getSupportLineWeight() {
			if (this.QuoteObj.CopperThickness == 2) return [6, 8];
			else if (this.QuoteObj.CopperThickness == 1) {
				return [4, 5, 6, 8];
			}
		},
		getSupportFontColor() {
			var values = [30, 20];
			if (this.QuoteObj.SolderColor == 30) return [20];
			if (this.QuoteObj.SolderColor == 20 || this.QuoteObj.SolderColor == 70) return [30];
			return values;
		},
		getSupportBoardBrand() {
			var values = [30, 20];
			if (this.QuoteObj.BoardLayers == 1 && this.QuoteObj.BoardType == 10) return [10, 100];
			else {
				return [10];
			}
			return values;
		},
		getTestTypeShow(val) {
			if (this.QuoteObj.BoardLayers == 1) {
				if (val == 30) return true;
				else return false;
			} else {
				if (val == 10 || val == 20) return true;
				else return false;
			}
		},
		dis(val, type) {
			if (type == 'BoardLayers') return this.getSupportBoardLayer().indexOf(val) == -1;
			else if (type == 'BoardThickness') return this.getSupportThickness().indexOf(val) == -1;
			else if (type == 'CopperThickness') return this.getSupportCopperThickness().indexOf(val) == -1;
			else if (type == 'LineWeight') return this.getSupportLineWeight().indexOf(val) == -1;
			else if (type == 'FontColor') return this.getSupportFontColor().indexOf(val) == -1;
			else if (type == 'BoardBrand') return this.getSupportBoardBrand().indexOf(val) == -1;
		},
		tab(index, type) {
			console.log(type);
			if (type == 'PcbUnitSel') {
				//出货方式
				this.PcbUnitSel30Show = false;
				this.PcbUnitSel20Show = false;
				this.LayerVCutShow = false;
				if (index > 10) {
					if (this.checkBase() == false) {
						return false;
					}
					this.QuoteObj.PcbUnitSel = index;
					if (index == 20) {
						this.PcbUnitSel20Show = true;
						//this.LayerVCutShow = true;
					} else if (index == 30) {
						this.PcbUnitSel30Show = true;
						var obj = this.QuoteObj;
						var option = 'num=' + this.QuoteObj.Num + '&sh=' + this.QuoteObj.SingleBoardHeight + '&sw=' + this.QuoteObj.SingleBoardWidth + '&px=' + this.QuoteObj.PanelWayX + '&py=' + this.QuoteObj.PanelWayY + '&vcut=' + this.QuoteObj.VCut + '&ea=' + this.QuoteObj.EdgeRail + '&gw=' + this.QuoteObj.GrooveHeight + '&gh=' + this.QuoteObj.GrooveHeight;
						uni.navigateTo({
							url: '/pages/index/param?' + option,
							success: function(res) {}
						});
					}
				} else {
					this.QuoteObj.PcbUnitSel = index;
				}
			} else if (type == 'ImpedanceSize') {
				if (index == '') this.QuoteObj.ImpedanceSizeArr = [''];
				else {
					this.QuoteObj.ImpedanceSizeArr.forEach((item, index2, array) => {
						if (item == '') {
							this.QuoteObj.ImpedanceSizeArr.splice(index2, 1);
						}
					});

					if (this.QuoteObj.ImpedanceSizeArr.indexOf(index) != -1) {
						this.QuoteObj.ImpedanceSizeArr.forEach((item, index2, array) => {
							if (item == index) {
								this.QuoteObj.ImpedanceSizeArr.splice(index2, 1);
							}
						});
					} else {
						this.QuoteObj.ImpedanceSizeArr.push(index);
					}
				}
				this.QuoteObj.ImpedanceSize = this.QuoteObj.ImpedanceSizeArr.join(',');
				console.log(this.QuoteObj.ImpedanceSize);
			} else {
				for (var name in this.QuoteObj) {
					if (name == type) {
						console.log(name + '=' + index);
						this.QuoteObj[name] = index;
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
			if(this.checkSubmit()){
				this.saveQuote();
			this.request(API.addToCart, 'Post', JSON.stringify(this.QuoteObj), true).then(res => {
				if (res.Code == 200) {
					this.delQuote();
					uni.switchTab({
						url: '/pages/cart/index'
					});
				} else {
					uni.showToast({
						title: res.Message,
						duration: 2000,
						icon: 'none'
					});
				}
			});}
		},
		check() {
			if (this.QuoteObj.BoardHeight == '' || this.QuoteObj.BoardWidth == '') {
				return false;
			}
			if (Number(this.QuoteObj.Num) == 0) return false;
				return this.checkSubmit();
		},
		checkBase() {
			if (this.QuoteObj.BoardHeight == '' || this.QuoteObj.BoardWidth == '') {
				uni.showToast({
					title: '请填写正确的板子尺寸',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if (Number(this.QuoteObj.Num) == 0) {
				uni.showToast({
					title: '请填写正确的板子数量',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
		},
		checkSubmit() {
			if (this.QuoteObj.BoardHeight <= 0 || this.QuoteObj.BoardWidth <= 0) {
				uni.showToast({
					title: '请填写正确的板子尺寸',
					duration: 2000,
					icon: 'none'
				});
				if (this.QuoteObj.BoardHeight <= 0) {
					$('#BoardHeight').focus();
				} else if (this.QuoteObj.BoardWidth <= 0) {
					$('#BoardWidth').focus();
				}
				return false;
			}
			if (Number(this.QuoteObj.Num) == 0) {
				uni.showToast({
					title: '请填写正确的板子数量',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if (this.QuoteObj.PcbUnit == 10) {
				if (Number(this.QuoteObj.BoardWidth) > 61 || Number(this.QuoteObj.BoardHeight) > 61 || (Number(this.QuoteObj.BoardWidth) > 50 && Number(this.QuoteObj.BoardHeight) > 50)) {
					uni.showToast({
						title: '我司可生产最大长度为61*50cm,请重新输入!',
						duration: 2000,
						icon: 'none'
					});
					return false;
				}
			} else {
				if (Number(this.QuoteObj.BoardWidth) > 48 || Number(this.QuoteObj.BoardHeight) > 48) {
					uni.showToast({
						title: '拼版最大长度为48*48cm,请重新输入!',
						duration: 2000,
						icon: 'none'
					});
					return false;
				} else {
					if (this.QuoteObj.VCut == 20 || this.QuoteObj.VCut == 40) {
						if (Number(this.QuoteObj.BoardWidth) < 6 || Number(this.QuoteObj.BoardHeight) < 6) {
							uni.showToast({
								title: '拼版出货,采用V割工艺的拼版尺寸两边必须同时大于6cm',
								duration: 2000,
								icon: 'none'
							});
							return false;
						}
					}
				}
			}
			if (Number(this.QuoteObj.PcbKinds) == 0) {
				uni.showToast({
					title: '请填写正确的拼版数量',
					duration: 2000,
					icon: 'none'
				});
				//$("#PcbKinds").focus();
				return false;
			}

			if (!((this.QuoteObj.BoardHeight >= 10 && this.QuoteObj.BoardWidth >= 3) || (this.QuoteObj.BoardHeight >= 3 && this.QuoteObj.BoardWidth >= 10)) && this.QuoteObj.SurfaceFinish == 40) {
				uni.showToast({
					title: 'osp工艺要求出货尺寸至少10cmx3cm',
					duration: 2000,
					icon: 'none'
				});
				flag = false;
				return flag;
			}
			var viasPro = parseFloat(this.QuoteObj.BoardThickness) / parseFloat(this.QuoteObj.Vias);
			if (viasPro > 8) {
				var title = this.QuoteObj.Vias + 'mm孔径不能选择' + parseFloat(this.QuoteObj.Vias) * 8 + 'mm以上的板厚';
				uni.showToast({
					title: title,
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if ((this.QuoteObj.VCut == 20 || this.QuoteObj.VCut == 40) && this.QuoteObj.BoardThickness <= 0.4) {
				uni.showToast({
					title: '≤0.4mm板厚分割方式不支持V割',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			//单片出货超小板最大数量不得超过1000 pcs
			if (this.QuoteObj.PcbUnitSel == 10 && parseFloat(this.QuoteObj.BoardHeight) <= 2 && parseFloat(this.QuoteObj.BoardWidth) <= 2 && parseInt(this.QuoteObj.Num) > 1000) {
				uni.showToast({
					title: '超小板单片出货上限1000pcs、请选择猎板待拼出货！',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			return true;
			//alert(111);
		},
		calPrice() {
			var check = this.check();
			if (check == false) return false;
			else {
				request(API.calPrice, 'Post', JSON.stringify(this.QuoteObj), true).then(
					response => {
						this.showCalResult(response);
					},
					function(res) {
						uni.showToast({
							title: res.Message,
							duration: 2000,
							icon: 'none'
						});
					}
				);
			}
		},
		showCalResult(res) {
			this.CalResult.ProFee = res.Data.Cost.ProFee;
			this.CalResult.OrignProFee = res.Data.Cost.OrignProFee;
			this.CalResult.DisAmount = res.Data.Cost.DisAmount;
			this.CalResult.SendDate = res.Data.Delivery.SendDate;
			if (res.Data.Cost.IsSpecialOffer == true) {
				this.CalResult.Title = '专享特价';
			} else if (res.Data.IsLogin == false) {
				this.CalResult.Title = '新客专享价';
			} else if (res.Data.Cost.ProFee != res.Data.Cost.OrignProFee) {
				this.CalResult.Title = '预估到手价';
			} else {
				this.CalResult.Title = '支付金额:';
			}
		},
		refresh() {
			//uni.stopPullDownRefresh();
			//this.getData();
		}
	},
	components: {
		uniPopup,
		uniPopupMessage,
		uniPopupDialog
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/index/index.scss';
</style>
