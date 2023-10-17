const songsEl = document.querySelectorAll('.song');
const sounds = document.querySelectorAll('.sound');
const toggleBtn = document.getElementById('togglePlayBtn');
let isPlaying = false;
let currentSound; //audio


//設置當前播放的歌曲
function init(){
    currentSound = sounds[0];
    updateUI();
}
init();

// 更新UI
function updateUI(){
    //以背景色突顯當前歌曲
    songsEl.forEach((el,idx)=>{
        el.classList.remove('active');
    })
    currentSound.parentElement
                .classList.add('active');

    //播放icon
    if(isPlaying){
        toggleBtn.classList.add('active');
    }else{
        toggleBtn.classList.remove('active');        
    }
}


//播放歌曲
async function playSound(){
    //播放歌曲
    await currentSound.play();    
    //設置為播放
    isPlaying = true; 
    updateUI(); //更新介面
}

// 播放中止
function stopSound(){
    sounds.forEach(async sound=>{
        //停止播放
        //將當前時間設置為0
        await sound.pause();        
        sound.currentTime=0;
        //設置為無播放
        isPlaying = false; 
    })
    updateUI(); //更新介面
}

//切換歌曲
songsEl.forEach((song,idx)=>{
    song.addEventListener('click',()=>{
        //播放中止
        stopSound();  
        //設置播放當前歌曲
        currentSound=sounds[idx]; 
        //播放歌曲
        playSound();
    }) 
})


// 播放暫停-滑鼠點擊事件
toggleBtn.addEventListener('click',togglePlay);

// 播放暫停-鍵盤事件
window.addEventListener('keydown',(e)=>{
    if(e.code === 'Space'){        
        togglePlay()
    }
})

// 播放暫停
async function togglePlay() {
    if (isPlaying) {
        //變更為無播放狀態
        isPlaying = false;
        await currentSound.pause(); 
        updateUI();
    } else {
        //變更為播放狀態
        isPlaying = true;
        playSound();
    }
}



//原版的程式碼
// const sounds = document.querySelectorAll('.sound');

// cards.forEach((card,idx)=>{
//     card.addEventListener('click',(e)=>{
//     // console.log(idx,sounds[idx].getAttribute('id'));
//         stopSound();
//         sounds[idx].play();
//     })
// })

// // 中止音頻
// // 1. 停止播放 
// // 2. 將當前時間設置為0
// function stopSound(){
//     sounds.forEach(sound=>{
//         sound.pause();
//         sound.currentTime=0;
//     })
// }

