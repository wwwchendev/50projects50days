// const faqs = document.querySelectorAll('.faq');
const toggles = document.querySelectorAll('.faq-toggle');


// toggles.forEach((toggle,idx)=>{
//     toggle.addEventListener('click',()=>{
//         // console.log(idx);
//         faqs[idx].classList.toggle('active');
//     })
// })

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})