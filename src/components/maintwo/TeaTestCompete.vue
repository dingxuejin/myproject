<template>
    <div class="inputTable">
        <div class="containerClass">
            <div class="maincm">
                <div class="left">
                    <span>竞赛时间：</span>
                    <input type="text" name="search">
                    <span>-</span>
                    <input type="text" name="search">
                    <span>竞赛名称：</span>
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
                    <button>开始竞赛</button>
                </div>

            </div>

            <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>模块名称</th>
                        <th>级别</th>
                        <th>试卷名称</th>
                        <th>竞赛时间</th>
                        <th>状态</th>
                        <th style="width:35%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>J-test</td>
                        <td>A-D</td>
                        <td>试卷一</td>
                        <td>2017/02/22 19:14:34</td>
                        <td>进行中</td>
                        <td>
                            <button>设置</button>
                            <button>暂停</button>
                            <button>延长时间</button>
                            <button>结束</button>
                            <button>查看</button>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>能力考</td>
                        <td>N1</td>
                        <td>试卷三</td>
                        <td>2017/02/22 19:14:34</td>
                        <td>已结束</td>
                        <td>
                            <button>查看</button>
                            <button>设置</button>
                            <button>删除</button>
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

