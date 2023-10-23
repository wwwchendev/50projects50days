const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

//宣告包含各種函數的物件
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//監聽複製按鈕點擊事件以複製密碼
clipboardEl.addEventListener('click', async () => {
    const password = resultEl.innerText
    // 如果結果欄位沒有密碼就不起作用
    if (!password) { return }
    try {
        // 使用Clipboard API中的navigator.clipboard.writeText()方法，將密碼文本複製到剪貼板中。
        // navigator.clipboard：這是一個 JavaScript 對象，代表了瀏覽器的剪貼簿。
        //                      透過它，您可以存取剪貼簿的功能，包括讀取和寫入剪貼簿內容。
        // writeText(password)：這是 navigator.clipboard 物件的一個方法，
        //                      用於將文字內容寫入剪貼簿。在這裡password 是寫入剪貼簿的文字字串。
        await navigator.clipboard.writeText(password);
        alert('密碼已複製到剪貼板');
    } catch (err) {
        console.error('複製到剪貼板時出現錯誤：', err);
    }
});

//監聽產生按鈕點擊事件，將各項設定值作為參數調用generatePassword以產生結果
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
    //console.log(hasLower,hasUpper,hasNumber,hasSymbol)
    //true true false false
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

// 產生密碼的邏輯
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    //console.log(typesCount) //2
    const typesArr = [{ lower }, { upper }, { number }, { symbol }]
                    .filter(item => Object.values(item)[0])
    // [{"lower":true},{"upper":true},{"number":false},{"symbol":false}]
    // .filter(篩選條件)； 
    // 篩選條件: item => Object.values(item)[0] 
    // Object.values(item) 所有包含鍵值對物件屬性值的陣列，這裡特別用[0]指定了第一個元素(布林值)
    // 篩選出遍歷元素後 篩選 Object.values(item)[0] 結果為true的值
    
    // console.log(typesArr) 
    // [{"lower":true},{"upper":true}]
    
    // 都沒打勾是不會有反應的
    if (typesCount === 0) { return '' }

    // 產生隨機密碼
    // 這個循環用於產生密碼的主要部分，它將重複執行，直到產生的密碼達到所需的長度 length。
    // typesCount 表示要包含的字元類型的總數。這個循循環每次迭代增加 typesCount 字元到密碼中。
    for (let i = 0; i < length; i += typesCount) {
        // i<11時進入迴圈, i=0,0+2=2;4,6,8,10
        // 在i=0,2;4,6,8,10後 產生了長度為12的亂數 : eBuJvOjOrBgG
        typesArr.forEach(type => {            
            const funcName = Object.keys(type)[0] //lower //upper
            generatedPassword += randomFunc[funcName]()
            //cI 每次會產生兩個亂數
        })
    }
    //根據長度產生從0到第length字數的字串  
    //上一步驟產生了12碼亂數eBuJvOjOrBgG，但我們需要的是11碼
    //因此使用String.slice(0, length)將產生的密碼截取為11個字符
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

/*
String.fromCharCode() 
JavaScript 中的字串方法，它用於將一組 Unicode 編碼的字元值轉換為字串。
var str = String.fromCharCode(65); // 返回字符串 "A"
var emoji = String.fromCharCode(0x1F604); // 返回笑脸 Emoji 😄
*/
//產生隨機小寫字母
//Unicode編碼小寫字母範圍(97-122)
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

//產生隨機大寫字母
//Unicode編碼大寫字母範圍(65-90)
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

//產生隨機數字
//Unicode編碼大寫字母範圍(48-57)
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

//產生隨機符號
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'

    // 使用 `Math.floor(Math.random() * symbols.length)`產生隨機的索引 
    // 並用string[index]獲取字串中特定索引位置的字符 
    // 例如：
    // Math.floor(0.22545456*20)=4 
    // string[4]=$
    return symbols[Math.floor(Math.random() * symbols.length)]
}