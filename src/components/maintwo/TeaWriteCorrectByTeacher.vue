<template>
    <div class="inputTable">
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>实训内容：</span>
                    <el-select v-model="value" placeholder="请选择实训内容">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>

                    <span>级别：</span>
                    <el-select v-model="value0" placeholder="请选择">
                        <el-option v-for="item in options0" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>

                    <span>学生姓名：</span>
                    <input type="text" name="search" placeholder="请输入关键字">
                </div>

                <div class="right">
                    <button>查询</button>
                </div>

            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>编号</th>
                        <th>学号</th>
                        <th>学生姓名</th>
                        <th>实训内容</th>
                        <th>章节</th>
                        <th>关卡</th>
                        <th>提交时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>1</td>
                        <td>201703002</td>
                        <td>张三</td>
                        <td>单句翻译</td>
                        <td>基础题</td>
                        <td>自我介绍文</td>
                        <td>2017-07-06 16:30:12</td>
                        <td>
                            <button type="text" @click="dialogVisible = true">批改</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>2</td>
                        <td>201703002</td>
                        <td>李四</td>
                        <td>单句翻译</td>
                        <td>基础题</td>
                        <td>自我介绍文</td>
                        <td>2017-07-06 16:30:12</td>
                        <td>
                            <button type="text" @click="dialogVisible = true">批改</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <el-dialog :visible.sync="dialogVisible" width="60%" :before-close="handleClose">

            <div class="flex-center">
                <div style="padding:0px 10px">
                    <div class="flex-start">
                        基础篇>>自我介绍文
                    </div>

                    <table class="table1">
                        <tr>
                            <td style="width:70%">1.what is your name</td>
                            <td rowspan="2" class="white">
                                <el-select></el-select>
                            </td>
                        </tr>
                        <tr>
                            <td class="white">你叫什么名字</td>
                        </tr>
                    </table>

                    <table class="table1">
                        <tr>
                            <td style="width:70%">2.what is your name</td>
                            <td rowspan="2" class="white">
                                <el-select></el-select>
                            </td>
                        </tr>
                        <tr>
                            <td class="white">你叫什么名字</td>
                        </tr>
                    </table>

                    <table class="table1">
                        <tr>
                            <td style="width:70%">3.what is your name</td>
                            <td rowspan="2" class="white">
                                <el-select></el-select>
                            </td>
                        </tr>
                        <tr>
                            <td class="white">你叫什么名字</td>
                        </tr>
                    </table>

                    <table class="table1">
                        <tr>
                            <td style="width:70%">4.what is your name</td>
                            <td rowspan="2" class="white">
                                <el-select></el-select>
                            </td>
                        </tr>
                        <tr>
                            <td class="white">你叫什么名字</td>
                        </tr>
                    </table>

                    <table class="table1">
                        <tr>
                            <td style="width:70%">5.what is your name</td>
                            <td rowspan="2" class="white">
                                <el-select></el-select>
                            </td>
                        </tr>
                        <tr>
                            <td class="white">你叫什么名字</td>
                        </tr>
                    </table>

                    <div style="margin:30px 0px">
                        <el-pagination background layout="prev, pager, next" :total="30">
                        </el-pagination>
                    </div>

                </div>

                <div style="padding:0px 10px; width:40%" class="flex-between nowrap">
                    <div class="one">
                        <img src="../../assets/info/xinxiban.png" alt="">
                        <p>总分</p>
                        <div class="input1">
                            <el-input placeholder="请输入成绩" style="width:150px"></el-input>
                        </div>
                    </div>

                    <div class="correct flex-center">
                        <table>
                            <tr>
                                <td>
                                    批改工具：
                                </td>
                                <td>
                                    <img src="../../assets/correct/shanchu.png" alt="">
                                </td>
                                <td>
                                    <img src="../../assets/correct/charu.png" alt="">
                                </td>
                                <td>
                                    <img src="../../assets/correct/tihuan.png" alt="">
                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                                <td>
                                    <img src="../../assets/correct/fenhang.png" alt="">
                                </td>
                                <td>
                                    <img src="../../assets/correct/yidong.png" alt="">
                                </td>
                                <td>
                                    <img src="../../assets/correct/zhushi.png" alt="">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4">
                                    <button class="blue">原做题</button>
                                    <button class="blue">答案参考</button>
                                    <button class="blue">批改界面</button>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4">互评评语：</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="save">
                        <button type="text" @click="dialogVisible = false">保存</button>
                    </div>
                </div>
            </div>

        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,

            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teawritemain" },
                { name: "单句翻译批改", to: "" }
            ],

            tabs: [
                { name: "单句翻译批改", to: "/teawritecorrectbyteacher" },
                { name: "写作实践批改", to: "/teawritepracticecorrect" }
            ],

            options: [
                {
                    value: "选项1",
                    label: "日语口语"
                },
                {
                    value: "选项2",
                    label: "日语写作"
                }
            ],

            options0: [
                {
                    value: "选项1",
                    label: "A-D"
                },
                {
                    value: "选项2",
                    label: "E-F"
                }
            ],

            value: "",
            value0: ""
        };
    },

    mounted() {
        let breadcrumb = this.breadcrumb;
        let tabs = this.tabs;
        let n = 0;

        this.$emit("getData", { breadcrumb, tabs, n });
    },

    methods: {
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        }
    }
};
</script>

<style scoped>
.containerClass {
    min-width: 670px;
    margin: 5px 0px;
}

.maincm {
    display: flex;
    justify-content: space-between;
}

.left input {
    width: 230px;
    height: 42px;
    border-radius: 5px;
    border: 1px solid #cdcdcd;
}

.right button {
    width: 120px;
    height: 42px;
    color: #fff;
    background-image: url("../../../static/images/classmanage/bluebutton.png");
    background-size: 100% 100%;
    border: none;
    margin-left: 10px;
}

table {
    border: 1px solid #bbe0fb;
    width: 100%;
    margin-top: 20px;
    background-color: #f7fbfe;
}

table td {
    text-align: center;
    border: 1px solid #bbe0fb;
}

span {
    margin: 0px 10px;
}

.table1 .white {
    background-color: #fff;
}

.one {
    position: relative;
}

.one p {
    position: absolute;
    top: 6px;
    left: 0px;
    right: 0px;
    margin: auto;
}

.one .input1 {
    position: absolute;
    bottom: -10px;
}

.one .input1 el-input {
    border: none;
}

.flex-between {
    flex-wrap: wrap;
}

.flex-between div {
    width: 100%;
    margin: 10px 0px;
}

.save button {
    width: 120px;
    height: 42px;
    color: #fff;
    background-image: url("../../../static/images/classmanage/bluebutton.png");
    background-size: 100% 100%;
    border: none;
    margin-left: 10px;
}

textarea {
    resize: none;
    width: 64%;
}

.correct {
    text-align: center;
}

.correct table {
    width: 60%;
    border: none;
}

.correct table td {
    border: none;
    background: #fff;
    text-align: left;
}

.correct .blue {
    width: 100px;
    height: 40px;
    background: #149dfd;
    border-radius: 10px;
}
</style>
