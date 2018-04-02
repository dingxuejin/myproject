<template>
    <div class="inputTable">
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>模块选择:</span>
                    <select name="" id="">
                        <option value="">J-test</option>
                        <option value="">JLPT</option>
                    </select>

                    <span>级别:</span>
                    <select name="" id="">
                        <option value="">A-D</option>
                        <option value="">E-F</option>
                    </select>

                    <span>试卷名称:</span>
                    <input type="text" name="search" placeholder="请输入关键字">
                </div>

                <div class="right">
                    <button>搜索</button>
                </div>

            </div>

            <table>
                <thead>
                    <tr>
                        <th rowspan="2">编号</th>
                        <th rowspan="2">模块名称</th>
                        <th rowspan="2">级别</th>
                        <th rowspan="2">试卷名称</th>
                        <th rowspan="2">题目ID</th>
                        <th rowspan="2">题号</th>
                        <th rowspan="2">题型</th>
                        <th rowspan="2">答题人数</th>
                        <th colspan="4">各选项人数</th>
                        <th colspan="4">干扰项占比</th>
                        <th rowspan="2">操作</th>
                    </tr>

                    <tr>
                        <th>选项A</th>
                        <th>选项B</th>
                        <th>选项C</th>
                        <th>选项D</th>
                        <th>选项A</th>
                        <th>选项B</th>
                        <th>选项C</th>
                        <th>选项D</th>
                    </tr>
                </thead>
                <tbody>
                    

                    <tr>
                        <td>1</td>
                        <td>J-test</td>
                        <td>A-D</td>
                        <td>试卷一</td>
                        <td>x0001</td>
                        <td>1</td>
                        <td>选择题</td>
                        <td>30</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button>预览</button>
                        </td>
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

span{
    margin: 0px 10px;
}
</style>
