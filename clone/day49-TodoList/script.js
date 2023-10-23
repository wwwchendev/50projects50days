/* localStorage 瀏覽器中儲存資料的一個客戶端儲存機制
存取資料 localStorage.setItem(key, value)
        value必須是字串 要儲存非字串的資料，可以使用 JSON.stringify(obj) 將物件轉換為字串後再存儲。
讀取資料 localStorage.getItem(key)
        JSON.parse(localStorage.getItem(obj))
        取得資料時轉回原始格式即可
刪除資料 localStorage.removeItem(key)
清空整個 localStorage.clear();
*/
const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')


//取得localstorage中todos欄位的數據
//從JSON字串轉回陣列物件
const todos = JSON.parse(localStorage.getItem('todos'))
//[{"text":"第一件事情","completed":false},{"text":"第二件事情","completed":false}]

//如果原本就有 todos數據，呼叫addTodo更新介面
if(todos) {
    todos.forEach(todo => addTodo(todo))
}
input.focus()

//輸入代辦事項＋後，呼叫addTodo更新介面
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    
    //原有的localstorage
    if(todo) {
        todoText = todo.text
    }
    
    //依據待辦事項創建li元素後，呼叫addTodo更新介面
    if(todoText&&todoText.trim()!=='') {
        //宣告todoEl用來定義li元素
        const todoEl = document.createElement('li')

        // 確認狀態是完成的加上completed類別
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        //li內容為輸入值
        todoEl.innerText = todoText
        //替li元素增加監聽事件
        //點擊時切換完成狀態後更新localstorage陣列
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateList()
        }) 
        //contextmenu 監聽右鍵單擊事件
        //瀏覽器原生方法-將元素從 DOM中刪除後更新localstorage陣列
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updateList()
        }) 
        //插入元素後更新localstorage陣列
        todosUL.appendChild(todoEl)
        input.value = ''
        updateList()
    }else if(todoText.trim()==''){
        alert('輸入事項才可以新增');
    }
}


//更新表單
function updateList() {
    const todos = []
    todosEl = document.querySelectorAll('li')
    //把所有待辦事項包裝成物件格式加到todos陣列裡面
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    //設置"todos"和todos陣列的鍵值對到瀏覽器的localStorage
    localStorage.setItem('todos', JSON.stringify(todos))
    //[{"text":"第一件事情","completed":false},{"text":"第二件事情","completed":false}]
}


