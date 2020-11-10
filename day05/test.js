var name = 10
console.log(this.name)
const foo=()=>{
    
    const name = 12
    console.log(this.name+10)
}
foo()