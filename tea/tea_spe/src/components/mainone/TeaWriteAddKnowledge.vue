<template>
    <div class="inputTable">
        <!-- 表格内容 -->
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>课程名称:</span>
                    <input type="text" name="search" placeholder=" 支持模糊查询">

                    <span>课程章节名称:</span>
                    <input type="text" name="search" placeholder=" 支持模糊查询">

                    <span>文件类型:</span>
                    <select name="" id="">
                        <option value="">全部</option>
                        <option value="">class01</option>
                        <option value="">class02</option>
                    </select>

                </div>
                <div class="right">
                    <button>查询</button>
                    <button>新增</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>编号</th>
                        <th>课程名称</th>
                        <th>课程章节</th>
                        <th>文件大小</th>
                        <th>上传时间</th>
                        <th>上传人</th>
                        <th>最新修改人</th>
                        <th>是否发布</th>
                        <th>文件类型</th>
                        <th>资源下载</th>
                        <th>操作</th>
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
                        <td>628.0KB</td>
                        <td>2017-07-04 13：57：17</td>
                        <td>td01</td>
                        <td>td01</td>
                        <td>否</td>
                        <td>PDF格式</td>
                        <td>
                            <button>上传</button>
                        </td>
                        <td>
                            <button>发布</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <el-checkbox></el-checkbox>
                        </td>
                        <td>2</td>
                        <td>新经典日本语</td>
                        <td>日本人的贴心</td>
                        <td>720KB</td>
                        <td>2017-07-06 15：54：20</td>
                        <td>td02</td>
                        <td>td02</td>
                        <td>是</td>
                        <td>图片格式</td>
                        <td>
                            <button>下载</button>
                        </td>
                        <td>
                            <button>取消发布</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- table end -->
    </div>
</template>
<script>
export default {
    name: "TeaWriteAddKnowledge",
    data() {
        return {
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teawritemain" },
                { name: "课内资源添加", to: "" }
            ]
        };
    },
    mounted(){
        this.$emit('getData',this.breadcrumb)
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
</style>

