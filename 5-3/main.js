async function load(){
  const playData = await fetch('playdata.json');
  const objPlay = await playData.json();
  // playdataのもの
  
  const songData = await fetch('songs.json');
  const objSong = await songData.json();
  // songsdataのもの

  const objPlay2 = objPlay.data.sort((a,b) =>{
    return b.count - a.count;
  })
  // playdataを大きい順に変える 
  

  for(let i = 0 ;i < objPlay2.length ; i++){   
    for(let m = 0; m < objSong.songs.length ; m++){
      // console.log(objPlay2[i].id);
      // console.log(objSong.songs[m].id);
      if(objPlay2[i].id == objSong.songs[m].id){
        console.log(`順位:${objSong.songs[m].title}\t${objPlay2[i].count}`);
        break;
      }
    }
  }
  //データを合わせる 
};

load();