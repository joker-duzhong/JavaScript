const person = {
    name:'余双江',
    age:20,
    birthday:1999,
    study:function () {
        console.log(`${this.name}年龄为${2020-this.birthday}`)
    }
}
person.study()   //输出  余双江年龄为21

// const cala

let a = 20
const b =30
var c;

function multiply(e,f){
    var g = 20
    return e * f * g
}
c = multiply(20,30)

//创建阶段
// var c;

// let a = 20
// const b =30
// c = multiply(20,30)

// 变量提升
try{
    console.log(a1)
}finally{
    console.log(`a未定义`)
}
let a = "123"
console.log(a)

//全局执行上下文中通过var声明的变量，会自动成为全局对象的属性
//全局执行上下文中通过函数声明的函数，会自动成为全局对象的方法


var name = 10
console.log(this.name)
const foo=()=>{
    const name = 12
    console.log(this.name+10)
}
foo()

