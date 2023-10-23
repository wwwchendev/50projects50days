const fill= document.querySelector('.fill');
const empties= document.querySelectorAll('.empty');

//拖曳物件
fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

function dragStart(){
    console.log(`dragStart`);
    this.className+=' hold';
    // 透過使用 setTimeout 並將其設為零毫秒，
    // 確保了在 this.className=''; 執行之前
    // 瀏覽器有足夠的時間將 "hold" 類別正確地應用到元素。

    // 在沒有setTimeout 的情況下，
    // 如果你在同一個事件循環週期中先將"hold" 類別加入，
    // 然後立即將整個類別清單清空（this.className=''），
    // 在某些情況下，瀏覽器可能會在"hold" 類別應用程式之前
    // 立即清空類別列表，導致元素變得不可見。
    setTimeout(()=>{
        this.className=''; //invisible
    },0)
}

function dragEnd(){
    console.log(`dragEnd`);
    this.className='fill'
}

//容器
for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

// 過拖曳物體經過（但尚未進入）本容器時
// 1.取消默認行為:預設情況下瀏覽器會阻止將該物件放入容器中。
function dragOver(e){
    e.preventDefault();
    console.log(`dragOver`);    
}

// 拖曳物體進入本容器時
// 1.取消默認行為:預設情況下瀏覽器會阻止將該物件放入容器中。
// 2.容器顯示hovered樣式
function dragEnter(e){
    e.preventDefault();
    console.log(`dragEnter`);
    this.className+=' hovered';    
}

// 拖曳物體離開本容器時
// 1.容器顯示empty樣式
function dragLeave(){
    console.log(`dragLeave`);
    this.className='empty'    
}

//拖曳物體被成功放置到本容器中時
// 1.容器顯示empty樣式
// ⭐2.在容器內生成fill物件
function dragDrop(){
    console.log(`dragDrop`);
    this.className='empty';
    this.append(fill);
}