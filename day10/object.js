
const oStudent = {
  studentName :'yushuangjiang',
  age:'21',
  org:['ream','asde'],
  len:null,
  len1:undefined,
  course:{name:'java',day:4},
  learn:function(params) {
    console.log('hello,'+this.studentName)
  },
  learn2 (){
    console.log('learn2')
  }
}

delete oStudent.len        //删除属性
console.log(oStudent.len)  //undefined

oStudent.learn2
oStudent['learn']()
const oStudent1 = new Object()
oStudent.studentName = 'ysj'
oStudent.age = 20

//计算属性
let a = 'oStudent',b='Name'
const oStudent1 = {
  [a+b]:'ysj',
  age:21,
}
console.log(oStudent1)

//简写
let studentName = 'ysj',age = '21'
const oStudent2 ={
  studentName:studentName,
  age:age,
}
const oStudent3 = {studentName,age,}
console.log(oStudent2)
console.log(oStudent3)

//Symbol 属性，解决命名冲突
const name =Symbol('name')
const superGirl = {[name]:'superGirl'}
console.log(superGirl[name])
console.log(superGirl.name)  ///undefind

//检查对象属性是否存在
//in运算符
const teacher ={
  name:'yu',
  age:21,
}
console.log('name' in teacher)  //true
console.log('Sname' in teacher)  //false
//if 逻辑表达式
if (teacher.name !== undefined){
  console.log('teacher.name 存在')
}
//hasOwnProperty
if(teacher.hasOwnProperty('name')){
  console.log(teacher.name +'存在')
}

//对象属性遍历
const oStudent4 = {
  studentName :'yushuangjiang',
  age:'21',
  org:['ream','asde'],
  len:null,
  len1:undefined,
  course:{name:'java',day:4},
  learn:function(params) {
    console.log('hello,'+this.studentName)
  },
  learn2 (){
    console.log('learn2')
  }
}
// for (const p in oStudent4) {
//   console.log(p)
// }
// console.log(Object.keys(oStudent4))
// for (const iterator of Object.keys(oStudent4)) {
//   console.log(iterator)
// }
// console.log(Object.values(oStudent4))
// for (const iterator of Object.values(oStudent4)) {
//   console.log(iterator)
// }
// const [a,b] = Object.entries(oStudent4)
// console.log([a,b])

for (const [a,b] of Object.entries(oStudent4)) {
  console.log([`key ${a}:value ${b}`])
}
//按引用赋值
const aa = {name:'ysj'}
const bb = aa;
bb.name = 'ysj123'
console.log(aa.name)

const dice = {
  size:6,
  roll : function(){
    return Math.floor(Math.random()*this.size)+1
  }
}
console.log(dice.roll())





