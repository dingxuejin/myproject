<template>
    <div class="containerClass">
        <div class="maincm">
            <div class="left flex-between">
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
                <button>新增</button>
                <button>删除</button>
            </div>
        </div>

        <table class="table1">
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
                <tr>
                    <td>

                        <el-checkbox></el-checkbox>

                    </td>
                    <td>1</td>
                    <td>class01</td>
                    <td>2017级商务日语一班</td>
                    <td class="btn-lv">
                        <button class="edit">修改</button>
                        <button class="check">查看</button>
                    </td>
                </tr>
                <tr>
                    <td>

                        <el-checkbox></el-checkbox>

                    </td>
                    <td>2</td>
                    <td>class02</td>
                    <td>2017级商务日语一班</td>
                    <td class="btn-lv">
                        <button class="edit" @click="isXiugai=true">修改</button>
                        <button class="check">查看</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <el-dialog title="班级详细信息" :visible.sync="isXiugai">

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
                <button>关闭</button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "TeaSpeClassMag",
    data() {
        return {
            isXiugai: false
        };
    }
};
</script>
<style scoped>
.containerClass {
    min-width: 670px;
}
.maincm {
    display: flex;
    justify-content: space-between;
}
.left > div {
    margin: 5px;
}
.tanchu2 {
    padding: 10px 20px;
}

.tanchu2 td {
    padding: 0 10px;
    text-align: left;
}
.tanchu2 tr > td:first-child {
    text-align: center;
}
.tanchu3 button{
    margin: 20px;
}
</style>

