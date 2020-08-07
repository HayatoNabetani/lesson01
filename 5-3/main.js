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

  console.log(objPlay2);
    
};



load();