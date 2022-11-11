function setRem() {
    // 设计稿宽度和设备宽度
    var uiW = 640,
        winW = document.documentElement.clientWidth,
        // 定义比例
        rate = winW / uiW;
        // 获得最外层盒子
    var oW = document.getElementById("wrap");
    if(winW > uiW){
        oW.style.width = uiW + "px";
        oW.style.margin = "0 auto";
        return;
    }
    
    document.documentElement.style.fontSize = rate * 100 + "px"
}
// 调用函数
setRem();
