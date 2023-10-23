/*
📜TMDB API使用筆記
✔️取得API金鑰
    [指南] https://developer.themoviedb.org/docs/authentication-application
    [範例] 
    (1) API Key
        c3c2d9ae238383f2129b4e9b63d11953
    (2) API Read Access Token
        eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2MyZDlhZTIzODM4M2YyMTI5YjRlOWI2M2QxMTk1MyIsInN1YiI6IjY1MmY2MDljYTgwMjM2MDEzNzY4YjcxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UPjF8C-shFrbLYzzuueazFzP-pyhO29EGcQN4JPKrNs
✔️取得電影圖片
    [指南] https://developer.themoviedb.org/docs/image-basics
    [範例] https://image.tmdb.org/t/p/${file_size}/${file_path}.jpg
    [範例] https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

🔍常用的API
    (1) AUTHENTICATION-Validate Key |測試您的 API 金鑰以查看其是否有效。
        [參考] https://developer.themoviedb.org/reference/authentication-validate-key
        [路徑] GET /3/authentication
    (2) MOVIE LISTS-POPULAR |取得按受歡迎程度排序的電影清單。
        [參考] https://developer.themoviedb.org/reference/movie-popular-list
        [路徑] /3/movie/popular
    (3) ✔️ DISCOVER Movie|使用 30 多個過濾器和排序選項來尋找​​電影。
        [參考] https://developer.themoviedb.org/reference/discover-movie
        [路徑] GET /3/discover/movie 
    (4) ✔️SEARCH Movie |以原片名、翻譯片名和替代片名搜尋電影。 
        [參考] https://developer.themoviedb.org/reference/search-movie
        [路徑] GET /3/search/movie	
    (5) MOVIE LISTS-Now Playing |取得目前正在戲院上映的電影清單。
        [參考] https://developer.themoviedb.org/reference/movie-now-playing-list
        [路徑] GET /3/movie/now_playing
*/ 


const API_Key = `c3c2d9ae238383f2129b4e9b63d11953`;
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_Key}&page=1&language=zh-TW`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query="`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

//Get initial movies
getMovie(API_URL);


//發送網路請求 fetch
//1.宣告變數res存取fetch回傳結果
//2.將結果以.json()轉換為JSON格式
async function getMovie(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results); 
    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML=``;
    movies.forEach((movie) => {
        const { title,poster_path,vote_average,overview } = movie;
        //創建元素
        const movieEl = document.createElement('div');
        // 添加樣式
        movieEl.classList.add('movie'); 
        // 設置子元素內容
        movieEl.innerHTML=`
            <img src="${IMG_PATH+poster_path}"
                alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>劇情簡介</h3>
                ${overview}
            </div>`
    main.appendChild(movieEl)
    });
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

//監聽搜尋欄位
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const searchTerm = search.value;
    if(searchTerm&&searchTerm!==''){
        //調用方法
        getMovie(SEARCH_API+searchTerm+`&language=zh-TW`);
        search.value='';
    }else{
        window.location.reload();
    }
})