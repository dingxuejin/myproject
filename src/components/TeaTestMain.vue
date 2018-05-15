<template>
    <div id="mainOne1">
        <div class="mainOne2 flex-start">
            <el-breadcrumb separator='>>'>
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>亿测吧</el-breadcrumb-item>
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
            <div class="main1" @click="isZxnlxl=true">
                <img src="../assets/main/teatestzxnl.png" alt="">
                <div class="main2">
                    <div class="main4">专项能力训练</div>
                    <div class="main5">7个模块</div>
                </div>
            </div>
            <div class="main1" @click="isZtyl=true">
                <img src="../assets/main/teatestztyl.png" alt="">
                <div class="main2">
                    <div class="main4">真题演练</div>
                    <div class="main5">5个模块30份试卷</div>
                </div>
            </div>
            <div class="main1" @click="isJssz=true">
                <img src="../assets/main/teatestjingsai.png" alt="">
                <div class="main2">
                    <div class="main4">竞赛</div>
                    <div class="main5">7个模块42份试卷</div>
                </div>
            </div>

        </div>
        <div class="main3">
            <img src="../assets/main/teatestliucheng.png" alt="">
        </div>

        <el-dialog :visible.sync="isJssz" title="竞赛设置" width='900px'>
            <div style="margin:20px;">
                <div class="flex-center jinsai1">
                    <div class="flex-center">
                        <div class="nowrap">答案预览设置</div>
                        <div class="flex-start">
                            <div>
                                <el-radio>开放</el-radio>
                            </div>
                            <div>
                                <el-radio>关闭</el-radio>
                            </div>

                        </div>
                    </div>
                    <div class="flex-center">
                        <div class="nowrap">试卷语言选择</div>
                        <div class="flex-start">
                            <div>
                                <el-radio>中文</el-radio>
                            </div>
                            <div>
                                <el-radio>日文</el-radio>
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <table class="table1">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>模块名称</th>
                                <th>级别</th>
                                <th>试卷名称</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>J-test</td>
                                <td>A-D</td>
                                <td>试卷一</td>
                                <td class="btn-lv">
                                    <button>预览</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>能力考</td>
                                <td>N1</td>
                                <td>试卷一</td>
                                <td class="btn-lv">
                                    <button>预览</button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>商务礼仪</td>
                                <td>2级</td>
                                <td>试卷五</td>
                                <td class="btn-lv">
                                    <button>预览</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="isZtyl" title="真题演练">
            <div style="margin:20px;">
                <div class="flex-center jinsai1">
                    <div class="flex-center">
                        <div class="nowrap">答案预览设置</div>
                        <div class="flex-start">
                            <div>
                                <el-radio>开放</el-radio>
                            </div>
                            <div>
                                <el-radio>关闭</el-radio>
                            </div>

                        </div>
                    </div>
                    <div class="flex-center">
                        <div class="nowrap">试卷语言选择</div>
                        <div class="flex-start">
                            <div>
                                <el-radio>中文</el-radio>
                            </div>
                            <div>
                                <el-radio>日文</el-radio>
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <table class="table1">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>模块名称</th>
                                <th>级别</th>
                                <th>试卷名称</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>J-test</td>
                                <td>A-D</td>
                                <td>试卷一</td>
                                <td class="btn-lv">
                                    <button>预览</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>能力考</td>
                                <td>N1</td>
                                <td>试卷一</td>
                                <td class="btn-lv">
                                    <button>预览</button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>商务礼仪</td>
                                <td>2级</td>
                                <td>试卷五</td>
                                <td class="btn-lv">
                                    <button>预览</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="isZxnlxl" title="专项能力训练" width="1200px">
            <div style="margin:20px;">
                <div class="flex-center jinsai1">
                    <div class="flex-center">
                        <div class="nowrap">答案预览设置</div>
                        <div class="flex-start">
                            <div>
                                <el-radio>开放</el-radio>
                            </div>
                            <div>
                                <el-radio>关闭</el-radio>
                            </div>

                        </div>
                    </div>
                    <div class="flex-center">
                        <div class="nowrap">试卷语言选择</div>
                        <div class="flex-start">
                            <div>
                                <el-radio>中文</el-radio>
                            </div>
                            <div>
                                <el-radio>日文</el-radio>
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <table class="table1">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>模块名称</th>
                                <th>级别</th>
                                <th>试卷名称</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>J-test</td>
                                <td>A-D</td>
                                <td>试卷一</td>
                                <td class="btn-lv">
                                    <button>预览</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>能力考</td>
                                <td>N1</td>
                                <td>试卷一</td>
                                <td class="btn-lv">
                                    <button>预览</button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>商务礼仪</td>
                                <td>2级</td>
                                <td>试卷五</td>
                                <td class="btn-lv">
                                    <button>预览</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </el-dialog>

    </div>
</template>
<script>
export default {
    name: "TeaTestMain",
    data() {
        return {
            isZxnlxl: false,
            isZtyl: false,
            isJssz: false
        };
    },
    methods: {
        navi() {
            this.$axios
                .post("busjapsys/tea/menu/menu/menuList", {
                    menuType: 2
                })
                .then(res => {
                    console.log("导航信息", res);
                });
        }
    },
    created() {
        this.navi();
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
.jinsai1 > div {
    margin: 0 25px;
}
.jinsai1 > div > div,
.jinsai1 > div > div > div {
    margin: 0 5px;
}
</style>


