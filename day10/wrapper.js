let bool = new Boolean(true)
console.log(typeof bool)  //Object
console.log(bool === true) // false
console.log(bool.valueOf()) //true
console.log(bool.toString()) //true

//当做函数来讲
let a = Boolean(true)
console.log(a)

// 0  undefined，null,'',NaN
let a = Boolean(true)
console.log(a)

// Boolean 表达判断
const oStudent = {}
if(oStudent.name){  //   = if(Boolean(oStudent.name)){}
  console.log("hello")  //不输出  因为判断条件为false，不满足
}

//静态方法
console.log(Number.parseInt(121543.231202))
let c = Number.parseFloat(123.0001) //浮点型的  123
console.log(c)
console.log(Number.isInteger(c))
console.log(typeof c)

let e = String.fromCharCode(97)
e = String.fromCodePoint('0x534')
console.log(e)
//切片
const d = 'asdsa'
console.log(d.slice(1,4))

d.concat('xiao')



