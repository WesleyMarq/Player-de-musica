let songs = [
    {title: 'Adagio BWV', artist: 'Bach', src:'songs/Bach - Adagio, BWV 974.mp3', img:'images/piano.jpg'},
    {title: 'Behind Blue Eyes', artist: 'The Who', src:'songs/Behind Blue Eyes .mp3', img:'images/guitar.jpg'},
    {title: 'Harder,Better,Faster,Stronger', artist: 'Daft Punk', src:'songs/Daft Punk - Harder, Better, Faster, Stronger (Far Out Remix).mp3', img:'images/electric.jpg'}
]




let music = document.querySelector('audio');
let indexMusic = 0;

let musicDuration = document.querySelector('.end');
let image = document.querySelector('img');
let musicName = document.querySelector('.description h2');
let artistName = document.querySelector('.description i');

musicRender(indexMusic);





document.querySelector('.button-play').addEventListener('click', playMusic);

document.querySelector('.button-pause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', barpass);

document.querySelector('.previous').addEventListener('click', () =>{
    indexMusic--;
    
        if(indexMusic < 0){
            indexMusic = 2;
        }
    
    musicRender(indexMusic);
});
document.querySelector('.next').addEventListener('click', () =>{
    indexMusic++;

        if(indexMusic > 2){
            indexMusic = 0;
        }
    musicRender(indexMusic);
});



let endTime = document.querySelector('.end');
endTime.textContent = secToMin(Math.floor(music.duration));



function musicRender(index){
    music.setAttribute('src',songs[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = songs[index].title;
        artistName.textContent = songs[index].artist;
        image.src = songs[index].img;

        endTime.textContent = secToMin(Math.floor(music.duration));
    })
}



function playMusic(){
    music.play();

    document.querySelector('.button-pause').style.display = 'block';
    document.querySelector('.button-play').style.display = 'none';
}

function pauseMusic(){
    music.pause();

    document.querySelector('.button-pause').style.display = 'none';
    document.querySelector('.button-play').style.display = 'block';
}

function barpass(){
    let bar = document.querySelector('progress');
    bar.style.width = (music.currentTime / music.duration) * 100 + "%";

    let timePassed = document.querySelector('.begin');
    timePassed.textContent = secToMin(Math.floor(music.currentTime));
}

function secToMin(seconds){
    let minCamp = Math.floor(seconds/ 60);
    let secCamp = seconds % 60;

    if(secCamp < 10){
        secCamp = '0' + secCamp
    }
    return minCamp + ':' + secCamp;
}