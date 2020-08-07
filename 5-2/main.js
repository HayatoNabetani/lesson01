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

for(let i = 0; i < json.users.length; i++){
  if(json.users[i].rank === 'A' && json.users[i].years < 5){
    json.users[i].salary = 3000 *  json.users[i].years +100000;
  } else if (json.users[i].rank === 'A' && json.users[i].years >= 5){
    json.users[i].salary = 3000 *  json.users[i].years +120000;
  } else if (json.users[i].rank === 'B'){
    json.users[i].salary = 4000 *  json.users[i].years +140000;
  } else {
    json.users[i].salary = 5000 *  json.users[i].years +160000;
  }
}
// 給与計算

const lists = json.users.sort((a,b) =>{
  return b.salary-a.salary;
})
// 並び替え


lists.forEach(list =>{
  console.log(`${list.name}:${list.salary}`);
})
// 出力
