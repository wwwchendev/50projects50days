const remained = document.getElementById('remained');
const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const smallCups = document.querySelectorAll('.cup-small');

updateBigCup();

smallCups.forEach((cup,idx)=>{
    // console.log(idx);
    cup.addEventListener('click',()=>{
        highlightCups(idx)
        updateBigCup()
    })
})


function highlightCups(idx){

    if (smallCups[idx].classList.contains('full')) {
        if (idx == smallCups.length - 1 || !smallCups[idx].nextElementSibling.classList.contains('full')) {
            idx--;
        }
    }
    
    smallCups.forEach((cup,idx2)=>{
        if(idx2<=idx){
            cup.classList.add('full')
        }else{            
            cup.classList.remove('full')
        }
    })
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups=smallCups.length;
    // console.log(fullCups);
    if(fullCups===0){
        percentage.style.visibility='hidden';
        percentage.style.height=0;
    }else{
        percentage.style.visibility='visible';
        percentage.style.height=`${fullCups/totalCups*330}px`;
        percentage.innerText=`${fullCups/totalCups*100}%`
    }

    if(fullCups==totalCups){
        remained.style.visibility='hidden';
        remained.style.height=0;
    }else{        
        remained.style.visibility='visible';
        listers.innerText=`${(1-(fullCups/totalCups))*2}L`
    }
}