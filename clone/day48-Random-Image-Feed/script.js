const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5;
const columns = 3;


//迴圈產生 rows * columns數量的圖片元素
for(let i = 0; i < rows * columns; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
    //`325x361`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}