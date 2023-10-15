## css技巧

- label定位講解
    1. label移動到插入框上方
        ```css
        .form-control{
            position: relative;
            margin: 20px 0 40px 0;
            width: 300px;
        }
        .form-control label{
            /* 以form-control為基準定位 */
            position: absolute;
            top: 15px;
            left:0;  
            /* 不響應任何鼠標事件 */
            pointer-events: none;
        }
        .form-control label span{
            display: inline-block;
            font-size: 18px;
            transition: all 0.1s ease;
        }  
        ```
    2. 在input的特定狀態時 改變label span位置-向上30px
        ```css
        /* 在input的特定狀態時 改變label span */
        .form-control input:focus+label span,
        .form-control input:valid+label span{
            color: var(--color-primary);
            transform: translateY(-30px);
        }
        ```

- transition-delay逐字動畫效果
    ```html
    <div class="form-control">
        <input type="text" required>
        <!-- <label>Email</label> -->
        <label>
            <span style="transition-delay: 0ms;">E</span>
            <span style="transition-delay: 50ms;">m</span>
            <span style="transition-delay: 100ms;">a</span>
            <span style="transition-delay: 150ms;">i</span>
            <span style="transition-delay: 200ms;">l</span>
        </label>
    </div>
    ```
    ```css
    .form-control label span{
        display: inline-block;
        font-size: 18px;
        transition: all 0.1s ease;
    }
    /* 在input的特定狀態時 改變label span */
    .form-control input:focus+label span,
    .form-control input:valid+label span{
        color: var(--color-primary);
        transform: translateY(-30px);
    }
    ```
- 按鈕點擊效果
    ```css
    /* 點擊效果 */
    .btn:active{ transform: scale(0.98); }
    ```

## javascript 技巧
- 將元素文本拆成單個字後替換元素內容
    ```javascript
    const labels = document.querySelectorAll('.form-control label');
    labels.forEach(label=>{
        label.innerHTML=
            .innerText //'Email'
            .split('')  // ['E', 'm', 'a', 'i', 'l']
            .map((letter,idx)=>
                `<span style="transition-delay:
                ${idx*50}ms">${letter}</span>`)
            .join('');
            //`<!-- <label>
            //    <span style="transition-delay: 0ms;">E</span>
            //    <span style="transition-delay: 50ms;">m</span>
            //    <span style="transition-delay: 100ms;">a</span>
            //    <span style="transition-delay: 150ms;">i</span>
            //    <span style="transition-delay: 200ms;">l</span>
            //</label> -->`
    })
    ```
