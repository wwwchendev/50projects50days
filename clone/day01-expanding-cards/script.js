const panels = document.querySelectorAll('.panel');
// console.log(panels);
panels.forEach((e)=>{
    e.addEventListener('click',function(){
        removeActiveClasses();
        e.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}