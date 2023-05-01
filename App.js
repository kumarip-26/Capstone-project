import { useEffect, useState } from "react";
import Player from "./Components/Player";


function App() {

  const [songs] = useState([

{
  title: "Care ni Karda",
  artist: "Yo Yo Honey Singh",
  img_src: "./images/Care-ni-karda.jpg",
  src: "./songs/Care Ni karda.mp3"
 },
 {
  title: "Daisy",
  artist: "Ashnikko",
  img_src: "./images/Ashnikko-Daisy.jpg",
  src: "./songs/Ashnikko-Daisy.mp3",
},
 {
  title: "Nach Meri Rani",
  artist: "Yo Yo Honey Singh",
  img_src: "./images/nach-meri-rani.jpg",
  src: "./songs/Naach Meri Rani.mp3",
},
{
  title: "Burj Khalifa",
  artist: "Shashi",
  img_src: "./images/burjkalifa.jpg",
  src: "./songs/BurjKhalifa.mp3",
},
{
  title: "Nach Meri Rani",
  artist: "Yo Yo Honey Singh",
  img_src: "./images/nach-meri-rani.jpg",
  src: "./songs/Naach Meri Rani.mp3"
},
{
  title: "Tango Del Fuego",
  artist: "Parov Stelar",
  img_src: "./images/ParovStelarGeorgiaGibbs-TangoDelFuego.jpg",
  src: "./songs/ParovStelarGeorgiaGibbs-TangoDelFuego.mp3",
},
{
  title: "Take You Dancing",
  artist: "Jason Derulo",
  img_src: "./images/JasonDerulo-TakeYouDancing.jpg",
  src: "./songs/JasonDerulo-TakeYouDancing.mp3",
},

{
  title: "Dolly Song",
  artist: "Partz Grimbad",
  img_src: "./images/PatzGrimbard-DollySong.jpg",
  src: "./songs/PatzGrimbard-DollySong.mp3",
},
{
  title: "Titaliya",
  artist: "Hardy Sandhu",
  img_src: "./images/titaliya.jpg",
  src: "./songs/Titliaan Warga.mp3"
},

 
 ])

 const [currentSongIndex, setCurrentSongIndex] = useState(0);
 const [nextSongIndex, setNextSongIndex] = useState(0);

 useEffect(() => {
  setNextSongIndex(() => {
    if(currentSongIndex + 1 > songs.length-1){
      return 0
    }else {
      return currentSongIndex + 1
    }
  })
 }, [currentSongIndex, songs.length])
  return (
    <div className="App">
     <Player
       currentSongIndex = {currentSongIndex}
       setCurrentSongIndex = {setCurrentSongIndex}
       nextSongIndex = {nextSongIndex}
       songs = {songs}
     />
    </div>
  );
}

export default App;
