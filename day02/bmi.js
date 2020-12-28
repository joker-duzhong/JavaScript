// BMI = mass / height^2 = mass / (height * height)
mass = [58,43]    //存储体重
height = [175,165]//存储身高
function BMI(mass,height){   //定义BMI计算方法
    bmi = mass / (height * height)
    return bmi
}
mark_bmi = BMI(mass[0],height[0]);
jonu_bmi = BMI(mass[1],height[1]);
if (mark_bmi > jonu_bmi){
    var b = true
}else var b = false
console.log("Mark的BMI为："+mark_bmi)
console.log("John的BMI为："+jonu_bmi)
console.log("Mark的BMI是否比John更高？"+b)

