const nums = [
  Number(process.argv[2]),
  Number(process.argv[3]),
  Number(process.argv[4]),
  Number(process.argv[5]),
  Number(process.argv[6]),
]


const newNum = nums.sort((a,b)=>{
  return a-b;
});

console.log(newNum[2]);