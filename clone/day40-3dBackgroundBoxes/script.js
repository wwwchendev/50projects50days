const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
    // 直排
    for (let i = 0; i < 4; i++) {
        // 橫排
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            /*運算結果
            box.style.backgroundPosition = `-0*125px  0*125px`
            box.style.backgroundPosition = `-1*125px  0*125px`
            box.style.backgroundPosition = `-2*125px  0*125px`
            box.style.backgroundPosition = `-3*125px  0*125px`            
            */
            /*預期效果
            <div class="box" style="background-position: 0px 0;"></div>
            <div class="box" style="background-position: -125px 0;"></div>
            <div class="box" style="background-position: -250px 0;"></div>
            <div class="box" style="background-position: -375px 0;"></div>
            <div class="box" style="background-position: 0px -125px;">
            <div class="box" style="background-position: -125px -125px>
            <div class="box" style="background-position: -250px -125px>
            <div class="box" style="background-position: -375px -125px>
            */
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()
