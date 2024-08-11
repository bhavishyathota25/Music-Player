/*console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('audio/Chuttamalle.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Gaali Vaaluga", filePath: "audio/Gaali Vaaluga.mp3", coverPath: "media/gaalivaaluga.jpeg"},
    {songName: "Hukumm", filePath: "audio/Hukum.mp3", coverPath: "media/hukum.jpeg"},
    {songName: "Chuttamalle", filePath: "audio/Chuttamalle.mp3", coverPath: "media/chuttamalle.jpeg"},
    {songName: "Hoyna Hoyna", filePath: "audio/Hoyna Hoyna.mp3", coverPath: "media/hoynahoyna.jpeg"},
    {songName: "Badass", filePath: "audio/Badass.mp3", coverPath: "media/badass.jpeg"},
    {songName: "Chaleya", filePath: "audio/Chaleya.mp3", coverPath: "media/chaleya.jpeg"},
    {songName: "JollyO Gymkhana", filePath: "audio/Jolly O Gymkhana.mp3", coverPath: "media/jollyogymkhana.jpeg"},
    {songName: "Arabic Kuthu", filePath: "audio/Arabic Kuthu.mp3", coverPath: "media/arabickuthu.jpeg"},
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Handle progress bar updates
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress; 
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = "audio/$(songIndex+1).mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});

document.getElementById('next').addEventListener('click',()=>{
   if(songIndex >= 8){
    songIndex = 0;
   }else{
    songIndex += 1;
   }
  
   audioElement.src = "audio/$(songIndex+1).mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
     songIndex = 0;
    }else{
     songIndex -= 1;
    }
   
    audioElement.src = "audio/$(songIndex+1).mp3";
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
 })
*/




/*
console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('audio/Chuttamalle.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Gaali Vaaluga", filePath: "audio/Gaali Vaaluga.mp3", coverPath: "media/gaalivaaluga.jpeg" },
    { songName: "Hukumm", filePath: "audio/Hukum.mp3", coverPath: "media/hukum.jpeg" },
    { songName: "Chuttamalle", filePath: "audio/Chuttamalle.mp3", coverPath: "media/chuttamalle.jpeg" },
    { songName: "Hoyna Hoyna", filePath: "audio/Hoyna Hoyna.mp3", coverPath: "media/hoynahoyna.jpeg" },
    { songName: "Badass", filePath: "audio/Badass.mp3", coverPath: "media/badass.jpeg" },
    { songName: "Chaleya", filePath: "audio/Chaleya.mp3", coverPath: "media/chaleya.jpeg" },
    { songName: "JollyO Gymkhana", filePath: "audio/Jolly O Gymkhana.mp3", coverPath: "media/jollyogymkhana.jpeg" },
    { songName: "Arabic Kuthu", filePath: "audio/Arabic Kuthu.mp3", coverPath: "media/arabickuthu.jpeg" },
];

// Define the function to update song information
const updateSongInfo = () => {
    const songInfo = document.querySelector('.songInfo');
    songInfo.innerHTML = `${songs[songIndex].songName} - Anirudh`;
};


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Handle progress bar updates
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress; 
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Function to reset all play buttons to 'play' state
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

// Add event listeners to song items
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', () => {
        //console.log(e.target);
        makeAllPlays();
        //masterSongName.innerText = songs[songIndex].songName;
        songIndex = index;
        //songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
    });
});

// Handle next button click
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-circle-play');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-circle-pause');
});

// Handle previous button click
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-circle-play');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-circle-pause');
});*/



console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('audio/Chuttamalle.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Gaali Vaaluga", filePath: "audio/Gaali Vaaluga.mp3", coverPath: "media/gaalivaaluga.jpeg" },
    { songName: "Hukumm", filePath: "audio/Hukum.mp3", coverPath: "media/hukum.jpeg" },
    { songName: "Chuttamalle", filePath: "audio/Chuttamalle.mp3", coverPath: "media/chuttamalle.jpeg" },
    { songName: "Hoyna Hoyna", filePath: "audio/Hoyna Hoyna.mp3", coverPath: "media/hoynahoyna.jpeg" },
    { songName: "Badass", filePath: "audio/Badass.mp3", coverPath: "media/badass.jpeg" },
    { songName: "Chaleya", filePath: "audio/Chaleya.mp3", coverPath: "media/chaleya.jpeg" },
    { songName: "JollyO Gymkhana", filePath: "audio/Jolly O Gymkhana.mp3", coverPath: "media/jollyogymkhana.jpeg" },
    { songName: "Arabic Kuthu", filePath: "audio/Arabic Kuthu.mp3", coverPath: "media/arabickuthu.jpeg" },
];

// Function to update song information
const updateSongInfo = () => {
    masterSongName.innerText = songs[songIndex].songName;
};

// Update song items with images and names
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Handle progress bar updates
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress; 
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Function to reset all play buttons to 'play' state
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

// Add event listeners to song items
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = index;
        updateSongInfo();
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
    });
});

// Handle next button click
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    updateSongInfo();
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-circle-play');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-circle-pause');
});

// Handle previous button click
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    updateSongInfo();
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-circle-play');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-circle-pause');
});
