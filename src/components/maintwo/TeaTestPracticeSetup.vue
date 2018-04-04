<template>
    <div class="inputTable">
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
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

                    <span>内容选择:</span>
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
                </div>

            </div>

            <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>模块名称</th>
                        <th>级别</th>
                        <th>内容模块</th>
                        <th style="width:35%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>J-test</td>
                        <td>A-D</td>
                        <td>语法</td>
                        <td>
                            <button>设置</button>
                            <button>查看</button>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>能力考</td>
                        <td>N1</td>
                        <td>词汇</td>
                        <td>
                            <button>设置</button>
                            <button>查看</button>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>商务口语</td>
                        <td></td>
                        <td>就职</td>
                        <td>
                            <button>设置</button>
                            <button>查看</button>
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

