var flg = true;
function lazyImg() {
  // 节流
  if (flg) {
    flg = false;
    // 获取屏幕设备的高
    var clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    // 获取滚动上去的距离
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    // 获取已加载区域到未加载区域的距离
    var images = document.getElementsByClassName("images");
    for (var img of images) {
      // console.log(img);
      // 获取到图片真实路径
      var realSrc = img.getAttribute("data-realsrc");
      if (
        clientHeight + scrollTop >= img.offsetTop - 100 &&
        img.getAttribute("data-realsrc")
      ) {
        img.src = realSrc;
        img.removeAttribute("data-realsrc");
      }
    }
    setTimeout(function () {
      // 打开节流阀
      flg = true;
    }, 150);
  }
}
window.onload = lazyImg;
window.onscroll = lazyImg;
