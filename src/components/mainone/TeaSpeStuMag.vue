<template>
    <div>
        <div class="flex-between">
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

        <table class="table1" style="marginTop:10px;">
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
                        <button @click="isXiugai=true">修改</button>
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
                        <button @click="isXiugai=true">修改</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <el-dialog title="修改学生信息" :visible.sync="isXiugai" width="800px">

            <div class="tanchu1">
                <table>
                    <tr>
                        <td>学号:</td>
                        <td>
                            <el-input></el-input>
                            <span>*</span>
                        </td>

                    </tr>
                    <tr>
                        <td>真实姓名:</td>
                        <td>
                            <el-input></el-input>
                            <span>*</span>
                        </td>

                    </tr>
                    <tr>
                        <td>英文姓名:</td>
                        <td>
                            <el-input></el-input>
                        </td>

                    </tr>
                    <tr>
                        <td>所属班级:</td>
                        <td>
                            <el-select></el-select>
                            <span>*</span>
                        </td>

                    </tr>
                    <tr>
                        <td>性别:</td>
                        <td>
                            <el-select></el-select>
                        </td>

                    </tr>
                    <tr>
                        <td>手机号码:</td>
                        <td>
                            <el-input></el-input>
                        </td>

                    </tr>
                    <tr>
                        <td>电子邮箱:</td>
                        <td>
                            <el-input></el-input>
                        </td>

                    </tr>
                    <tr>
                        <td>备注:</td>
                        <td>
                            <el-input   type="textarea" rows="6" ></el-input>
                        </td>

                    </tr>
                </table>
            </div>
            <div class=" tanchu3 flex-center">
                <div class="btn-lan">
                    <button>保存</button>
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
  name: "TeaSpeStuMag",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "学生管理", to: "" }
      ],
      isXiugai: false
    };
  },
   mounted() {
    this.$emit("getData", this.breadcrumb);
  }
};
</script>
<style scoped>

.left > div {
  margin: 0 5px;
}
.tanchu1 {
  padding: 20px;
}
.tanchu3 {
  border-top: 1px solid #e3e3e3;
}
.tanchu3 button {
  margin: 20px 10px;
}
.tanchu1 > table {
  width: 100%;
  border: none;
}
.tanchu1 td {
  border: none;
  padding: 10px;
  white-space: nowrap;
}
.tanchu1 td:last-child > span {
  color: red;
}
.tanchu1 tr > td:last-child {
  text-align: left;
}
</style>


