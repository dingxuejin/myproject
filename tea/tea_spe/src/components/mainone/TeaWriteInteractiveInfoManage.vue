<template>
    <div class="inputTable">
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>班级:</span>
                    <el-select v-model="value1" placeholder="请选择">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>

                    <span>启用标识:</span>
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>

                </div>
                <div class="right flex-between">
                    <button>查询</button>
                    <button>新增</button>
                    <button>删除</button>
                    <button>启用</button>
                    <button>禁用</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th style="width: 10%"></th>
                        <th style="width: 10%">编号</th>
                        <th style="width: 10%">标题</th>
                        <th style="width: 10%">内容</th>
                        <th style="width: 25%">使用标识</th>
                        <th style="width: 15%">操作</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>1</td>
                        <td>调课</td>
                        <td>周三日语课调课</td>
                        <td>启用</td>
                        <td>
                            <button>修改</button>
                            <button>查看</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>2</td>
                        <td>停课</td>
                        <td>周三日语课调课</td>
                        <td>禁用</td>
                        <td>
                            <button>修改</button>
                            <button>查看</button>
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

            options2: [
                {
                    value: "选项1",
                    label: "全部"
                },
                {
                    value: "选项2",
                    label: "部分"
                }
            ],

            value1: "",
            value2: "",

            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teawritemain" },
                { name: "互动信息管理", to: "" }
            ]
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
