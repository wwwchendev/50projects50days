## css技巧
- CSS漸層語法與線上漸層產生器
    ```css    
    body {
        background-image: linear-gradient(90deg, #9c8af3, #7158e2);
    }
    ```
    - https://webgradients.com/
    - https://uigradients.com/#Mystic

- 點擊搜尋鈕後，搜尋輸入框變寬、搜尋按鈕向右位移
    ```css        
    /* 搜尋元素 */
    .search {
    position: relative;
    height: 50px;
    }

    /* 搜尋輸入框*/
    .search .input {
    background-color: #fff;
    border: 0;
    font-size: 18px;
    padding: 15px;
    height: 50px;
    width: 50px;
    transition: width 0.3s ease;
    }

    /* 搜尋輸入框active 變寬 */
    .search.active .input {
    width: 200px;
    }

    /* 搜尋按鈕 */
    .btn {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    transition: transform 0.3s ease;
    }

    /* 搜尋按鈕active 位移*/
    .search.active .btn {
    transform: translateX(198px);
    }

    ```

## javascript 技巧
- 聚焦在input輸入框
    ```javascript
    const search = document.querySelector('.search')
    const btn = document.querySelector('.btn')
    const input = document.querySelector('.input')
    const showText =document.getElementById('showText');

    btn.addEventListener('click', () => {
        search.classList.toggle('active');
        //input.focus()展開的時候會自動聚焦在input輸入框
        input.focus();
    })
    ```
