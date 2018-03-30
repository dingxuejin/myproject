<template>
  <div>
    <div>
      <div class="jingsai1 flex-center">
        <div>
          <span class="nowrap">竞赛时间:</span>
        </div>
        <div>
          <el-input></el-input>
        </div>
        <div>
          <span>-</span>
        </div>
        <div>
          <el-input></el-input>
        </div>

        <div>
          <span class="nowrap">竞赛名称:</span>
        </div>
        <div>
          <el-input></el-input>
        </div>
      </div>
    </div>
    <div class="flex-between">
      <div >
        <div class="flex-start jingsai2">
          <div  class="flex-start jingsai3">
            <div>
              <span class="nowrap">班级:</span>
            </div>
            <div  >
              <el-select>

              </el-select>
            </div>
          </div>
          <div  class="flex-start jingsai3">
            <div>
              <span class="nowrap">模块选择:</span>
            </div>
            <div >
              <el-select>

              </el-select>
            </div>
          </div>
          <div  class="flex-start jingsai3">
            <div>
              <span class="nowrap">内容选择:</span>
            </div>
            <div >
              <el-select>

              </el-select>
            </div>
          </div>
          <div  class="flex-start jingsai3">
            <div>
              <span class="nowrap">级别:</span>
            </div>
            <div >
              <el-select>

              </el-select>
            </div>
          </div>
          <div>

          </div>
        </div>

      </div>

      <div class="btn-lan nowrap">
        <button>查询</button>
        <button>开始竞赛</button>
      </div>
    </div>

    <table class="table1" style="marginTop:10px;">
      <thead>
        <tr>
          <th>编号</th>
          <th>模块名称</th>
          <th>级别</th>
          <th>试卷名称</th>
          <th>竞赛时间</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>J-test</td>
          <td>A-D</td>
          <td>试卷一</td>
          <td>2017/02/22 19:14:34</td>
          <td>进行中</td>
          <td class="btn-lv nowrap">
            <button>设置</button>
            <button>暂停</button>
            <button>延长时间</button>
            <button>结束</button>
            <button>查看</button>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>能力考</td>
          <td>N1</td>
          <td>试卷三</td>
          <td>2017/02/22 19:14:34</td>
          <td>已结束</td>
          <td class="btn-lv nowrap">
            <button>查看</button>
            <button>设置</button>
            <button>删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "TeaTestJingsai",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "竞赛设置", to: "" }
      ],
      tabs: [
        { name: "专线能力设置", to: "/teatestzxnl" },
        { name: "真题演练设置", to: "/teatestztyl" },
        { name: "竞赛设置", to: "/teatestjingsai" }
      ]
    };
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 2;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>
<style scoped>
.jingsai1 {
  width: 50%;
}
.jingsai1 > div {
  margin: 5px;
}
.jingsai2>div,.jingsai2>div>div{
  margin: 5px;
}
.jingsai3{
  width:20%;
}
</style>
