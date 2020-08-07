const json = {
  users: [
    { name: "Suzuki", rank: "A", years: 3 },
    { name: "Yamada", rank: "A", years: 5 },
    { name: "Sato", rank: "B", years: 4 },
    { name: "Ito", rank: "B", years: 7 },
    { name: "Tanaka", rank: "C", years: 1 },
    { name: "Takahashi", rank: "C", years: 10 },
  ],
};

const a = [];
for(let i = 0; i < json.users.length; i++){
  if(json.users[i].rank === 'A' && json.users[i].years < 5){
    a[i] = 3000 *  json.users[i].years +100000;
  } else if (json.users[i].rank === 'A' && json.users[i].years >= 5){
    a[i] = 3000 *  json.users[i].years +120000;
  } else if (json.users[i].rank === 'B'){
    a[i] = 4000 *  json.users[i].years +140000;
  } else {
    a[i] = 5000 *  json.users[i].years +160000;
  }
}
// 給与計算

const b = a.sort((a,b) =>{
  return b-a;
})

console.log(b);

// 並び替え