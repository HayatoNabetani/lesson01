const str = 'こはるはるここはるここはるはるここはるこはるはるはる';

let count = 0
let index = 0

for(;true;){
  index = str.indexOf("こはる",index)
  if(index === -1){
    break
  }
  index++
  count++
}
console.log(count);
// こはる


count = 0
index = 0

for(;true;){
  index = str.indexOf("はるこ",index)
  if(index === -1){
    break
  }
  index++
  count++
}

console.log(count);
// はるこ