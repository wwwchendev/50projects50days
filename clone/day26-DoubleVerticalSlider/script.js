const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length


//左邊區塊顯示邏輯
//左邊區塊(根據slider-container定位)的位置向上 (slidesLength-1)vh
//這樣左邊的div只有最後一個會顯示
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

//目前顯示的slide
let activeSlideIndex = 0 

const changeSlide = (direction) => {
    // .clientHeight 是用來取得元素的可視高度（viewport height），回傳值為整數
    const sliderHeight = sliderContainer.clientHeight;
    //console.log(sliderHeight);    
    if(direction === 'up') {
        activeSlideIndex++
        // 控制 activeSlideIndex 範圍在 0-slidesLength間
        // 按到倒數最後一項初始化索引
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        // 控制 activeSlideIndex 範圍在 0-slidesLength間
        // 按到最後一項時 初始化索引
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    //左邊區塊下移
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    //右邊區塊上移
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

}

//(預設狀態) activeSlideIndex=0
//左邊區塊下移
// let color =[
    // "Red" ,
    // "Blue",
    // "DarkBlue",
    // 👁️"Yellow"]

//右邊區塊上移
    // let imgs =[
    // 👁️"Flying eagle" ,
    // "Lonely castle",
    // "Bluuue Sky",
    // "Nature flower"]


//按了up按鈕 activeSlideIndex=1
//左邊區塊下移
// let color =[
    // "Red" ,
    // "Blue",
    // 👁️"DarkBlue",
    // ⬇️"Yellow"]

//右邊區塊上移
    // let imgs =[
    // ⬆️"Flying eagle" ,
    // 👁️"Lonely castle",
    // "Bluuue Sky",
    // "Nature flower"]
