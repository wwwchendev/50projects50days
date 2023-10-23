
/*------------------------------------------------
ℹ️非同步處理
    1.PROMISE
        // 代碼如下:
        // (1) 創建獲取user的方法並給定參數
        // (2) 使用axios.get發送網路請求(axios會返回一個promise)
        // (3) 使用.then.catch進行成功與錯誤機制處理
        // function getUser(username){
        //     axios.get(APIURL+username)
        //         .then(res=>console.log(res.data))    
        //         .catch(err=>console.log(err))
        // }
    2.ASYNC/AWAIT (本案例使用ASYNC/AWAIT) 
        用於JAVASCRIPT中的異步處理，它可以用在各種異步操作上，包括fetch()請求。
        你可以在 async 函數中使用 await 來等待 fetch() 請求的完成，以使代碼更易讀。

ℹ️非同步網路請求技術
    1. AJAX 是一種較老的技術，它使用XMLHttpRequest對象來發送和接收網路請求。通過AJAX，網頁應用可以在不刷新整個頁面的情況下與服務器進行數據交互。
    2. FETCH瀏覽器內建用於網路請求的函數，會返回PROMISE，使用 .then() 和 .catch() 方法來處理請求的成功和失敗。
    3. AXIOS是用於處理網路請求的JS套件，會返回PROMISE，它為開發人員提供了一個更簡單的 API 來處理請求，相對於 fetch()，Axios 在處理諸如設置默認請求標頭、請求取消、錯誤處理等方面提供了更多的便利性。
------------------------------------------------*/

/*------------------------------------------------
1.載入axios cdn到body結尾
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js" integrity="sha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==" crossorigin="anonymous"></script>
2-1.用axios發送網路請求 (axios.get(url) \ axios.post(url) \axios.put(url) \axios.delete(url))
    axios範例✍️// 資源:取得GitHub用戶資訊 (https://docs.github.com/zh/rest/users/users?apiVersion=2022-11-28)
    1.載入axios並宣告根目錄
        const APIURL=`https://api.github.com/users/`;
    2.宣告async/await函數 函數中用axios.get方法獲得回傳資料
    3.如使用 await 或回呼函數時，後續的程式碼可能會在非同步操作完成之前執行，導致undefined

    // 代碼如下:
    //     let res; 
    //     getUser("octocat")
    //     //異步函數
    //     async function getUser(username){
    //         //網路請求
    //         res = await axios.get(APIURL+username)
    //         console.log(res)
    //         // {data: {…}, status: 200, statusText: '', headers: {…}, config: {…}, …}
    //     }
    //     console.log(res) //undefined
2-2. 不同類型的網路請求URL可能像這樣
    1.get     | axios.get('https://example.com/api/data')
    2.post    | axios.post('https://example.com/api/create', { name: 'John', age: 30 })
    3.put     | axios.put('https://example.com/api/update/1', { name: 'Updated Name' })
    4.delete  | axios.delete('https://example.com/api/delete/1')
------------------------------------------------*/

//1.監聽form元素
const main = document.getElementById('main')
const form = document.querySelector('#form');
const search = document.querySelector('#search');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;
    if (user) {
        //獲取用戶資料
        getUser(user);
        //清空搜尋列
        search.value = ``
    }
})



// 2.宣告變數用於存儲 API根路徑
const APIURL = `https://api.github.com/users/`;

// 3.用axios網路請求+ 使用async/await異步操作 + 使用try/catch(err)錯誤處理
// (1) 創建獲取user的方法並給定參數
// (2) (非必要)用變數res存取axios.get發送的網路請求回傳結果(axios會返回一個promise)
//     可以在console查看res內的資訊
// (3) 解構賦值-宣告{data}將 axios.get 傳回的物件中的 data 屬性提取出來，並將其賦值給名為 data 
// (4) 使用 try/catch(err) 進行成功與錯誤機制處理

// 獲取用戶資料
async function getUser(username) {
    try {
        //取得網路請求回傳數據
        // const res = await axios.get(APIURL+username)
        const { data } = await axios.get(APIURL + username)
        //console.log(data)
        //{login: 'octocat', id: 583231, node_id: 'MDQ6VXNlcjU4MzIzMQ==', avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4', gravatar_id: '', …}        
        createUserCard(data) //更新卡片介面-用戶        
        getRepos(username) //更新卡片介面-數據庫
    } catch (err) {
        //查看錯誤回報訊息
        console.log(err.response)
        //如果網路請求返回的狀態碼為404表示
        if(err.response.status == 404) {
            createErrorCard('查無該用戶')
        }
    }
}

// 更新卡片介面--查找用戶存在的情況
function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div class="">
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>   
    `;
    main.innerHTML=cardHTML;
}

// 更新卡片介面-數據庫
async function getRepos(username) {
    try {
        // 取得資料 -- 依建立時間排序
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        // 更新介面
        addReposToCard(data)
    } catch(err) {
        createErrorCard('取得儲存庫時出現問題')
    }
}
// 增加數據庫到卡片內
function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}


// 查無該用戶的情況
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML
}
