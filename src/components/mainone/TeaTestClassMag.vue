<template>
  <div>
    <!-- 这是亿测吧班级管理页面 -->
    <div>
      <div class="flex-between">
        <div class="flex-start left">
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
          <tr v-for="(items, index) in allIds" :key="index">
            <td>
              <el-checkbox v-model="items.value"></el-checkbox>
            </td>
            <td>{{index+1}}</td>
            <td>{{items.className}}</td>
            <td>{{items.remark}}</td>
            <td class="btn-lv">
              <button class="edit" @click="isXiugai=true, query(items.xueid,index)">修改</button>
              <button class="check" @click="chakan(items.xueid)">查看</button>
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
                <td class="nowrap">使用知识</td>
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
                <el-input rows="6" type="textarea" v-model="beizhu"></el-input>
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
  </div>

</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: "TeaTestClassMag",
    data() {
        return {
            banji: "",
            beizhu: "",
            allIds: [],
            chakanData: [],
            Ids: [],
            isXiugai: false,
            isChaxun: false,
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "亿测吧", to: "/teatest" },
                { name: "班级管理", to: "" }
            ]
        };
    },
    computed: {
        ...mapGetters(["getUpfileUrl", "getUser"])
    },
    methods: {
        queryAll() {
            let that = this;
            this.$axios
                .post("busjapsys/tea/classes/class/classList", {
                    teacherId: that.getUser.userid
                })
                .then(res => {
                    this.allIds = this.allIds.map(val => {
                        val.value = false;
                        return val;
                    });
                    this.allIds = res.data.results.classList;
                    console.log("queryall", this.allIds);
                });
        },

        add() {
            let that = this;
            this.$axios
                .post("busjapsys/tea/classes/class/addClass", {
                    className: "班级名称",
                    remark: "备注",
                    schoolId: 9527,
                    teacherId: that.getUser.userid,
                    isUsed: 1,
                    createdUserId: 1
                })
                .then(res => {
                    this.queryAll();
                });
        },

        query(e, n) {
            this.n = n;
            this.banji = this.allIds[n].className;
            this.beizhu = this.allIds[n].remark;
            let data = { id: e };
            this.$axios
                .post("busjapsys/tea/classes/class/toViewClass", data)
                .then(res => {
                    this.chakanData = JSON.parse(res.data.results.classinfo);
                    console.log(this.chakanData);
                });
        },

        edit(a, b) {
            this.$axios
                .post("busjapsys/tea/classes/class/editClass", {
                    className: this.banji,
                    remark: this.beizhu,
                    teacherId: a,
                    id: b
                })
                .then(res => {
                    this.allIds[this.n].className = this.banji;
                    this.allIds[this.n].remark = this.beizhu;
                });
        },

        chakan(e) {
            this.isChaxun = true;
            console.log(e);
            let data = { id: e };
            this.$axios
                .post("busjapsys/tea/classes/class/toViewClass", data)
                .then(res => {
                    this.chakanData = JSON.parse(res.data.results.classinfo);
                    console.log(this.chakanData);
                });
        },

        shanchu() {
            let allIds = this.allIds;
            let newAllIds = allIds.filter(val => {
                return val.value === true;
            });
            let newIds = newAllIds.map(val => {
                return val.xueid;
            });
            let data = { ids: newIds.join(",") };
            this.$axios
                .post("busjapsys/tea/classes/class/deleteClasss", data)
                .then(res => {
                    this.queryAll();
                });
        }
    },
    created() {
        this.queryAll();
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
