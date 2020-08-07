async function load(){
  const data = await fetch('playdata.json');
  const obj = await data.json();
  
  console.log(obj);
}

load();