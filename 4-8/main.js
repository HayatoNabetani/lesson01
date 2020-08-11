const str = process.argv[2];

let count = 0
let index = 0

for(;true;){
  index = str.indexOf(process.argv[3],index);
  //検索文字じゃない文字が来たらbreak;
  if(index === -1){
    break
  }
  //上のfor文が検索文字分回った場合
  if(str.length < process.argv[3].length){
    console.log("検索結果はありませんでした");
  }
  index++
  count++
}
console.log(count);
