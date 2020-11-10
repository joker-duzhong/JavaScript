
const mean=(a,b,c)=>{return (a+b+c)/3}

// 任意个数字的平均值，，函数mean1
const mean1=(...number)=>{
    let sum = 0
    let avg = 0
    for (const num of number) {sum = sum + num}
    avg = sum/number.length
    return avg}
console.log(mean1(1,2,3,4,5,6))  //输出3.5

// 是用扩展运算符，函数mean2
const mean2=(...num)=>{
    const sum =(a,b)=>a+b
    const avg = num.reduce(sum)/num.length
    return avg
}
console.log(mean2(1,2,3,4,5,6))   //输出3.5

//实现对数组中的偶数求平均值
const mean3=(...num)=>{
    // const array=num.filter(val => val%2==0)
    // const evenSum=array.reduce((a,b)=>a+b)
    // const avg = evenSum/array.length
    // console.log(avg)

    return num.filter(x => x%2==0).reduce((x,y) =>x+y)/num.filter(x => x%2==0).length
}
console.log(mean3(11,22,33,4,5,6))

