<template>
    <div>
        <div class="flex-between source1">
            <div class="flex-start">
                <span class="nowrap">资源名称:</span>
                <el-input placeholder="请输入内容" clearable>
                </el-input>
            </div>
            <div class="flex-end btn-lan">
                <button>查询</button>
                <button @click="uploadfile=true">新增</button>
                <button>查看</button>
            </div>
        </div>

        <table class="table1">
            <thead>
                <tr>
                    <th style="width: 5%"></th>
                    <th style="width: 5%">编号</th>
                    <th style="width: 10%">资源名称</th>
                    <th style="width: 10%">文件大小</th>
                    <th style="width: 15%">上传时间</th>
                    <th style="width: 10%">上传人</th>
                    <th style="width: 10%">最新修改人</th>
                    <th style="width: 5%">是否发布</th>
                    <th style="width: 10%">文件类型</th>
                    <th style="width: 10%">资源下载</th>
                    <th style="width: 10%">操作</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        <el-checkbox></el-checkbox>
                    </td>
                    <td>1</td>
                    <td>商务日语资源一</td>
                    <td>628.0KB</td>
                    <td>2017-07-04 13:57:17</td>
                    <td>td01</td>
                    <td>td01</td>
                    <td>否</td>
                    <td>正常文件</td>
                    <td class="btn-lv">
                        <button>下载</button>
                    </td>
                    <td class="btn-lv">
                        <button>发布</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <el-checkbox></el-checkbox>
                    </td>
                    <td>2</td>
                    <td>商务日语资源二</td>
                    <td>720KB</td>
                    <td>2017-07-06 15:54:20</td>
                    <td>td02</td>
                    <td>td02</td>
                    <td>是</td>
                    <td>正常文件</td>
                    <td class="btn-lv">
                        <button>下载</button>
                    </td>
                    <td class="btn-lv">
                        <button>取消发布</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <el-dialog title="文件上传" :visible.sync="uploadfile" width="900px">
            <div style="margin:20px auto; width:320px;text-align:left;">
                <el-upload ref="upload" :action="getUpfileUrl+'busjapsys/tea/prepdata/teaPrepdata/addPrepdata'" :data="{teacherId:getUser.userid,sign:sign,createdUserId:getUser.userid}" name='file' :auto-upload="false" :before-upload='beforeUpload'>

                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button style="margin-left: 30px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>

                    <div slot="tip" class="el-upload__tip">
                        <span>是否发布</span>
                        <el-select v-model="sign">
                            <el-option v-for=" item in option" :key="item" :label="item.label" :value="item.value">

                            </el-option>
                        </el-select>
                    </div>
                </el-upload>
            </div>

        </el-dialog>

    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TeaSpeSource",

  data() {
    return {
      sign: 0,
      option: [{ value: 0, label: "不发布" }, { value: 1, label: "发布" }],
      uploadfile: false,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "教学资源", to: "" }
      ]
    };
  },
  computed: {
    ...mapGetters(["getUpfileUrl", "getUser"])
  },
  methods: {
    //   文件上传之前
    beforeUpload(file) {
      let that = this;
      let isGoUpload = true;
      let index = file.name.lastIndexOf(".");
      let fileName = file.name.slice(0, index);
      let fileType = file.name.slice(index + 1);
      return new Promise((resolve, reject) => {
        this.$axios
          .post("busjapsys/tea/prepdata/teaPrepdata/checkName", {
            prepdataName: fileName,
            fileType: fileType,
            teacherId: that.getUser.userid
          })
          .then(res => {
            if (res.data.results !== 0) {
              this.$confirm("已存在相同名字的文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
                center: true
              })
                .then(() => {
                  resolve();
                })
                .catch(() => {
                  reject();
                });
            } else {
              resolve();
            }
          });
      });
    },
    //   文件上传
    submitUpload() {
      this.$refs.upload.submit();
    }
  },
  mounted() {
    this.$emit("getData", this.breadcrumb);
  }
};
</script>
<style scoped>
.source1 > div,
.source1 > div > div {
  margin: 5px;
}
</style>


