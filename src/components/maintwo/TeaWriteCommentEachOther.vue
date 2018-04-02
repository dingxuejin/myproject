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
                    <button type="text" @click="dialogVisible = true">互评占比</button>
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
                        <th>自评成绩</th>
                        <th>被评成绩</th>
                        <th>教师评成绩</th>
                        <th>系统评成绩</th>
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
                        <td>
                            <button>89</button>
                        </td>
                        <td>
                            <button>70</button>
                        </td>
                        <td>
                            <button>79</button>
                        </td>
                        <td>
                            <button>82</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>2</td>
                        <td>201703008</td>
                        <td>李四</td>
                        <td>单句翻译</td>
                        <td>基础题</td>
                        <td>自我介绍文</td>
                        <td>
                            <button>89</button>
                        </td>
                        <td>
                            <button>70</button>
                        </td>
                        <td>
                            <button>79</button>
                        </td>
                        <td>
                            <button>82</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <el-dialog :visible.sync="dialogVisible" width="20%" :before-close="handleClose">
            <div>
                <table class="table1">

                    <tr>
                        <td>互评</td>
                        <td>分值(%)</td>
                    </tr>

                    <tr>
                        <td>自评</td>
                        <td>
                            <el-select v-model="value1" placeholder="请选择">
                                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>

                    <tr>
                        <td>别人评</td>
                        <td>
                            <el-select v-model="value2" placeholder="请选择">
                                <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>

                    <tr>
                        <td>教师评</td>
                        <td>
                            <el-select v-model="value3" placeholder="请选择">
                                <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>

                    <tr>
                        <td>系统</td>
                        <td>
                            <el-select v-model="value4" placeholder="请选择">
                                <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>

                </table>
            </div>

            <span slot="footer" class="dialog-footer">
                <div class="button flex-center">
                    <el-button @click="dialogVisible = false" class="button1">保存</el-button>
                </div>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,

            breadcrumb:[
                {name:'首页', to:'/'},
                {name:'写作平台', to:'/teawritemain'},
                {name:"互评管理", to:''}
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

            options1: [
                {
                    value: "选项1",
                    label: "0"
                },
                {
                    value: "选项2",
                    label: "50"
                },
                {
                    value: "选项3",
                    label: "60"
                },
                {
                    value: "选项4",
                    label: "80"
                },
                {
                    value: "选项5",
                    label: "100"
                }
            ],

            options2: [
                {
                    value: "选项1",
                    label: "0"
                },
                {
                    value: "选项2",
                    label: "50"
                },
                {
                    value: "选项3",
                    label: "60"
                },
                {
                    value: "选项4",
                    label: "80"
                },
                {
                    value: "选项5",
                    label: "100"
                }
            ],

            options3: [
                {
                    value: "选项1",
                    label: "0"
                },
                {
                    value: "选项2",
                    label: "50"
                },
                {
                    value: "选项3",
                    label: "60"
                },
                {
                    value: "选项4",
                    label: "80"
                },
                {
                    value: "选项5",
                    label: "100"
                }
            ],

            options4: [
                {
                    value: "选项1",
                    label: "0"
                },
                {
                    value: "选项2",
                    label: "50"
                },
                {
                    value: "选项3",
                    label: "60"
                },
                {
                    value: "选项4",
                    label: "80"
                },
                {
                    value: "选项5",
                    label: "100"
                }
            ],
            value: "",
            value0: "",
            value1: "",
            value2: "",
            value3: "",
            value4: "",
        };
    },

    mounted(){
        this.$emit('getData', this.breadcrumb)
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

.button1 {
    width: 120px;
    height: 42px;
    color: #fff;
    background-image: url("../../../static/images/classmanage/bluebutton.png");
    background-size: 100% 100%;
    border: none;
    margin-left: 10px;
}

.table1{
    border: none;
}

.table1 td{
    border: none;
}
</style>
