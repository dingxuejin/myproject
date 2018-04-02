<template>
<!-- 课程设置-能力测评 -->
    <div class="inputTable">
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>班级：</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="right">
                    <button>保存</button>
                    <button>课程重置</button>
                    <button>课程全部重置</button>
                </div>

            </div>

            <table>
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>实训内容</th>
                        <th>章节</th>
                        <th colspan="2">关卡名称</th>
                        <th colspan="2">关卡启用</th>
                        <th colspan="2">答案设置</th>
                        <th>分值设定(单位:%)</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                            <button>全选择</button>
                        </th>
                        <th>
                            <button>全取消</button>
                        </th>
                        <th>
                            <button>全开放</button>
                        </th>
                        <th>
                            <button>全关闭</button>
                        </th>
                        <th>
                            <button>全开放</button>
                        </th>
                        <th>
                            <button>全关闭</button>
                        </th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td rowspan="15">词汇</td>
                        <td rowspan="4">基础篇</td>
                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>自我介绍文</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>

                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>日记</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>

                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>书信</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>贺年卡</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td rowspan="6">论述记述篇</td>
                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>说明文</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>感想文</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>

                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>记录文</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>

                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>演讲稿</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>9</td>

                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>研究报告</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>10</td>

                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>论文</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td rowspan="5">商务篇</td>
                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>初步建立关系</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>12</td>

                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>商务营销往来</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>13</td>

                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>商务问题处理</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>14</td>

                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>公司内部文件</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>15</td>

                        <td colspan="2">
                            <div>
                                <el-checkbox></el-checkbox>
                                <span>社交文件</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>开放</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-radio></el-radio>
                                <span>关闭</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <el-select></el-select>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teawritemain" },
                { name: "课程设置-能力测评", to: "" }
            ],

            tabs: [
                { name: "。", to: "/" },
                { name: "。", to: "/" },
                { name: "。", to: "/" }
            ],

            options: [
                {
                    value: "选项1",
                    label: "class01"
                },
                {
                    value: "选项2",
                    label: "class02"
                }
            ],

            value: ""
        };
    },

    mounted() {
        let breadcrumb = this.breadcrumb;
        let tabs = this.tabs;
        let n = 0;

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

table button {
    width: 120px;
    height: 42px;
    color: #fff;
    background-image: url("../../../static/images/classmanage/greenbutton.png");
    background-size: 100% 100%;
    border: none;
    margin-left: 10px;
}

table td {
    text-align: center;
    border: 1px solid #bbe0fb;
}

span {
    margin: 0px 10px;
}
</style>

