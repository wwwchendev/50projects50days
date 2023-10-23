const screens = document.querySelectorAll('.screen');
const start_btn = document.getElementById('start-btn')

const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');

const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

// 選擇開始遊戲後加入up樣式以"上滑"切換畫面
start_btn.addEventListener('click', () => screens[0].classList.add('up'))

// 對昆蟲照片監聽點擊
// 1. 宣告selected_insect儲存相關屬性
// 2. 切換第三畫面
// 3. 定時一秒後開始createInsect
// 4. 開始遊戲
choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        //把屬性賦予到全局變數 selected_insect
        selected_insect = { src, alt }
        //切換到遊戲畫面
        screens[1].classList.add('up')
        //1秒後生成第一隻昆蟲
        setTimeout(createInsect, 1000)
        //開始遊戲計時
        startGame()
    })
})

//生成昆蟲
function createInsect() {
    //創建包含.insect的div容器
    const insect = document.createElement('div')
    insect.classList.add('insect')
    //以getRandomLocation()取得隨機座標值
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    //把屬性設置到元素內
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`
    //點擊時呼叫catchInsect
    insect.addEventListener('click', catchInsect)
    game_container.appendChild(insect)
}

//開始遊戲 計時
function startGame() {
    setInterval(increaseTime, 1000)
}
//增加時間
function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `時間: ${m}:${s}`
    seconds++
}

//生成一個位於畫布內部的隨機座標
//計算這些座標時，減去200並加上100是為了確保生成的圖片位置不會太靠近畫布的邊緣。
//Math.random() 產生0到1之間的隨機數。
//(width - 200) 減去200是為了確保生成的x座標不會太靠近畫布的右邊緣。這樣，座標的最大值將比畫布的右邊緣小200個單位。
//+100 添加100是為了確保生成的x座標不會太靠近畫布的左邊緣。這樣，座標的最小值將比畫布的左邊緣大100個單位。
//y 的計算方式相同，確保生成的y座標不太靠近畫布的上邊緣和下邊緣。
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    // 亂數*(可視寬度-200)當中的-200是為了讓產生的圖片位置不要太貼邊緣
    const x = Math.random() * (width - 200) +100
    const y = Math.random() * (height - 200) +100
    return { x, y }
}

//抓昆蟲
function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

// 增加分數,超過19分顯示msg
function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `分數: ${score}`
}
// 增加昆蟲
function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}
