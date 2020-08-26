// 轮播图
let items = document.getElementsByClassName('item');
let points = document.getElementsByClassName('point');
let rightBtn = document.getElementById('btn-right');
let leftBtn = document.getElementById('btn-left');
let site = document.querySelector('.site-slider');
let index = 0;
let timer = null;
// 清楚class
let clearActive = function() {
    for (let i = 0; i < items.length; i++) {
        items[i].className = "item";
        points[i].className = "point";
    }
}

let goIndex = function() {
    clearActive();
    items[index].className = "item active";
    points[index].className = "point active";
}
rightBtn.onclick = function() {
    if (index < items.length - 1) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}
leftBtn.onclick = function() {
    if (index > 0) {
        index--;
    } else {
        index = items.length - 1;
    }
    goIndex();
}

// 计时器
timer = setInterval(() => {
    rightBtn.onclick();
}, 1500);
// 鼠标移动到图片停止计时器
site.onmouseover = function() {
        clearInterval(timer);
    }
    // 离开重新开启计时器
site.onmouseout = function() {
        timer = setInterval(() => {
            rightBtn.onclick();
        }, 1500);
    }
    // 鼠标点击原点，跳转对应图片
for (let i = 0; i < points.length - 1; i++) {
    points[i].addEventListener('click', function() {
        let pointindex = this.getAttribute('data-index');
        index = pointindex;
        goIndex();
    })
}

// 右边扩展图
// function showlist(frist) {
//     var frist = document.getElementById(frist);
//     frist.style.display = "block";
// }

// function down(down) {
//     var frist = document.getElementById(down);
//     frist.style.display = "none"
// }

// 秒杀商品
function demo() {
    var nowDate = new Date();
    var endDate = new Date('2020/8/26 12:00:00');
    var diffTime = parseInt((endDate.getTime() - nowDate.getTime()) / 1000);
    var hour, minute, second;
    second = diffTime % 60;
    minute = parseInt(diffTime / 60) % 60;
    hour = parseInt(diffTime / 60 / 60);
    var h = document.getElementById('hour');
    var m = document.getElementById('minute');
    var s = document.getElementById('second');
    h.innerHTML = hour;
    m.innerHTML = minute;
    s.innerHTML = second;
    setTimeout(demo, 1000);
}
demo();