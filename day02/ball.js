John_avg = (89+120+103)/3
Mike_avg = (116+94+123)/3
console.log("John队的平均分是"+John_avg)
console.log("Mike队的平均分是"+Mike_avg)
//2.4 决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
if(John_avg > Mike_avg){    
    console.log("John是获胜队伍！" + "John的平均分是："+John_avg);
}
else if (Mike_avg>John_avg){   
    console.log("Mike是获胜队伍！" + "Mike的平均分是："+Mike_avg);
}
else{   
    console.log("平局！");
}
//1. 计算每队的平均分；
John_avg = (89 + 120 +103) / 3;
Mike_avg = (116 + 94 +123) / 3;
Mary_avg = (97 + 134 +105) / 3;
console.log("\nJohn的平均分是："+John_avg+"\n" +"Mike的平均分是："+Mike_avg+"\n"+"Mary的平均分是："+Mary_avg)
//2.4 决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
if((John_avg > Mike_avg) && (John_avg > Mary_avg)){    
console.log("John是获胜队伍！" + "John的平均分是："+John_avg);
}
else if ((Mike_avg>John_avg) && (Mike_avg>Mary_avg)){   
 console.log("Mike是获胜队伍！" + "Mike的平均分是："+Mike_avg);
 }
 else if((Mary_avg>John_avg) && (Mary_avg>Mike_avg)){  
   console.log("Mary是获胜队伍！" + "Mary的平均分是："+Mary_avg);
   }
   else{   
    console.log("平局！");
    }

    //3、5 然后改变分数来显示不同的赢家。
let John_avg1 = (123 + 120 +93) / 3;
let Mike_avg1 = (126 + 93 +120) / 3;
let Mary_avg1 = (100 + 134 +105) / 3;
console.log("\nJohn的平均分是："+John_avg1+"\n" +"Mike的平均分是："+Mike_avg1+"\n"+"Mary的平均分是："+Mary_avg1)
if((John_avg1 > Mike_avg1) && (John_avg1 > Mary_avg1)){    
console.log("John是获胜队伍！" + "John的平均分是："+JohnAvg1);
}
else if ((Mike_avg1>John_avg1) && (Mike_avg1>Mary_avg1)){    
console.log("Mike是获胜队伍！" + "Mike的平均分是："+Mike_avg1);
}
else if((Mary_avg1>John_avg1) && (Mary_avg1>Mike_avg1)){    
console.log("Mary是获胜队伍！" + "Mary的平均分是："+Mary_avg1);
}
else{   
 console.log("平局！");
 }