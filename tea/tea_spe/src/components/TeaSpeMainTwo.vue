<template>
    <div id="mainOne1">

        <div class="mainOne2 flex-start">
            <el-breadcrumb separator='>>'>
                <el-breadcrumb-item :to="item.goto" v-for="(item,index) in  breadcrumb" :key="index">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="mainTwo8 flex-start">
            <div :class='{active:index===isActive}' v-for="(item,index) in tabs" :key="index" @click="toTab(index)">
                <span> {{item.liname}}</span>
            </div>

        </div>
        <div class="mainOne3">
            <div>
                <!-- 查询 -->
                <div class="mainOne4">
                    <cha-xun></cha-xun>
                </div>
                <!-- end查询 -->
                <div class="mainOne6">
                    <!-- 表格及按钮 -->
                    <router-view></router-view>
                    <!-- 表格及按钮end -->
                </div>
            </div>
            <div class="aside2">
                <div class="aside3">
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import ChaXun from "./public/chaxun";
export default {
    name: "TeaSpeMainOne",
    data() {
        return {
            centerDialogVisible: true,
            breadcrumb: [],
            isActive: 0,
            tabs: []
        };
    },
    components: { ChaXun },
    mounted() {
        this.parame();
    },
    updated: function() {
        this.parame();
    },
    methods: {
        parame() {
            this.breadcrumb = this.$route.params.breadcrumb;
            this.tabs = this.$route.params.tabs;
            this.isActive = this.$route.params.n;
        },
        toTab(n) {
            let tabs=this.tabs;
            let breadcrumb=this.breadcrumb;
            this.isActive = n;
            console.log(this.isActive);
            this.$router.push({
                name: this.tabs[n].link,
                params: {
                    tabs,
                    breadcrumb,
                    n
                }
            });
        }
    }
};
</script>
<style scoped>
#mainOne1 {
    height: 930px;
    min-width: 800px;
}
#mainOne1 .mainOne2 {
    height: 50px;
    min-width: 500px;
}
#mainOne1 .mainOne3 {
    height: 825px;
    border: #4affff solid 1px;

    position: relative;
    border-radius: 10px;
    border-top-left-radius: 0px;
    box-sizing: border-box;
    background: #fff;
}
#mainOne1 .mainOne4 {
    height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #e0ddd9;
    box-sizing: border-box;
}

#mainOne1 .mainOne6 {
    padding: 5px 20px;
}
#mainOne1 .mainTwo8 {
    z-index: 2;
    position: relative;
    bottom: -1px;
}
#mainOne1 .mainTwo8 > div {
    height: 55px;
    border: 1px solid #4affff;
    line-height: 55px;
    padding: 0 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: #e7f4fd;
    box-sizing: border-box;
    color: #387be3;
}
#mainOne1 .mainTwo8 > div.active {
    background: #fff;
    border-bottom: #fff solid 1px;
    padding: 0 35px;
}
.active > span {
    text-align: center;
    font-weight: 600;
    margin: 5px;
}
.active::before {
    content: "◆";
}
.active::after {
    content: "◆";
}
.aside2,
.aside3 {
    border-bottom: #4affff solid 1px;
    position: absolute;
    left: 0;
    bottom: 5px;
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    border-radius: 10px;
}
</style>


