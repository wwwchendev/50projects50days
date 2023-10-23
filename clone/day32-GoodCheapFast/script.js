const toggles = document.querySelectorAll('.toggle')
const tainan = document.querySelector('#tainan')
const kaohsiung = document.querySelector('#kaohsiung')
const pingtung = document.querySelector('#pingtung')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    // console.log(theClickedOne) //<input type="checkbox" id="tainan" class="toggle" checked="">

    //當三個選項都勾選時
    if(tainan.checked && kaohsiung.checked && pingtung.checked) {
        
        if(tainan === theClickedOne) {
            pingtung.checked = false
        }

        if(kaohsiung === theClickedOne) {
            tainan.checked = false
        }

        if(pingtung === theClickedOne) {
            kaohsiung.checked = false
        }
    }
}