<template>
    <div>
        <div class="flex-between">
            <div class="flex-start rol1">
                <div class="flex-start">
                    <div>
                        <span class="nowrap">班级:</span>
                    </div>

                    <div>
                        <el-select placeholder="请选择">
                            <el-option>
                                a
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex-start">
                    <div>
                        <span class="nowrap">说一说:</span>
                    </div>

                    <div>
                        <el-select placeholder="请选择">
                            <el-option>
                                a
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex-start">
                    <div>
                        <span class="nowrap">场景:</span>
                    </div>

                    <div>
                        <el-select placeholder="请选择">
                            <el-option>
                                a
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="flex-end btn-lan">
                <button>删除</button>
                <button class="nowrap">音频重置</button>
            </div>
        </div>

        <table class="table1">
            <thead>
                <tr>
                    <th style="width: 10%"></th>
                    <th style="width: 10%">学生姓名</th>
                    <th style="width: 10%"></th>
                    <th style="width: 15%">场景</th>
                    <th style="width: 15%">关卡名称</th>
                    <th style="width: 15%">备注</th>
                    <th style="width: 10%">音频</th>
                    <th style="width: 15%">字幕</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        <el-checkbox></el-checkbox>
                    </td>
                    <td>张珊</td>
                    <td>影子跟读</td>
                    <td>机场</td>
                    <td>入国检查</td>
                    <td>2017级商务日语一班</td>
                    <td>

                        <img src="../../assets/yinshipin/radio.png" alt="">

                    </td>
                    <td class="btn-lv">
                        <button>字幕查看</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <el-checkbox></el-checkbox>
                    </td>
                    <td>李四</td>
                    <td>影子跟读</td>
                    <td>职场日常</td>
                    <td>着装礼仪</td>
                    <td>2017级商务日语一班</td>
                    <td>

                        <img src="../../assets/yinshipin/radio.png" alt="">

                    </td>
                    <td class="btn-lv">
                        <button>字幕查看</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "TeaSpeRol"
};
</script>
<style scoped>
.rol1 > div,
.rol1 > div > div {
    margin: 5px;
}
</style>


