const vertical = process.argv[2];

for(let i = 0 , shape = ''; i < vertical ; i++){

  for(let m = 0; m < vertical * 2 ; m++){
    shape += 4-i <= m && m <= 4+i ? '*' : ' ';
  }
  console.log(shape);
  shape = '';
}