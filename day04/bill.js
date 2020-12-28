
const tipCalculator=(money,i)=>{
    if(money<50){tip[i] = money/5}
    else if(money<=200&&money>=50){tip[i] = money*3/20}
    else{tip[i] = money*1/10}
    return tip[i]}
const Amount=(money,tip,i)=>{return bill[i]=money+tip}
let tip = []
let bill = []
const money = [124,48,268]
tip=[(tipCalculator(money[0],0)),(tipCalculator(money[1],1)),tipCalculator(money[2],2)]
bill=[Amount(money[0],tip[0],0),Amount(money[1],tip[1],1),Amount(money[2],tip[2],2)]
console.log("小费为：["+tip+"]")
console.log("合计支付金额为：["+bill+"]")











