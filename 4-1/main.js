const nums = process.argv.splice(2)

const newNum = nums.sort((a,b)=>{
  return a-b;
});

console.log(newNum[2]);