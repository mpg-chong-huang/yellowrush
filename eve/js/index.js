"use strict";

var isStarted = false;
var coco = [
    {num:1,word:'鸡年大吉 如鱼得水<br>生活更水润，工作倍顺心'},
    {num:2,word:'鸡年大发 晶银满屋<br>存款如水漫，家底似晶赢'},
    {num:3,word:'鸡年大胖 吃饱就睡<br>富到不工作，睡梦倍心安'},
    {num:4,word:'鸡年大晴 青春常驻<br>小桥流水惬，自然美到家'},
    {num:5,word:'鸡年大财 金银满树<br>财富漫天有，信手拈来福'},
    {num:6,word:'鸡年大有 夏威夷游<br>恭喜你获得免费夏威夷一日游<br>请在晚上做梦的时候找我领取'},

];

// 开始摇签
function start() {
    isStarted = true;
    $('.qiancover').hide();
    $('.decode').hide();
    $('.result').show();
    setTimeout(showDecode, 3000);
}

// 显示正在解签
function showDecode() {
    $('.result').hide();
    $('.decode').show();
    var rand = Math.floor(Math.random() * 6) ;

    console.log(rand);

    $('.decode .inner').css('background','url("img/'+rand+'.jpg") top no-repeat');
    $('#decodeword').html(coco[rand].word);

    //setTimeout(jumpToDecode, 3000);
}

function jumpToDecode(){
    var urls = ["#", "#"];
    var jumpTo = urls[parseInt(Math.random() * urls.length)];
    window.location = jumpTo;
};

//摇一摇(使用DeviceMotion事件, 推荐,应为可以计算加速度)

if(window.DeviceMotionEvent) {
    var speed = 25;
    var x, y, z, lastX, lastY, lastZ;
    x = y = z = lastX = lastY = lastZ = 0;

    window.addEventListener('devicemotion', function(event){
        var acceleration = event.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
            start();
            alert('测试成功');
        }
        lastX = x;
        lastY = y;
    }, false);
}

//摇一摇(使用DeviceOrientation事件, 本质是计算偏转角)
//测试中发现有些设备不支持(iphone5的微信内置浏览器, 魅族mx4的微信内置浏览器)
/*if(window.DeviceOrientationEvent){
    $(window).on('deviceorientation', function(e) {
        if (isStarted) {
            return true;
        }
        if (!lastAcc) {
            lastAcc = e;
            return true;
        }
        var delA = Math.abs(e.alpha - lastAcc.alpha);
        var delB = Math.abs(e.beta - lastAcc.beta);
        var delG = Math.abs(e.gamma - lastAcc.gamma);
        if ( (delA > 15 && delB > 15) || (delA > 15 && delG > 15) || (delB > 15 || delG > 15)) {
            start();
        }
        lastAcc = e;
    });
}*/

