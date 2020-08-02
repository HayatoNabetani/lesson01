const unum1 = process.argv[2].split('');
// const unum2 = process.argv[3].split('');

// console.log(unum1.split(''));
// 一文字ずつ区切る
let a;


for(let i = 0; i < Math.floor(unum1.length / 2); i++){
  console.log(Math.floor(unum1.length / 2));
  a = unum1[i];
  unum1[i] = unum1[unum1.length - 1 + i];
  unum1[unum1.length - 1 + i] = a;
}

console.log(unum1);