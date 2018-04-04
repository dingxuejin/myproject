<template>
    <!-- 课内知识添加页面 -->
    <div>
        <div class="flex-between">
            <div class="flex-start addknow1">
                <div class="flex-start">
                    <div>
                        <span class="addknow2">班级名称:</span>
                    </div>

                    <div>
                        <el-input placeholder="请输入内容" clearable>
                        </el-input>
                    </div>
                </div>
                <div class="flex-start">
                    <div>
                        <span class="addknow2">课程章节名称:</span>
                    </div>
                    <div>
                        <el-input placeholder="请输入内容" clearable>
                        </el-input>
                    </div>
                </div>
                <div class="flex-start">
                    <div>
                        <span class="addknow2">文件类型:</span>
                    </div>

                    <div>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                </div>
            </div>

            <div class="right btn-lan">
                <button>查询</button>
                <button>新增</button>
            </div>
        </div>

        <table class="table1">
            <thead>
                <tr>
                    <th style="width: 4%"></th>
                    <th style="width: 4%"></th>
                    <th style="width: 10%">课程名称</th>
                    <th style="width: 10%">课程章节</th>
                    <th style="width: 8%">文件大小</th>
                    <th style="width: 19%">上传时间</th>
                    <th style="width: 5%">上传人</th>
                    <th style="width: 5%">最新修改人</th>
                    <th style="width: 5%">是否发布</th>
                    <th style="width: 10%">文件类型</th>
                    <th style="width: 10%">资源下载</th>
                    <th style="width: 10%">操作</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <el-checkbox></el-checkbox>
                    </td>

                    <td>新经典日本语</td>
                    <td>初次聚餐</td>
                    <td>628.0KB</td>
                    <td>2017-07-04 13:57:17</td>
                    <td>td01</td>
                    <td>td01</td>
                    <td>否</td>
                    <td>PDF格式</td>
                    <td class="btn-lv">
                        <button>上传</button>
                    </td>
                    <td class="btn-lv">
                        <button>发布</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        <el-checkbox></el-checkbox>
                    </td>

                    <td>新经典日本语</td>
                    <td>日本人的贴心</td>
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
    </div>
</template>
<script>
export default {
  name: "TeaSpeAddKnle",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
         { name: "口语平台", to: "/teaspe" },
        { name: "课内知识添加", to: "" }
      ],
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
      value: ""
    };
  },
  mounted(){
      this.$emit('getData',this.breadcrumb)
  }
};
</script>
<style scoped>
.addknow1 > div {
  margin: 0 5px;
}
.addknow2 {
  white-space: nowrap;
}
.addknow1 > div > div {
  margin: 0 5px;
}
.right {
  white-space: nowrap;
}
.right button {
  width: 120px;
  height: 42px;
  color: #fff;
  border: none;
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

td button {
  width: 90px;
  height: 36px;
  color: #fff;
  border: none;
  box-sizing: border-box;
}
.el-icon-arrow-up:before {
  content: "\E615" !important;
}
</style>

