for(i=1;i<9;i=i+2){
    a=" ".repeat((7-i)/2);
    j=i
    if(j>1){j=j-(j/2-1)}
    b="* ".repeat(j);
    console.log(a+b)
}
for(i=5;i>0;i=i-2){
    a=" ".repeat((7-i)/2);
    j=i
    if(j>1){j=j-(j/2-1)}
    b="* ".repeat(j);
    console.log(a+b)
}