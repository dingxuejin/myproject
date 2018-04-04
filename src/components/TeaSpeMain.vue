<template>
    <div id="mainOne1">
        <div class="mainOne2 flex-start">
            <el-breadcrumb separator='>>'>
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>口语平台</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="main0">
            <div class="flex-center">
                <img src="../assets/main/teaspe.png" alt="">
            </div>
            <div class="flex-center">
                <img src="../assets/main/teaspe2.png" alt="" srcset="">
            </div>
        </div>
        <div class="flex-center" >
            <div class="main1" @click="isKan=true">
                <img src="../assets/main/teaspekan.png" alt="">
                <div class="main2">
                    <div class="main4">看一看</div>
                    <div class="main5">40个知识点</div>
                </div>
            </div>
            <div class="main1" @click="isTing=true">
                <img src="../assets/main/teaspeting.png" alt="">
                <div class="main2">
                    <div class="main4">听一听</div>
                    <div class="main5">40个内容</div>
                </div>
            </div>
            <div class="main1" @click="isShuo=true">
                <img src="../assets/main/teaspeshuo.png" alt="">
                <div class="main2">
                    <div class="main4">说一说</div>
                    <div class="main5">26个案例</div>
                </div>
            </div>
            <div class="main1" @click="isNlcp=true">
                <img src="../assets/main/teaspeceshi.png" alt="">
                <div class="main2">
                    <div class="main4">能力测评</div>
                    <div class="main5">3份试卷</div>
                </div>
            </div>
        </div>
        <div class="main3">
            <img src="../assets/main/teaspeliucheng.png" alt="">
        </div>
        <el-dialog :visible.sync="isTing" title="听一听">
            <div style="margin:20px;">
                <table class="table1">
                    <thead>
                        <tr>
                            <th>场景</th>
                            <th>关卡名称</th>
                            <th>内容预览</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="3">机场</td>
                            <td>入国手续</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>安检与登机</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>免税店</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">交通</td>
                            <td>电车出行</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>新干线出行</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">酒店</td>
                            <td>预约</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>入住</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>退房</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">餐厅</td>
                            <td>预约</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                         
                            <td>用餐</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>结算</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">观光</td>
                            <td>观光</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>规划旅游</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">求职活动</td>
                            <td>就职相关</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>面试</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">电话应对</td>
                            <td>打电话</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>接电话</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">职场日常</td>
                            <td>着装礼仪</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                        
                            <td>会议</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            
                            <td>报相联</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">业务处理</td>
                            <td>商务拜访</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>客诉处理</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                         
                            <td>展会</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="isShuo" title="说一说">
            <div style="margin:20px;">
                <table class="table1">
                    <thead>
                        <tr>
                            <th></th>
                            <th>场景</th>
                            <th>关卡名称</th>
                            <th>内容预览</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="23">影子跟读</td>
                            <td rowspan="3">机场</td>
                            <td>入国手续</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>安检与登机</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>免税店</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">交通</td>
                            <td>电车出行</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>新干线出行</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">酒店</td>
                            <td>预约</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>入住</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>退房</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">餐厅</td>
                            <td>预约</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                         
                            <td>用餐</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>结算</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">观光</td>
                            <td>观光</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>规划旅游</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">求职活动</td>
                            <td>就职相关</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>面试</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">电话应对</td>
                            <td>打电话</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>接电话</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">职场日常</td>
                            <td>着装礼仪</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                        
                            <td>会议</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            
                            <td>报相联</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">业务处理</td>
                            <td>商务拜访</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>客诉处理</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                         
                            <td>展会</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="isKan" title="看一看">
            <div style="margin:20px;">
                <table class="table1">
                    <thead>
                        <tr>
                            <th></th>
                            <th>场景</th>
                            <th>关卡名称</th>
                            <th>内容预览</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="23">词汇</td>
                            <td rowspan="3">机场</td>
                            <td>入国手续</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>安检与登机</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>免税店</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">交通</td>
                            <td>电车出行</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>新干线出行</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">酒店</td>
                            <td>预约</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>入住</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>退房</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">餐厅</td>
                            <td>预约</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                         
                            <td>用餐</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>结算</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">观光</td>
                            <td>观光</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>规划旅游</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">求职活动</td>
                            <td>就职相关</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>面试</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">电话应对</td>
                            <td>打电话</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>接电话</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">职场日常</td>
                            <td>着装礼仪</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                        
                            <td>会议</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            
                            <td>报相联</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">业务处理</td>
                            <td>商务拜访</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                          
                            <td>客诉处理</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                         
                            <td>展会</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="isNlcp" width='70%' title="能力测评">
            <div style="margin:20px;">
                <table class="table1">
                    <thead>
                        <tr>
                            <th></th>
                            <th>试卷名称</th>
                            <th>试卷章节(题目数)</th>
                            <th>分数</th>
                            <th>试卷所属类别</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="width:10%;">1</td>
                            <td>能力测试试卷一</td>
                            <td>填空题(20)单选题(20)多选题(20)解说题(20)好多题(20)</td>
                            <td style="width:10%;">100</td>
                            <td>1专项能力测评</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="width:10%;">1</td>
                            <td>能力测试试卷一</td>
                            <td>填空题(20)单选题(20)多选题(20)解说题(20)好多题(20)</td>
                            <td style="width:10%;">100</td>
                            <td>1专项能力测评</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="width:10%;">1</td>
                            <td>能力测试试卷一</td>
                            <td>填空题(20)单选题(20)多选题(20)解说题(20)好多题(20)</td>
                            <td style="width:10%;">100</td>
                            <td>1专项能力测评</td>
                            <td class="btn-lv">
                                <button>预览</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  name: "TeaSpeMain",
  data(){
      return{
          isTing:false,
          isShuo:false,
          isKan:false,
          isNlcp:false
      }
  }
};
</script>
<style scoped>
#mainOne1 {
  height: 930px;
  min-width: 800px;
}
.mainOne2 {
  height: 50px;
  min-width: 500px;
}
.main0 {
  height: 150px;
  margin-top: 50px;
}
.main0 > div {
  margin: 10px auto;
}
.main1 {
  margin: 10px;
  width: 260px;
  height: 305px;
  position: relative;
}
.main1 > img {
  width: 100%;
  height: 100%;
}
.main2 {
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
}
.main3 {
  width: 1080px;
  height: 140px;
  margin: 100px auto 0;
}
.main3 > img {
  width: 100%;
  height: 100%;
}
.main4 {
  font-size: 26px;
  color: #fff;
  width: 100%;
  line-height: 35px;
}
.main5 {
  font-size: 10px;
  color: #fff;
  width: 100%;
  line-height: 16px;
}
</style>


