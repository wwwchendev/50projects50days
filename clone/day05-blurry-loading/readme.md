## css技巧
- 模糊濾鏡
    - 模糊濾鏡
    - 處理圖片模糊的邊界留白問題
        ```css
        .bg {
        background: url("https://images.unsplash.com/photo-1590605105526-5c08f63f89aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80") no-repeat center center/cover;
        position: absolute;
        top: -30px;
        left: -30px;
        width: calc(100vw + 60px);
        height: calc(100vh + 60px);
        z-index: -1;
        filter: blur(0px);
        }   
        ```
- 打字機效果 @keyframe與animation 


## javascript 技巧
- 設置間隔定時器調用函數來改變加載時間load
- 以線性映射改變文字透明度、背景模糊
    ```javascript
    let int = setInterval(blurring,30);

    function blurring(){
        load++
        loadingText.textContent=`${load}%`;
        if(load>99){clearInterval(int)};
        loadingText.style.opacity=scale(load,0,100,1,0);
        bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`
    }

    //from stackoverflow
    //https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }
    ```
- 2秒後自動播放影片
