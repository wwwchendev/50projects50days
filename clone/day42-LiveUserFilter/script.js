const filter =document.getElementById('filter');
const list =document.getElementById('result');
const userList = [];

getUser()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getUser(){
    const {data} = await axios.get("https://randomuser.me/api/?results=50&nat=US");
    console.log(data);
    const users=data.results;
    
    list.innerHTML=``;

    users.forEach((user)=>{
        const li = document.createElement('li');
        userList.push(li);
        li.innerHTML=`
        <img src="${user.picture.thumbnail}" alt="${user.name.last+user.name.first}">
        <div class="user-info">
            <h4>${user.name.last+user.name.first}</h4>
            <p>${user.location.state+`, `+user.location.country}</p>
        </div>`;
        list.appendChild(li);
    })
}


function filterData(searchTerm){
    userList.forEach(user=>{
        // 將user名稱和關鍵字都轉為小寫 讓使用者輸入大小姐都可以進行查詢
        if(user.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            user.classList.remove('hide')
        }else{
            user.classList.add('hide')
        }
    })
}