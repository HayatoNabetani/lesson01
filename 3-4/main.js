const unum1 = process.argv[2].split('');
const unum2 = process.argv[3].split('');

// console.log(unum1.split(''));
// 一文字ずつ区切る

// unum1を逆にする
if(unum1.length % 2 === 0){
  for(let i = 0 ; i < unum1.length / 2; i++){
    let a;
    a = unum1[i];
    unum1[i] = unum1[(unum1.length - 1) - i];
    unum1[(unum1.length - 1) - i] = a;
  }
} else {
  for(let i = 0 ; i < Math.floor(unum1.length / 2); i++){
    let a;
    a = unum1[i];
    unum1[i] = unum1[(unum1.length - 1) - i];
    unum1[(unum1.length - 1) - i] = a;
  }
}
// unum2を逆にする
if(unum2.length % 2 === 0){
  for(let i = 0 ; i < unum2.length / 2; i++){
    let a;
    a = unum2[i];
    unum2[i] = unum2[(unum2.length - 1) - i];
    unum2[(unum2.length - 1) - i] = a;
  }
} else {
  for(let i = 0 ; i < Math.floor(unum2.length / 2); i++){
    let a;
    a = unum2[i];
    unum2[i] = unum2[(unum2.length - 1) - i];
    unum2[(unum2.length - 1) - i] = a;
  }
}
const num1 = Number(unum1.join(''));
const num2 = Number(unum2.join(''));

console.log(num1);
console.log(num2);

console.log(num1 + num2);

