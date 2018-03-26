<template>
    <div>
        <div class="flex-between source1">
            <div class="flex-start">
                <span class="nowrap">资源名称:</span>
                <el-input placeholder="请输入内容" clearable>
                </el-input>
            </div>
            <div class="flex-end btn-lan">
                <button>查询</button>
                <button>新增</button>
                <button>查看</button>
            </div>
        </div>

        <table class="table1">
            <thead>
                <tr>
                    <th style="width: 5%"></th>
                    <th style="width: 5%">编号</th>
                    <th style="width: 10%">资源名称</th>
                    <th style="width: 10%">文件大小</th>
                    <th style="width: 15%">上传时间</th>
                    <th style="width: 10%">上传人</th>
                    <th style="width: 10%">最新修改人</th>
                    <th style="width: 5%">是否发布</th>
                    <th style="width: 10%">文件类型</th>
                    <th style="width: 10%">资源下载</th>
                    <th style="width: 10%">操作</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                      <el-checkbox></el-checkbox>
                    </td>
                    <td>1</td>
                    <td>商务日语资源一</td>
                    <td>628.0KB</td>
                    <td>2017-07-04 13:57:17</td>
                    <td>td01</td>
                    <td>td01</td>
                    <td>否</td>
                    <td>正常文件</td>
                    <td class="btn-lv">
                        <button>下载</button>
                    </td>
                    <td class="btn-lv">
                        <button>发布</button>
                    </td>
                </tr>
                <tr>
                    <td>
                       <el-checkbox></el-checkbox>
                    </td>
                    <td>2</td>
                    <td>商务日语资源二</td>
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
    name: "TeaSpeSource"
};
</script>
<style scoped>
.source1>div,.source1>div>div{
margin: 5px;
}
</style>


