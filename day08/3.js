/**
 * 事件
 * 
 */
const oButton1 = document.querySelector("#myButton1")

const callback = () => {
    console.log('click')
}
const callback2 = () => {
    console.log('click2')
}

// oButton1.onclick = callback//旧方法  赋值操作  只可绑定一个事件

//          事件监听      事件类型 | 事件内容
oButton1.addEventListener('click',callback) //添加事件 add
oButton1.addEventListener('click',callback2,true)
oButton1.removeEventListener('click',callback) //删除事件 remove
oButton1.removeEventListener('click',callback2) //删除事件的参数必须一样

// oButton1.addEventListener('click',()=>{console.log('click')})  事件写死了，不可重用



