## css技巧
- 對齊元素
    ```css
    .content{
    color: #fff;
    text-wrap: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* 把元素開頭位置放在中間 */
    position: absolute;
    top: 45%;
    left: 50%;
    /* 以使其自身的中心點(自身寬高的一半)與父容器的中心點對齊 */
    transform: translate(-50%, -50%);
    }
    ```

- Hover寬度變化
    ```css
    /* Hover-過渡動畫與寬度處理 */
    .split.left , .split.right{
    transition: width 0.2s ease-in-out;
    }

    /* .hover-side */
    .hover-left .left,.hover-right .right{
    width: var(--hover-width);  
    z-index:1;
    }
    /* .other-side */
    .hover-left .right,.hover-right .left{
    width: var(--other-width);  
    z-index:0;
    }
    ```
- 形狀裁剪
    ```css
    /*裁剪路徑:多邊形(左上,左下,右下,右上)*/ 
    /*clip-path:polygon(0% 0%, 0% 100%,100% 100%,100% 0%); */
    --left-side-shape: polygon(0% 0%, 0% 100%, 85% 100%, 100% 0%); 
    --right-side-shape: polygon(15% 0%, 0% 100%, 100% 100%, 100% 0%); 
    ```
    ```css
    .split {
    position: absolute;
    width: var(--default-width);
    /* width: 50%; */
    height: 100%;
    overflow: hidden;
    }
    .split.left {
    left: 0;
    background-image: url("https://images.unsplash.com/photo-1678026582164-24a5460c447a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    clip-path: var(--left-side-shape);
    }
    .split.right {
    right: 0;
    background-image: url("https://images.unsplash.com/photo-1615444814527-f5ebbea2cadb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80");
    /*背景尺寸要使用cover唷*/
    /* background-size: cover; */
    background-size: 145%;
    background-position: 40% 60% ;
    background-repeat: no-repeat; 
    clip-path: var(--right-side-shape);
    }
    ```

## javascript 技巧
- 滑鼠進入離開事件
    ```javascript
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const container = document.querySelector('.container');

    left.addEventListener('mouseenter',()=>{
        container.classList.add('hover-left');
    })
    left.addEventListener('mouseleave',()=>{
        container.classList.remove('hover-left');
    })
    right.addEventListener('mouseenter',()=>{
        container.classList.add('hover-right');
    })
    right.addEventListener('mouseleave',()=>{
        container.classList.remove('hover-right');
    })
    ```
