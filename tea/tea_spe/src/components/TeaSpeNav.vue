<template>
    <div class='nav'>
        <div v-for='(item1,index1)  in  nav' :key='index1'>
            <div class='flex-between nav1' v-on:click='toggleUl(index1)'>
                <div class='flex-start'>
                    <img :src='item1.navIcon' alt=''>
                    <span>{{item1.navTitle}}</span>
                </div>
                <div>
                    <img src='../assets/nav/xialasanjiaoxing.png' alt='' :class="{sanjiao:index1===active}">
                </div>
            </div>
            <transition-group name='navUl' tag='ul' :class='{ulbor:index1===active}'>
                <template v-if='index1===active'>
                    <li @click="toMain(index1,index2)" v-for='(item2,index2) in item1.navArray' :key='index2' tag="li">
                        {{item2.liName}}
                    </li>
                </template>
            </transition-group>

        </div>

    </div>
</template>
<style scoped>
@keyframes enter {
    0% {
        height: 0px;
        padding: 0px;
        opacity: 0;
    }

    100% {
        height: 38px;
        padding: 10px;
        opacity: 1;
    }
}
.nav {
    border-radius: 10px;
}
.navUl-enter-active {
    animation: enter 0.3s linear;
}
.navUl-leave-active {
    animation: enter 0.3s linear reverse;
}

.nav span {
    color: #fff;
}
.nav ul {
    padding: 0;
    margin: 0;
    border: transparent solid 1px;
    border-radius: 10px;
}
.nav .ulbor {
    border: #4affff solid 1px;
}
.nav .sanjiao {
    transform: rotateX(180deg);
}
.nav li {
    height: 38px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    color: #2995fc;
}
.nav li:hover {
    background: #e6f4fd;
}
.nav1 {
    background: #009efd;
    padding: 0 20px;
    border-radius: 10px;
    height: 50px;
}
</style>
<script>
export default {
    name: "TeaSpeNav",
    data() {
        return {
            active: 0,
            nav: [
                {
                    navIcon: require("../assets/nav/banjiguanli.png"),
                    navTitle: "班级管理",
                    navArray: [
                        {
                            liName: "班级管理",
                            goto: {
                                name: "TeaSpeClassMag",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "班级管理" },
                                        { name: "班级管理" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "学生管理",
                            goto: {
                                name: "TeaSpeStuMag",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "班级管理" },
                                        { name: "学生管理" }
                                    ]
                                }
                            }
                        }
                    ]
                },

                {
                    navIcon: require("../assets/nav/kechengshezhi.png"),
                    navTitle: "课程设置",
                    navArray: [
                        {
                            liName: "听一听",
                            goto: {
                                name: "TeaSpeTing",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "课程设置" },
                                        { name: "听一听" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "说一说",
                            goto: {
                                name: "TeaSpeShuo",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "课程设置" },
                                        { name: "说一说" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "能力测评设置",
                            goto: {
                                name: "TeaSpeNlcp",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "课程设置" },
                                        { name: "能力测评设置" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "成绩权重设置",
                            goto: {
                                name: "TeaSpeCjqz",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "课程设置" },
                                        { name: "成绩权重设置" }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/kechengchengji.png"),
                    navTitle: "课程成绩与分析",
                    navArray: [
                        {
                            liName: "课程进度查询",
                            goto: {
                                name: "TeaSpeKcjd",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "课程成绩与分析" },
                                        { name: "课程进度查询" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "课程成绩查询",
                            goto: {
                                name: "TeaSpeKccj",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "课程成绩与分析" },
                                        { name: "课程成绩查询" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "课程结果分析",
                            goto: {
                                name: "TeaSpeKcjg",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "课程成绩与分析" },
                                        { name: "课程结果分析" }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/yinshipinguanli.png"),
                    navTitle: "音视频管理",
                    navArray: [
                        {
                            liName: "音频管理",
                            goto: {
                                name: "TeaSpeRadio",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "音视频管理" },
                                        { name: "音频管理" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "配音视频管理",
                            goto: {
                                name: "TeaSpeRVMag",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "音视频管理" },
                                        { name: "配音视频管理" }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/jiaoxueziyuan.png"),
                    navTitle: "教学资源管理",
                    navArray: [
                        {
                            liName: "教学资源管理",
                            goto: {
                                name: "TeaSpeSource",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        { name: "教学资源管理" }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/keneizhishitianjiao.png"),
                    navTitle: "课内知识添加管理",
                    navArray: [
                        {
                            liName: "课内资源添加",
                            goto: {
                                name: "TeaSpeAddKnle",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "课内知识添加管理" },
                                        { name: "课内资源添加" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "课内习题添加",
                            goto: {
                                name: "TeaSpeFbnk",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "课内知识添加管理" },
                                        { name: "课内习题添加" }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/hudongxinxi.png"),
                    navTitle: "互动信息管理",
                    navArray: [
                        {
                            liName: "通知公告",
                            goto: {
                                name: "TeaSpeTongzhi",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "互动信息管理" },
                                        { name: "通知公告" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "留言管理",
                            goto: {
                                name: "TeaSpeLiuyan",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "互动信息管理" },
                                        { name: "留言管理" }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/shixunguanli.png"),
                    navTitle: "实训管理",
                    navArray: [
                        {
                            liName: "实训作业",
                            goto: {
                                name: "TeaSpeShixun",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "实训管理" },
                                        { name: "实训作业" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "学生实训作业",
                            goto: {
                                name: "TeaSpeStushixun",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "实训管理" },
                                        { name: "学生实训作业" }
                                    ]
                                }
                            }
                        },
                        {
                            liName: "最优推送",
                            goto: {
                                name: "TeaSpeYou",
                                params: {
                                    breadcrumb: [
                                        { name: "首页", goto: "/" },
                                        { name: "口语平台", goto: "/teaspe" },
                                        // { name: "实训管理" },
                                        { name: "最优推送" }
                                    ]
                                }
                            }
                        }
                    ]
                }
            ]
        };
    },

    methods: {
        toggleUl: function(e) {
            this.active = e;
        },
        toMain(m, n) {
            let arr = this.nav[m].navArray;
            let name = arr[n].goto.name;
            let breadcrumb = arr[n].goto.params.breadcrumb;
            let tabs = arr.map(function(val) {
                let liname=val.liName;
                let link=val.goto.name
                return {liname,link};
            });
            this.$router.push({
                name: name,
                params: {
                    tabs,breadcrumb,n
                }
            });
        }
    }
};
</script>


