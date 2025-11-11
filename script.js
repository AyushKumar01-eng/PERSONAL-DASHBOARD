//THEME CHANGER
const mode = document.querySelector('#checkbox')

mode.addEventListener('change', () => {
    if (mode.checked) {
        document.body.classList.add('darkmode')
    }
    else {
        document.body.classList.remove('darkmode')
    }
})
