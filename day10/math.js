let x = 1,y = 2, z = 3
console.log(Math.max(x,y,z))

const scores = [1,2,3,5,5,4,6,2]
console.log(`最大值为：${Math.max(...scores)}`) 

//随机数
let a = Math.random()  //0 - 1 之间的小数
let a = Math.random()*6  //0 - 5 之间的小数
console.log(a)
console.log(Math.ceil(a))  //  = Math.floor(a)+1
console.log(Math.floor(a)+1)
console.log(Math.round(a))




