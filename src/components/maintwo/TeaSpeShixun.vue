<template>
    <div>
        <!-- 实训作业页面 -->
        <div class="flex-between">
            <div class="flex-start rv1">
                <div class="flex-start">
                    <div>
                        <span>班级</span>
                    </div>
                    <div>
                        <el-select></el-select>
                    </div>
                </div>
                <div class="flex-start">
                    <div>
                        <span>作业内容</span>
                    </div>
                    <div>
                        <el-input></el-input>
                    </div>
                </div>
                <div class="flex-start">
                    <div>
                        <span>发布时间</span>
                    </div>
                    <div>
                        <el-select></el-select>
                    </div>
                </div>

            </div>
            <div class="btn-lan flex-start">
                <button>查询</button>
                <button @click="uploadfile=true">新增</button>
            </div>
        </div>
        <div style="marginTop:10px;">
            <table class="table1">
                <thead>
                    <tr>
                        <th></th>
                        <th>班级</th>
                        <th>作业内容</th>
                        <th>发布时间</th>
                        <th>文件名</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in infoList" :key="index">
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>{{items.class_name}}</td>
                        <td>{{items.train_name}}</td>
                        <td>{{items.pub_time}}</td>
                        <td>{{items.file_name}}</td>
                        <td class="btn-lv">
                            <a class="download" :href="getUpfileUrl+'busjapsys/tea/train/traintea/download?fileName='+items.file_name+'&&teaId='+getUser.userid" :download="items.file_name">下载</a>
                            <button @click="isSign(items.xueid,items.sign)">{{items.sign==0?"发布":"取消发布"}}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-dialog title="文件上传" :visible.sync="uploadfile" width="900px">
            <div style="margin:20px auto; width:320px;text-align:left;">
                <el-upload ref="upload" :action="getUpfileUrl+'busjapsys/tea/train/traintea/addTrainTea'" :on-success="queryList" :data="{teacherId:getUser.userid,sign:sign,createdUserId:getUser.userid,trainName:'file',classId:1}" :auto-upload="false" :before-upload='beforeUpload'>

                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button style="margin-left: 30px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>

                    <div slot="tip" class="el-upload__tip">
                        <span>是否发布</span>
                        <el-select v-model="sign">
                            <el-option v-for=" (item,index) in option" :key="index" :label="item.label" :value="item.value">

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
    name: "TeaSpeShixun",
    data() {
        return {
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "口语平台", to: "/teaspe" },
                { name: "实训作业", to: "" }
            ],
            tabs: [
                { name: "实训作业", to: "/teaspeshixun" },
                { name: "学生实训作业", to: "/teaspestushixun" },
                { name: "最优推送", to: "/teaspeyou" }
            ],
            option: [
                { value: 0, label: "不发布" },
                { value: 1, label: "发布" }
            ],
            uploadfile: false,
            toSign: 0,
            sign: 0,
            infoList: []
        };
    },

    methods: {
        //   文件上传之前
        beforeUpload(file) {
            let that = this;
            let fileName = file.name;
            console.log("文件名", fileName);
            return new Promise((resolve, reject) => {
                this.$axios
                    .post("busjapsys/tea/train/traintea/checkName", {
                        fileName: fileName,
                        teacherId: that.getUser.userid
                    })
                    .then(res => {
                        if (res.data.results !== 0) {
                            this.$confirm(
                                "已存在相同名字的文件, 是否继续?",
                                "提示",
                                {
                                    confirmButtonText: "确定",
                                    cancelButtonText: "取消",
                                    type: "warning",
                                    center: true
                                }
                            )
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
        },
        // 页面创建时拉取教师资源列表
        queryList() {
            let that = this;
            this.$axios
                .post("busjapsys/tea/train/traintea/trainTeaList", {
                    teacherId: that.getUser.userid
                })
                .then(res => {
                    console.log("111", res);
                    this.infoList = res.data.results.trainTeaList;
                    console.log("拉取到信息了", this.infoList);
                });
        },

        isSign(xueid, sign) {
            let that = this;
            console.log(sign);
            if (sign == 0) {
                this.signYes(xueid);
            } else if (sign == 1) {
                this.signNo(xueid);
            } else {
                this.signNo(xueid);
            }
        },

        // 发布
        signYes(xueid) {
            this.$axios
                .post("busjapsys/tea/train/traintea/sign", {
                    id: xueid,
                    sign: 1
                })
                .then(res => {
                    this.queryList();
                });
        },

        // 取消发布
        signNo(xueid) {
            this.$axios
                .post("busjapsys/tea/train/traintea/sign", {
                    id: xueid,
                    sign: 0
                })
                .then(ren => {
                    this.queryList();
                });
        }
    },

    computed: {
        ...mapGetters(["getUser", "getUpfileUrl"])
    },
    mounted() {
        let tabs = this.tabs;
        let breadcrumb = this.breadcrumb;
        let n = 0;
        this.$emit("getData", { tabs, breadcrumb, n });
    },
    created() {
        this.queryList();
    }
};
</script>

<style scoped>
.rv1 > div,
.rv1 > div > div {
    margin: 0 5px;
}
.download {
    width: 90px;
    height: 35px;
    display: inline-block;
    background: #0f0;
    border-radius: 5px;
    overflow: hidden;
    line-height: 35px;
    margin: 0 auto;
    color: #fff;
    vertical-align: middle;
}
</style>
