
// 宣告一個包含所有的問答的物件
// 發想：
// 可以請chatGPT幫忙出100題，做隨機出題20題
// 物件也可以增加標籤 做出可篩選主題的益智問答
const quizData = [
    {
        question: "哪一顆行星是太陽系中最大的行星？",
        a: "水星",
        b: "地球",
        c: "木星",
        d: "金星",
        correct: "c",
    },
    {
        question: "哪個大洋被認為是世界上最深的大洋？",
        a: "大西洋",
        b: "印度洋",
        c: "太平洋",
        d: "北冰洋",
        correct: "c",
    },
    {
        question: "哪一種動物是唯一能飛的哺乳動物？",
        a: "燕子",
        b: "蝙蝠",
        c: "老鼠",
        d: "鴨子",
        correct: "b",
    },
    {
        question: "在哪個國家可以找到埃菲爾鐵塔？",
        a: "英國",
        b: "意大利",
        c: "法國",
        d: "西班牙",
        correct: "c",
    },
    {
        question: "哪一位科學家提出了相對論理論？",
        a: "艾因斯坦",
        b: "牛頓",
        c: "達爾文",
        d: "柯普尼克",
        correct: "a",
    },
    {
        question: "哪位藝術家以他的太陽花畫作而聞名？",
        a: "梵谷",
        b: "達文西",
        c: "畢加索",
        d: "華東",
        correct: "a",
    }
];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const quizNum =document.getElementById('quizNum');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0
let score = 0

loadQuiz()

//更新題目界面
function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    quizNum.innerText = `第 ${currentQuiz+1} 題`
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

//清除所有答案的選取狀態
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

//監聽按鈕
submitBtn.addEventListener('click', () => {
    //按下按鈕後取得回答的答案 c
    const answer = getSelected()    
    //如果有作答 
    if(answer) {
        //判斷 答案是不是正解，是的話分數+1
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        //增加變數 currentQuiz 用於判斷進行下一題還是結算答案
        currentQuiz++
        //如果當前題目不是最後一題 2<4，呼叫loadQuiz載入下則問答
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            // 如果當前題目是最後一題
            // 顯示回答題數+使用者手動點擊reload按鈕以重新載入目前頁面。
            quiz.innerHTML = `
                <h2>您正確回答了  ${score}/${quizData.length} 個問題</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

//回傳被選取的答案id 
function getSelected() {
    let answer //user的回答
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
