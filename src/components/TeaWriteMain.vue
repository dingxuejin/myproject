<template>
    <div id="mainOne1">
        <div class="mainOne2 flex-start">
            <el-breadcrumb separator='>>'>
                <el-breadcrumb-item :to="{ path: '/teaspe' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>写作平台</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="main0">
            <div class="flex-center">
                <img src="../assets/main/teawrite.png" alt="">
            </div>
            <div class="flex-center">
                <img src="../assets/main/teaspe2.png" alt="">
            </div>
        </div>
        <div class="flex-center">

            <div class="main1" @click="dialogVisible1 = true">
                <img src="../assets/main/zhuanxiang.png" alt="">
                <div class="main2">
                    <div class="main4">基础知识</div>
                    <div class="main5">范例展示、单词解释、常用句式</div>
                </div>
            </div>

            <div class="main1" @click="dialogVisible2 = true">
                <img src="../assets/main/zhenti.png" alt="">
                <div class="main2">
                    <div class="main4">能力测评</div>
                    <div class="main5">词汇、句式</div>
                </div>
            </div>

            <div class="main1" @click="dialogVisible3 = true">
                <img src="../assets/main/jingsai.png" alt="">
                <div class="main2">
                    <div class="main4">实战演练</div>
                    <div class="main5">完型填空、单句翻译、写作实践</div>
                </div>
            </div>

        </div>
        <div class="main3">
            <img src="../assets/main/liucheng.png" alt="">
        </div>

        <el-dialog :visible.sync="dialogVisible1" width="65%" :before-close="handleClose">
            <div>
                <table class="table1">
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>实训内容</th>
                            <th>章节</th>
                            <th>关卡</th>
                            <th>内容预览</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td rowspan="15">范例展示</td>
                            <td rowspan="4">基础篇</td>
                            <td>自我介绍文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>日记</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>书信</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>贺年卡</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td rowspan="6">记述论述篇</td>
                            <td>说明文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>感想文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>记录文</td>

                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td>演讲稿</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>9</td>
                            <td>研究报告</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>10</td>
                            <td>论文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>11</td>
                            <td rowspan="5">商务篇</td>
                            <td>初步建立关系</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>12</td>
                            <td>商务营销往来</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>13</td>
                            <td>商务问题处理</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>14</td>
                            <td>公司内部文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>15</td>
                            <td>社交文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>16</td>
                            <td rowspan="15">单词解释</td>
                            <td rowspan="4">基础篇</td>
                            <td>自我介绍文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>17</td>
                            <td>日记</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>18</td>
                            <td>书信</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>19</td>
                            <td>贺年卡</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>20</td>
                            <td rowspan="6">记述论述篇</td>
                            <td>说明文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>21</td>
                            <td>感想文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>记录文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>23</td>
                            <td>演讲稿</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>24</td>
                            <td>研究报告</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>25</td>
                            <td>论文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>26</td>
                            <td rowspan="5">商务篇</td>
                            <td>初步建立关系</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>27</td>
                            <td>商务营销往来</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>28</td>
                            <td>商务问题处理</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>29</td>
                            <td>公司内部文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>30</td>
                            <td>社交文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>31</td>
                            <td rowspan="15">常用句式</td>
                            <td rowspan="4">基础篇</td>
                            <td>自我介绍文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>32</td>
                            <td>日记</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>33</td>
                            <td>书信</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>34</td>
                            <td>贺年卡</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>35</td>
                            <td rowspan="6">记述论述篇</td>
                            <td>说明文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>36</td>
                            <td>感想文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td>记录文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>38</td>
                            <td>演讲稿</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>39</td>
                            <td>研究报告</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>40</td>
                            <td>论文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>41</td>
                            <td rowspan="5">商务篇</td>
                            <td>初步建立关系</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>42</td>
                            <td>商务营销往来</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>43</td>
                            <td>商务问题处理</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>449</td>
                            <td>公司内部文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>45</td>
                            <td>社交文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

            <span slot="footer" class="dialog-footer">
                <div class="button flex-center">
                    <el-button @click="dialogVisible1 = false" class="button1">关闭</el-button>
                </div>
            </span>
        </el-dialog>

        <el-dialog :visible.sync="dialogVisible2" width="65%" :before-close="handleClose">
            <div>
                <table class="table1">
                    <thead>
                        <tr>
                            <td>序号</td>
                            <td>实训内容</td>
                            <td>章节</td>
                            <td>关卡</td>
                            <td>内容预览</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td rowspan="15">词汇</td>
                            <td rowspan="4">基础篇</td>
                            <td>自我介绍文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>日记</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>书信</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>贺年卡</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td rowspan="6">记述论述篇</td>
                            <td>说明文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>感想文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>记录文</td>

                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td>演讲稿</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>9</td>
                            <td>研究报告</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>10</td>
                            <td>论文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>11</td>
                            <td rowspan="5">商务篇</td>
                            <td>初步建立关系</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>12</td>
                            <td>商务营销往来</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>13</td>
                            <td>商务问题处理</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>14</td>
                            <td>公司内部文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>15</td>
                            <td>社交文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>16</td>
                            <td rowspan="15">句式</td>
                            <td rowspan="4">基础篇</td>
                            <td>自我介绍文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>17</td>
                            <td>日记</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>18</td>
                            <td>书信</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>19</td>
                            <td>贺年卡</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>20</td>
                            <td rowspan="6">记述论述篇</td>
                            <td>说明文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>21</td>
                            <td>感想文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>记录文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>23</td>
                            <td>演讲稿</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>24</td>
                            <td>研究报告</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>25</td>
                            <td>论文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>26</td>
                            <td rowspan="5">商务篇</td>
                            <td>初步建立关系</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>27</td>
                            <td>商务营销往来</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>28</td>
                            <td>商务问题处理</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>29</td>
                            <td>公司内部文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>30</td>
                            <td>社交文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

            <span slot="footer" class="dialog-footer">
                <div class="button flex-center">
                    <el-button @click="dialogVisible2 = false" class="button1">关闭</el-button>
                </div>
            </span>
        </el-dialog>

        <el-dialog :visible.sync="dialogVisible3" width="65%" :before-close="handleClose">
            <div>
                <table class="table1">
                    <thead>
                        <tr>
                            <td>序号</td>
                            <td>实训内容</td>
                            <td>章节</td>
                            <td>关卡</td>
                            <td>内容预览</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td rowspan="15">完型填空</td>
                            <td rowspan="4">基础篇</td>
                            <td>自我介绍文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>日记</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>书信</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>贺年卡</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td rowspan="6">记述论述篇</td>
                            <td>说明文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>感想文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>记录文</td>

                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td>演讲稿</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>9</td>
                            <td>研究报告</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>10</td>
                            <td>论文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>11</td>
                            <td rowspan="5">商务篇</td>
                            <td>初步建立关系</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>12</td>
                            <td>商务营销往来</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>13</td>
                            <td>商务问题处理</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>14</td>
                            <td>公司内部文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>15</td>
                            <td>社交文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>16</td>
                            <td rowspan="15">单句翻译</td>
                            <td rowspan="4">基础篇</td>
                            <td>自我介绍文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>17</td>
                            <td>日记</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>18</td>
                            <td>书信</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>19</td>
                            <td>贺年卡</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>20</td>
                            <td rowspan="6">记述论述篇</td>
                            <td>说明文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>21</td>
                            <td>感想文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>记录文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>23</td>
                            <td>演讲稿</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>24</td>
                            <td>研究报告</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>25</td>
                            <td>论文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>26</td>
                            <td rowspan="5">商务篇</td>
                            <td>初步建立关系</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>27</td>
                            <td>商务营销往来</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>28</td>
                            <td>商务问题处理</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>29</td>
                            <td>公司内部文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>30</td>
                            <td>社交文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>31</td>
                            <td rowspan="15">写作实践</td>
                            <td rowspan="4">基础篇</td>
                            <td>自我介绍文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>32</td>
                            <td>日记</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>33</td>
                            <td>书信</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>34</td>
                            <td>贺年卡</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>35</td>
                            <td rowspan="6">记述论述篇</td>
                            <td>说明文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>36</td>
                            <td>感想文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td>记录文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>38</td>
                            <td>演讲稿</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>39</td>
                            <td>研究报告</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>40</td>
                            <td>论文</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>41</td>
                            <td rowspan="5">商务篇</td>
                            <td>初步建立关系</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>42</td>
                            <td>商务营销往来</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>43</td>
                            <td>商务问题处理</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>449</td>
                            <td>公司内部文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>

                        <tr>
                            <td>45</td>
                            <td>社交文件</td>
                            <td>
                                <button>预览</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

            <span slot="footer" class="dialog-footer">
                <div class="button flex-center">
                    <el-button @click="dialogVisible3 = false" class="button1">关闭</el-button>
                </div>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    name: "TeaSpeMain";
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>
.el-dialog__headerbtn .el-dialog__close {
  color: #000;
}

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

.button1 {
  width: 120px;
  height: 42px;
  color: #fff;
  background-image: url("../../static/images/classmanage/bluebutton.png");
  background-size: 100% 100%;
  border: none;
  margin-left: 10px;
}

.table1 {
  border: 1px solid #f6fbfe;
}
</style>