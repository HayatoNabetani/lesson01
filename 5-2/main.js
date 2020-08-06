const url = 'users.json';

const getLocations = () => {
  return new Promise(function(resolve){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange=()=>{
      if(xhr.readyState===4 && xhr.status === 200){
        let result = JSON.parse(xhr.responseText);
        resolve(result);
      }
    }
  })
}

getLocations().then(function(a){
  for(let i=0; i<a.users.length;i++){
    console.log(a.users[i]);
  }
})