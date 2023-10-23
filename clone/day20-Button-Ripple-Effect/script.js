const buttons = document.querySelectorAll('.ripple')

// 在滑鼠點擊按鈕的地方增加一個會變大的圓圈
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // 取得事件座標
        // console.log(e.clientX,e.clientY);
        const x = e.clientX
        const y = e.clientY

        // HTML元素屬性 offsetTop/offsetLeft
        // 元素距離視窗邊界的位置
        // console.log(e.target.offsetTop);
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        //在windows添加span.circle元素及設置元素位置
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        this.appendChild(circle)
        //500毫秒後移除元素
        setTimeout(() => circle.remove(), 500)
    })
})

