let audioElement = document.getElementById("audio-song");
let songImage = document.getElementById("song-image");
let playBtn = document.getElementById("play");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let artistName = document.getElementById("artist");
let songName = document.getElementById("song");
let theme = document.getElementById("theme-image");
let control = document.getElementById("control-btn");
let container = document.getElementById("container");


let allSongs = [
  song1 = {
   artist: 'Ariana Grande ft The weeknd',
   musicFile: 'sounds/song1.mp3',
   musicName: 'Love Me Harder',
   musicImage: 'images/image1.jpg'
  },

  song2 = {
   artist: 'Camilla Cabello ft Thugger',
   musicFile: 'sounds/song2.mp3',
   musicName: 'Havana',
   musicImage: 'images/image2.jpg'
  },
 
  song3 = {
   artist: 'Bruno Mars',
   musicFile: 'sounds/song3.mp3',
   musicName: 'Locked Out Of Heaven',
   musicImage: 'images/image3.jpg'
  },
]

let counter = 0
audioElement.src = allSongs[counter].musicFile
songImage.src = allSongs[counter].musicImage
artistName.innerText = allSongs[counter].artist
songName.innerText = allSongs[counter].musicName

playBtn.addEventListener('click', function() {
 if(playBtn.src.match("play")){
  playBtn.src = "images/pause.png";
  audioElement.play();
  songImage.classList.add("rotate");
 } else{
  playBtn.src = "images/play.png";
  audioElement.pause();
  songImage.classList.remove("rotate");
 }

});

nextBtn.addEventListener('click', function() {
 counter++
 if(counter > allSongs.lenght - 1){
  counter = 0;
 }

if(playBtn.src.match("play")){
  playBtn.src = "images/pause.png";
  }
 

audioElement.src = allSongs[counter].musicFile
songImage.src = allSongs[counter].musicImage
artistName.innerText = allSongs[counter].artist
songName.innerText = allSongs[counter].musicName
audioElement.play();

});



prevBtn.addEventListener('click', function() {
 counter--
 if(counter < 0){
  counter = allSongs.lenght - 1;
 }

if(playBtn.src.match("play")){
  playBtn.src = "images/pause.png";
  }
 

audioElement.src = allSongs[counter].musicFile
songImage.src = allSongs[counter].musicImage
artistName.innerText = allSongs[counter].artist
songName.innerText = allSongs[counter].musicName
audioElement.play();

});


theme.addEventListener('click', function() {
 if(theme.src.match("moon")){
 theme.src = "images/sun.png";
 container.classList.add("theme");
 control.style.borderColor = "#555";
 } else{
 theme.src = "images/moon.png";
 container.classList.remove("theme");
 control.style.borderColor = "#111";
 }
 
});