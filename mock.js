/**
 * Created with JetBrains WebStorm
 * Author：lizm
 * Date：2018/8/7
 * Time：19:43
 * Description：JavaScript file
 */

var dataSource = [{
    'position': 'cw1',
    'birthday': '2015-02-11',
    'educational_name': '大专',
    'remarks': 'sdf',
    'dept_name': '财务部',
    'position_name': '财务总监',
    'city': '',
    'country': 'cn',
    'createtime': '2015-02-03',
    'id': '65ee15b5-9b3d-4658-a319-1a013e454fa1',
    'loginname': 'zff@163.com',
    'dept_id': 'cw',
    'school': '财经大学',
    'married': 0,
    'email': 'zff@163.com',
    'age': 25,
    'name': '张芳芳',
    'educational': '1',
    'gender': 0,
    'salary': '1000.01',
    'checked':false
}, {
    'position': 'rs2',
    'birthday': '2013-05-15',
    'educational_name': '大专',
    'remarks': null,
    'dept_name': '人事部',
    'position_name': '人事助理',
    'city': null,
    'country': 'cn',
    'createtime': '2013-05-15',
    'id': '1794542d-843c-4723-b96a-2dd9f1444998',
    'loginname': 'max',
    'dept_id': 'rs',
    'school': '宁波理工大学',
    'married': 0,
    'email': null,
    'age': 25,
    'name': '麦克',
    'educational': '1',
    'gender': 1,
    'salary': '1111.00',
    'checked':false
}, {
    'position': 'sc3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '销售员',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'a817ca24-ede0-4932-8455-b1e86eb7772d',
    'loginname': 'wl19861219@163.com',
    'dept_id': 'sc',
    'school': '南京审计学院',
    'married': 0,
    'email': 'wl19861219@163.com',
    'age': 25,
    'name': '王岚',
    'educational': '2',
    'gender': 0,
    'salary': '3000',
    'checked':false
}, {
    'position': 'js1',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '技术总监',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '626c9bd1-c99b-4969-9af8-58d216c2a49b',
    'loginname': 'hongweishi@hotmail.com',
    'dept_id': 'js',
    'school': '江苏科技大学',
    'married': 1,
    'email': 'hongweishi@hotmail.com',
    'age': 37,
    'name': '施宏伟',
    'educational': '2',
    'gender': 1,
    'salary': '6350',
    'checked':false
}, {
    'position': 'rs1',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '人事部',
    'position_name': '人事部经理',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'ad62a74d-82b0-4ece-9d01-59965d60f86e',
    'loginname': 'miaochun@qq.com',
    'dept_id': 'rs',
    'school': '苏州大学',
    'married': 1,
    'email': 'miaochun@qq.com',
    'age': 30,
    'name': '苗春',
    'educational': '2',
    'gender': 1,
    'salary': '6000',
    'checked':false
}, {
    'position': 'js3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '前端工程师',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '6f1da849-7fea-4fe1-ba33-71f7d4a6412d',
    'loginname': 'ywq2000@163.com',
    'dept_id': 'js',
    'school': '三江学院',
    'married': 1,
    'email': 'ywq2000@163.com',
    'age': 27,
    'name': '袁维琦',
    'educational': '2',
    'gender': 0,
    'salary': '4632',
    'checked':false
}, {
    'position': 'rs2',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '人事部',
    'position_name': '人事助理',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'b0171c0f-5064-4975-9f54-ebf28666aca6',
    'loginname': 'jan3844@gmail.com',
    'dept_id': 'rs',
    'school': '浙江理工大学',
    'married': 0,
    'email': 'jan3844@gmail.com',
    'age': 25,
    'name': '沈臻妍',
    'educational': '2',
    'gender': 0,
    'salary': '3400',
    'checked':false
}, {
    'position': 'rs2',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '人事部',
    'position_name': '人事助理',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '70b7f3d2-b5d3-413f-b3ae-d56e07fbe5fe',
    'loginname': 'zw@hotmail.com',
    'dept_id': 'rs',
    'school': '南京工业大学',
    'married': 1,
    'email': 'zw@hotmail.com',
    'age': 31,
    'name': '张伟',
    'educational': '2',
    'gender': 1,
    'salary': '4760',
    'checked':false
}, {
    'position': 'js3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '前端工程师',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '0ffa83ef-c0d2-4c9b-9c31-aa46b657c700',
    'loginname': 'lili@163.com',
    'dept_id': 'js',
    'school': '上海工商学院',
    'married': 0,
    'email': 'lili@163.com',
    'age': 25,
    'name': '李丽',
    'educational': '2',
    'gender': 0,
    'salary': '3681.12',
    'checked':false
}, {
    'position': 'sc3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': '爱好篮球',
    'dept_name': '市场销售部',
    'position_name': '销售员',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'b3d3d2b2-460a-470e-a33c-aff1c8d8a652',
    'loginname': 'sww@163.com',
    'dept_id': 'sc',
    'school': '天津科技大学',
    'married': 0,
    'email': 'sww@163.com',
    'age': 25,
    'name': '宋蔚伟',
    'educational': '2',
    'gender': 1,
    'salary': '3681',
    'checked':false
}, {
    'position': 'sc3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '销售员',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '77b8dd59-30a5-49cd-aaa2-095926770438',
    'loginname': 'qinli3849087@qq.com',
    'dept_id': 'sc',
    'school': '盐城师范学院',
    'married': 1,
    'email': 'qinli3849087@qq.com',
    'age': 25,
    'name': '秦立',
    'educational': '2',
    'gender': 0,
    'salary': '3000',
    'checked':false
}, {
    'position': 'js5',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '实习生',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '10a9f701-e0e0-4506-8937-e7c0ae8c4ae6',
    'loginname': 'glq@qq.com',
    'dept_id': 'js',
    'school': '上海交通大学',
    'married': 0,
    'email': 'glq@qq.com',
    'age': 24,
    'name': '顾乐琴',
    'educational': '2',
    'gender': 0,
    'salary': '2000.36',
    'checked':false
}, {
    'position': 'sc1',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '市场总监',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'b4366fb3-fb9c-4244-b3b6-c56de0c70cde',
    'loginname': 'tangyue@gmail.com',
    'dept_id': 'sc',
    'school': '金陵科技大学',
    'married': 1,
    'email': 'tangyue@gmail.com',
    'age': 35,
    'name': '唐岳',
    'educational': '2',
    'gender': 1,
    'salary': '6300',
    'checked':false
}, {
    'position': 'js3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '前端工程师',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '7804c632-5959-4c8e-b7e7-633926efa8d9',
    'loginname': 'zhou123@163.com',
    'dept_id': 'js',
    'school': '安徽农业大学',
    'married': 0,
    'email': 'zhou123@163.com',
    'age': 26,
    'name': '周捷',
    'educational': '2',
    'gender': 1,
    'salary': '4600',
    'checked':false
}, {
    'position': 'sc3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '销售员',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '12dfbe12-8a80-4bd6-9d88-f36b505408f8',
    'loginname': 'wjm@qq.com',
    'dept_id': 'sc',
    'school': '河北科技大学',
    'married': 1,
    'email': 'wjm@qq.com',
    'age': 27,
    'name': '王佳美',
    'educational': '2',
    'gender': 0,
    'salary': '3681.56',
    'checked':false
}, {
    'position': 'js4',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '美工',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'beb61bb1-9c6c-4c93-8d82-ab784cc00b27',
    'loginname': 'wwy@yahoo.com',
    'dept_id': 'js',
    'school': '铜陵学院',
    'married': 1,
    'email': 'wwy@yahoo.com',
    'age': 28,
    'name': '吴蔚一',
    'educational': '2',
    'gender': 1,
    'salary': '4320',
    'checked':false
}, {
    'position': 'js4',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '美工',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '7cc225c6-2673-4993-ab02-288e15fc351b',
    'loginname': 'wss2005@qq.com',
    'dept_id': 'js',
    'school': '南京审计学院',
    'married': 1,
    'email': 'wss2005@qq.com',
    'age': 27,
    'name': '王珊珊',
    'educational': '2',
    'gender': 0,
    'salary': '3700',
    'checked':false
}, {
    'position': 'js5',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '实习生',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '14e8841e-9b41-485c-9cd4-de77f8ba4cfa',
    'loginname': 'zhuming@163.com',
    'dept_id': 'js',
    'school': '汕头大学',
    'married': 0,
    'email': 'zhumin@163.com',
    'age': 24,
    'name': '朱敏',
    'educational': '2',
    'gender': 1,
    'salary': '2000.55',
    'checked':false
}, {
    'position': 'sc3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '销售员',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'c7643283-f8f8-4329-9f06-276168ffc192',
    'loginname': 'zhangliang@163.com',
    'dept_id': 'sc',
    'school': '宿州学院',
    'married': 0,
    'email': 'zhangliang@163.com',
    'age': 25,
    'name': '张亮',
    'educational': '2',
    'gender': 0,
    'salary': '3500',
    'checked':false
}, {
    'position': 'sc3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '销售员',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '7ef2fc41-27b2-4991-9134-189f95d76c42',
    'loginname': 'hk2006@qq.com',
    'dept_id': 'sc',
    'school': '湖南科技大学',
    'married': 0,
    'email': 'hk2006@qq.com',
    'age': 24,
    'name': '黄凯',
    'educational': '2',
    'gender': 1,
    'salary': '2900',
    'checked':false
}, {
    'position': 'js2',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '后台工程师',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '17ac00b0-ea98-4865-b006-38a462ad201a',
    'loginname': 'wj1983417@qq.com',
    'dept_id': 'js',
    'school': '扬州大学',
    'married': 1,
    'email': 'wj1983417@qq.com',
    'age': 28,
    'name': '王军',
    'educational': '2',
    'gender': 1,
    'salary': '4850.88',
    'checked':false
}, {
    'position': 'js2',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '后台工程师',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'c95c8c42-9fa9-4188-9a6e-0cb676d824e5',
    'loginname': 'jinyi1987@qq.com',
    'dept_id': 'js',
    'school': '江苏大学',
    'married': 0,
    'email': 'jinyi1987@qq.com',
    'age': 26,
    'name': '金怡',
    'educational': '2',
    'gender': 0,
    'salary': '3987',
    'checked':false
}, {
    'position': 'cw2',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': '爱好足球',
    'dept_name': '财务部',
    'position_name': '会计',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '8197fb45-2b60-4309-820c-e70824fc9b33',
    'loginname': 'zm@163.com',
    'dept_id': 'cw',
    'school': '贵州财经大学',
    'married': 0,
    'email': 'zm@163.com',
    'age': 27,
    'name': '张明',
    'educational': '2',
    'gender': 1,
    'salary': '3839',
    'checked':false
}, {
    'position': 'sc2',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '销售经理',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '27eb622c-6b1b-431e-9cf5-c82a71fea2d5',
    'loginname': 'wkliang123@163.com',
    'dept_id': 'sc',
    'school': '常熟理工大学',
    'married': 1,
    'email': 'wkliang123@163.com',
    'age': 29,
    'name': '王克良',
    'educational': '2',
    'gender': 1,
    'salary': '5300',
    'checked':false
}, {
    'position': 'sc2',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '销售经理',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'ceb1ab63-c0c6-40fb-a481-65ed70b9e2a2',
    'loginname': 'huang8373268@qq.com',
    'dept_id': 'sc',
    'school': '金陵科技学院',
    'married': 1,
    'email': 'huang8373268@qq.com',
    'age': 37,
    'name': '黄磊',
    'educational': '2',
    'gender': 0,
    'salary': '7398',
    'checked':false
}, {
    'position': 'sc2',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '销售经理',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '8cb7e27c-ebab-48b5-bf83-67f8294e8797',
    'loginname': 'shcheng@163.com',
    'dept_id': 'sc',
    'school': '南京晓庄学院',
    'married': 1,
    'email': 'shcheng@163.com',
    'age': 30,
    'name': '施华成',
    'educational': '2',
    'gender': 0,
    'salary': '5600',
    'checked':false
}, {
    'position': 'sc3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '销售员',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '410c0185-3c9c-44ec-b9fb-f5a856013157',
    'loginname': 'cyj@163.com',
    'dept_id': 'sc',
    'school': '南京审计学院',
    'married': 0,
    'email': 'cyj@qq.com',
    'age': 25,
    'name': '陈英杰',
    'educational': '2',
    'gender': 1,
    'salary': '3681',
    'checked':false
}, {
    'position': 'cw3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '财务部',
    'position_name': '出纳',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'd4d7b386-5030-4ef8-882f-0aa869217121',
    'loginname': 'chenjie1866@qq.com',
    'dept_id': 'cw',
    'school': '徐州工程大学',
    'married': 0,
    'email': 'chenjie1866@qq.com',
    'age': 24,
    'name': '陈杰',
    'educational': '2',
    'gender': 1,
    'salary': '3000',
    'checked':false
}, {
    'position': 'js2',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '后台工程师',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '9252b4a2-8000-4b3e-b29a-ac7849163ca2',
    'loginname': 'djf19830326@qq.com',
    'dept_id': 'js',
    'school': '南京理工大学',
    'married': 1,
    'email': 'djf19830326@qq.com',
    'age': 28,
    'name': '杜鉴锋',
    'educational': '2',
    'gender': 1,
    'salary': '5300',
    'checked':false
}, {
    'position': 'js3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '前端工程师',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '54b12a07-1f7d-4616-b3e9-9dcc465a5f33',
    'loginname': '13625147852@163.com',
    'dept_id': 'js',
    'school': '南京邮电学院',
    'married': 0,
    'email': null,
    'age': 25,
    'name': '张鹏楠',
    'educational': '2',
    'gender': 1,
    'salary': '3230',
    'checked':false
}, {
    'position': 'js3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '前端工程师',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'd6fb5410-adde-46a9-9d2b-dee99c64a83d',
    'loginname': 'xzz@163.com',
    'dept_id': 'js',
    'school': '宁波工程大学',
    'married': 0,
    'email': 'xzz@163.com',
    'age': 25,
    'name': '谢忠哲',
    'educational': '2',
    'gender': 0,
    'salary': '3860',
    'checked':false
}, {
    'position': 'js2',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '品管部',
    'position_name': '后台工程师',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '92c2a9fb-5da1-4de5-a516-0c4c96d82ffd',
    'loginname': 'wq@163.com',
    'dept_id': 'js',
    'school': '天津商业大学',
    'married': 0,
    'email': 'wq@163.com',
    'age': 25,
    'name': '王强',
    'educational': '2',
    'gender': 1,
    'salary': '3201',
    'checked':false
}, {
    'position': 'cw3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '财务部',
    'position_name': '出纳',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '5b68ce26-90d5-4df5-9fe3-cdbd2a325f23',
    'loginname': 'gyj@qq.com',
    'dept_id': 'cw',
    'school': '上海外贸大学',
    'married': 0,
    'email': 'gyj@qq.com',
    'age': 26,
    'name': '高英杰',
    'educational': '2',
    'gender': 1,
    'salary': '3232',
    'checked':false
}, {
    'position': 'rs1',
    'birthday': '2013-01-21',
    'educational_name': '研究生',
    'remarks': null,
    'dept_name': '人事部',
    'position_name': '人事部经理',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'ac3c3166-e677-45a5-9d1b-da4f09d6fc2a',
    'loginname': 'zhoulan2010@hotmail.com',
    'dept_id': 'rs',
    'school': '南京理工大学',
    'married': 1,
    'email': 'zhoulan2010@hotmail.com',
    'age': 34,
    'name': '周兰',
    'educational': '3',
    'gender': 0,
    'salary': '6580',
    'checked':false
}, {
    'position': 'cw3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '财务部',
    'position_name': '出纳',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': 'a46d28db-c484-4e58-9076-166cb957a152',
    'loginname': '19880141x@qq.com',
    'dept_id': 'cw',
    'school': '合肥学院',
    'married': 0,
    'email': '19880141x@qq.com',
    'age': 25,
    'name': '薛乃馨',
    'educational': '2',
    'gender': 0,
    'salary': '3100',
    'checked':false
}, {
    'position': 'sc3',
    'birthday': '2013-01-21',
    'educational_name': '本科',
    'remarks': null,
    'dept_name': '市场销售部',
    'position_name': '销售员',
    'city': null,
    'country': null,
    'createtime': '2013-01-21',
    'id': '61a6943f-990e-4169-b6a0-bed9bdc42a5f',
    'loginname': 'xiaoqian18392342@qq.com',
    'dept_id': 'sc',
    'school': '南京信息工程大学',
    'married': 0,
    'email': 'xiaoqian18392342@qq.com',
    'age': 24,
    'name': '陈晓倩',
    'educational': '2',
    'gender': 0,
    'salary': '3000',
    'checked':false
}];