/** 重複チェック用配列 */
let randoms = [];
/** 最小値と最大値 */
const min = 0, max = 9;

/** 重複チェックしながら乱数作成 */
for(let i = min; i <= max; i++){
  while(true){
    var tmp = intRandom(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
}
/** min以上max以下の整数値の乱数を返す */
function intRandom(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}

console.log(randoms.join(' '));
