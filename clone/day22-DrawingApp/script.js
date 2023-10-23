/*
Canvas文件
https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/canvas

🖍️讀取畫布元素
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

🖍️ 繪圖方法－由起始座標以連續的點+線連到結束座標 產生連續路徑 
// 產生連續路徑 
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY        
        //由起始座標以連續的點+線連到結束座標 產生連續路徑 
        drawCircle(x2, y2)//連續的點
        drawLine(x, y, x2, y2)//連續的線
        //更新座標
        x = x2
        y = y2
    }
})
// 連續的點
function drawCircle(x, y) {    
    ctx.beginPath(); //建立路徑
    ctx.fillStyle = color //設定填充顏色    
    ctx.arc(x, y, size, 0, Math.PI * 2) //設置一個弧形路徑    
    ctx.fill() //填色
}
// 連續的線
function drawLine(x1, y1, x2, y2) {    
    ctx.beginPath() //建立路徑    
    ctx.strokeStyle = color //設定線段顏色    
    ctx.lineWidth = size * 2//設定線段寬度(px)    
    ctx.moveTo(x1, y1) // 指定新路徑的起始座標
    ctx.lineTo(x2, y2) // 指定新路徑的結束座標    
    ctx.stroke()//線段
}

🖍️ 清除畫布
[說明] 像素設定為透明以擦除一個矩形區域
[用法] ctx.clearRect(X座標, Y座標, 寬度, 高度);
[舉例] ctx.clearRect(0,0, canvas.width, canvas.height)
*/

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const eraserEl = document.getElementById('eraser');
const clearEl = document.getElementById('clear');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isPressed = false //落筆狀態
let eraserActive = false;
let size = 5 //畫筆尺寸
let selectedColor = '#333333' ;
let brushColor = selectedColor;

//設置畫筆顏色
init()
function init(){
    colorEl.value = selectedColor 
}


//🔍監聽滑鼠事件以更新座標位置
let x 
let y 
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})
document.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY        
        //由起始座標以連續的點+線連到結束座標 產生連續路徑 
        drawCircle(x2, y2)//連續的點
        drawLine(x, y, x2, y2)//連續的線
        //更新座標
        x = x2
        y = y2
    }
})


//🔍產生連續路徑 
// 連續的點
function drawCircle(x, y) {    
    ctx.beginPath(); //建立路徑
    ctx.fillStyle = brushColor //設定填充顏色    
    ctx.arc(x, y, size, 0, Math.PI * 2) //設置一個弧形路徑    
    ctx.fill() //填色
}
// 連續的線
function drawLine(x1, y1, x2, y2) {    
    ctx.beginPath() //建立路徑    
    ctx.strokeStyle = brushColor //設定線段顏色    
    ctx.lineWidth = size * 2//設定線段寬度(px)    
    ctx.moveTo(x1, y1) // 指定新路徑的起始座標
    ctx.lineTo(x2, y2) // 指定新路徑的結束座標    
    ctx.stroke()//線段
}

//🔍變數設定 
//增加畫筆粗度
increaseBtn.addEventListener('click', () => {
    size += 5
    if(size > 50) { size = 50 }
    sizeEL.innerText = size
})
//減少畫筆粗度
decreaseBtn.addEventListener('click', () => {
    size -= 5
    if(size < 5) { size = 5 }
    sizeEL.innerText = size
})
//選擇顏色
colorEl.addEventListener('change', (e) =>{
    eraserEl.classList.remove('active')  
    eraserActive=false;
    // console.log(`原顏色: ${selectedColor}`)
    selectedColor = e.target.value
    // console.log(`新顏色: ${selectedColor}`)
    brushColor=selectedColor;
} )
//清除整個畫布 
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))

//橡皮擦(其實只是換成畫布顏色)
eraserEl.addEventListener('click', () => { 
    if(eraserActive){
        eraserEl.classList.remove('active')  
        eraserActive=false;
        brushColor = selectedColor;        
    }else{
        eraserEl.classList.add('active')  
        eraserActive=true
        //宣告canva-bgColor 取得canva背景顏色
        const canvaStyle = getComputedStyle(canvas);
        const canvaBgColor = canvaStyle.backgroundColor;
        brushColor = canvaBgColor;
    }    

})