const addBtn = document.getElementById('add')

//讀取localStorage裡notes字串陣列,如果存在的話調用addNewNote(note)刷新畫面
const notes = JSON.parse(localStorage.getItem('notes'))
if(notes) {
    notes.forEach(note => addNewNote(note))
}
//監聽按鈕以 新增便籤
addBtn.addEventListener('click', () => addNewNote())

//新增便籤的處理 --接受可選的文本作為參數(預設值為'')
function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')
    // 新增的時候判斷text是否存在?
    // 如果有顯示main隱藏textarea ,如果沒有顯示textarea隱藏main
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""} "></textarea>
    `
    //選取note內的元素
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text  //編輯區的內容為text 
    main.innerHTML = marked(text) //主要區域的內容顯示為marked()

    // 1.刪除按鈕被點擊時：移除元素、更新表單
    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })

    // 2.編輯按鈕被點擊時：切換顯示主要區塊內容與編輯的顯示
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    // 3.編輯區塊監聽輸入事件：獲取內容、更新到主要區塊內容、更新表單
    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        main.innerHTML = marked(value)
        updateLS()
    })

    document.body.appendChild(note)
    updateLS()
}

//更新表單(存在localStorage)
function updateLS() {
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}

/* localStorage 瀏覽器中儲存資料的一個客戶端儲存機制
存取資料 localStorage.setItem(key, value)
        value必須是字串 要儲存非字串的資料，可以使用 JSON.stringify(obj) 將物件轉換為字串後再存儲。
讀取資料 localStorage.getItem(key)
        JSON.parse(localStorage.getItem(obj))
        取得資料時轉回原始格式即可
刪除資料 localStorage.removeItem(key)
清空整個 localStorage.clear();
*/