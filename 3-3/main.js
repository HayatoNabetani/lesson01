const vertical = Number(process.argv[2]);

let table = [];

for(let i = 0; i < vertical ; i++){
  table = [];
  for(let m = 0; m <= vertical * 2 ; m++){
    if (vertical-i <= m && m <= vertical+i){
      table.push('*');
    } else {
      table.push('1');
    }
  }
  console.log(table.join(''));
}