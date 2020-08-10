// 1次元配列を良い感じに使って、表示させてみてください！
let array = [];
for(let i = 1 ; i < 10 ;i++){
  array = []
  for(let j = 1; j < 10; j ++){
    array.push(i * j)
  }
  console.log(array.join(' '));
}

