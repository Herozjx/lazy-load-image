// 获取用户头像 遮罩 侧边栏
var user = document.getElementsByClassName("boult")[0];
var shade = document.getElementsByClassName("shade")[0];
var sidebar = document.getElementsByClassName("sidebar")[0];
// console.log(user, shade, sidebar);
// 当点击头像时
user.addEventListener("click", function () {
  shade.style.display = "block";
  sidebar.style.left = "0rem";
});
// 当点击遮罩蒙版时
shade.addEventListener("click", function () {
  shade.style.display = "none";
  sidebar.style.left = "-25rem";
});
