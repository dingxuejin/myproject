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
                <button @click="shanchu()">删除</button>
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
                        <el-checkbox v-model='item.value'></el-checkbox>
                    </td>
                    <td>{{index+1}}</td>
                    <td>{{item.className}}</td>
                    <td>{{item.remark}}</td>
                    <td class="btn-lv">
                        <button class="edit" @click="isXiugai=true, query(item.xueid,index)">修改</button>
                        <button class="check" @click="chakan(item.xueid)">查看</button>
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
                            <td>{{chakanData.class_name}}</td>
                        </tr>
                        <tr>
                            <td class="nowrap">使用标识</td>
                            <td>{{chakanData.is_used==="1"?"启用":"禁用"}}</td>
                        </tr>
                        <tr>
                            <td class="nowrap">
                                <p>
                                    <span>备注</span>
                                </p>

                            </td>
                            <td>{{chakanData.remark}}</td>
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
                            <el-input placeholder="请输入班级名称" v-model="banji"></el-input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>备注</span>
                        </td>
                        <td>
                            <el-input type="textarea" rows="6" v-model="beizhu"></el-input>
                        </td>
                    </tr>
                </table>
            </div>
            <div class=" tanchu3 flex-center">
                <div class="btn-lan">
                    <button @click="edit(chakanData.teacher_id, chakanData.xueid), isXiugai=false">保存</button>
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
      banji: "",
      beizhu: "",
      allIds: [{ id: 1 }, { id: 5 }, { id: 2 }],

      // 所有要被删除的班级id
      Ids: [],
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "班级管理", to: "" }
      ],
      chakanData: {},
      isXiugai: false,
      isChaxun: false
    };
  },
  methods: {
    //网页加载时查出班级详情信息
    queryAll() {
      let that = this;
      this.$axios
        .post("busjapsys/tea/classes/class/classList")
        .then(function(res) {
          console.log("找到了", res);
          let allIds = res.data.results.classList;
          allIds = allIds.map(val => {
            val.value = false;
            return val;
          });
          that.allIds = allIds;
        });
    },

    // 教师添加班级
    add() {
      this.$axios
        .post(
          "busjapsys/tea/classes/class/addClass",
         {
            className: "商蓬网络",
            remark: "add测试",
            teacherId: 9527,
            isUsed: 1,
            createdUserId: 9527
          }
        )
        .then(res => {
          this.queryAll();
        })
        .then(res => {
          this.$message({
            message: "班级新增成功",
            type: "success"
          });
        });
    },

    // 修改数据前查看数据（检查确认用）
    query(e, n) {
      this.n = n;
      this.banji = this.allIds[n].className;
      this.beizhu = this.allIds[n].remark;
     
      this.$axios
        .post("busjapsys/tea/classes/class/toViewClass", data)
        .then(res => {
          this.chakanData = JSON.parse(res.data.results.classinfo);
          console.log(this.chakanData);
        });
    },

    // 教师修改班级
    edit(a, b) {
      this.$axios
        .post(
          "busjapsys/tea/classes/class/editClass",
         {
            className: this.banji,
            remark: this.beizhu,
            teacherId: a,
            id: b
          }
        )
        .then(res => {
          this.allIds[this.n].className = this.banji;
          this.allIds[this.n].remark = this.beizhu;
          this.$message({
            message: "班级修改成功",
            type: "success"
          });
        });
    },

    // 查看按钮 查出数据
    chakan(e) {
      this.isChaxun = true;
      console.log(e);
      let data = { id: e };

   
      this.$axios
        .post("busjapsys/tea/classes/class/toViewClass", data)
        .catch(err => {
        
          console.log(err);
        })
        .then(res => {
         
          this.chakanData = JSON.parse(res.data.results.classinfo);
          console.log(this.chakanData);
        });
    },

    // 删除班级
    shanchu() {
      let allIds = this.allIds;

      // 过滤得到所有被勾选的班级
      let newAllIds = allIds.filter(val => {
        return val.value === true;
      });

      // 拿到被勾选班级的id
      let newIds = newAllIds.map(val => {
        return val.xueid;
      });

      // 将newIds数组中的id用,拼接起来
      let data = this.$qs.stringify({ ids: newIds.join(",") });

      this.$axios
        .post("busjapsys/tea/classes/class/deleteClasss", data)
        .then(res => {
          this.queryAll();
        })
        .then(res => {
          this.$message({
            message: "班级删除成功",
            type: "success"
          });
        });
    }
  },
  updated() {},
  mounted() {
    this.$emit("getData", this.breadcrumb);
  },
  created() {
    this.queryAll();
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

