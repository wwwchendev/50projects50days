
const panel = document.querySelector('#panel')
const ratingsContainer = document.querySelector('.ratings-container')
const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
let selectedRating = ''

// 點擊評分區塊
ratingsContainer.addEventListener('click', (e) => {
    // 如果點擊的是圖片
    // 父元素包含class'rating'，且同層的下一個元素存在(small)。
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive() //移除所有rating的active
        //在被點擊的small的父元素rating加入active類別
        e.target.parentNode.classList.add('active') 
        //selectedRating賦值為 兄弟元素(small)的innerHTML
        selectedRating = e.target.nextElementSibling.innerHTML
    } else if(
        // 如果點擊的是small標籤
        // 父元素包含class'rating'，且同層的前一個元素存在(img)，且同層的前一個元素是img標籤 
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive() //移除所有rating的active
        //在被點擊的small的父元素rating加入active類別
        e.target.parentNode.classList.add('active')
        //selectedRating賦值為 當前元素(small)的innerHTML
        selectedRating = e.target.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>感謝您寶貴的回覆</strong>
        <br>
        <strong>回覆: ${selectedRating}</strong>
        <p>我們將利用您的回饋來改善我們的客戶服務品質</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}
