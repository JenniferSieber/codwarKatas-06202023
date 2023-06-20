// KATA 1 Triple Trouble
//  https://www.codewars.com/kata/5704aea738428f4d30000914

function tripleTrouble(one, two, three){
  let result = '';
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i)
  }
  return result;
 }

 console.log(tripleTrouble('aaaa','bbbb','cccc'))
 console.log(tripleTrouble('aa','bb','cc'))
 console.log(tripleTrouble('Sea','urn','pms'))

 //KATA 2
 // https://www.codewars.com/kata/56d6b921c9ae3fd926000601
 String.prototype.toString = function(){
  return `${this}`
}

// KATA 3
https://www.codewars.com/kata/55225023e1be1ec8bc000390


function greet(name){
  return (name === 'Johnny') ? `Hello, my love!` : `Hello, ${name}!`;
}

console.log(greet('Johnny'))
console.log(greet('John'))

// KATA 4
// https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript
// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish

function validateHello(greeting) {
  let greetings = ['hello','ciao','salut','hallo','hola','ahoj','czesc'];
  return greetings.includes(greeting);
  
}
function validateHelloRegex(greetings) {
  return /(ahoj|ciao|czesc|h[ae]llo|hola|salut)/i.test(greetings)
}

console.log(validateHello('hello'))
console.log(validateHello('meh'))
console.log(validateHelloRegex('ciao'))
console.log(validateHelloRegex('1'))

//KATA 5
// https://www.codewars.com/kata/59342039eb450e39970000a6

function oddCount(n){
  return Math.floor(n/2)
}
console.log(oddCount(15))
console.log(oddCount(15023))

// KATA 6
// https://www.codewars.com/kata/562926c855ca9fdc4800005b

// function numberToPower(number, power){
//   return Math.pow(number, power);
// }
// w/o using Math.pow()
function numberToPower(number, power){
  //return number **power
  let total = 1;
  for (let i = 1; i <= power; i++) {
    total = total * number;
  }
  return total;
}
console.log(numberToPower(4,2))
console.log(numberToPower(10,4))
console.log(numberToPower(10,0))


// KATA 7 
//  https://www.codewars.com/kata/50ee6b0bdeab583673000025/train/javascript

let a = 'code'
let b = 'wa.rs'
let name = `${a}${b}`
console.log(name)