const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]

const table = [
  ['','','','','','','','','','',''],
  ['','','','','','','','','','',''],
  ['','','','','','','','','','','']
]

students.forEach((student) =>{
  let i = Math.floor(student / 10);
  if (table[2][i] === ''){
    table[2][i] = '*';
  } else if(table[1][i] === ''){
    table[1][i] = '*';
  } else {
    table[0][i] = '*';
  }
})

for(let i = 0 ;i < 3 ; i++){
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