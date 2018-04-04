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
                        <el-input placeholder="请输入内容"  clearable>
                        </el-input>
                    </div>
                </div>

                <div class="flex-start">
                    <div>
                        <span class="nowrap">课程章节名称:</span>
                    </div>
                    <div>
                        <el-input placeholder="请输入内容"  clearable>
                        </el-input>
                    </div>
                </div>

            </div>
            <div class="right btn-lan nowrap">
                <button>查询</button>
                <button>新增</button>
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
    </div>
</template>
<script>
export default {
    name: "TeaSpeFbnk",
    data(){
        return{
               breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "课内习题添加", to: "" }
      ]
        }
    },
    mounted(){
         this.$emit("getData", this.breadcrumb);
    }
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
</style>


