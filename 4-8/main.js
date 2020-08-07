const str = 'こはるはるここはるここはるはるここはるこはるはるはる';

const myRe1 = /こはる/g;
const myRe2 = /はるこ/g;

let myArray1;
// for Koharu
let myArray2;
// for Haruko

let countKoharu = 0;
let countHaruko = 0;

while ((myArray1 = myRe1.exec(str)) !== null) {
  let msg = myArray1[0] + ' を見つけました。';
  msg += '次の検索は ' + myRe1.lastIndex + ' からです。';
  console.log(msg);
  countKoharu++;
}
// coutKoharu

while ((myArray2 = myRe2.exec(str)) !== null) {
  let msg = myArray2[0] + ' を見つけました。';
  msg += '次の検索は ' + myRe2.lastIndex + ' からです。';
  console.log(msg);
  countHaruko++;
}
// coutHaruko

console.log(`こはる:${countKoharu}`);
console.log(`はるこ:${countHaruko}`);