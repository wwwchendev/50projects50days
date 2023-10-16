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

// USING .then
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

// USING ASYNC/AWAIT
async function generateJoke(){
    const config= {
        headers:{
            'Accept':'application/json'
        }
    }    
    const res = await fetch('https://icanhazdadjoke.com/',config)
    const data = await res.json()
    jokeEl.textContent=data.joke;
}
