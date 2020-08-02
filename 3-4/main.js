const unum1 = process.argv[2].split('');
const unum2 = process.argv[3].split('');

// console.log(unum1.split(''));
// 一文字ずつ区切る
let a;

a = unum1[0];
unum1[0] = unum1[unum1.length - 1];
unum1[unum1.length - 1] = a;


a = unum2[0];
unum2[0] = unum2[unum2.length - 1];
unum2[unum2.length - 1] = a;

const num1 = Number(unum1.join(''));
const num2 = Number(unum2.join(''));

console.log(num1);
console.log(num2);

console.log(num1 + num2);

