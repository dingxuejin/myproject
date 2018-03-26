<template>
    <div>
        <div class="flex-between containersm">
            <div class="left flex-start">
                <div>
                    <span class="nowrap">班级:</span>
                </div>
                <div>
                    <el-input placeholder="请输入内容" clearable> </el-input>
                </div>
            </div>
            <div class="right flex-end btn-lan nowrap">
                <button>查询</button>
                <button>新增</button>
                <button>导入新增</button>
                <button>删除</button>
                <button>密码重置</button>
                <button>学生信息导出</button>
            </div>
        </div>

        <table class="table1">
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
                    <td class="btn-lv">
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
                    <td class="btn-lv"> 
                        <button>修改</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "TeaSpeStuMag"
};
</script>
<style scoped>
.containersm{
    margin: 10px 0;
}
.left>div{
    margin:0 5px;
}

</style>


