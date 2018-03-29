<template>
  <div>
    <!-- 这是留言页面 -->
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
            <span>留言类型</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span>学生姓名</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>

      </div>
      <div class="btn-lan">
        <button>查询</button>
      </div>
    </div>
    <div style="marginTop:10px;">
      <table class="table1">
        <thead>
          <tr>
            <th></th>
            <th>编号</th>
            <th>学号</th>
            <th>学生姓名</th>
            <th>留言类型</th>
            <th>留言最新内容</th>
            <th>留言最新时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>

            <td>1</td>
            <td>1234567</td>
            <td>张三</td>
            <td>知识点回复</td>
            <td class="liuyan1">
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae labore dolore modi laudantium aliquid sint ut accusamus ratione, tenetur dolor repudiandae velit inventore, consequuntur eveniet, veniam temporibus perferendis dolores id?</span>
            </td>
            <td>
              <span>2017-05-12</span>
              <span>12:12:32</span>
            </td>

            <td class="btn-lv">
              <button>回复</button>
            </td>
          </tr>
          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>

            <td>1</td>
            <td>1234567</td>
            <td>张三</td>
            <td>知识点回复</td>
            <td class="liuyan1">
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae labore dolore modi laudantium aliquid sint ut accusamus ratione, tenetur dolor repudiandae velit inventore, consequuntur eveniet, veniam temporibus perferendis dolores id?</span>
            </td>
            <td>
              <span>2017-05-12</span>
              <span>12:12:32</span>
            </td>

            <td class="btn-lv">
              <button>回复</button>
            </td>
          </tr>
          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>

            <td>1</td>
            <td>1234567</td>
            <td>张三</td>
            <td>知识点回复</td>
            <td class="liuyan1">
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae labore dolore modi laudantium aliquid sint ut accusamus ratione, tenetur dolor repudiandae velit inventore, consequuntur eveniet, veniam temporibus perferendis dolores id?</span>
            </td>
            <td>
              <span>2017-05-12</span>
              <span>12:12:32</span>
            </td>

            <td class="btn-lv">
              <button>回复</button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaSpeLiuyan",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "留言管理", to: "" }
      ],
      tabs: [
        { name: "通知公告", to: "/teaspetongzhi" },
        { name: "留言管理", to: "/teaspeliuyan" }
      ]
    };
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 1;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>

<style scoped>
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
.liuyan1 {
  max-width: 200px;
  text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>