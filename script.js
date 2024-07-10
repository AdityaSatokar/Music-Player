const music = new Audio('audio/1.mp3');
const songs = [
    {
        id:'1',
        songName:`Naah<br><div class="subtitle">Hardy Sandhu</div>`,
        poster:"https://images.hungama.com/c/1/6a1/9bf/32309367/32309367_300x300.jpg"
    },
    {
        id:'2',
        songName:`Guilty<br><div class="subtitle">Inder Chahal</div>`,
        poster:"https://images.hungama.com/c/1/5bf/ff0/61052294/61052294_300x300.jpg"
    },
    {
        id:'3',
        songName:`Kaam 25<br><div class="subtitle">Divine</div>`,
        poster:"https://a10.gaanacdn.com/gn_img/song/9MAWe97WyJ/AWewEYGjKy/size_l_1529653356.jpg"
    },
    {
        id:'4',
        songName:`Desi Kalakaar<br><div class="subtitle">Yo Yo Honey Singh</div>`,
        poster:"https://images.hungama.com/c/1/0be/dbe/2604168/2604168_300x300.jpg"
    },
    {
        id:'5',
        songName:`Hothon se Chulo Tum<br><div class="subtitle">Jagjeet Singh</div>`,
        poster:"https://c.saavncdn.com/791/Jagjit-Singh-Most-Loved-Ghazals-in-2020-Hindi-2020-20220505092603-500x500.jpg"
    },
    {
        id:'6',
        songName:`Uncha Lamba Kad<br><div class="subtitle">Anand Raj Anand</div>`,
        poster:"https://images.hungama.com/c/1/932/abe/1828036/1828036_200x200.jpg"
    },
    {
        id:'7',
        songName:`Dilbar<br><div class="subtitle">Alka Yagnik</div>`,
        poster:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Dilbar_cover_art.jpeg/220px-Dilbar_cover_art.jpeg"
    },
    {
        id:'8',
        songName:`Pyaar Ki Ek Kahani<br><div class="subtitle">Sonu Nigam</div>`,
        poster:"https://lastfm.freetls.fastly.net/i/u/ar0/514d3ebb92cc4ca38300c09a6d87f7e5.jpg"
    },
    {
        id:'9',
        songName:`Koi Mil Gaya<br><div class="subtitle">Udit Narayan</div>`,
        poster:"https://i1.sndcdn.com/artworks-yc7jUFK74oTz3cZk-icy6zA-t500x500.jpg"
    },
    {
        id:'10',
        songName:`Barish Ki Jaaye<br><div class="subtitle">B Praak</div>`,
        poster:"https://i.scdn.co/image/ab67616d0000b27356000ec16b2f4ada1238d5fd"
    },
    {
        id:'11',
        songName:`Kya Loge Tum<br><div class="subtitle">B Praak</div>`,
        poster:"https://images.hungama.com/c/1/09f/2e0/102646414/102646414_300x300.jpg"
    },
    {
        id:'12',
        songName:`Sakhiyaan<br><div class="subtitle">Maninder Buttar</div>`,
        poster:"https://c.saavncdn.com/714/Sakhiyaan-Punjabi-2018-20181017164150-500x500.jpg"
    },
    {
        id: '13',
        songName: `295 <br> <div class="subtitle">Sidhu Moosewala<div>`,
        poster: "https://i1.sndcdn.com/artworks-iGceyGBCohKE7lyk-6JKuOg-t500x500.jpg"
    },  
    {
        id:'14',
        songName:`Dekhte Dekhte<br><div class="subtitle">Sachet Parampara,Rochak Kohli</div>`,
        poster:"https://c.saavncdn.com/418/Batti-Gul-Meter-Chalu-Hindi-2018-20180908134024-500x500.jpg"
    },
    {
        id:'15',
        songName:`Sugar n Brownies<br><div class="subtitle">Dharia</div>`,
        poster:"https://e1.pxfuel.com/desktop-wallpaper/609/757/desktop-wallpaper-dharia-sugar-brownies-lyrics-sugar-and-brownies.jpg"
    },
    {
        id:'16',
        songName:`Kya Baat Hai<br><div class="subtitle">Hardy Sandhu</div>`,
        poster:"https://m.media-amazon.com/images/M/MV5BZDE2NjkyMjgtYjQ2YS00ODYyLThiNmMtYjM4OTdmZWU2ZjcxXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg"
    },
    {
        id:'17',
        songName:`Kuley Kuley<br><div class="subtitle">Yo Yo Honey Singh,Apache Indian</div>`,
        poster:"https://c.saavncdn.com/661/Kuley-Kuley-From-Honey-3-0-Punjabi-2023-20231010135506-500x500.jpg"
    },
    {
        id:'18',
        songName:`Phir Aur Kya Chahiye<br><div class="subtitle">Arijit Singh</div>`,
        poster:"https://i.scdn.co/image/ab67616d0000b2735a5d10c4aaf47bd743df4ed9"
    },
    {
        id:'19',
        songName:`Ram Ayenge<br><div class="subtitle">Jaya Kishori</div>`,
        poster:"https://i.scdn.co/image/ab67616d00001e02a653bd81791da3447b1b5f80"
    },
    {
        id:'20',
        songName:`Zilhaal E Miskin<br><div class="subtitle">Vishal Mishra,Shreya Ghoshal</div>`,
        poster:"https://c.saavncdn.com/356/Zihaal-e-Miskin-Teaser-Hindi-2023-20230517053430-500x500.jpg"
    },
    {
        id:'21',
        songName:`Baby<br><div class="subtitle">Justin Bieber</div>`,
        poster:"https://i.scdn.co/image/ab67616d0000b2739707c3215a3410cf33eb7623"
    },
    {
        id:'22',
        songName:`shape Of U<br><div class="subtitle">ed Sheeran</div>`,
        poster:"https://i.scdn.co/image/ab67616d0000b273fc0c62568097749ac2bb57e9"
    },
    {
        id:'23',
        songName:`Stay<br><div class="subtitle">Justin Bieber</div>`,
        poster:"https://i.scdn.co/image/ab67616d00001e0241e31d6ea1d493dd77933ee5"
    },
    {
        id:'24',
        songName:`Flowers<br><div class="subtitle">Miley Cyrus</div>`,
        poster:"https://i.scdn.co/image/ab67616d00001e02cd222052a2594be29a6616b5"
    },
    {
        id:'25',
        songName:`Calm Down<br><div class="subtitle">Selena Gomez</div>`,
        poster:"https://i.scdn.co/image/ab67616d0000b273a3a7f38ea2033aa501afd4cf"
    },
    {
        id:'26',
        songName:`Senorita<br><div class="subtitle">Shawn Mandez</div>`,
        poster:"https://i.scdn.co/image/ab67616d0000b273c820f033bd82bef4355d1563"
    },
    {
        id:'27',
        songName:`Dance Monkey<br><div class="subtitle">Tami Jones</div>`,
        poster:"https://i.scdn.co/image/ab67616d0000b27317a0cc4ce8911e97eae9c1d0"
    },
    {
        id:'28',
        songName:`Dusk till Dawn<br><div class="subtitle">Zayn</div>`,
        poster:"https://i.scdn.co/image/ab67616d0000b27323852b7ef0ecfe29d38d97ee"
    },
    {
        id:'29',
        songName:`Sugar And Brownies<br><div class="subtitle">Dharia</div>`,
        poster:"https://e1.pxfuel.com/desktop-wallpaper/609/757/desktop-wallpaper-dharia-sugar-brownies-lyrics-sugar-and-brownies.jpg"
    },
    {
        id:'30',
        songName:`Roxxane<br><div class="subtitle">The Police</div>`,
        poster:"https://i.scdn.co/image/ab67616d0000b2732043dd3544a339547d04b436"
    }
];

