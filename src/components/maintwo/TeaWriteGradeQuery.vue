<template>

    <div class="inputTable">
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>级别:</span>
                    <el-select v-model="value" placeholder="请选择实训内容">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>

                    <span>学生姓名:</span>
                    <input type="text" name="search" placeholder=" 请输入关键字">

                    <span>学生学号:</span>
                    <input type="text" name="search" placeholder=" 请输入关键字">
                </div>
                <div class="right">
                    <button>查询</button>
                    <button>导出EXCEL</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th rowspan="2">序号</th>
                        <th rowspan="2">学生姓名</th>
                        <th rowspan="2">学号</th>
                        <th rowspan="2">总分</th>
                        <th>词汇</th>
                        <th>基础编</th>
                        <th>记述论述篇</th>
                        <th>商务篇</th>
                        <th>句式</th>
                        <th>基础篇</th>
                        <th>论述篇</th>
                        <th>商务篇</th>
                        <th rowspan="2">操作</th>
                    </tr>

                    <tr>
                        <th>(50%)</th>
                        <th>(30%)</th>
                        <th>(30%)</th>
                        <th>(40%)</th>
                        <th>(50%)</th>
                        <th>(30%)</th>
                        <th>(30%)</th>
                        <th>(40%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button type="text" @click="dialogVisible = true">查看明细</button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button type="text" @click="dialogVisible = true">查看明细</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <el-dialog :visible.sync="dialogVisible" width="65%" :before-close="handleClose">
            <div class="flex-center">
                <div class="info">
                    <img src="../../assets/info/xinxiban.png" alt="">
                    <p class="up">班级</p>
                    <p class="down">class01</p>
                </div>
                <div class="info">
                    <img src="../../assets/info/xinxiban.png" alt="">
                    <p class="up">姓名</p>
                    <p class="down">张珊</p>
                </div>
                <div class="info">
                    <img src="../../assets/info/xinxiban.png" alt="">
                    <p class="up">学号</p>
                    <p class="down">sd01</p>
                </div>
                <div class="info">
                    <img src="../../assets/info/xinxiban.png" alt="">
                    <p class="up">总分</p>
                    <p class="down">88</p>
                </div>
            </div>

            <div style="padding:10px">
                <table>
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>实训内容</th>
                            <th>章</th>
                            <th>节</th>
                            <th>章分数</th>
                            <th>节分数</th>
                            <th>答题次数</th>
                            <th>top1</th>
                            <th>top2</th>
                            <th>top3</th>
                            <th>最新成绩</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td rowspan="15">词汇（50%）</td>
                            <td rowspan="4">基础篇（30%）</td>
                            <td>自我介绍文（25%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>日记（25%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>书信（25%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>贺年卡（25%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td rowspan="6">论述记述篇（30%）</td>
                            <td>说明文（10%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>感想文（10%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>记录文（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td>演讲稿（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>9</td>
                            <td>研究报告（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>10</td>
                            <td>论文（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>11</td>
                            <td rowspan="5">商务篇（40%）</td>
                            <td>初步建立关系（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>12</td>
                            <td>商务营销往来（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>13</td>
                            <td>商务问题处理（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>14</td>
                            <td>公司内部文件（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>15</td>
                            <td>社交文件（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>16</td>
                            <td rowspan="15">句式（50%）</td>
                            <td rowspan="4">基础篇（30%）</td>
                            <td>自我介绍文（25%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>17</td>
                            <td>日记（25%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>18</td>
                            <td>书信（25%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>19</td>
                            <td>贺年卡（25%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>20</td>
                            <td rowspan="6">论述记述篇（30%）</td>
                            <td>说明文（10%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>21</td>
                            <td>感想文（10%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>22</td>
                            <td>记录文（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>23</td>
                            <td>演讲稿（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>24</td>
                            <td>研究报告（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>25</td>
                            <td>论文（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>26</td>
                            <td rowspan="5">商务篇（40%）</td>
                            <td>初步建立关系（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>27</td>
                            <td>商务营销往来（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>28</td>
                            <td>商务问题处理（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>29</td>
                            <td>公司内部文件（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
                            </td>
                        </tr>

                        <tr>
                            <td>30</td>
                            <td>社交文件（20%）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>更多</button>
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
    data() {
        return {
            dialogVisible: false,

            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teawritemain" },
                { name: "课程成绩查询", to: "" }
            ],

            tabs: [
                { name: "进度查询", to: "/teawriteprogressquery" },
                { name: "成绩查询", to: "/teawritegradequery" },
                { name: "结果分析", to: "/teawriteresultanalysis" }
            ],
            options: [
                {
                    value: "选项1",
                    label: "A-D"
                },
                {
                    value: "选项2",
                    label: "E-F"
                }
            ],
            value: ""
        };
    },

    mounted() {
        let breadcrumb = this.breadcrumb;
        let tabs = this.tabs;
        let n = 1;

        this.$emit("getData", { breadcrumb, tabs, n });
    },

    methods: {
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        }
    }

};
</script>

<style scoped>
.containerClass {
    min-width: 670px;
    margin: 5px 0px;
}

.maincm {
    display: flex;
    justify-content: space-between;
}

.left input {
    width: 230px;
    height: 42px;
    border-radius: 5px;
    border: 1px solid #cdcdcd;
}

.right button {
    width: 120px;
    height: 42px;
    color: #fff;
    background-image: url("../../../static/images/classmanage/bluebutton.png");
    background-size: 100% 100%;
    border: none;
    margin-left: 10px;
}

table {
    border: 1px solid #bbe0fb;
    width: 100%;
    margin-top: 20px;
    background-color: #f7fbfe;
}

table td {
    text-align: center;
    border: 1px solid #bbe0fb;
}

span {
    margin: 0px 10px;
}

.info{
    margin: 0px 10px;
    position: relative;
}

.info .up{
    position: absolute;
    top: 6px;
    left: 0px;
    right: 0px;
    margin: auto;
}

.info .down{
    position: absolute;
    bottom: 15px;
    left: 0px;
    right: 0px;
    margin: auto;
}
</style>
