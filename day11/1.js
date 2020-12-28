// 函数的属性
function getStudent(name, gerder) {
  return ''
}
console.log(getStudent.length)
// 函数的属性
function getStudent1(name, ...gerder) { //...剩余参数
  return ''
}
console.log(getStudent1.length)
console.log(getStudent1.name)

// call
function add(c, d) {
  console.log(this.a + this.b + c + d)
}
add(3, 4) // 等同于add.call(undefined,3,4)  输出 NaN
let num = {
  a: 1,
  b: 2
}
add.call(num, 3, 4) //输出10

const person = {
  name: '余双江',
  say: function () {
    return `你好，我是${this.name}`
  }
}

function moreSay(age, hobbby) {
  console.log(`${this.say()},我${age}岁,喜欢${hobbby}`)
}

moreSay.call(person, 20, 'Music')

var lastName = "global_name"
const func = function (firstName) {
  lastName: "person_name"
}
let a = func("ysj"); //常规方式访问

//apply方法
let array = ['a', 'b']
let elements = [0, 1, 2]

let a = [...array, ...elements]
console.log(a)

let b
array.push.apply(array, elements)
console.log(array) //改变了原数组，不建议使用

// bind()  绑定函数
var small = {
  a: 1,
  go: function (b, c, d) {
    console.log(this.a + b + c + d)
  }
}
var largal = {
  a:100
}
small.go.call(largal,2,3,4)  //即时返回调用
//small.go.apply(largal,2,3,4) //数组方法 不适用
const boundNameAndAge = small.go.bind(largal,2,3,4)  //延迟调用，bind()创建一个新函数，不带任何参数绑定
boundNameAndAge()

// 函数toString 方法
const getStudent = function(){
  return 'xiao'
}
console.log(getStudent.toString())

console.log(Math.max.toString())

// Memoizaton
function square(x){
  return x*x
}

function square(x){
  square
}

// 斐波那契数列
const fina = function(n){
  if(n<2){
    return n
  }else{
    return fina(n-1) + fina(n-2)
  }
  // return n<2? n:fina(n-1) + fina(n-2)
}

console.log(fina(31))
console.timeEnd()

const finaCache = function(n){
  finaCache.cache = finaCache.cache || {}
  //等价于 如下
  // if(finaCache.cache != undefined){
  //   finaCache.cache = finaCache.cache
  // }else{
  //   finaCache = {}
  // }
  if(!finaCache.cache[n]){
    finaCache.cache[n] = n<2? n:finaCache(n-1) + finaCache(n-2)
  }
}
console.log(finaCache(40))
console.timeEnd()

function memoizaton(fn){

}

//函数作用域
(function() {
  var temp = 2
})()
console.log(temp)
//等同于  ES6  语法糖
{
  const temp = 2
}
console.log(temp)

// 严瑾模式
'use str'
// 模块模式
var myModule = (function(){
  var myPrivateVar,myPrivateMethod
  myPrivateVar = 0//私有变量
  myPrivateMethod = function(foo){
    //私有方法
    console.log(foo)
  }
  return{
    myPublicVar:'foo',//公开变量
    myPublicFunction:function(bar){
      //公开方法
      myPrivateVar++
      myPrivateMethod(bar)
    }
  }
})()
myModule.myPublicFunction(2)

//暴露模块化方法
var myRevealingModule = (function(){
  var privartnCounter = 0
  function privaterFunction(){
    privartnCounter++
  }
  function publicFunction(){
    publicIncrement()
  }
  function publicIncrement(){
    privaterFunction()
  }
  function publicGetCount(){
    return privartnCounter
  }
  //暴露公有属性和方法，指向私有化的属性和方法
  return{
    start:publicFunction,
    increment:publicIncrement,
    count:publicGetCount,
  }
})()

//词法作用域
// closure  闭包
function outerFunc(){
  let outerVar = 'I am outerVar'
  function innerFunc(){
    console.log(outerVar)
  }
  return innerFunc
}

const myInnerFunc = outerFunc()
myInnerFunc()
/**
返回内部函数
引用了外部变量
*/
/**广义  所有函数都是闭包的 */










































