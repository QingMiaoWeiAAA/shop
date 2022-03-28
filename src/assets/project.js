/*
 * @Author: your name
 * @Date: 2021-11-02 16:30:04
 * @LastEditTime: 2022-03-22 08:21:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \4.suningFirstd:\EveryCode\11、移动端布局\项目\6、taobao\js\project.js
 */

// ! 表示立：即执行函数
// 也可以写成别的符号

// 以540为基准的时候设置 1rem=100px
!(function () {
  var html = document.documentElement;
  function rem() {
    var vw = window.innerWidth;
    if (vw <= 750) {
      html.style.fontSize = (vw / 750) * 100 + "px";
    } else if (vw > 750) {
      html.style.fontSize = "100px";
    }
  }
  // 调用
  rem();
  // 设置单位是rem
  window.onresize = rem;
  // 监听事件，横竖屏的切换
  window.addEventListener("orientationchange", rem);
})();
