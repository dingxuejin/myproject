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
        <div class="flex-center">
            <div class="main1" @click="getData('看一看',1)">
                <img src="../assets/main/teaspekan.png" alt="">
                <div class="main2">
                    <div class="main4">看一看</div>
                    <div class="main5">40个知识点</div>
                </div>
            </div>
            <div class="main1" @click="getData('听一听',2)">
                <img src="../assets/main/teaspeting.png" alt="">
                <div class="main2">
                    <div class="main4">听一听</div>
                    <div class="main5">40个内容</div>
                </div>
            </div>
            <div class="main1"  @click="getData('说一说',3)">
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
      
        <el-dialog :visible.sync="isShow" :title="dialogTitle" width="1200px">
            <div style="margin:20px;">
                <table class="table1">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>场景</th>
                            <th>关卡名称</th>
                            <th>内容预览</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for='(item,index) in tab[0]' :key="index">
                            <template v-for="(item1,index1) in tab">
                                <td :key="index1" v-if="item1[index].count!==0" :rowspan="item1[index].count">
                                    {{item1[index].menu[getLanguage]}}
                                </td>

                            </template>
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
import { mapGetters } from "vuex";
export default {
  name: "TeaSpeMain",
  data() {
    return {
      tab: [],
      dialogTitle:'',
      isShow: false,
      isNlcp: false
    };
  },
  computed: {
    ...mapGetters(["getLanguage"])
  },
  methods: {
    getData(title,n) {
      let that = this;
      let menuNo=this.active;
      this.dialogTitle=title;
      this.$axios
        .get("busjapspe/tea/module/menu/menuList", { menuNo: n })
        .then(res => {
          this.isShow = true;
          let tab = res.data.results;
          console.log(tab);
          this.tab = this.$setTableData(tab);
           console.log(this.tab);
        });
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


