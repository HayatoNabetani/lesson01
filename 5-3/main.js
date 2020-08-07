async function load(){
  const data = await fetch('playdata.json');
  const obj = await data.json();

  const obj2 = obj.data.sort((a,b) =>{
    return b.count - a.count;
  })
  // 大きい順に変える
  
  console.log(obj2);
    
};



load();