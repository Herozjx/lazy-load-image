function setRem() {
  var ui_w = 375;
  var client_w =
    document.documentElement.clientWidth || document.body.clientWidth;
  var html = document.querySelector("html");
  html.style.fontSize = (client_w / ui_w) * 5 + "px";
}
setRem();
var timer = null;
window.onresize = function () {
  clearTimeout(timer);
  timer = setTimeout(setRem, 50);
};
