const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]

const table = [
  ['','','','','','','','','','',''],
  ['','','','','','','','','','',''],
  ['','','','','','','','','','','']
]


// どれだけ重複があるかを確認するために重複させる
let c = [];
students.forEach((student) =>{
  c.push(Math.floor(student / 10));
})
console.log(c);

// 重複の個数を調べる
let counts = [];
for (let i = 0; i < c.length; i++) {
  let key = c[i];
  counts[key] = (counts[key]) ? counts[key] + 1 : 1;
}
// const array = [];
// array.push(counts);
// console.log(array);

// console.log(Math.max(...arr.map((p) => p.age)))

// console.log(counts.reduce((a,b)=>Math.max(a,b)));
// 配列の最大値はこれ

// 最大のものを見る
const max = counts.reduce((a,b)=>Math.max(a,b));

// 星をいれる
students.forEach((student) =>{
  let i = Math.floor(student / 10);
  if (table[max-1][i] === ''){
    table[max-1][i] = '*';
  } else if(table[1][i] === ''){
    table[max-2][i] = '*';
  } else {
    table[max-3][i] = '*';
  }
})

// 空白をいれる
for(let i = 0 ;i < max ; i++){
  for(let m = 0 ;m < 11 ; m++){
    if(table[i][m]===''){
      table[i][m] = ' ';
    }
  }
}


// console.table(table[0]);
// console.table(table[1]);
// console.table(table[2]);

console.log(table[0].join('  '));
console.log(table[1].join('  '));
console.log(table[2].join('  '));


console.log('----------------------------------');
console.log('0 10 20 30 40 50 60 70 80 90 100');