<template>
    <!-- 课程结果分析 -->
    <div class="inputTable">
        <!-- 表格内容 -->
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>班级名称:</span>
                    <el-select v-model="value1" placeholder="请选择">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="right flex-between">
                    <button>导出EXCEL</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th rowspan="2">序号</th>
                        <th rowspan="2">实训内容</th>
                        <th rowspan="2">章节</th>
                        <th rowspan="2">关卡</th>
                        <th rowspan="2">最高分</th>
                        <th rowspan="2">最低分</th>
                        <th rowspan="2">平均分</th>
                        <th colspan="2">优秀（90-100）</th>
                        <th colspan="2">良好（80-90）</th>
                        <th colspan="2">中等（70-80）</th>
                        <th colspan="2">及格（60-70）</th>
                        <th colspan="2">不及格（0-60）</th>
                        <th rowspan="2">操作</th>
                    </tr>

                    <tr>
                        <th>人数</th>
                        <th>占比（%）</th>
                        <th>人数</th>
                        <th>占比（%）</th>
                        <th>人数</th>
                        <th>占比（%）</th>
                        <th>人数</th>
                        <th>占比（%）</th>
                        <th>人数</th>
                        <th>占比（%）</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td rowspan="15">词汇</td>
                        <td rowspan="4">基础篇</td>
                        <td>自我介绍文</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>日记</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>书信</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>贺年卡</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td rowspan="6">记述论述篇</td>
                        <td>说明文</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>感想文</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>记录文</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>演讲稿</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>9</td>
                        <td>研究报告</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>10</td>
                        <td>论文</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td rowspan="5">商务篇</td>
                        <td>初步建立关系</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>12</td>
                        <td>商务营销往来</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>13</td>
                        <td>商务问题处理</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>14</td>
                        <td>公司内部文件</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>15</td>
                        <td>社交文件</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>16</td>
                        <td rowspan="15">句式</td>
                        <td rowspan="4">基础篇</td>
                        <td>自我介绍文</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>17</td>
                        <td>日记</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>18</td>
                        <td>书信</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>19</td>
                        <td>贺年卡</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>20</td>
                        <td rowspan="6">记述论述篇</td>
                        <td>说明文</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>21</td>
                        <td>感想文</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>记录文</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>23</td>
                        <td>演讲稿</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>24</td>
                        <td>研究报告</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>25</td>
                        <td>论文</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>26</td>
                        <td rowspan="5">商务篇</td>
                        <td>初步建立关系</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>27</td>
                        <td>商务营销往来</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>28</td>
                        <td>商务问题处理</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>29</td>
                        <td>公司内部文件</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>

                    <tr>
                        <td>30</td>
                        <td>社交文件</td>
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
                        <td></td>
                        <td>
                            <button>查看报表</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- table end -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teawritemain" },
                { name: "课程结果分析", to: "" }
            ],
            tabs: [
                { name: "进度查询", to: "/teawriteprogressquery" },
                { name: "成绩查询", to: "/teawritegradequery" },
                { name: "结果分析", to: "/teawriteresultanalysis" }
            ],
            options1: [
                {
                    value: "选项1",
                    label: "class01"
                },
                {
                    value: "选项2",
                    label: "class02"
                }
            ],

            value1: ""
        };
    },

    mounted() {
        let breadcrumb = this.breadcrumb;
        let tabs = this.tabs;
        let n = 2;

        this.$emit("getData", { breadcrumb, tabs, n });
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
</style>
