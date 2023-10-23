const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["星期日", "星期一", "星期二","星期三","星期四","星期五", "星期六"];
const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    // 判斷 class中是否包含dark
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = '切換暗色主題'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = '切換明亮主題'
    }
})


function setTime() {
    const time = new Date(); //Fri Oct 20 2023 18:01:52 GMT+0800 (台北標準時間)
    const month = time.getMonth() //9 (month[9]="10月")
    const day = time.getDay() //5 (day[5]="星期五")
    const date = time.getDate() //20
    const hours = time.getHours()  //18
    const hoursForClock = hours >= 13 ? hours % 12 : hours; //18->6(轉為12小時制)
    const minutes = time.getMinutes() //1
    const seconds = time.getSeconds() //52
    const ampm = hours >= 12 ? 'PM' : 'AM' 

    //調整時針、分針、秒針
    //使用線性映射函數轉換 時(12)分秒(60)對應到圓(0-360) 角度
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    //調整顯示文字
    //6:01 PM
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    //10月 20日, 星期五
    dateEl.innerHTML = ` ${months[month]} <span class="">${date}</span>日, ${days[day]}`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();
setInterval(setTime, 1000);