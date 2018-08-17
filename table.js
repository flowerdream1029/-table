/**
 * Created with JetBrains WebStorm
 * Author：lizm
 * Date：2018/8/7
 * Time：19:38
 * Description：原生js html css 实现的表格增删改查
 */

//dataSource 在 mock.js 中定义的
//全程操纵的数据只有两个，一个dataSource 一个sreachResult;

var tableDom = {}; // 用于缓存dom元素，避免每次用到都需要重新获取这个元素
var pagerDom = {}; // 分页器
var toolBarDom = {}; // 搜索
var modalDom = {}; // 增加
var searchResult = []; // 搜索结果
var inputContent = {}; //选择进行编辑的一条记录的内容
var flag = true;  //用于区分弹出框是增加还是编辑，true为编辑

// 模拟extend
function extend(target,options) {

    for(var p in options){
        if(options.hasOwnProperty(p)){
            target[p] = options[p];
        }
    }
    return target;
}

// 缓存dom
function cacheDom() {
    toolBarDom = {
        searchInput: document.getElementById('search-input'),
        searchBtn: document.getElementById('search-btn'),
        addBtn: document.getElementById('add-row-btn'),
        editBtn: document.getElementById('edit-row-btn'),
        delBtn: document.getElementById('del-row-btn')
    };

    tableDom = {
        pickAll: document.getElementById('pick-all'),
        tHead: document.getElementById('thead'),
        tCheckbox: document.getElementsByName('input-checkbox'),
        tBody: document.getElementById('tbody'),
        tFoot: document.getElementById('tfoot'),
        tHidden: document.getElementsByName('hidden')
    };

    pagerDom = {
        total: document.getElementById('total'),
        pageSize: document.getElementById('page-size'),
        prevBtn: document.getElementById('prev'),
        nextBtn: document.getElementById('next'),
        jumpBtn: document.getElementById('jump-to'),
        currentPage: document.getElementById('current-page'),
        totalPage: document.getElementById('total-page'),
        targetPage: document.getElementById('target-page')
    };

    modalDom = {
        modal: document.getElementById('modal-add'),
        form: document.getElementById('row-form'),
        closeBtn: document.getElementById('modal-close'),
        submitBtn: document.getElementById('form-submit'),
        genderInput: document.querySelectorAll('.input-gender'),
        marriedInput: document.getElementsByName('married')
    };

}

