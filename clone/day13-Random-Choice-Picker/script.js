const tagsEl = document.getElementById('tags');
// console.log(tagsEl);
const textarea = document.getElementById('textarea');
const btn = document.querySelector('.btn');

textarea.focus();


// keyup時依輸入內容產生標籤
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    //`Alice, Bruce, Claire, David, Elliot,Frank, Grace, 
    // Hannah,Ivy,Jason, Kevin, Lily, Mike, Nick,
    // Olivia, Paul, Queena,Rachel, Sarah, Tyler,Uma,
    // Victor, William, Xenia, Yvonne ,Zoey`
})

// 按按鈕之後開始隨機選擇標籤
btn.addEventListener('click',()=>{
    setTimeout(()=>{textarea.value=''},50)
    randomSelect();
})

// 產生標籤
function createTags(input) {
    const tags = input.split(',') 
                //["Alice ", "Bruce","  " ,"  Claire "]可能包含前後空格
                .filter(tag => tag.trim() !== '') 
                //篩選出陣列中去除前後空格後不為空字串的元素
                //["Alice ", "Bruce","  Claire "]
                .map(tag => tag.trim()); 
                //去除前後空格 ["Alice", "Bruce","Claire"]
    tagsEl.innerHTML = ``;
    tags.forEach(tag => {
        // <span class="tag">選項1</span>
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

// 隨機動畫效果+倒數選定標籤
function randomSelect(){
    const times=30;
    // 隨機highLight效果
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(()=>{
            unhighlightTag(randomTag)
        },100)
    },100)

    // 選定標籤
    setTimeout(()=>{
        clearInterval(interval);
        setTimeout(()=>{
            const randomTag=pickRandomTag();
            highlightTag(randomTag);
        })
    },times*100)
}
function highlightTag(tag){ tag.classList.add('highlight') }
function unhighlightTag(tag){ tag.classList.remove('highlight')}

// 亂數選定標籤邏輯
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    // 獲得 0 和 tags.length - 1 之間的整數
    //["Alice", "Bruce","Claire"]    //tags.length=3
    //Math.random()                 //返回0~1之間的小數 //以下用 0.1； 0.5； 0.9示範
    //Math.random()*tags.length     //輸出分別是 0.1*3=0.3； 0.5*3=1.5； 0.9*3=2.7；
    //Math.floor(0.65292273)        //捨去小數 //輸出分別是 0 ； 1 ； 3    
    const randomIdx = Math.floor(Math.random()*tags.length);
    return tags[randomIdx]
}





const sampleName = document.querySelector('.sampleName');
const sampleLocation = document.querySelector('.sampleLocation');
const sampleFood = document.querySelector('.sampleFood');

// 範本器
sampleName.addEventListener('click',()=>{
    const list= `Alice, Bruce, Claire, David, Elliot,Frank, Grace, 
    Hannah,Ivy,Jason, Kevin, Lily, Mike, Nick,
    Olivia, Paul, Queena,Rachel, Sarah, Tyler,Uma,
    Victor, William, Xenia, Yvonne ,Zoey`;
    textarea.value=list;
    createTags(list)
})

sampleLocation.addEventListener('click',()=>{
    const list= `基隆市,台北市,新北市,桃園市,新竹縣,新竹市,苗栗縣,台中市,彰化縣,南投縣,雲林縣,嘉義縣,嘉義市,台南市,高雄市,屏東縣,宜蘭縣,花蓮縣,台東縣,澎湖縣,連江縣,金門縣`;
    textarea.value=list;
    createTags(list)
})


sampleFood.addEventListener('click',()=>{
    const list= `鹽酥雞,珍珠奶茶,肉圓,蚵仔煎,筒仔米糕,鳳梨酥,牛肉麵,阿給,滷肉飯,豆花,筒仔米糕,蔥油餅,燒餅油條,豬血糕,蜜餞,蘿蔔糕,椪餅,甜不辣,紅豆餅,杏仁茶,`;
    textarea.value=list;
    createTags(list)
})


