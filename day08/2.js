/*
通过style属性样式
*/

const oList = document.querySelector("#list1")  //获取ul元素
// 获取 ul元素的第二个子元素节点
const oLi = oList.firstElementChild.nextElementSibling

// oLi.style.cssText = "border:1px solid red;"

// background-color = backgroundColor
// float  ==> cssFloat

oLi.style.backgroundColor = "red"
oLi.style.border = "1px solid blue"

// 获取一个元素的最终属性样式  ps：只读
// .getComputedStyle得到所有的页面属性集合
const comStyle = window.getComputedStyle(oLi)
console.log(comStyle.border)