// 事件绑定
function bindEvents() {
    // 搜索输入框
    toolBarDom.searchInput.addEventListener('input', function () {
        var keyword = toolBarDom.searchInput.value;
        if (!keyword) {
            setPager(dataSource);
            renderTable();
            enableBtn(pagerDom.prevBtn);
            enableBtn(pagerDom.nextBtn);
        }
    });
    toolBarDom.searchInput.addEventListener('keydown', function (e) {
        var event = window.event || e;
        if (event.keyCode === 13) {
            //回车事件
            toolBarDom.searchBtn.click();
        }
    });
    // 搜索按钮
    toolBarDom.searchBtn.addEventListener('click', function () {
        var keyword = toolBarDom.searchInput.value;
        !!keyword && searchByKeyWord(keyword);
    });
    // 添加 按钮
    toolBarDom.addBtn.addEventListener('click', function () {
        flag = false;
        modalDom.modal.style.display = 'block';
    });

    //编辑按钮
    toolBarDom.editBtn.addEventListener('click', function () {
        flag = true;
        inputContent = [];
        // console.log(this.id);//edit-row-btn
        //先判断有没有勾选复选框
        var data = searchResult.length > 0 ? searchResult.concat() : dataSource.concat();
        var len = data.length;
        var count = 0;
        for(let i=0;i<len;i++) {
            if(data[i].checked === false) {
                count++;
            } else {
                //说明已经被选中了
                inputContent = data[i];
            }
        }
        if(count === len) {
            alert('请先勾选要编辑的记录');
            return false;
        } else if (count < len-1) {
            alert('请只勾选一个记录');
            return false;
        }
        /*把选择的这条记录的数据放在inputContent中*/
        // console.log(inputContent);
        modalDom.modal.style.display = 'block';

        var inpitList = modalDom.form.querySelectorAll('input');
        inpitList.forEach(function (item) {
            var key = item.getAttribute('name');
            modalDom.form[key].value = inputContent[key];
            console.log(inputContent['gender']);
            if(inputContent['gender'] === 1) {
                modalDom.genderInput[1].checked = true;
                modalDom.genderInput[0].checked = false;
            } else {
                modalDom.genderInput[0].checked = true;
                modalDom.genderInput[1].checked = false;
            }

            if(inputContent['married'] === 1) {
                modalDom.marriedInput[1].checked = true;
                modalDom.marriedInput[0].checked = false; 
            } else {
                modalDom.marriedInput[0].checked = true;
                modalDom.marriedInput[1].checked = false;
            }
        });
    });

    //删除按钮
    toolBarDom.delBtn.addEventListener('click',function (e) {
        //先判断有没有勾选复选框
        var data = searchResult.length > 0 ? searchResult.concat() : dataSource.concat();
        var len = data.length;
        var count = 0;
        var arr = [];
        for(let i=0;i<len;i++) {
            if(data[i].checked === false) {
                count++;
            } else {
                arr.push(data[i].id);
            }
        }
        if(count === len) {
            alert('请先勾选要删除的记录');
            return false;
        } else {
            if ( confirm('确认要删除以下所选的记录吗？') ) {
                var arrLen = arr.length;
                for(let i=0;i<arrLen;i++) {
                    // console.log(typeof arr[i]); //number
                    data.forEach(function(item,index){
                        if(item.id === arr[i]) {
                        data.splice(index, 1);
                        }
                    })
                }
            }
        }
        searchResult = data;
        if(searchResult.length === 0) {
            alert('对不起，不可以删除全部');
            return false;
        }
        // pickAll();
        setPager(searchResult);
        renderTable();


        //弹出确认删除
        //执行删除的相关操作
    });

    // 弹窗的 x 按钮 点击事件
    modalDom.closeBtn.addEventListener('click', function () {
        modalDom.modal.style.display = 'none';
    });

    // 增加和编辑
    modalDom.form.addEventListener('submit', function (e) {
        // console.log(e.target);  //form表单
        var data = searchResult.length > 0 ? searchResult.concat() : dataSource.concat();
        console.log(data);
        // var len = data.length;
        var inpitList = modalDom.form.querySelectorAll('input');
        var obj = {};//用于增加的
        var editObj = {};//用于编辑的
        inpitList.forEach(function (item) {
            var key = item.getAttribute('name');
            obj[key] = modalDom.form[key].value;
            editObj[key] = modalDom.form[key].value;
            if(key === 'gender') {
                editObj['gender'] = +modalDom.form[key].value;
            } 
        });
        obj['checked'] = false;
        editObj['checked'] = inputContent['checked'];

        console.log(flag);
        if (flag) {
            //更新那个数据记录
            // alert(editObj['gender'] === 1); //true, 1 是false
            // console.log('editObj'+editObj);
            data.forEach(function (item) {
                if(item.id === editObj.id){
                    item =  extend(item,editObj);
                }
            });
            searchResult = data;
            setPager(searchResult);
        } else {
            data = data.concat([obj]);
            if(searchResult.length > 0) {
                searchResult = data;
                setPager(searchResult);
            }else {
                dataSource = data;
                setPager(dataSource);
            }
            // 跳到尾页
            let total = +pagerDom.totalPage.innerText;
            pagerDom.currentPage.innerText = total + ''; 
            setBtnStatus();
        }
        // console.log(data);
        // console.log(dataSource);
        // console.log(searchResult);
        renderTable();
        modalDom.modal.style.display = 'none';
        e.preventDefault(); // 阻止冒泡
        modalDom.form.reset();
        return false; // 不触发提交 action
    });
    //勾选中所有记录的复选框
    tableDom.pickAll.addEventListener('click',function () {
        var data = searchResult.length > 0 ? searchResult.concat() : dataSource.concat();
        // console.log(pageSize);
        // console.log(currentPage);
        // // console.log(typeof pagerDom.pageSize.value);//String
        // console.log(pagerDom.currentPage);
        var pageSize = +pagerDom.pageSize.value;
        var currentPage = +pagerDom.currentPage.innerHTML;
        for(let i=0;i < pageSize;i++){
            if(this.checked) {
                data[(currentPage-1)*pageSize + i].checked = true;
            }else {
                data[(currentPage-1)*pageSize + i].checked = false;
            }
        }
        renderTable();
    });
    //每个记录的复选框事件,用到了事件委托
    tableDom.tBody.addEventListener('click',function (e){
        // console.log(e.target);
        var data = searchResult.length > 0 ? [].concat(searchResult) : [].concat(dataSource);
        var len = data.length;
        //如果点击的是复选框执行以下操作
        if(e.target.type === 'checkbox') {
            var _this = e.target;
            if(_this.checked) {
                //里面是根据序号来确定是data的第几个项，再去改变内容
                // data.forEach( function (item,index) {
                //     if( item.id === )
                //         data[index].checked = true;
                // })
                // data[+_this.parentNode.parentNode.children[1].innerHTML - 1].checked = true;
                data.forEach( function (item) {
                    if (item.id === _this.id) {
                        item.checked = true;
                    }
                });
            }else {
                //当其中一个未选的时候，全选按钮就处于未被选中状态
                // tableDom.pickAll.checked = false;
                // data[+_this.parentNode.parentNode.children[1].innerHTML - 1].checked = false;
                data.forEach( function (item) {
                    if (item.id === _this.id) {
                        item.checked = false;
                    }
                });
            }
            renderTable();
        }
        //这里涉及了数组对象与引用的关系，cut
        // console.log(dataSource);

    });

    // 每页条数
    pagerDom.pageSize.addEventListener('change', function () {
        setPager(dataSource);
        renderTable();
        disableBtn(pagerDom.prevBtn);
        enableBtn(pagerDom.nextBtn);
    });

    // 上一页
    pagerDom.prevBtn.addEventListener('click', function () {
        let index = +pagerDom.currentPage.innerText;
        if (index === 1) {
            disableBtn(pagerDom.prevBtn);
            return;
        } else {
            pagerDom.currentPage.innerText = (index - 1) + '';
            enableBtn(pagerDom.prevBtn);
            enableBtn(pagerDom.nextBtn);
        }
        setBtnStatus();
        pickAll();
        renderTable();
    });
    // 下一页
    pagerDom.nextBtn.addEventListener('click', function () {
        let index = +pagerDom.currentPage.innerText;
        let total = +pagerDom.totalPage.innerText;
        if (index === total) {
            disableBtn(pagerDom.nextBtn);
            return;
        } else {
            pagerDom.currentPage.innerText = (index + 1) + '';
            enableBtn(pagerDom.nextBtn);
            enableBtn(pagerDom.prevBtn);
        }
        setBtnStatus();
        pickAll();
        renderTable();
    });
    // 跳转 页
    pagerDom.targetPage.addEventListener('input', function () {
        pagerDom.targetPage.value = pagerDom.targetPage.value.replace(/[^0-9]/ig, '');
    });
    // 跳转按钮
    pagerDom.jumpBtn.addEventListener('click', function () {
        var index = +pagerDom.targetPage.value;
        if (!index) {
            return false;
        }
        let total = +pagerDom.totalPage.innerText;
        let current = +pagerDom.currentPage.innerText;
        if (current === index) {
            alert('当前页已经是第' + index + '页了');
        } else if (index > total) {
            alert('不能超过总页数');
            pagerDom.targetPage.value = '';
        } else {
            pagerDom.currentPage.innerText = index + '';
        }
        setBtnStatus();
        pickAll();
        renderTable();
    });
}
//看全选按钮是否已经选中
function pickAll() {
    var data = searchResult.length > 0 ? searchResult.concat() : dataSource.concat();
    var pageSize = +pagerDom.pageSize.value;
    var currentPage = +pagerDom.currentPage.innerHTML;
    var count = 0;
    for(let i=0;i < pageSize;i++){
        if(data[(currentPage-1)*pageSize + i].checked === false) {
            tableDom.pickAll.checked = false;
        }else {
            count++;
        }
    }

    if(count === pageSize) {
        tableDom.pickAll.checked = true;
    }
}
// 设置按钮可用
function enableBtn(btn, className) {
    className = className || 'disabled';
    var cls = btn.getAttribute('class') || '';
    btn.removeAttribute('disabled');
    btn.setAttribute('class', cls.replace(className, ''));

}

