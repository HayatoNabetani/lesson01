const nums = [
  Number(process.argv[2]),
  Number(process.argv[3]),
  Number(process.argv[4]),
  Number(process.argv[5]),
  Number(process.argv[6]),
]

console.log(nums);
console.log(nums.sort((a,b)=>{
  return a-b;
}));