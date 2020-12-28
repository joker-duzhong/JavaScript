//正则表达式
const pattern = /javaScrpit/
const pattern = /[a-z][A-Z]/
console.log(pattern.test('javaScrpit'))

const pattern1 = new RegExp('javaScrpit')
let a = pattern1.test('javaScrpit')
console.log(a)