Array.from(document.getElementsByClassName('song-item')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

const master_play = document.getElementById('master-play-button');
const wave = document.getElementById('musical-wave');
master_play.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0)
    {
        music.play();
        wave.classList.add('active');
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
    }
    else
    {
        music.pause();
        wave.classList.remove('active');
        master_play.classList.remove('fa-pause');
        master_play.classList.add('fa-play');
    }
});

let index = 0;
Array.from(document.getElementsByClassName('musicPlay')).forEach((e)=>{
    e.addEventListener('click',(element)=>{
        let poster = document.getElementById('image-master-play');
        let title = document.getElementById('title-master-play');
        index = element.target.id;
        console.log(index);
        music.src = `audio/${index}.mp3`;
        poster.src = songs[index-1].poster;
        title.innerHTML = songs[index-1].songName;
        music.play();
        wave.classList.add('active');
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
    });
});

let time_start = document.getElementById('timestart');
let time_end = document.getElementById('timeend');
let seek = document.getElementById('seek');
let progressBar = document.getElementById('progressBar');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let current_time = music.currentTime;
    let duration = music.duration;

    let minutes1 = Math.floor(current_time / 60);
    let seconds1 = Math.floor(current_time % 60);

    if(seconds1 < 10)
    {
        seconds1 = `0${seconds1}`;
    }
    time_start.innerText = `${minutes1}:${seconds1}`;

    let minutes2 = Math.floor(duration / 60);
    let seconds2 = Math.floor(duration % 60);
    console.log(seconds2);

    if(seconds2 < 10)
    {
        seconds2 = `0${seconds2}`;
    }
    time_end.innerText = `${minutes2}:${seconds2}`;

    let progress = parseInt((current_time / duration) * 100);
    seek.value = progress;

    let seek_value = seek.value;
    dot.style.left = `${seek_value}%`;
    progressBar.style.width = `${seek_value}%`;
});

