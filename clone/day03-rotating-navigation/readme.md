## css技巧
- 旋轉漢堡選單+旋轉整個頁面
    - 用`transform-origin`設定元素變換的基準點 
    ```css
    body { overflow-x: hidden; }
    .container {
        background-color: var(--bg-content);
        transform-origin:top left;
        transition: transform 0.5s linear;
        width: 100vw;
        min-height: 100vh;
        padding: 50px;
    }

    .container.show-nav{
        ransform: rotate(-20deg);
    }

    .container.show-nav .circle {
        transform: rotate(-70deg);
    }

    .circle-container{
        position: fixed;
        top:-100px;
        left:-100px;
    }

    .circle{
        background-color: var(--bg-circle);
        height: 200px;
        width: 200px;
        border-radius: 50%;
        position: relative;
        transition: transform 0.5s linear;
    }
    ```
- 導航選單項目 定位與動畫
    - 定位－相鄰兄弟選擇器(Adjacent sibling selector)
        使用相鄰兄弟選擇器定位導航選單項目以及建立它們之間的間距和平移效果。
        ```css
        nav ul li i {
            font-size: 20px;
            margin-right: 10px;
        }

        nav ul li + li{
            margin-left: 15px;
            transform: translateX(-150%);
        }

        nav ul li + li+ li{
            margin-left: 30px;
            transform: translateX(-200%);
        }
        ```
    - 動畫－使用後代選擇器 + 相鄰兄弟選擇器
        只有在 container 的 class中包含 "show-nav" 的情況下，nav li 選擇器中的樣式才會生效。 
        ```html
        <div class="container show-nav">
        </div>
        <nav>
            (ul>li>a>i.fas.fa-home)*3
        </nav>
        ```
        ```css
        .container.show-nav + nav li{
            transform: translateX(0px);
            transition-delay: 0.3s;
        }
        ```
- 導航選單項目 強制英文大寫 `text-transform: uppercase`
    ```css
    nav ul li{
        text-transform: uppercase;
        color: #fff;
        margin: 40px 0;
        transform: translateX(-100%);
        transition: transform 0.4s ease-in;
    }
    ```
    
## javascript 技巧

- 切換active狀態
    ```javascript
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const container = document.querySelector('.container');
    open.addEventListener('click', () => container.classList.add('show-nav'))
    close.addEventListener('click', () => container.classList.remove('show-nav'))
    ```
