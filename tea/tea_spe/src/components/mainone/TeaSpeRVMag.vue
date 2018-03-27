<template>
  <div>
    <!-- 配音视频管理页面 -->
    <div class="flex-between">
      <div class="flex-start rv1">
        <div class="flex-start">
          <div>
            <span>班级名称</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span>说一说</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span>场景</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>

      </div>
      <div class="btn-lan">
        <button>删除</button>
        <button>音频重置</button>
      </div>
    </div>
    <div style="marginTop:10px;">
      <table class="table1">
        <thead>
          <tr>
            <th></th>
            <th>学生姓名</th>
            <th></th>
            <th>场景</th>
            <th>关卡名称</th>
            <th>关卡任务</th>
            <th>音频</th>
            <th>示范视频</th>
            <th>字幕</th>
          </tr>
        </thead>
        <tbody>
        
          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>
            <td>张珊</td>
            <td>配音</td>
            <td>机场</td>
            <td>入国检查</td>
            <td>关税检查</td>
            <td>
              <div>
                <img src="../../assets/yinshipin/shipin.png" alt="">
              </div>
            </td>
            <td>
              <div>
                <img src="../../assets/yinshipin/shipin.png" alt="">
              </div>
            </td>
            <td class="btn-lv">

              <el-popover placement='right-start' ref="popover2" width="500" trigger="click">
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae excepturi magni maxime culpa dolorem quo dignissimos, earum repellendus repellat alias, reprehenderit, expedita quidem molestiae ex? Fugit placeat ab asperiores delectus.
                </div>
              </el-popover>
              <button v-popover:popover2>字幕检查</button>
            </td>
          </tr>
          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>
            <td>张珊</td>
            <td>配音</td>
            <td>机场</td>
            <td>入国检查</td>
            <td>关税检查</td>
            <td>
              <div>
                <img src="../../assets/yinshipin/shipin.png" alt="">
              </div>
            </td>
            <td>
              <div>
                <img src="../../assets/yinshipin/shipin.png" alt="">
              </div>
            </td>
            <td class="btn-lv">

              <el-popover placement='right-start' ref="popover2" width="500" trigger="click">
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae excepturi magni maxime culpa dolorem quo dignissimos, earum repellendus repellat alias, reprehenderit, expedita quidem molestiae ex? Fugit placeat ab asperiores delectus.
                </div>
              </el-popover>
              <button v-popover:popover2>字幕检查</button>
            </td>
          </tr>
          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>
            <td>张珊</td>
            <td>配音</td>
            <td>机场</td>
            <td>入国检查</td>
            <td>关税检查</td>
            <td>
              <div>
                <img src="../../assets/yinshipin/shipin.png" alt="">
              </div>
            </td>
            <td>
              <div>
                <img src="../../assets/yinshipin/shipin.png" alt="">
              </div>
            </td>
            <td class="btn-lv">

              <el-popover placement='right-start' ref="popover2" width="500" trigger="click">
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae excepturi magni maxime culpa dolorem quo dignissimos, earum repellendus repellat alias, reprehenderit, expedita quidem molestiae ex? Fugit placeat ab asperiores delectus.
                </div>
              </el-popover>
              <button v-popover:popover2>字幕检查</button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>
<script>
export default {
  name: "TeaSpeRVMag",
  data() {
    return {};
  }
};
</script>
<style scoped>
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
</style>


