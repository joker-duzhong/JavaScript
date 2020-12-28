// 类声明
class User {

}
let user1 = new User()

// 类表达式
const User = class{

}
let user2 = new User()
// 类声明和类表达式都不会提升


// 函数声明与函数表达式

// 函数声明会提升，提升到作用域的顶部,
// window.getUser()
function getUser(){}  //提升

const getUser = function(){}  //不提升


// 加上constructor 方法，初始化
class User {
  constructor(name){
    this.name = name  //隐式创建了一个实例字段 ：name
  }
}
// 等同于构造函数方法
function User(name){
  this,name = name
}
let user1 = new User("yu")
console,log(user1.name)


class User {
  fistName = '余'  //显示定义实例字段

  constructor(lastName){
    this.lastName = lastName  //隐式创建了一个实例字段 ：name
  }
}
let user1 = new User("双江")
console.log(user1.fistName+user1.lastName)

// 私有实例字段  前面加上 #  声明 
// 立即运行  IIFE
class User {
  #name;
  constructor(name){
    this.#name = name
  }
}

//静态字段

class User {
  static TYPE_ADMIN = 'admin'
  static TYPE_REGU = 'regu'
  constructor(name){
    this.name = name  //隐式创建了一个实例字段 ：name
  }
}

//字段的私有字段

class User {
  static #MAX_INSTANCES = 2;
  static #instances = 0;
  name;
  constructor(name){
    User.#instances ++
    if(User.#instances > User.#MAX_INSTANCES){
      throw new Error("无法创建User实例！")
    }
    this.name = name
  }
}

Ange = new User("Ange")
Ange2 = new User("Ange2")
Ange3 = new User("Ange3")  //抛出Error

// 公有实例方法  


// 私有的实例方法



//  get  和 set 方法
class User {
  #nameValue;
  constructor(name){
    this.name = name
  }
  get name (){
    return this.#nameValue
  }
  set name(){
    
  }
}





//继承   父类的私有的属性和方法不会被继承


