//字面量
let a = '',let = "",let = ``;
let oArray = [1,2,3];
const oStudent;


/**
 * 定义函数的四种方式
 */
//函数声明
function sayHello(a,b){
    let c = a+b
    console.log("hello,JavaScript！"+c);
}
sayHello(4,5)
// 函数表达式
const sayHello = function(){
    console.log('hello,JavaScript')
}; //匿名函数表达式

const sayHello = function sayHi(){
    console.log('hello,JavaScript')
}; //命名函数表达式
// function() 构造函数,--不建议使用
const sayHello = new Function("console.log('hello,javascript');")

// ES6 中新增语法，箭头函数
const sayHello = () =>{
    console.log("helli.js!")
}

sayHello();
const sayHello = (a,b) => {
    // let c = a+b
    // return c
    return a+b
}
console.log(sayHello())//不传值 ，  NaN = not a number

let b = 1; 
b = Infinity; //无穷大
b = -Infinity;

console.log(b = b +null)

const add1 = function() {
    let sum = 0
    for(i=0;i<arguments.length;i++){
        sum = sum + arguments[i]
    }
    return sum
}
console.log(add1(1,2,5,6,8,4,85,45))

// forof方法
const add = function (...number){
    let sum = 0
    for(const num of number){
        sum = sum + num
    }
    return sum
}
console.log(add(5,6,5,6,5,5,5,5,5,5,5,5,4,5,1,2,1,2))

const add2 = function(...number){
    sum = 0
    array.forEach(element => {
        
    });
}

// 默认参数
const say = function(studentName = "js"){
    console.log(studentName)
}

// 箭头函数
const add = (...number) =>{
    let sum = 0
    for(const num of number){
        sum = sum + num
    }
    return sum
}
console.log(add(5,6,5,6,5,5,5,5,5,5,5,5,4,5,1,2,1,2))

const sayHello = (a,b) => {
    // let c = a+b
    // return c
    return a+b
}
// 等价于
const sayHello = (a,b) => a+b

const sayHello = () => {return 3}
const sayHello = () => 3

const sayHello = a => a+2
const sayHello = function(a){
    return a + 2
}

//回调函数   callback
function dance(){
    console.log("我在跳舞")
}

function sing(song,callback){
    console.log(`我在唱${song}`)
    if((typeof callback) == `function`){
        callback();
    }
}
sing('wi',dance);

//改写成函数表达式
const dance = function() {
    console.log("我在跳舞")
}
function sing(song,callback){
    console.log(`我在唱${song}`)
    if(typeof callback === `function`){
        callback();
    }
}

//改写成箭头函数的形式
const dance = () => console.log("我在跳舞")
const sing =(song,callback) => {
    console.log(`我在唱${song}`)
    if(typeof callback == `function`){
        callback();
    }
}
sing('wi',dance);
//用箭头函数作为回调函数
const sing =(song,callback) => {
    console.log(`我在唱${song}`)
    if(typeof callback == `function`){
        callback();
    }
}
sing('whwdjx',() => console.log("我在跳舞"))

//回调函数的应用
//数组的排序

const oArray = [1,20,10,5,8,9]
console.log(oArray.sort())

const num = (a,b) => a-b
console.log(oArray.sort(num))

// foreach函数

const colors = ["红色","绿色","蓝色"]
for(i = 0;i < colors.length;i++){
    console.log(`第${i+1}`)
}

colors.forEach(colors => console.log(`${colors}`));

//map用法 对数组的每一个元素进行一次函数
const oArray = [1,2,3,4,5]
const oArray1 = oArray.map(num => num + 2)
console.log(oArray1)
const oArray2 = oArray.map(x => x^2)
console.log(oArray2)

const a = [1,2,3,4,5]
let b=[]
for(let i = 0;i<a.length;i++){
    b[i] = a[i]*a[i]
}
console.log(b)

//reduce
const a1 = [1,2,3,4,5]
const sum = (a,b) => a + b
const a2 = [1,2,3,4,5].reduce(sum)
console.log(a2)

const sum = (a,b) => a + b
const a2 = [1,2,3,4,5].reduce(sum,0)//初始值，默认0
console.log(a2)
const sum = (a,b) => a + b
const a2 = [1,2,3,4,5].reduce(sum,10)
console.log(a2)

const sentence = "sadgiya kjahsd hahsd jasdl ljla  sa"
const words = sentence.split(" ")
console.log(words)

const lengthOfwords = words.reduce(
    (sum,val) => sum + val.length,0
)
console.log(lengthOfwords)

//filter  //按函数

const a = [1,2,3,4,5,6,7,8,9]
const a1 = a.filter(a => a%2===0)
console.log(a1)


const sentence = "sadgiya kjahsd hahsd jasdl ljla sa"
const words = sentence.split(" ")

const words =[1,2,3,44,524,655] 
const words1 = words.filter(val => val%2==0)
console.log(words1)

console.log([1,2,3].map(x => x*x).reduce((acc,x) => acc+x))













































