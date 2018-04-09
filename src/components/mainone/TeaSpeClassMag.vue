<template>
    <div>
        <div class="flex-between">
            <div class="left flex-start">
                <div>
                    <span>班级名称:</span>
                </div>
                <div>
                    <el-input placeholder="支持模糊查询" clearable>
                    </el-input>
                </div>

            </div>
            <div class="right flex-end btn-lan">
                <button>查询</button>
                <button @click="add()">新增</button>
                <button>删除</button>
            </div>
        </div>

        <table class="table1" style="marginTop:10px;">
            <thead>
                <tr>
                    <th></th>
                    <th>编号</th>
                    <th>班级名称</th>
                    <th>备注</th>
                    <th>操作</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item,index) in allIds" :key="index">
                    <td>
                        <el-checkbox></el-checkbox>
                    </td>
                    <td>{{index+1}}</td>
                    <td>{{item.className}}</td>
                    <td>{{item.remark}}</td>
                    <td class="btn-lv">
                        <button class="edit" @click="edit(item.id)">修改</button>
                        <button class="check" @click="isChaxun=true">查看</button>
                    </td>
                </tr>

            </tbody>
        </table>
        <el-dialog title="班级详细信息" :visible.sync="isChaxun" width="800px">

            <div class="tanchu2">
                <table class="table1">
                    <tbody>
                        <tr>
                            <td class="nowrap">班级名称</td>
                            <td>class1</td>
                        </tr>
                        <tr>
                            <td class="nowrap">使用知识</td>
                            <td>启用</td>
                        </tr>
                        <tr>
                            <td class="nowrap">
                                <p>
                                    <span>备注</span>
                                </p>

                            </td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laboriosam totam dolor consequuntur tempora autem quos sapiente eos fuga suscipit laborum, est expedita sint fugit consectetur asperiores consequatur iste animi?</td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div class="btn-hui tanchu3">
                <button @click="isChaxun=false">关闭</button>
            </div>
        </el-dialog>
        <el-dialog title="班级修改" :visible.sync="isXiugai" width="800px">

            <div class="tanchu4">
                <table>
                    <tr>
                        <td>
                            <span>班级名称</span>
                            <span class="danger">*</span>
                        </td>
                        <td>
                            <el-input placeholder="请输入班级名称"></el-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>备注</span>
                        </td>
                        <td>
                            <el-input type="textarea" rows="6"></el-input>
                        </td>
                    </tr>
                </table>
            </div>
            <div class=" tanchu3 flex-center">
                <div class="btn-lan">
                    <button @click="isXiugai=false">保存</button>
                </div>
                <div class="btn-hui">
                    <button @click="isXiugai=false">关闭</button>
                </div>

            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "TeaSpeClassMag",
    data() {
        return {
            allIds: [{ id: 1 }, { id: 5 }, { id: 2 }],
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "口语平台", to: "/teaspe" },
                { name: "班级管理", to: "" }
            ],
            isXiugai: false,
            isChaxun: false
        };
    },
    methods: {
        // 教师添加班级
        add() {
            this.$axios
                .post(
                    "busjapsys/tea/classes/class/addClass",
                    this.$qs.stringify({
                        className: "商蓬网络",
                        remark: "add测试",
                        teacherId: 9527,
                        isUsed: 1,
                        createdUserId: 9527
                    })
                )
                .then(function(res) {
                    console.log(res);
                });
        },

        // 教师修改班级
        edit(e) {
            this.$axios
                .post(
                    "busjapsys/tea/classes/class/editClass",
                    this.$qs.stringify({
                        className: "商蓬网络",
                        remark: "edit测试",
                        teacherId: 9527,
                        isUsed: 1,
                        createdUserId: 9527,
                        id: e
                    })
                )
                .then(function(res) {
                    console.log(res);
                });
            this.isXiugai = true;
        }
    },
    updated() {},
    mounted() {
        this.$emit("getData", this.breadcrumb);
    },
    created() {
        let that = this;
        //网页加载时查出班级详情信息
        this.$axios
            .post("busjapsys/tea/classes/class/classList")
            .then(function(res) {
                console.log("找到了", res);
                that.allIds = res.data.results.classList;
            });
    }
};
</script>
<style scoped>
.left > div {
    margin: 0 5px;
}
.tanchu2,
.tanchu4 {
    padding: 20px;
}

.tanchu2 td {
    padding: 0 10px;
    text-align: left;
}
.tanchu2 tr > td:first-child {
    text-align: center;
}
.tanchu3 {
    border-top: 1px solid #e3e3e3;
}
.tanchu3 button {
    margin: 20px 10px;
}
.tanchu4 table {
    width: 100%;
    border: none;
}
.tanchu4 tr > td:first-child {
    text-align: center;
}
.tanchu4 td {
    border: none;
    padding: 10px 0;
}
.danger {
    color: #f56c6c;
}
</style>

