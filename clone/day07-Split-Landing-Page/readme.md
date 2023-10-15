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
    /* 以自身中心點(自身寬高的一半)與父容器的中心點對齊 */
    transform: translate(-50%, -50%);
    }
    ```

- Hover寬度變化
    ```css
    .split {
    position: absolute;
    width: var(--default-width);
    height: 100%;
    overflow: hidden;
    }

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
