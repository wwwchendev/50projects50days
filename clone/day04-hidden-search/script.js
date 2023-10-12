const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const showText =document.getElementById('showText');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    //input.focus()展開的時候會自動聚焦在input輸入框
    input.focus();
    showText.classList.toggle('active');
})