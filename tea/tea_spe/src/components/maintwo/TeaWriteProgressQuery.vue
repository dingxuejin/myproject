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

                    <span>学生姓名：</span>
                    <input type="text" name="search" placeholder="支持模糊查询">

                    <span>学生学号：</span>
                    <input type="text" name="search" placeholder="支持模糊查询">
                </div>

                <div class="right">
                    <button>查询</button>
                </div>

            </div>

            <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>学号</th>
                        <th>学生姓名</th>
                        <th>进度情况</th>
                        <th>完成率（%）</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>201703002</td>
                        <td>张三</td>
                        <td>
                            <el-progress status="success" :text-inside="true" :stroke-width="12" :percentage="80"></el-progress>
                        </td>
                        <td>0.00</td>
                        <td>
                            <button>查看明细</button>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>201703002</td>
                        <td>李四</td>
                        <td>
                            <el-progress status="success" :text-inside="true" :stroke-width="12" :percentage="80"></el-progress>
                        </td>
                        <td>0.00</td>
                        <td>
                            <button>查看明细</button>
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
                { name: "进度查询", to: "" }
            ],

            tabs: [
                { name: "进度查询", to: "/teawriteprogressquery" },
                { name: "成绩查询", to: "/teawritegradequery" },
                { name: "结果分析", to: "/teawriteresultanalysis" }
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

            value:''
        };
    },

    mounted(){
        let breadcrumb = this.breadcrumb;
        let tabs = this.tabs;
        let n = 0;

        this.$emit('getData', {breadcrumb, tabs, n})
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

