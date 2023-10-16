const cards = document.querySelectorAll('.card');
const sounds = document.querySelectorAll('.sound');

cards.forEach((card,idx)=>{
    card.addEventListener('click',(e)=>{
    // console.log(idx,sounds[idx].getAttribute('id'));
        stopSound();
        sounds[idx].play();
    })
})

// 中止音頻
// 1. 停止播放 
// 2. 將當前時間設置為0
function stopSound(){
    sounds.forEach(sound=>{
        sound.pause();
        sound.currentTime=0;
    })
}



// 案例的做法------------------------------------------------------

// const sounds = ["beating","boiling","clearing","cracking",
// "cutting","drink", "pod", "toaster",];

// sounds.forEach(sound =>{
//     // 創建按鈕元素
//     const btn = document.createElement('button');
//     btn.classList.add('btn');
//     btn.innerText=sound;
//     document.getElementById('buttons').appendChild(btn);

//     // 播放音效
//     btn.addEventListener('click',()=>{
//         stopSound();
//         document.getElementById(sound).play();
//     })
// })


// function stopSound(){
//     sounds.forEach(sound=>{
//         const song = document.getElementById(sound);
//         song.pause();
//         song.currentTime=0;
//     })
// }

