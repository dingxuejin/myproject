<template>
    <!-- 课内习题添加 -->
    <div>
        <div class="flex-between ">
            <div class="flex-start fbnk1">
                <div class="flex-start">
                    <div>
                        <span class="nowrap">课程名称:</span>
                    </div>
                    <div>
                        <el-input placeholder="请输入内容" clearable>
                        </el-input>
                    </div>
                </div>

                <div class="flex-start">
                    <div>
                        <span class="nowrap">课程章节名称:</span>
                    </div>
                    <div>
                        <el-input placeholder="请输入内容" clearable>
                        </el-input>
                    </div>
                </div>

            </div>
            <div class="right btn-lan nowrap">
                <button>查询</button>
                <button @click="visible=true">新增</button>
                <button>导入题目</button>
            </div>
        </div>

        <table class="table1">
            <thead>
                <tr>
                    <th style="width: 10%"></th>
                    <th style="width: 10%"></th>
                    <th style="width: 15%">课程名称</th>
                    <th>课程章节</th>
                    <th style="width: 10%">题目类型</th>
                    <th style="width: 15%">题目名称</th>
                    <th style="width: 25%">操作</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        <el-checkbox/>
                    </td>
                    <td>1</td>
                    <td>新经典日本语</td>
                    <td>初次聚餐</td>
                    <td>单选题</td>
                    <td>实训五单选题1</td>
                    <td class="btn-lv nowrap">
                        <button>编辑</button>
                        <button>预览</button>
                        <button>删除</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <el-checkbox/>
                    </td>
                    <td>2</td>
                    <td>新经典日本语</td>
                    <td>初次聚餐</td>
                    <td>单选题</td>
                    <td>实训五单选题2</td>
                    <td class="btn-lv nowrap">
                        <button>编辑</button>
                        <button>预览</button>
                        <button>删除</button>
                    </td>

                </tr>
            </tbody>
        </table>
        <my-dialog width="1300px" :visible="visible" @changeVisible="visible=false">
            <div style="padding:20px;background:#fff;">
                <div style="padding:20px 40px;">
                    <el-row type="flex" align="middle" justify="start" :gutter="20">
                        <el-col :span="5">
                            <div class="flex-between">
                                <span class="nowrap">课程名称：</span>
                                <el-select v-model="value1" placeholder="请选择">
                                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="flex-between">
                                <span class="nowrap">课程章节名称：</span>
                                <el-select v-model="value2" placeholder="请选择">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="flex-between">
                                <span class="nowrap">题目类型：</span>
                                <el-select v-model="value3" placeholder="请选择">
                                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="1">
                            <div class="flex-between">
                                <span class="nowrap">使用标识：</span>
                                <el-radio v-model="radio" label="1">启用</el-radio>
                                <el-radio v-model="radio" label="2">停用</el-radio>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <div style="background:#E6F6FE;border-radius:30px;padding:20px;">
                    <el-row type="flex" align="middle" justify="start" style="padding:5px;">
                        <el-col :offset="4" :span="4" class="textright">
                            <span>题目：</span>
                        </el-col>
                        <el-col :span="8">
                            <div>
                                <el-input placeholder="题目内容" v-model="input1" clearable></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" align="middle" justify="start" style="padding:5px;">
                        <el-col :offset="4" :span="4" class="textright">
                            <span>选项：</span>
                        </el-col>
                        <el-col :span="8">
                            <div class="flex-between">
                                <el-checkbox>1</el-checkbox>
                                <div class="checksize">
                                    <el-input placeholder="选项1内容" v-model="input2"></el-input>
                                </div>

                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" align="middle" justify="start" style="padding:5px;">

                        <el-col :span="8" :offset="8">
                            <div class="flex-between">
                                <el-checkbox>2</el-checkbox>
                                <div class="checksize">
                                    <el-input placeholder="选项2内容" v-model="input2"></el-input>
                                </div>

                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" align="middle" justify="start" style="padding:5px;">

                        <el-col :span="8" :offset="8">
                            <div class="flex-between">
                                <el-checkbox>3</el-checkbox>
                                <div class="checksize">
                                    <el-input placeholder="选项3内容" v-model="input2"></el-input>
                                </div>

                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" align="middle" justify="start" style="padding:5px;">

                        <el-col :span="8" :offset="8">
                            <div class="flex-between">
                                <el-checkbox>4</el-checkbox>
                                <div class="checksize">
                                    <el-input placeholder="选项4内容" v-model="input2"></el-input>
                                </div>

                            </div>
                        </el-col>
                    </el-row>

                    <el-row type="flex" align="middle" justify="start" style="padding:5px;">
                        <el-col :offset="4" :span="4" class="textright">
                            <span>正确答案：</span>
                        </el-col>
                        <el-col :span="8">
                            <div style="text-align:left">
                                <el-checkbox-group fill="#0f0" v-model="checkboxGroup1" size="mini">
                                    <el-checkbox-button v-for="item in xuanxiang1" :label="item" :key="item">{{item}}</el-checkbox-button>
                                </el-checkbox-group>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" align="middle" justify="start" style="padding:5px;">
                        <el-col :offset="4" :span="4" class="textright">
                            <span>答案解析：</span>
                        </el-col>
                        <el-col :span="8">
                            <div>
                                <el-input type="textarea" rows="6"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="btn-lan" style="padding-bottom:20px;">
                <button>保存</button>
                <button>重置</button>
                <button @click=" visible=false">关闭</button>
            </div>

        </my-dialog>
    </div>
</template>
<script>
import MyDialog from "../public/MyDialog";
export default {
  name: "TeaSpeFbnk",
  data() {
    return {
      radio: '',
      visible: false,
      xuanxiang1: [1, 2, 3, 4],
      checkboxGroup1: [],
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "课内习题添加", to: "" }
      ]
    };
  },
  mounted() {
    this.$emit("getData", this.breadcrumb);
  },
  components: { MyDialog }
};
</script>
<style scoped>
.fbnk1 {
  margin: 10px;
}
.fbnk1 > div {
  margin: 0 10px;
}
.fbnk1 > div > div {
  margin: 0 10px;
}
.right button {
  width: 120px;
  height: 42px;
  color: #fff;
  border: none;
}

td button {
  width: 90px;
  height: 36px;
  color: #fff;
  border: none;
  box-sizing: border-box;
}
.textright {
  text-align: right;
}
.checksize {
  width: 350px;
}
</style>


