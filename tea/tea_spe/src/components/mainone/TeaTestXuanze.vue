<template>
  <div>
    <!-- 选择题页面 -->
    <div class="flex-between">
      <div class="flex-start hdxx1">
        <div class="flex-start">
          <div>
            <span class="nowrap">模块选择:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span class="nowrap">试卷名称:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span class="nowrap">级别:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
      </div>
      <div class="flex-end btn-lan">
        <button>查询</button>
        <button @click=" isXinzhen=true">新增</button>
        <button @click="isDaoru=true">导入题目</button>
      </div>
    </div>
    <div>
      <table class="table1">
        <thead>
          <tr>
            <th></th>
            <th>NO</th>
            <th>模块名称</th>
            <th>级别</th>
            <th>题目名称</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>
            <td>1</td>
            <td>J-test</td>
            <td>A-D</td>
            <td>试卷四-单选题1</td>
            <td class="btn-lv">

              <button @click="isYulan=true">预览</button>
            </td>
          </tr>
          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>
            <td>1</td>
            <td>J-test</td>
            <td>A-D</td>
            <td>试卷四-单选题1</td>
            <td class="btn-lv">

              <button @click="isYulan=true">预览</button>
            </td>
          </tr>

        </tbody>
      </table>

    </div>
    <div>
      <!-- 导入题库弹出框 -->
      <el-dialog width="800px" :visible.sync="isDaoru" title="导入题目信息">
        <div class="daoru1 yulan1">
          <table>
            <tr>
              <td class="nowrap">文件名：</td>
              <td>

                <div class="flex-between" style="border:1px solid #D9D9D9; width:550px;border-radius:5px;">
                  <input v-model="daoruVal" placeholder="未选择任何文件" readonly='true' type="text" style="height:90%;margin:0 5px;width:400px;border:none;">
                  <el-upload action="https://" :on-change="daoruChange" :auto-upload="false">
                    <el-button slot="trigger" type="primary">选取文件</el-button>

                  </el-upload>
                </div>

              </td>
            </tr>
            <tr>
              <td></td>
              <td>

                <span>*</span>
                <span>导入时可以在导入模板下载里下载模板进行数据导入，防止导入过程中出错</span>

              </td>
            </tr>
            <tr>
              <td colspan="2">
                <div style="height:10px;"></div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>

                <div>
                  <p>选择内容以“L”符号隔开选项，如下示例单选题再EXCEL中各个列的内容录入格式：</p>
                  <p>题目名称：谈判信息分析-俄国内经济分析</p>
                  <p>题干：2013年下半年，俄国内：</p>
                  <p>选项：A.生产总值逐月上升，经济发展势头强劲。 B.居民消费指数逐月上涨，带动内需。</p>
                  <p>答案：A</p>

                </div>

              </td>
            </tr>

          </table>
        </div>

        <div class="yulan2 flex-center">
          <div class="btn-lan">
            <button class="xuanzeBtn">导入模板下载</button>
          </div>
          <div class="btn-lan">
            <button class="xuanzeBtn">下一步</button>
          </div>
          <div class="btn-hui">
            <button class="xuanzeBtn" @click="isDaoru=false">关闭</button>
          </div>
        </div>

      </el-dialog>
    </div>
    <div>
      <!-- 预览弹出框页面 -->
      <el-dialog width="50%" :visible.sync="isYulan" title="预览">
        <div class="flex-center yulanBtn">
          <button @click="isYulanBtn=false" :class="{yulanBtn2:!isYulanBtn}">中文</button>
          <button @click="isYulanBtn=true" :class="{yulanBtn2:isYulanBtn}">日语</button>
        </div>
        <div class="yulan1" v-if="!isYulanBtn">
          <table>
            <tr>
              <td class="nowrap textright">题干:</td>
              <td>运输标志可以用图片和文字表述。（ ）</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <el-radio>正确</el-radio>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <el-radio>错误</el-radio>
              </td>
            </tr>
            <tr>
              <td class="nowrap textright"> 正确答案:</td>
              <td>
                正确
              </td>
            </tr>
            <tr>
              <td class="nowrap textright">答案解析:</td>
              <td>
                运输标志俗称；Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos aperiam minus in! Corporis voluptate, quidem quasi libero qui beatae fugiat amet blanditiis enim quam nisi nobis quisquam molestiae repudiandae!
              </td>
            </tr>
          </table>

        </div>
        <div class="yulan1" v-if="isYulanBtn">
          <table>
            <tr>
              <td class="nowrap textright">啊啊啊:</td>
              <td>111</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <el-radio>11</el-radio>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <el-radio>11</el-radio>
              </td>
            </tr>
            <tr>
              <td class="nowrap textright"> 正确答案:</td>
              <td>
                正确
              </td>
            </tr>
            <tr>
              <td class="nowrap textright">答案解析:</td>
              <td>
                运输标志俗称；Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos aperiam minus in! Corporis voluptate, quidem quasi libero qui beatae fugiat amet blanditiis enim quam nisi nobis quisquam molestiae repudiandae!
              </td>
            </tr>
          </table>

        </div>
        <div class="flex-center yulan2">
          <div class="btn-lan">
            <button class="xuanzeBtn">导入模板下载</button>
          </div>
          <div class="btn-lan">
            <button class="xuanzeBtn">下一步</button>
          </div>
          <div class="btn-hui">
            <button class="xuanzeBtn" @click="isYulan=false">关闭</button>
          </div>
        </div>

      </el-dialog>
    </div>
    <div>
      <!-- 新增弹出框页面 -->
      <el-dialog width='80%' :visible.sync="isXinzhen" title="新增">
        <div class="xinzhen0">
          <div class="xinzhen1">
            <el-row>
              <el-col :offset="2" :span="3" class="textright">
                <span>题目名称</span>
                <span class="red">*</span>
                <span>:</span>
              </el-col>
              <el-col :span="7" class="textleft">
                <el-input></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="xinzhen1">
            <el-row>
              <el-col :offset="2" :span="3" class="textright">
                <span>题目名称</span>
                <span>:</span>
              </el-col>
              <el-col :span="7" class="textleft">
                <el-select style="width:100%;"></el-select>
              </el-col>
            </el-row>
          </div>
          <div class="xinzhen1">
            <el-row>
              <el-col :offset="2" :span="3" class="textright">
                <span>知识点:</span>
              </el-col>
              <el-col :span="17" class="textleft">
                <el-checkbox>J-TEST</el-checkbox>
                <el-checkbox>JLPT</el-checkbox>
                <el-checkbox>商务口语</el-checkbox>
                <el-checkbox>商务写作</el-checkbox>
                <el-checkbox>外贸实物</el-checkbox>
                <el-checkbox>商务礼仪</el-checkbox>
                <el-checkbox>通关士</el-checkbox>
              </el-col>
            </el-row>
          </div>
          <div class="xinzhen1" style="height:300px;">
            <el-row>
              <el-col :offset="2" :span="3" class="textright">
                <span>中文题干:</span>
              </el-col>
              <el-col :span="17" style="text-align:left;" class="textleft">

                <quill-editor style="height:220px;" v-model="content1" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
                </quill-editor>

              </el-col>
            </el-row>
          </div>
          <div class="xinzhen1" style="height:300px;">
            <el-row>
              <el-col :offset="2" :span="3" class="textright">
                <span>日文题干:</span>
              </el-col>
              <el-col :span="17" style="text-align:left;" class="textleft">
                <quill-editor style="height:220px;" v-model="content2" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
                </quill-editor>

              </el-col>
            </el-row>
          </div>
          <div class="xinzhen1" v-for="(item,index) in upfile" :key='index'>
            <el-row>
              <el-col :offset="2" :span="3" class="textright">
                <span>{{item.name}}</span>
              </el-col>
              <el-col :span="7" class="textleft">
                <div class="flex-between" style="border:1px solid #D9D9D9; width:350px;border-radius:5px;">
                  <input placeholder="未选择任何文件" readonly='true' type="text" style="height:90%;margin:0 5px;width:200px;border:none;" v-model="item.value">
                  <el-upload :ref="item.ref" action="https://" :on-change="handleChange" :auto-upload="false">
                    <el-button slot="trigger" type="primary" @click="changeVal(index)">选取文件</el-button>

                  </el-upload>
                </div>

              </el-col>
            </el-row>
          </div>
          <div class="xinzhen1">
            <el-row>
              <el-col :offset="2" :span="3" class="textright">
                <span>选项:</span>
              </el-col>
              <el-col :span="2">
                <div class="btn-lan">
                  <button>新增</button>
                </div>

              </el-col>
            </el-row>
          </div>
          <div class="tablexuanze" style="margin:50px 0 80px;">
            <el-row>
              <el-col :offset="2" :span="20">
                <table class="table1">
                  <thead>
                    <tr>
                      <th>是否答案</th>
                      <th>选项值</th>
                      <th>序号</th>
                      <th>选项内容(中文)</th>
                      <th>选项内容(日文)</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <el-checkbox></el-checkbox>
                      </td>
                      <td>A</td>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td class="btn-lv">
                        <button>
                          编辑
                        </button>
                        <button>
                          删除
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-checkbox></el-checkbox>
                      </td>
                      <td>B</td>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td class="btn-lv">
                        <button>
                          编辑
                        </button>
                        <button>
                          删除
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-checkbox></el-checkbox>
                      </td>
                      <td>C</td>
                      <td>2</td>
                      <td></td>
                      <td></td>
                      <td class="btn-lv">
                        <button>
                          编辑
                        </button>
                        <button>
                          删除
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-checkbox></el-checkbox>
                      </td>
                      <td>D</td>
                      <td>2</td>
                      <td></td>
                      <td></td>
                      <td class="btn-lv">
                        <button>
                          编辑
                        </button>
                        <button>
                          删除
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </el-col>

            </el-row>
          </div>
          <div class="xinzhen1" style="height:300px;">
            <el-row>
              <el-col :offset="2" :span="3" class="textright">
                <span>中文答案解析:</span>
              </el-col>
              <el-col :span="17" style="text-align:left;" class="textleft">

                <quill-editor style="height:220px;" v-model="content1" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
                </quill-editor>

              </el-col>
            </el-row>
          </div>
          <div class="xinzhen1" style="height:300px;">
            <el-row>
              <el-col :offset="2" :span="3" class="textright">
                <span>日文答案解析:</span>
              </el-col>
              <el-col :span="17" style="text-align:left;" class="textleft">

                <quill-editor style="height:220px;" v-model="content1" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
                </quill-editor>

              </el-col>
            </el-row>
          </div>
          <div class="xinzhen1">
            <el-row>
              <el-col :span="24">
                <div class="flex-center">
                  <div class="btn-lan">
                    <button class="xuanzeBtn">再次添加</button>
                  </div>
                  <div class="btn-lan">
                    <button class="xuanzeBtn">保存</button>
                  </div>
                  <div class="btn-hui">
                    <button class="xuanzeBtn" @click=" isXinzhen=false">关闭</button>
                  </div>
                </div>

              </el-col>
            </el-row>

          </div>
        </div>

      </el-dialog>

    </div>
  </div>
