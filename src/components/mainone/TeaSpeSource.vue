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
                <tr v-for="(items, index) in infoList" :key="index">
                    <td>
                        <el-checkbox></el-checkbox>
                    </td>
                    <td>{{index+1}}</td>
                    <td>{{items.prepdataName}}</td>
                    <td>{{items.prepdataSize}}</td>
                    <td>{{items.createTime}}</td>
                    <td>{{items.teacherId}}</td>
                    <td>{{items.teacherId}}</td>
                    <td>{{items.sign==0?"否":"是"}}</td>
                    <td>{{items.fileType}}</td>
                    <td class="btn-lv">
                        <button>下载</button>
                    </td>
                    <td class="btn-lv">
                        <button>发布</button>
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
            ],
            infoList: []
        };
    },
    computed: {
        ...mapGetters(["getUpfileUrl","getUser"])
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
            // console.log(this.$refs.upload);
            this.$refs.upload.submit();
            // 提交成功后拉取列表信息
            this.queryList();
        },
        // 页面创建时拉取教师资源列表
        queryList() {
            this.$axios
                .post("busjapsys/tea/prepdata/teaPrepdata/prepdataList", {
                    teacherId: 1
                })
                .then(res => {
                    this.infoList = res.data.results.teaPrepdataList;
                    // console.log("拉取到信息了", this.infoList);
                });
        }
    },
    mounted() {
        this.$emit("getData", this.breadcrumb);
    },
    created() {
        this.queryList();
    }
};
</script>
<style scoped>
.source1 > div,
.source1 > div > div {
    margin: 5px;
}
</style>


