async function load(){
  const data = await fetch('kobe.json');
  const obj = await data.json(); 

  function plotres(response, prefix) {

    for (let key in response){
      if (typeof response[key] == "object") {
        if(Array.isArray(response[key])) {
          // 配列の場合は forEach で要素ごとにに再帰呼び出し
          response[key].forEach(function(item){
            plotres(item, prefix+" "+key) ;
          });
        } else {
          // 連想配列はそのまま再帰呼び出し
          plotres(response[key], prefix+" "+key) ;
        }  
      } else {
        // 配列や連想配列でなければキーの値を表示
        console.log(key + ": " + response[key]);
        // console.log(prefix+" "+key+": "+response[key]);
      }
    }
  }

  plotres(obj, "")
};

load();