const oStudent = {
  studentName :'yushuangjiang',
  age:'21',
  org:['ream','asde'],
  len:null,
  len1:undefined,
  course:{name:'java',day:4},
  learn:function(params) {
    console.log('hello,'+this.studentName)
  },
  learn2 (){
    console.log('learn2')
  }
}
let a = JSON.stringify(oStudent,null,2)
console.log(a)
const b = `{"studentName":"yushuangjiang","age":"21","org":["ream","asde"],"len":null,"course":{"name":"java","day":4}}`
const oStudent1 = JSON.parse(b)
console.log(oStudent1)
