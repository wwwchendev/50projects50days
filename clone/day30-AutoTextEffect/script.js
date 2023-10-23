const resultEl = document.querySelector('#result');
const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');
const submit = document.querySelector('#submit');
let text = `Hello(^ρ^)/`;
let speed = 500/speedEl.value;
let idx = 1;


textEl.focus();
writeText();

submit.addEventListener('click',()=>{
    if(textEl.value!==''){text = textEl.value;}
    speed = 300/speedEl.value; 
    writeText();
})

function writeText(){  
    resultEl.innerHTML=text.slice(0,idx);
    idx++;
    if(idx<=text.length){
        // 遞歸
        setTimeout(writeText,speed);
    }else if(idx>text.length){
        idx=1
    }
}