seek.addEventListener('click', ()=>{
    music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol-bar');
let vol_dot = document.getElementById('vol-dot');

vol.addEventListener('click',()=>{
    if(vol.value == 0)
    {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-xmark');
    }
    if(vol.value > 0)
    {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');
    }
    if(vol.value > 50)
    {
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');
    }

    let vol_value = vol.value;
    vol_bar.style.width = `${vol_value}%`;
    vol_dot.style.left = `${vol_value}%`;
    music.volume = vol_value / 100;
});

let previous = document.getElementById('previous');
let next = document.getElementById('next');

previous.addEventListener('click',()=>{
    
    if(index > 1)
    {
        index--;
        let poster = document.getElementById('image-master-play');
        let title = document.getElementById('title-master-play');
        console.log(index);
        music.src = `audio/${index}.mp3`;
        poster.src = songs[index-1].poster;
        title.innerHTML = songs[index-1].songName;
        music.play();
        wave.classList.add('active');
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
    }
});

next.addEventListener('click',()=>{
    if(index < songs.length)
    {
        index++;
        let poster = document.getElementById('image-master-play');
        let title = document.getElementById('title-master-play');
        console.log(index);
        music.src = `audio/${index}.mp3`;
        poster.src = songs[index-1].poster;
        title.innerHTML = songs[index-1].songName;
        music.play();
        wave.classList.add('active');
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
    }
});

let popular_song_left = document.getElementById('popular-song-left');
let popular_song_right = document.getElementById('popular-song-right');
let popular_song = document.getElementsByClassName('popular-song')[0];

popular_song_right.addEventListener('click',()=>{
    popular_song.scrollLeft += 330;
});

popular_song_left.addEventListener('click',()=>{
    popular_song.scrollLeft -= 330;
});

let popular_artist_left = document.getElementById('popular-artist-left');
let popular_artist_right = document.getElementById('popular-artist-right');
let popular_artist = document.getElementsByClassName('popular-artist')[0];

popular_artist_right.addEventListener('click',()=>{
    popular_artist.scrollLeft += 330;
});

popular_artist_left.addEventListener('click',()=>{
    popular_artist.scrollLeft -= 330;
});

let english_song_left = document.getElementById('english-song-left');
let english_song_right = document.getElementById('english-song-right');
let english_song = document.getElementsByClassName('english-song')[0];

english_song_right.addEventListener('click',()=>{
    english_song.scrollLeft += 330;
});

english_song_left.addEventListener('click',()=>{
    english_song.scrollLeft -= 330;
});

let librarybtn = document.getElementById("library");
librarybtn.addEventListener("click", () => {
    let playlist = document.querySelector(".playlist");
    playlist.style.left = "0";
});

let playlist = document.querySelector(".playlist");
playlist.addEventListener("click",()=>{
    playlist.style.left = "-50%";
})
