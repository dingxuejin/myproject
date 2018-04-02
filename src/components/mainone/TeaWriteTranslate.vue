<template>
<!-- 翻译题 -->
    <div class="inputTable">
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>课程名称：</span>
                    <input type="text" name="search" placeholder="支持模糊查询">

                    <span>课程章节名称：</span>
                    <input type="text" name="search" placeholder="支持模糊查询">
                </div>

                <div class="right">
                    <button>查询</button>
                    <button>新增</button>
                    <button>导入题目</button>
                </div>

            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>编号</th>
                        <th>课程名称</th>
                        <th>课程章节</th>
                        <th>题目类型</th>
                        <th>题目名称</th>
                        <th style="width:25%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>1</td>
                        <td>新经典日本语</td>
                        <td>初次聚餐</td>
                        <td>单选题</td>
                        <td>实训四单选题1</td>
                        <td>
                            <button type="text" @click="dialogVisible = true">编辑</button>
                            <button>预览</button>
                            <button>删除</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>2</td>
                        <td>新经典日本语</td>
                        <td>初次聚餐</td>
                        <td>单选题</td>
                        <td>实训四单选题2</td>
                        <td>
                            <button type="text" @click="dialogVisible = true">编辑</button>
                            <button>预览</button>
                            <button>删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-dialog :visible.sync="dialogVisible" width="65%" :before-close="handleClose">
            <span>课程名称：</span>
            <el-select v-model="value1" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <span>课程章节名称：</span>
            <el-select v-model="value2" placeholder="请选择">
                <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <span>题目类型：</span>
            <el-select v-model="value3" placeholder="请选择">
                <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <span>使用标识：</span>
            <el-radio v-model="radio" label="1">启用</el-radio>
            <el-radio v-model="radio" label="2">停用</el-radio>

            <div>
                <table  class="table1">
                    <tr>
                        <td style="text-align:right; width:30%">翻译内容：</td>
                        <td>
                            <div class="input">
                                <el-input placeholder="题目内容" v-model="input1" clearable></el-input>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style="text-align:right">翻译：</td>
                        <td style="text-align:left">
                            <textarea name="" id="" cols="30" rows="10" style="resize:none; width:60%; box-sizing:border-box"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td style="text-align:right">正确答案：</td>
                        <td style="text-align:left">
                            <textarea name="" id="" cols="30" rows="10" style="resize:none; width:60%; box-sizing:border-box"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td style="text-align:right">答案解析：</td>
                        <td style="text-align:left">
                            <textarea name="" id="" cols="30" rows="10" style="resize:none; width:60%; box-sizing:border-box"></textarea>
                        </td>
                    </tr>

                </table>
            </div>

            <span slot="footer" class="dialog-footer">
                <div class="button flex-center">
                    <el-button @click="dialogVisible = false" class="button1">保存</el-button>
                    <el-button class="button1">重置</el-button>
                    <el-button @click="dialogVisible = false" class="button1">关闭</el-button>
                </div>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumb:[
                {name:'首页', to:'/'},
                {name:'口语平台', to:'/teawritemain'},
                {name:'翻译题', to:''}
            ],

            dialogVisible: false,
            radio: "1",
            options1: [
                {
                    value: "选项1",
                    label: "新经典日本语"
                },
                {
                    value: "选项2",
                    label: "新经典日本语"
                },
                {
                    value: "选项3",
                    label: "新经典日本语"
                },
                {
                    value: "选项4",
                    label: "新经典日本语"
                },
                {
                    value: "选项5",
                    label: "新经典日本语"
                }
            ],

            options2: [
                {
                    value: "选项1",
                    label: "初次聚餐"
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

            options3: [
                {
                    value: "选项1",
                    label: "多选题"
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
            value1: "",
            value2: "",
            value3: "",

            //input框
            input1: "",
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
.el-dialog__headerbtn .el-dialog__close {
    color: #000;
}

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

.input {
    width: 60%;
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

