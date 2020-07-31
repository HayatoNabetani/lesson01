const table = [];
for(let m = 0; m < 9 ; m++){
  table.push([]);
  for(let n = 0; n < 9 ; n++){
    let kotae = (m + 1)*(n + 1);
    // console.log(kotae);
    table[m].push(kotae);
  }
}
console.table(table);