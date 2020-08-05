const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]

let e = [];
errorLogs.forEach(errorLog =>{
  e = errorLog.split(':');
  let Leng = (e[1].indexOf(' ',18));
  console.log(e[1].substr(0,Leng));
})
