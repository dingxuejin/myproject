<template>
    <div>
        <!-- 通知公告页面 -->
        <div class="flex-between">
            <div class="flex-start rv1">
                <div class="flex-start">
                    <div>
                        <span class="nowrap">班级</span>
                    </div>
                    <div>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex-start">
                    <div>
                        <span class="nowrap">启用标识</span>
                    </div>
                    <div>
                        <el-select v-model="value1" placeholder="请选择">
                            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="btn-lan nowrap">
                <button>查询</button>
                <button @click="add()">新增</button>
                <button @click="shanchu()">删除</button>
                <button>启用</button>
                <button>禁用</button>
            </div>
        </div>
        <div style="marginTop:10px;">
            <table class="table1">
                <thead>
                    <tr>
                        <th></th>
                        <th>班级</th>
                        <th>标题</th>
                        <th>内容</th>
                        <th>使用标识</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody v-if="allIds.length>0">
                    <tr v-for="(items,index) in allIds" :key="index">
                        <td>
                            <el-checkbox v-model="items.value"></el-checkbox>
                        </td>
                        <td>{{items.classId}}</td>
                        <td>{{items.title}}</td>
                        <td>{{items.content}}</td>
                        <td>{{items.isUsed=1?"启用":"禁用"}}</td>
                        <td class="btn-lv">
                            <button>修改</button>
                            <button>查看</button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="6">暂时没有获得数据</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: "TeaSpeTongzhi",
    data() {
        return {
            options: [
                {
                    value: "选项1",
                    label: "黄金糕"
                },
                {
                    value: "选项2",
                    label: "双皮奶"
                },
                {
                    value: "选项3",
                    label: "蚵仔煎"
                },
                {
                    value: "选项4",
                    label: "龙须面"
                },
                {
                    value: "选项5",
                    label: "北京烤鸭"
                }
            ],
            value: "",

            options1: [
                {
                    value: "选项1",
                    label: "黄金糕"
                },
                {
                    value: "选项2",
                    label: "双皮奶"
                },
                {
                    value: "选项3",
                    label: "蚵仔煎"
                },
                {
                    value: "选项4",
                    label: "龙须面"
                },
                {
                    value: "选项5",
                    label: "北京烤鸭"
                }
            ],
            value1: "",
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "口语平台", to: "/teaspe" },
                { name: "通知公告", to: "" }
            ],
            tabs: [
                { name: "通知公告", to: "/teaspetongzhi" },
                { name: "留言管理", to: "/teaspeliuyan" }
            ],
            infoList: [],

            // 将被删除的id的集合
            ids: [],
            allIds: []
        };
    },

    methods: {
        add() {
            this.$axios
                .post("busjapsys/tea/board/blackboard/addBlackboard", {
                    classId: 1,
                    teaId: 1,
                    title: "测试",
                    isUsed: 1,
                    content: "sunhongjiang",
                    createdUserId: 1
                })
                .then(res => {
                    this.queryAll();
                });
        },

        queryAll() {
            let that = this;
            this.$axios
                .post("busjapsys/tea/board/blackboard/blackboardList", {
                    teaId: 1
                })
                .then(res => {
                    let allIds = res.data.results.blackboardList;
                    console.log(res.data);
                    if (allIds) {
                        allIds = allIds.map(res => {
                            res.value = false;
                            return res;
                        });
                        that.allIds = allIds;
                    } else {
                        that.allIds = [];
                    }
                });
        },

        shanchu() {
            let allIds = this.allIds;

            let newAllIds = allIds.filter(val => {
                return val.value === true;
            });

            let newIds = newAllIds.map(res => {
                return res.xueid;
            });

            let data = { ids: newIds.join(",") };

            console.log(data);

            this.$axios
                .post("busjapsys/tea/board/blackboard/deleteBlackboards", data)
                .then(res => {
                    this.queryAll();
                });
        }
    },

    mounted() {
        let tabs = this.tabs;
        let breadcrumb = this.breadcrumb;
        let n = 0;
        this.$emit("getData", { tabs, breadcrumb, n });
    },

    created() {
        this.queryAll();
    }
};
</script>
<style scoped>
.rv1 > div,
.rv1 > div > div {
    margin: 0 5px;
}
</style>
