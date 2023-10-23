const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

/* 倒數動畫原理
  首先在初始化時為3加入in，
  在nums[0] 也就是3 結束時觸發事件，此時為3 移除in 加上 out
  當3執行完out動畫時觸發事件，符合"e.animationName ===   'goOut' && num.nextElementSibling"，如果當前數字含名為goOut的動畫且該數同層中存在下一個元素，下一個元素設置in(添加goIn動畫)

   此時2被添加動畫in，..依此類推
*/

function runAnimation() {
    nums.forEach((num, idx) => {
        // 監聽DOM事件-結束動畫(animationend)時觸發事件
        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== (nums.length - 1 )) {
            // 如果當前數字含名為goIn的動畫且該數非最後一個元素(0)
            // 移除該數的in 並且設置out(添加goOut動畫)
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                // 如果當前數字含名為goOut的動畫且該數同層中存在下一個元素
                //下一個元素設置in(添加goIn動畫)
                num.nextElementSibling.classList.add('in')
            } else {
                // 否則就隱藏倒數頁面，打開 倒數結束後的畫面
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

// 按下重新載入按鈕，重置元素並執行動畫
replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})

//重置元素
function resetDOM() {
    //清除倒數頁面以及最終頁面的顯示動畫
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    //清空所有數字的class樣式
    nums.forEach((num) => {
        num.classList.value = ''
    })

    //第一個數字添加in動畫
    nums[0].classList.add('in')
}