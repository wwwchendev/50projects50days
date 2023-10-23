// // https://icanhazdadjoke.com/api
// // "Accept: application/json" https://icanhazdadjoke.com/
// // {
// //   "id": "R7UfaahVfFd",
// //   "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
// //   "status": 200
// // }

const jokeEl =document.getElementById('joke');
const jokeBtn =document.getElementById('jokeBtn');

generateJoke();
jokeBtn.addEventListener('click',generateJoke);

//1. 比較舊的語法 AJAX
//儘管可以使用 AJAX，但在現代 Web 開發中，通常更建議使用 Fetch API 或 Axios，
//因為它們提供更強大的功能和更好的可讀性。
// function generateJoke() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://icanhazdadjoke.com/', true);
//     xhr.setRequestHeader('Accept', 'application/json');

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             jokeEl.textContent = data.joke;
//         } else {
//             console.error('請求笑話時出現錯誤:', xhr.status, xhr.statusText);
//         }
//     };
//     xhr.send();
// }

// 2.USING PROMISE.then
// function generateJoke(){
//     const config= {
//         headers:{
//             'Accept':'application/json'
//         }
//     }    
//     fetch('https://icanhazdadjoke.com/',config)
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         jokeEl.textContent=data.joke;
//     });  
// }

// 3.USING fetch + ASYNC/AWAIT
// async function generateJoke(){
//     const config= {
//         headers:{
//             'Accept':'application/json'
//         }
//     }    
//     const res = await fetch('https://icanhazdadjoke.com/',config)
//     const data = await res.json()
//     jokeEl.textContent=data.joke;
// }

// 4.USING axios + ASYNC/AWAIT
// 用axios網路請求+ 使用async/await異步操作 + 使用try/catch(err)錯誤處理
async function generateJoke(){
    const APIURL=`https://icanhazdadjoke.com/`;
    const config = {
        headers: {
            'Accept': 'application/json',
            //'Authorization': 'Bearer YourAccessToken' // 添加token，這裡用不到
        }
    };
    try {
        const response = await axios.get(APIURL, config);
        const data = response.data;
        jokeEl.textContent = data.joke;
    } catch (error) {
        console.error('請求笑話時出現錯誤:', error);
    }
}

