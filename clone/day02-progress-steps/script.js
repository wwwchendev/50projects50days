const progressBar = document.getElementById('progressBar');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive += 1;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener("click", () => {
    currentActive -= 1;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update() {
    circles.forEach((e, idx) => {
        if (idx < currentActive) {
            e.classList.add('active');
        } else {
            e.classList.remove('active');
        }
    })

    progressBar.style.width
    =((currentActive-1)/(circles.length -1 ))*100+'%';

    if(currentActive==1){
        prev.disabled =true;
    }else if(currentActive===circles.length){
        next.disabled =true;
    }else{
        prev.disabled =false;
        next.disabled =false;        
    }   
}


