window.addEventListener('DOMContentLoaded', function () {
    const PLAYER_STORAGE_KEY = 'MP3_PLAYER'
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const heading = $('header h2');
    const cdThumb = $('.cd-thumb');
    const audio = $('#audio');
    const cd = $('.cd');
    const playBtn = $('.btn-toggle-play');
    const player = $('.player');
    const prevBtn = $('.btn-prev');
    const progress = $('#progress');
    const nextBtn = $('.btn-next');
    const randomBtn = $('.btn-random');
    const repeatBtn = $('.btn-repeat');
    const playlist = $('.playlist');
    const dashboard = $('.dashboard');
    const app = {
        currentIndex: 0,
        isPlaying: false,
        isRandom: false,
        isRepeat: false,
        isOption: false,
        config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
        songs: [
            {
                name: 'Cool for the summer',
                singer: 'Demi Lovato',
                path: './assets/music/Cool For The Summer.mp3',
                image: './assets/img/song1.png'
            },
            {
                name: 'Tay trái chỉ trăng',
                singer: 'Tát đỉnh đỉnh',
                path: './assets/music/Tay trái chỉ trăng.mp3',
                image: './assets/img/song2.jpg'
            },
            {
                name: 'Bailando',
                singer: 'Enrique Iglesias',
                path: './assets/music/Bailando.mp3',
                image: './assets/img/song3.jpg'
            },
            {
                name: 'Despacito',
                singer: 'Luis Fonsi',
                path: './assets/music/Despacito.mp3',
                image: './assets/img/song4.jpg'
            },
            {
                name: 'Fly Away',
                singer: 'The Fat Rat',
                path: './assets/music/Fly Away.mp3',
                image: './assets/img/song5.jpg'
            },
            {
                name: 'I Want You To Know',
                singer: 'Selena Gomez',
                path: './assets/music/I Want You To Know.mp3',
                image: './assets/img/song6.jpg'
            },
            {
                name: 'Pink Venom',
                singer: 'Black Pink',
                path: './assets/music/Pink Venom.mp3',
                image: './assets/img/song7.jpg'
            },
            {
                name: 'Nevada',
                singer: 'The Fat Rat',
                path: './assets/music/Nevada.mp3',
                image: './assets/img/song8.jpg'
            },
            {
                name: 'Oblivion',
                singer: 'Alan Waker',
                path: './assets/music/Oblivion.mp3',
                image: './assets/img/song9.jpg'
            },
            {
                name: 'Tái tạo màng trinh',
                singer: 'Phạm Thoại',
                path: './assets/music/thuoc-hoi-trinh-remix-pham-thoai.mp3',
                image: './assets/img/song10.png'
            },
            {
                name: 'Chandelier',
                singer: 'Sia',
                path: './assets/music/Chandelier - Sia.mp3',
                image: './assets/img/song11.jpg'
            },
            {
                name: 'Easy on me',
                singer: 'Adele',
                path: './assets/music/EasyOnMe-Adele-7107614.mp3',
                image: './assets/img/song12.png'
            },
            {
                name: 'Em Da Xa Anh',
                singer: 'Bibo',
                path: './assets/music/Em Da Xa Anh Bibo Remix_ - Nhu Viet_ ACV.mp3',
                image: './assets/img/song13.png'
            },
            {
                name: 'Ha Con Vuong Nang Remix',
                singer: 'DatKaa',
                path: './assets/music/Ha Con Vuong Nang Remix_ - DatKaa_ Kido.mp3',
                image: './assets/img/song14.png'
            },
            {
                name: 'Happier',
                singer: 'Marshello',
                path: './assets/music/Happier - Marshmello_ Bastille.mp3',
                image: './assets/img/song15.png'
            },
            {
                name: 'Havana',
                singer: 'Camila Cabello',
                path: './assets/music/Havana-CamilaCabelloYoungThug-5817730.mp3',
                image: './assets/img/song16.png'
            },
            {
                name: 'Hero',
                singer: 'Christina',
                path: './assets/music/HeroFeatChristinaPerri-CashCash-6430079.mp3',
                image: './assets/img/song17.png'
            },
            {
                name: 'Industry Baby',
                singer: 'Lil Nas X',
                path: './assets/music/Industry Baby - Lil Nas X_ Jack Harlow.mp3',
                image: './assets/img/song18.png'
            },
            {
                name: 'Lovely',
                singer: 'Billie Eilish',
                path: './assets/music/Lovely - Billie Eilish_ Khalid.mp3',
                image: './assets/img/song19.png'
            },
            {
                name: 'MoveYourBody',
                singer: 'Sia feats Alan Walker',
                path: './assets/music/MoveYourBodyAlanWalkerRemix-Sia-4633854.mp3',
                image: './assets/img/song20.png'
            },
            {
                name: 'Ngày Đầu Tiên',
                singer: 'Đức Phúc',
                path: './assets/music/NgayDauTien-DucPhuc-7129810.mp3',
                image: './assets/img/song21.png'
            },
            {
                name: 'NgayThoPhong',
                singer: 'Tăng Duy Tân',
                path: './assets/music/NgayThoPhongMaxRemix-TangDuyTan-6689614.mp3',
                image: './assets/img/song22.png'
            },
            {
                name: 'On The Ground',
                singer: 'Rose',
                path: './assets/music/On The Ground - Rose.mp3',
                image: './assets/img/song23.png'
            },
            {
                name: 'Play Date',
                singer: 'Melanie Martinez',
                path: './assets/music/Play Date - Melanie Martinez.mp3',
                image: './assets/img/song24.png'
            },
            {
                name: 'Positions',
                singer: 'Ariana Grande',
                path: './assets/music/Positions - Ariana Grande.mp3',
                image: './assets/img/song25.png'
            },
            {
                name: 'Rather Be',
                singer: 'Jess Glynne',
                path: './assets/music/Rather Be - Clean Bandit_ Jess Glynne.mp3',
                image: './assets/img/song26.png'
            },
            {
                name: 'Set Fire To The Rain',
                singer: 'Adele',
                path: './assets/music/Set Fire To The Rain - Adele.mp3',
                image: './assets/img/song27.png'
            },
            {
                name: 'That\'s What I Want',
                singer: 'Lil Nas X',
                path: './assets/music/That_s What I Want - Lil Nas X.mp3',
                image: './assets/img/song28.png'
            },
            {
                name: 'Stay',
                singer: 'Justin Bieber',
                path: './assets/music/Stay - The Kid LAROI_ Justin Bieber.mp3',
                image: './assets/img/song29.jpg'
            },
            {
                name: 'Huynh De Oi',
                singer: 'Htrol',
                path: './assets/music/Huynh De Oi Toi Nho Anh Htrol Remix - Ca.mp3',
                image: './assets/img/song30.jpg'
            }
        ],
        setConfig: function (key, value) {
            this.config[key] = value;
            localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
        },
        randomColor: function random_bg_color() {
            let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
            let a;

            function populate(a) {
                for (let i = 0; i < 6; i++) {
                    let x = Math.round(Math.random() * 14);
                    let y = hex[x];
                    a += y;
                }
                return a;
            }
            let Color1 = populate('#');
            let Color2 = populate('#');
            let angle = 'to right';

            let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
            dashboard.style.background = gradient;
            playlist.style.background = gradient;
        }
        ,
        render: function () {
            const htmls = this.songs.map((song, index) => {
                return `
                        <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                            <div class="thumb"
                            style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                               <h3 class="title">${song.name}</h3>
                               <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="option__icon fas fa-heart"></i>
                            </div>
                        </div>
                    `

            })
            playlist.innerHTML = htmls.join('')
        },
        defineProperties: function () {
            Object.defineProperty(this, 'currentSong', {
                get: function () {
                    return this.songs[this.currentIndex]
                }
            })
        },
        handleEvents: function () {
            const _this = this;
            const cdWidth = cd.offsetWidth

            // Xu ly CD quay / dung 
            const cdThumbAnimate = cdThumb.animate([
                { transform: 'rotate(360deg)' }
            ], {
                duration: 10000,
                iterations: Infinity
            })
            cdThumbAnimate.pause()
            // Xử lý phóng to thu nhỏ CD 
            document.onscroll = function () {
                const scrollTop = window.scrollY || document.documentElement.scrollTop
                const newCdWidth = cdWidth - scrollTop
                cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
                cd.style.opacity = newCdWidth / cdWidth
            }

            //  Xử lý khi click play 
            playBtn.onclick = function () {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }

                // Khi song được play 
                audio.onplay = function () {
                    _this.isPlaying = true;
                    player.classList.add("playing");
                    cdThumbAnimate.play();
                }
                // Khi song được pause 
                audio.onpause = function () {
                    _this.isPlaying = false;
                    player.classList.remove('playing');
                    cdThumbAnimate.pause();
                }
            }
            // Khi tiến độ bài hát thay đổi 
            audio.ontimeupdate = function () {
                if (audio.duration) {
                    const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                    progress.value = progressPercent;
                }
            }

            // Xu ly tua song 
            progress.oninput = function (e) {
                const seekTime = e.target.value / 100 * audio.duration;
                audio.currentTime = seekTime;
            }

            // Khi next song 
            nextBtn.onclick = function () {
                if (_this.isRandom) {
                    _this.playRandomSong();
                } else {
                    _this.nextSong();
                }
                playBtn.click();
                _this.render();
                audio.play()
                _this.scrollToActiveSong();
            }

            // Khi prev song 
            prevBtn.onclick = function () {
                if (_this.isRandom) {
                    _this.playRandomSong();
                } else {
                    _this.prevSong()

                }
                playBtn.click();
                _this.render();
                audio.play()
                _this.scrollToActiveSong();
            }
            // Xu ly bat / tat random song 
            randomBtn.onclick = function (e) {
                _this.isRandom = !_this.isRandom
                _this.setConfig('isRandom', _this.isRandom)
                randomBtn.classList.toggle('active', _this.isRandom)
            }

            // Xu ly lap lai song 
            repeatBtn.onclick = function (e) {
                _this.isRepeat = !_this.isRepeat
                _this.setConfig('isRepeat', _this.isRepeat)
                repeatBtn.classList.toggle('active', _this.isRepeat)

            }

            // Xu ly song khi audio ended 
            audio.onended = function () {
                if (_this.isRepeat) {
                    audio.play()
                } else {
                    nextBtn.click()

                }
            }

            //Lắng nghe hành vi click vào playlist

            playlist.onclick = function (event) {
                const songNode = event.target.closest(".song:not(.active)");
                const likeHeart = event.target.closest('.option__icon');
                const prevSongNodeActive = document.querySelector('.song.active');

                if (songNode || likeHeart) {
                    // Xử lý khi click vào song
                    // Handle when clicking on the song
                    if (songNode && !likeHeart) {
                        _this.currentIndex = parseInt(songNode.dataset.index);
                        _this.loadCurrentSong();
                        audio.play();
                        console.log(_this.currentIndex)
                        prevSongNodeActive.classList.remove('active');
                        songNode.classList.add('active');
                        _this.isPlaying = true;
                        player.classList.add("playing");
                        setTimeout(function () {
                            songNode.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            }
                            )
                            // playBtn.click();
                        }, 250)
                    }

                    // Thả tim cho từng bài hát
                    if (likeHeart) {
                        likeHeart.classList.toggle('option__active')
                    }
                }
            };


        },
        loadCurrentSong: function () {
            heading.textContent = this.currentSong.name
            cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
            audio.src = this.currentSong.path
            this.randomColor();
        },
        scrollToActiveSong: function () {
            setTimeout(() => {
                $('.song.active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                })
            }, 300)
        },
        nextSong: function () {
            this.currentIndex++
            if (this.currentIndex >= this.songs.length) {
                this.currentIndex = 0
            }
            this.loadCurrentSong()
        },
        prevSong: function () {
            this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = this.songs.length - 1
            }
            this.loadCurrentSong()
        },
        playRandomSong: function () {
            let newIndex
            do {
                newIndex = Math.floor(Math.random() * this.songs.length)
            } while (newIndex === this.currentIndex)
            this.currentIndex = newIndex
            this.loadCurrentSong()
        },
        start: function () {
            // Định nghĩa các sự kiện 
            this.defineProperties();

            // Reander Playlist 
            this.render();

            // Lắng nghe / xử lý các sự kiện (DOM events) 
            this.handleEvents();

            // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng 
            this.loadCurrentSong();


        }
    }

    app.start();
})