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
                <button @click="add()">新增</button>
                <button>导入新增</button>
                <button @click="shanchu()">删除</button>
                <button>密码重置</button>
                <button @click="daochu()">学生信息导出</button>
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
                <tr v-for="(items, index) in allIds" :key="index">
                    <td>
                        <el-checkbox v-model='items.value'></el-checkbox>
                    </td>
                    <td>{{index+1}}</td>
                    <td>{{items.stnumber}}</td>
                    <td>{{items.realname}}</td>
                    <td>{{items.class_name}}</td>
                    <td>{{items.sex}}</td>
                    <td class="btn-lv">
                        <button @click="isXiugai=true, query(items.xueid, index)">修改</button>
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
                            <el-input v-model="xuehao"></el-input>
                            <span>*</span>
                        </td>

                    </tr>
                    <tr>
                        <td>真实姓名:</td>
                        <td>
                            <el-input v-model="name"></el-input>
                            <span>*</span>
                        </td>

                    </tr>
                    <tr>
                        <td>英文姓名:</td>
                        <td>
                            <el-input v-model="nameen"></el-input>
                        </td>

                    </tr>
                    <tr>
                        <td>所属班级:</td>
                        <td>
                            <el-select v-model="banji">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item">
                                </el-option>
                            </el-select>
                            <span>*</span>
                        </td>

                    </tr>
                    <tr>
                        <td>性别:</td>
                        <td>
                            <el-select v-model="sex">
                                <el-option v-for="item in options1" :key="item.value1" :label="item.label1" :value="item.label1">
                                </el-option>
                            </el-select>
                        </td>

                    </tr>
                    <tr>
                        <td>手机号码:</td>
                        <td>
                            <el-input v-model="tel"></el-input>
                        </td>

                    </tr>
                    <tr>
                        <td>电子邮箱:</td>
                        <td>
                            <el-input v-model="email"></el-input>
                        </td>

                    </tr>
                    <tr>
                        <td>备注:</td>
                        <td>
                            <el-input type="textarea" rows="6" v-model="remark"></el-input>
                        </td>

                    </tr>
                </table>
            </div>
            <div class=" tanchu3 flex-center">
                <div class="btn-lan">
                    <button style='width:105px;height:40px;' @click="edit()">保存</button>
                </div>
                <div class="btn-hui">
                    <button @click="isXiugai=false" style='width:105px;height:40px;'>关闭</button>
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
            xueid: -1000,
            xuehao: -989898,
            name: "",
            nameen: "",
            banji: {
                value: -1,
                label: ""
            },
            banjiid: -888,
            sex: "",
            tel: "",
            email: "",
            remark: "",
            chakanData: [],
            allIds: [],
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teaspe" },
                { name: "学生管理", to: "" }
            ],
            isXiugai: false,

            options: [
                {
                    value: "选项1",
                    label: "黄金糕"
                },
                {
                    value: "选项2",
                    label: "双皮奶"
                },
                {
                    value: "选项3",
                    label: "蚵仔煎"
                },
                {
                    value: "选项4",
                    label: "龙须面"
                },
                {
                    value: "选项5",
                    label: "北京烤鸭"
                }
            ],

            options1: [
                {
                    value1: "选项1",
                    label1: "男"
                },
                {
                    value1: "选项2",
                    label1: "女"
                }
            ]
        };
    },
    mounted() {
        this.$emit("getData", this.breadcrumb);
    },
    methods: {
        queryAll() {
            let that = this;
            this.$axios.post("busjapsys/tea/user/user/userList").then(res => {
                let allIds = res.data.results.userList;
                allIds = allIds.map(val => {
                    val.value = false;
                    return val;
                });
                console.log("allIds", allIds);
                that.allIds = allIds;
            });
        },

        add() {
            this.$axios
                .post("busjapsys/tea/user/user/addUser", {
                    username: "dingxuejin",
                    realname: "丁学进",
                    stnumber: "007",
                    userpassword: "dingxuejin",
                    usertype: 1,
                    sex: "男",
                    classId: "9527",
                    lessId: 1,
                    isvalIdate: 1,
                    tel: 110,
                    realNameEn: "ding",
                    isUsed: 1,
                    remark: "aaa",
                    createdUserId: 1
                })
                .then(res => {
                    this.queryAll();
                });
        },

        query(e, n) {
            this.n = n;
            this.xueid = e;
            this.xuehao = this.allIds[n].stnumber;
            this.name = this.allIds[n].username;
            console.log(this.allIds[n]);
            let data = { id: e };
            this.$axios
                .post("busjapsys/tea/user/user/toViewUser", data)
                .then(res => {
                    console.log("chakandata", res.data.results);
                    this.chakanData = res.data.results.userinfo;
                });
            this.$axios
                .post("busjapsys/tea/user/user/userList")
                .then(res => {
                    console.log("classlist", res.data.results.userList);
                    let sb =  res.data.results.userList;
                    this.options = sb.map(function(val, index, arr) {
                        let item = { value: val.xueid, label: val.class_name };
                        return item;
                    });
                });
        },

        edit() {
            let that = this;
            console.log(this.banji.value);
            this.$axios
                .post("busjapsys/tea/user/user/editUser", {
                    realname: this.name,
                    stnumber: this.xuehao,
                    email: this.email,
                    sex: this.sex,
                    classId: this.banji.value,
                    tel: this.tel,
                    realNameEn: this.nameen,
                    remark: this.remark,
                    updatedUserId: 1,
                    id: that.xueid
                })
                .then(res => {
                    console.log(this.banji);
                    this.allIds[this.n].realname = this.name;
                    this.allIds[this.n].class_id = this.banji.value;
                    this.allIds[this.n].class_name = this.banji.label;
                    this.allIds[this.n].sex = this.sex;
                    this.allIds[this.n].stnumber = this.xuehao;
                    that.isXiugai = false;
                });
        },

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

            let data = { ids: newIds.join(",") };
            this.$axios
                .post("busjapsys/tea/user/user/deleteUsers", data)
                .then(res => {
                    this.queryAll();
                })
                .then(res => {});
        },

        daochu() {
            this.$axios.get("busjapsys/tea/user/user/export", {
                userType: 1
            });
        }
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


