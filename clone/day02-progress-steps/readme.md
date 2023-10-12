## css技巧
- 
    - CSS變數命名慣例以`--`開頭。
        ```css
        :root {
            --line-border-fill:#3498db;
            --line-border-empty:#e0e0e0;
        }

        .progressBar{
            background-color: var(--line-border-fill);
        }
        ```

- 進度條定位
    ```css
    /*
    * progress-container            進度條元件的容器
    * progress-container::before    未填色的進度線
    * progressBar                   表示當前進度條
    */
    .progress-container{
        /* 設置為flexbox 內部元素circle分散對齊 */
        display: flex;
        justify-content: space-between;  
        /*設置為絕對定位，讓進度線可以根據容器位置定位*/
        position: relative;
        bottom: 30px;
        /* 寬度設置 */
        /*設置最大寬度確保不會超過父容器寬度*/ 
        max-width: 100%;
        width: 350px;
    }

    .progress-container::before{
        content: '';
        background-color: var(--line-border-empty);
        height: 4px;
        width: 100%;
        z-index:-1;
        /*定位*/
        position: absolute;
        top:50%;
        left: 0;
        transform: translateY(-50%);
    }

    .progressBar{
        background-color: var(--line-border-fill);
        height: 4px;
        width: 0%;
        z-index:-1;
        /*定位*/
        position: absolute;
        top:50%;
        left: 0;
        transform: translateY(-50%);
        /*動畫*/
        transition: .4s ease;
    }
    ```
- 按鈕狀態
    ```css
    .btn{
        background-color: var(--line-border-fill);
        color: #fff;
        border:0;
        border-radius: 6px;
        cursor: pointer;
        font-family: inherit;
        padding: 8px 30px;
        margin: 5px;
        font-style: 14px;
    }

    .btn:active { transform: scale(0.98); }
    .btn:focus  { outline:0; }
    .btn:disabled{
        background-color: var(--line-border-empty);
        cursor: not-allowed;
    }
    ```
## javascript 技巧

- 讀取目前進度      
    宣告變量currentActive，監聽點擊事件根據點哪個按鈕增減變量，     
    對變量進行範圍限制在`1-circles.length`之間，        
    接著調用update()來更新元素的樣式狀態。
    ```javascript
    let currentActive = 1;

    next.addEventListener("click", () => {
        currentActive += 1;
        if (currentActive > circles.length) {
            currentActive = circles.length;
        }
        update();
    })

    prev.addEventListener("click", () => {
        currentActive -= 1;
        if (currentActive < 1) {
            currentActive = 1;
        }
        update();
    })
    ```

- 更新樣式狀態：圓圈、進度線、按鈕
    ```javascript
    function update() {
        /*圓圈
        * 變數circles是一個陣列，元素被依據順序按circles[0],circles[1]..儲存，        
        * 遍歷circles陣列根據－索引值與當前進度大小，對元素的class增刪`active`。
        */
        circles.forEach((e, idx) => {
            if (idx < currentActive) {
                e.classList.add('active');
            } else {
                e.classList.remove('active');
            }
        })

        /*進度線
        * 根據當前進度計算填色範圍 更改 progressBar的寬度 達到進度條的效果。
        * 🔵-🔵-⚪-⚪-⚪
        * 當前進度 2/5 = 40%
        * 填色範圍 (2-1)/(5-1) =25%
        */
        const actives = document.querySelectorAll('.active');
        progressBar.style.width=((actives.length -1) /(circles.length -1 ))*100+'%';

        /*按鈕
        * 當前進度來到第一項和最後一項的時候設定對應按鈕的disabled屬性，      
        * 在其他時候disabled屬性都是false。
        */
        if(currentActive==1){
            prev.disabled =true;
        }else if(currentActive===circles.length){
            next.disabled =true;
        }else{
            prev.disabled =false;
            next.disabled =false;        
        }   
    }
    ```