// 1 对象字面量
const Dog = {
  name = "逗逗",
  breed = "jinmao",
  color = "金色",
  bark() {
    return "wangwang"
  },
}
// 构造函数方式
function Dog (name,breek,color){
  this.name = name
  this.breek = breek
  this.color = color
}
Dog.prototype.bark = function(){//给原型上面创建一个方法，不浪费内存
  return "wangwang"
}
let dog1 = new Dog("doudou","taidi","junse")
dog1.barky()


function Dog (name,breek,color){
  this.name = name
  this.breek = breek
  this.color = color
  this.bark = function(){  //每一个
    return "woof"
  }
}
console.log(Dog.prototype)
// object.create()  创建对象
const Dog = {
  name = "逗逗",
  breed = "jinmao",
  color = "金色",
  bark() {
    return "wangwang"
  },
}
let dog1 = Object.create(Dog)
// ES6 创建对象
class Dog {
  constructor(name,breed,color){
    this.name = name,
    this.breed = breed,
    this.color = color
  }
  bark(){
    return "wangwang"
  }
}
let dog1 =  new Dog("豆豆","泰迪","金色")

const empty = {}
console.log(empty.__proto__)





// 继承

class Dog {
  constructor(name,breed,color){
    this.name = name
  }
}
class Jiwawa extends Dog {
  constructor(name){
    super(name)
  }
  smallBark(){
    return "小声叫"
  }
}
let myJiwawa = new Jiwawa("当当")
console.log(myJiwawa.__proto__) //Jiwawa {}
console.log(myJiwawa.__proto__.__proto__)  //Dog {}
console.log(myJiwawa.__proto__.__proto__.__proto__)   //Object{}

// .constructor  对象，返回对象的原型
// .prototype  构造函数才有的，返回构造函数的原型
// .__proto__  都有，返回原型
















