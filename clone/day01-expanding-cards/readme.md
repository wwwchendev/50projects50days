
![Alt text](image.png)

# Day01 - Expanding Cards
## css技巧

1. 單位 vh / vw
    - 視窗高度 Viewport Height (vh)
    - 視窗寬度 Viewport Width (vw)
    - 1vh 表示是當前視窗高度的1%
2. 彈性值 flex 
    - 為彈性項目設置不同的flex值時，它們會按照這些值的比例分配可用的彈性空間。   
    - 本例中有5個panel(flex: 0.5;)，其中一個為active狀態(flex: 5;)
        - flex-items 容器總寬度是 80vw
        - 5+(0.5*4)=7
        - 表示active-panel寬度佔了總寬度10/14
        - 其餘pannel寬度各佔了總寬度1/14

3. 過度動畫
    - panel彈性值     
        "在0.7秒內完成彈性值flex由0.5到5" 的淡入效果
        ```css
        .panel {
            flex: 0.5;
            transition: flex 0.7s ease-in;
        }

        .panel.active {
            flex: 5;
        }
        ```
    - 文字      
        延遲0.4s後開始"在0.3秒內完成透明度由0到1"的淡入效果
        ```css
        .panel .description{
            opacity: 0;
        }

        .panel.active .description{
            opacity: 1;
            transition: opacity 0.3s ease-in 0.4s;
        }
        ```

4. 根據螢幕尺寸或其他條件來控制哪些元素應該隱藏       
如果有多個.panel元素，這將選擇第4和第5個出現的那個。
    ```css
    .panel:nth-of-type(4),.panel:nth-of-type(5){
        display: none;
    }
    ```

## javascript 技巧
### 切換元素active狀態
1. 選取所有類別包含panel的元素，存到panels陣列內
2. 對所有panels陣列元素監聽click事件，被點擊時執行：     
    - 調用removeActiveClasses方法對所有panels陣列元素清除active類別
    - 被點擊的陣列元素自身類別加上active
```javascript
const panels = document.querySelectorAll('.panel');

panels.forEach((e)=>{
    e.addEventListener('click',function(){
        removeActiveClasses();
        e.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}
```