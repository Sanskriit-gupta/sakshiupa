console.log("welcome to spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs =[
    {songName: "salam-e-Ishq", filePath: "1.mp3", coverPath:"1.jpg"},
    {songName: "salam-e-Ishq", filePath: "1.mp3", coverPath:"1.jpg"},
    {songName: "salam-e-Ishq", filePath: "1.mp3", coverPath:"1.jpg"},
    {songName: "salam-e-Ishq", filePath: "1.mp3", coverPath:"1.jpg"},
    {songName: "salam-e-Ishq", filePath: "1.mp3", coverPath:"1.jpg"},
]  

// audioElement.play();

//Handle Pay/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle'); 
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
documents.addElementListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = Progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})