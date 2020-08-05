const nums = [
  Number(process.argv[2]),
  Number(process.argv[3]),
  Number(process.argv[4]),
  Number(process.argv[5]),
  Number(process.argv[6]),
  Number(process.argv[7]),
  Number(process.argv[8]),
  Number(process.argv[9]),
  Number(process.argv[10]),
  Number(process.argv[11]),
  Number(process.argv[12]),
  Number(process.argv[13]),
  Number(process.argv[14]),
]

for(let i = 0 ; i < nums.length; i++){
  for(let m = i + 1; m < nums.length; m++){
    if(nums[i] < nums[m]){
      ;
    } else {
      let a = nums[i];
      nums[i] = nums[m];
      nums[m] = a;
    }
  }
}

console.log(nums);