</template>
<script>
export default {
  name: "TeaTestXuanze",
  data() {
    return {
      changeIndex: -1,
      upfile: [
        { name: "中文音频", value: "未选择文件", ref: "ref0" },
        { name: "日文音频", value: "未选择文件", ref: "ref1" },
        { name: "中文视频", value: "未选择文件", ref: "ref2" },
        { name: "日文视频", value: "未选择文件", ref: "ref3" },
        { name: "中文视频字幕", value: "未选择文件", ref: "ref4" },
        { name: "日文视频字幕", value: "未选择文件", ref: "ref5" }
      ],
      editorOption: {
        // some quill options
      },
      content1: "",
      content2: "",
      daoruVal: "",
      isDaoru: false,
      isYulanBtn: false,
      isYulan: false,
      isXinzhen: false,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "选择题", to: "" }
      ]
    };
  },
  computed: {},
  mounted() {
    this.$emit("getData", this.breadcrumb);
  },
  methods: {
    changeVal(i) {
      this.changeIndex = i;
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    daoruChange(file, fileList) {
      this.daoruVal = file.name;
    },
    handleChange(file, fileList) {
      let i = this.changeIndex;
      this.upfile[i].value = file.name;
    },

    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    }
  }
};
</script>
<style scoped>
.hdxx1 > div,
.hdxx1 > div > div {
  margin: 5px;
}
.hdxx1 > div {
  width: 30%;
}
.xinzhen0 {
  margin: 20px;
}
.xinzhen1 {
  margin: 10px;
}
.textright {
  text-align: right;
  padding: 7px 20px 0 0;
}
.textleft {
  text-align: left;
}
.textright {
  text-align: right;
}
.red {
  color: red;
}
.xuanzeBtn {
  padding: 10px;
  min-width: 105px;
  height: 45px;
}
.yulanBtn {
  margin: 20px auto;
  width: 360px;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  overflow: hidden;
}
.yulanBtn > button {
  width: 50%;
  height: 50px;
  border: none;
  background: #fff;

  color: #000;
}
.yulanBtn > .yulanBtn2 {
  background: #149dfd;
  border-radius: 5px;
  color: #fff;
  border: none;
}
.yulan1 {
  padding: 20px 100px;
  text-align: left;
}
.yulan1 table,
.yulan1 td {
  border: none;
}
.yulan1 td {
  padding: 10px;
}
.yulan2 {
  padding: 20px;
  border-top: 1px solid #ececec;
}
.daoru1 {
  padding: 20px 100px;
}
</style>