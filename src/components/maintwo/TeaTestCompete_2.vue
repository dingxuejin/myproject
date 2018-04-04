<template>
    <div class="inputTable">
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>学生姓名：</span>
                    <input type="text" name="search" placeholder="支持模糊查询">
                    <span>学生学号：</span>
                    <input type="text" name="search" placeholder="支持模糊查询">

                    <span>班级:</span>
                    <select name="" id="">
                        <option value="">class01</option>
                        <option value="">class02</option>
                    </select>

                    <span>模块选择:</span>
                    <select name="" id="">
                        <option value="">J-test</option>
                        <option value="">JLPT</option>
                    </select>

                    <span>试卷名称:</span>
                    <select name="" id="">
                        <option value="">语法</option>
                        <option value="">词汇</option>
                    </select>

                    <span>级别:</span>
                    <select name="" id="">
                        <option value="">A-D</option>
                        <option value="">E-F</option>
                    </select>
                </div>

                <div class="right">
                    <button>查询</button>
                    <button>导出EXCEL</button>
                </div>

            </div>

            <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>学号</th>
                        <th>姓名</th>
                        <th>模块名称</th>
                        <th>级别</th>
                        <th>试卷名称</th>
                        <th>提交时间</th>
                        <th>花费时间（单位：分钟）</th>
                        <th>总分</th>
                        <th>操作</th>
                        <th>语法题</th>
                        <th>词汇题</th>
                        <th>听力题</th>
                        <th>问答题</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>101</td>
                        <td>stu01</td>
                        <td>J-test</td>
                        <td>A-D</td>
                        <td>试卷四</td>
                        <td>2017/02/22 19:14:34</td>
                        <td>80</td>
                        <td>85</td>
                        <td></td>
                        <td>20</td>
                        <td>15</td>
                        <td>30</td>
                        <td>20</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>102</td>
                        <td>stu01</td>
                        <td>能力考</td>
                        <td>N1</td>
                        <td>试卷二</td>
                        <td>2017/02/22 19:14:34</td>
                        <td>56</td>
                        <td></td>
                        <td></td>
                        <td>20</td>
                        <td>15</td>
                        <td>30</td>
                        <td>20</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>103</td>
                        <td>stu03</td>
                        <td>商务礼仪</td>
                        <td>2级</td>
                        <td>试卷五</td>
                        <td>2017/02/22 19:14:34</td>
                        <td>100</td>
                        <td></td>
                        <td></td>
                        <td>20</td>
                        <td>15</td>
                        <td>30</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

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
    width: 150px;
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