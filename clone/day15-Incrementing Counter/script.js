const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{
    counter.innerText='0';    
    const updateCounter = ()=> {
        //const target = counter.getAttribute('data-target'); //string
        const target = +counter.getAttribute('data-target'); //number
        const c = +counter.innerText;
        // 共享相同增量increment，每次都会以1/200的速度递增。
        // 所以會用相同速度完成動畫
        const increment = target / 200;

        //如果小於目標值就遞歸 
        if(c<target){
            counter.innerText=`${Math.ceil(c+increment)}`
            setTimeout(updateCounter,1);
        }else{
            counter.innerText=target;
        }        
    }
    updateCounter();
})