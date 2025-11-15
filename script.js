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


//NOTES PAD

function render() {
    const stored = localStorage.getItem('note');
    if (stored) {
        noteContainer.innerHTML = `
      <h1>TODAY'S NOTE:</h1>
      <h3>${stored}</h3>
      <button class="dlt">Delete Note</button>
    `
        const delBtn = noteContainer.querySelector('.dlt')
        delBtn.addEventListener('click', () => {
            localStorage.removeItem('note')
            render()
        })
    } else {
        noteContainer.innerHTML = `
      <input id="noteadders" type="text" placeholder="WRITE A NOTE">
      <button class="notebtn">ADD NOTE</button>
    `
        const input = document.getElementById('noteadders')
        const addBtn = noteContainer.querySelector('.notebtn')
console.log(input,addBtn);
    }
}

render()
