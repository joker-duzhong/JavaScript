/*
动态添加节点
*/

const oList = document.querySelector("#list1")
const oLiElenment = document.createElement("li")
oLiElenment.textContent = "swift"
// 旧方法
// const oTextNode = document.createTextNode("swift")
// oLiElenment.appendChild(oTextNode)
// oLiElenment.textContent = "swift"
//  oList.appendChild(oLiElenment)

// 新方法
oLiElenment.textContent = "swift"
// oList.append(oLiElenment) //最后一个子节点
// oList.prepend(oLiElenment) //第一个子节点
// oList.firstElementChild.after(oLiElenment)//第二个子节点
// oList.lastElementChild.before(oLiElenment)//倒数第二个子节点
// oList.firstElementChild.after(oLiElenment)
//删除节点   remove
// oList.lastElementChild.remove()
//替换节点   replaceWith      //兄弟节点  previousElementSibling
// oList.lastElementChild.previousElementSibling.replaceWith(oLiElenment)

oList.lastElementChild.classList.add("list1")
oList.lastElementChild.previousElementSibling.classList.add("list")
// oList.classList.remove("")

oList.addEventListener("mouseover",(event)=>{
    event.target.classList.toggle('list1')
})




