// 设置按钮不可用
function disableBtn(btn, className) {
    className = className || 'disabled';
    var cls = (btn.getAttribute('class') || '').replace('disabled', ''); // 如果本身已经有 disabled 样式，先过滤调
    btn.setAttribute('disabled', true);
    btn.setAttribute('class', cls + ' ' + className);
}

// 首页和末页按钮不可用
function setBtnStatus() {
    let total = +pagerDom.totalPage.innerText;
    if (+pagerDom.currentPage.innerText === 1) {
        disableBtn(pagerDom.prevBtn);
    } else {
        enableBtn(pagerDom.prevBtn);
    }
    if (+pagerDom.currentPage.innerText === total) {
        disableBtn(pagerDom.nextBtn);
    } else {
        enableBtn(pagerDom.nextBtn);
    }
}

// 渲染 tbody
function renderTable() {
    console.log('search:',searchResult.length);
    var pageIndex = +pagerDom.currentPage.innerText; // + 号 可以隐式转换数据类型为 Number
    var pageSize = +pagerDom.pageSize.value;
    var list = searchResult.length > 0 ? searchResult.concat() : dataSource.concat();
    var begin = (pageIndex - 1) * pageSize;
    var data = list.slice(begin, begin + pageSize);
    var trs = '';
    data.forEach(function (item, index) {
        if(item.checked) {
            trs += '<tr><td>' + '<input type="checkbox" class="input-checkbox" name="input-checkbox" checked id="' + item.id + '">' + '</td>' ;
        } else {
            trs += '<tr><td>' + '<input type="checkbox" class="input-checkbox" name="input-checkbox" id="' + item.id + '">'  + '</td>';
        }
        var i = index + 1 + begin;
        trs +=
            '<td class="tbody-index">' + i + '</td>' +
            '<td>' + item.name + '</td>' +
            '<td>' + item.age + '</td>' +
            '<td>' + (item.gender === 1 ? '男' : '女') + '</td>' +
            '<td>' + item.birthday + '</td>' +
            '<td>' + item.school + '</td>' +            // 学校
            '<td>' + item.educational_name + '</td>' +  // 学历
            '<td>' + item.dept_name + '</td>' +         // 部门
            '<td>' + item.position_name + '</td>' +     // 职位
            '<td>' + item.checked + '</td></tr>' +
            '<td name="hidden" class="hidden" id="' + item.id + ' "></td></tr>';   //选中状态
    });
    tableDom.tBody.innerHTML = trs;
}

// 设置分页
function setPager(data) {
    pagerDom.total.innerText = data.length;
    if(data.length === 0) {
        data = dataSource;
        alert('对不起，没有查询到该结果');
    }else {
        pagerDom.currentPage.innerText = '1'; // 默认第一页
    }
    pagerDom.totalPage.innerText = Math.ceil(data.length / pagerDom.pageSize.value) + '';
    disableBtn(pagerDom.prevBtn);
}

// 中文关键字搜索
function searchByKeyWord(keyWord) {
    searchResult = [];
    dataSource.forEach(function (item) {
        var text = item.name + item.school + item.educational_name + item.dept_name + item.position_name +
            (item.gender === 1 ? '男' : '女');
        if (text.indexOf(keyWord) > -1) {
            searchResult.push(item);
        }
    });
    setPager(searchResult);
    renderTable();
    enableBtn(pagerDom.prevBtn);
    enableBtn(pagerDom.nextBtn);
}

// 页面元素加载完成后执行
// 初始化
window.onload = function () {

    cacheDom();

    bindEvents();

    setPager(dataSource);

    renderTable();

};