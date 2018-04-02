<template>
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
                    <button>恢复默认</button>
                </div>

            </div>

            <table>
                    <tr>
                        <td rowspan="16">
                            <span>能力测评（单位%）</span>
                            <el-select></el-select>
                        </td>
                        <td rowspan="16">
                            <span>词汇（单位%）</span>
                            <el-select></el-select>
                        </td>
                        <td rowspan="5">
                            <span>基础篇（单位%）</span>
                            <el-select></el-select>
                        </td>
                        <td>关卡名称</td>
                        <td>分值占比（%）</td>
                    </tr>
                    <tr>
                        <td>自我介绍文</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>日记</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>书信</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>贺年卡</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="6">
                            <span>记述论述篇（单位%）</span>
                            <el-select></el-select>
                        </td>
                        <td>说明文</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>感想文</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>记录文</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>演讲稿</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>研究报告</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>论文</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="5">
                            <span>商务篇（单位%）</span>
                            <el-select></el-select>
                        </td>
                        <td>初步建立关系</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>商务营销往来</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>商务问题处理</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>公司内部文件</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>社交文件</td>
                        <td>
                            <el-select></el-select>
                        </td>
                    </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: "TeaSpeCjqz",
    data() {
        return {
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

            value: "",

            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "口语平台", to: "/teawritemain" },
                { name: "课程设置", to: "" }
            ],
            tabs: [
                { name: "。", to: "/" },
                { name: "。", to: "/" },
                { name: "。", to: "/" },
                { name: "。", to: "/" }
            ]
        };
    },
    mounted() {
        let tabs = this.tabs;
        let breadcrumb = this.breadcrumb;
        let n = 3;
        this.$emit("getData", { tabs, breadcrumb, n });
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



                