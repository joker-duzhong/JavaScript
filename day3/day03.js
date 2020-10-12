//  创建对象

let myObject = new Object();
myObject.name = "yushuangjian";
myObject.age = 20;

console.log(myObject)

const oStudent1 = {
    name:'yushuangjiang',
    age:20,
    getUserName:function(){
        return name;
    }
};
console.log(oStudent1.name);  //yushuangjiang

console.log(typeof oStudent1);  //object

console.log(typeof null); //object

//创建数组 Array

const a1 = new Array();
const a2 = [];
console.log(typeof a1+"\n"+typeof a2)  //object   object
console.log(a2 instanceof Array);

console.log(a2[0]); //undefined 
a2[0]=1;a2[1]=1.5;a2[2]="余双江";a2[3]=true;a2[8]=321356;
console.log(a2);

const a3 = [1,5,"余双江",false,261];

console.log(a3);

const avengers = ["小红","小明","小刚"];
delete avengers[2];
console.log(avengers)

const number1 = [1,2,3,4];
let a = number1[0];
let b = number1[1];
let c = number1[2];
let d = number1[3];

console.log(`a=${a},b=${b},c=${c}`)
const [a,b,c,d] = [1,2,3,4]; //结构语法
console.log(`a=${a},b=${b},c=${c}`)

const [a,b] = ["sad",5,6,8,5];
console.log(`a=${a},b=${b}`)

const avengers = ["小红","小明","小刚"];
console.log(avengers.length);
avengers.length = 2;
console.log(avengers);
const avengers = [123,"小明","小刚"];
avengers.pop();   //.pop()； 方法，删除数组的最后一个元素
avengers.shift(); //.shift();方法，删除数组的第一个元素
avengers.push("156");//push();方法，将一个新值添加到数组的结尾
avengers.unshift("余");  //log();方法
console.log(avengers);

const avengers = ["小红","小明","小刚"];
const heroes = ["李华","王刚","赵宏"];
const ah = avengers.concat(heroes);
console.log(ah);
//ES6 扩展运算符
const avengers = ["小红","小明","小刚"];
const heroes = ["李华","王刚","赵宏"];
const ah = [...avengers, ...heroes];
console.log(ah);

const avengers = ["小红","小明","小刚"];
const av1 = avengers.join();
console.log(av1);
const av2 = avengers.join('+');
console.log(av2);

const avengers = ["小红","小明","小刚"];
console.log(avengers.slice(1,2));
console.log(avengers);

const avengers = ["小红","小明","小刚"];
console.log(avengers.splice(1,2,'ysj',1)); //切片出来，并操作原数组
console.log(avengers);

const number1 = [1,2,3,5,8,6,2,45,2,1];
console.log(number1.sort()); //sort();方法，将数组按字母顺序进行排序
console.log(number1);

const str = ['a','b','h','z'];
console.log(str.sort());
console.log(str);

const str = ['a','b','h','z'];
console.log(str.indexOf('z'));
console.log(str.indexOf('b',2)); //后面带值表示从指定位数开始查询
console.log(str.includes("a"));  //同上，可在后面加参数

//多维数组
const ma = [[1,2,3],[4,5,6]];
console.log(ma);
console.log(ma[0][0]);
console.log(ma[1][2]);


//变量声明
//var  >ES5  不建议用  会加入全局变量
//let  >ES6   不会加入全局变量
//const>ES6  一般用

//循环   for...in
//      for...or  可迭代的
//集合  set 
const oSet = new Set();
oSet.add(1);
oSet.add(2);
oSet.add(3);
oSet.add(4);
oSet.add(5);
console.log(oSet);

const list1 = new Set([1,2,3,4,5,6]);
console.log(list1);

const list2 = new Set(["hello"]);
console.log(list2);

const list3 = new Set().add(`the`).add(`quick`).add(`brown`).add(`fox`);
console.log(list3.size);
console.log(list3);

list3.size = 2;   //集合中只读，长度不修改
console.log(list3);

const list3 = new Set().add(`the`).add(`quick`).add(`brown`).add(`fox`);
console.log(list3.has("fox"));  //查找，有则true
const list3 = new Set().add(`the`).add(`quick`).add(`brown`).add(`fox`);
console.log(list3.delete('fox')); //删除集合中的指定元素
console.log(list3);
list4 = list3;
console.log(list4.clear());

//集合转换为数组
const list3 = new Set().add(`the`).add(`quick`).add(`brown`).add(`fox`);
const a = Array.from(list3);
console.log(a);

const list3 = new Set().add(`the`).add(`quick`).add(`brown`).add(`fox`);
const a = [...list3];
console.log(a);

//去掉数组中的重复元素
const oArray1 = [1,2,5,2,5,1,3,6,5,2,2,3];
const oSet1 = new Set(oArray1)
console.log(oSet1)
const oArray2 = [...oSet1];
console.log(oArray2); 

// WeakSet弱集合  里面的数据类型只能是引用类型
let oArray1 = [1,2,5,2,5,1,3,6,5,2,2,3];
const strong = new Set();
strong.add(oArray1);
oArray1 = null;
console.log([...strong][0]);
console.log(strong.has(oArray1));

let oArray1 = [1,2,5,2,5,1,3,6,5,2,2,3];
const weak = new WeakSet();
weak.add(oArray1);
oArray1 = null;
console.log([...weak][0]);
console.log(weak.has(oArray1));

//Map 键值对
const oMap = new Map();
oMap.set(1,'I');
oMap.set(2,`II`).set(3,`III`).set(4,`V`).set(5,`IV`);
console.log(oMap);
console.log(oMap.size);
console.log(oMap.get(5));
console.log()
console.log(oMap.has(5));
console.log(oMap.delete(5));
console.log(oMap.clear());

const oMap = new Map();
oMap.set(1,'I');
oMap.set(2,`II`).set(3,`III`).set(4,`V`).set(5,`IV`);
const oArray1 = [...oMap];
console.log(oArray1);
//多维数组装换为一维数组
//方法一：使用apply实现
const oArray2 = [].concat.apply([],oArray1)
console.log(oArray2);













