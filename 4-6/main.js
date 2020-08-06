const time = process.argv[2]

console.log(time);

const timeNum = time.split(':');

let a = Number(timeNum[0]);
let b = Number(timeNum[1]);

b += 45;
if(b > 60){
  a++;
  b -= 60
}

if(a >=24){
  a -=24;
}

console.log(a);
console.log(b);
