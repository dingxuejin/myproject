<template>
    <div class="inputTable">
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>班级名称：</span>
                    <input type="text" name="search" placeholder="请输入关键字">
                </div>

                <div class="right">
                    <button>查询</button>
                    <button>新增</button>
                    <button>删除</button>
                    <button>选择已有班级</button>
                </div>

            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>编号</th>
                        <th>班级名称</th>
                        <th>备注</th>
                        <th style="width:25%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>1</td>
                        <td>class01</td>
                        <td>2017级商务日语一班</td>
                        <td>
                            <button>修改</button>
                            <button>查看</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>2</td>
                        <td>class02</td>
                        <td>2017级商务日语一班</td>
                        <td>
                            <button>修改</button>
                            <button>查看</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
          breadcrumb:[
              {name:'首页', to:'/'},
              {name:'写作平台', to:'/teawritemain'},
              {name:'班级管理', to:''}
          ]
      }
  },

  mounted(){
      this.$emit('getData', this.breadcrumb)
  }
}
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

span{
    margin: 0px 10px;
}
</style>
