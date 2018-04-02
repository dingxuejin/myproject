<template>
    <div id="mainOne1">
        <div class="mainOne2 flex-start">
            <el-breadcrumb separator='>>'>
                <el-breadcrumb-item :to="{ path: '/teaspe' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>口语平台</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="main0">
            <div class="flex-center">
                <img src="../assets/main/teaspe.png" alt="">
            </div>
            <div class="flex-center">
                <img src="../assets/main/teaspe2.png" alt="">
            </div>
        </div>
        <div class="flex-center">
            <div class="main1">
                <img src="../assets/main/kan.png" alt="">
                <div class="main2">
                    <div class="main4">看一看</div>
                    <div class="main5">40个知识点</div>
                </div>
            </div>
            <div class="main1">
                <img src="../assets/main/ting.png" alt="">
                <div class="main2">
                    <div class="main4">听一听</div>
                    <div class="main5">40个内容</div>
                </div>
            </div>
            <div class="main1">
                <img src="../assets/main/shuo.png" alt="">
                <div class="main2">
                    <div class="main4">说一说</div>
                    <div class="main5">26个案例</div>
                </div>
            </div>
            <div class="main1">
                <img src="../assets/main/ceshi.png" alt="">
                <div class="main2">
                    <div class="main4">能力测评</div>
                    <div class="main5">3份试卷</div>
                </div>
            </div>
        </div>
        <div class="main3">
            <img src="../assets/main/liucheng.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: "TeaSpeMain"
};
</script>
<style scoped>
#mainOne1 {
    height: 930px;
    min-width: 800px;
}
.mainOne2 {
    height: 50px;
    min-width: 500px;
}
.main0 {
    height: 150px;
    margin-top: 50px;
}
.main0 > div {
    margin: 10px auto;
}
.main1 {
    margin: 10px;
    width: 260px;
    height: 305px;
    position: relative;
}
.main1 > img {
    width: 100%;
    height: 100%;
}
.main2 {
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
}
.main3 {
    width: 1080px;
    height: 140px;
    margin: 100px auto 0;
}
.main3 > img {
    width: 100%;
    height: 100%;
}
.main4 {
    font-size: 26px;
    color: #fff;
    width: 100%;
    line-height: 35px;
}
.main5 {
    font-size: 10px;
    color: #fff;
    width: 100%;
    line-height: 16px;
}
</style>


