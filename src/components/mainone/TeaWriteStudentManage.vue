<template>
    <div class="inputTable">
        <!-- 表格内容 -->
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>班级:</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="right flex-between">
                    <button>查询</button>
                    <button>新增</button>
                    <button>导入新增</button>
                    <button>删除</button>
                    <button>密码重置</button>
                    <button>学生信息导出</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th style="width: 10%"></th>
                        <th style="width: 10%">编号</th>
                        <th style="width: 10%">学号</th>
                        <th style="width: 10%">姓名(中文)</th>
                        <th style="width: 25%">班级</th>
                        <th style="width: 10%">性别</th>
                        <th style="width: 25%">操作</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>1</td>
                        <td>sd01</td>
                        <td>张三</td>
                        <td>class01</td>
                        <td>女</td>
                        <td>
                            <button>修改</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>2</td>
                        <td>sd02</td>
                        <td>李四</td>
                        <td>class01</td>
                        <td>男</td>
                        <td>
                            <button>修改</button>
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
                { name: "学生管理", to: "" }
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
        this.$emit("getData", this.breadcrumb);
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


