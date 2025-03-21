const btnLetter = document.querySelector('.online-letter'),
	modalWin = document.querySelector('.modal'),
	burgerInput = document.querySelector('#menuCheckbox')

function openModal() {
	modalWin.style.display = 'flex'
	modalWin.innerHTML = `
    <div class="modal_header">
    <h2>ONLINE APLIKACE</h2>
    <img  src="img/close.png" class="btn-close">
    </div>
    <form action="" method="POST">
    <div class="inputs">
    <input type="text" placeholder="Jméno" />
    <input type="text" placeholder="Telefon" />
    <input type="text" placeholder="E - mail" />
    </div>
    <textarea
    class="modal-area"
    cols="75"
    rows="5"
    id=""
    placeholder="Komentář k objednávce"
    ></textarea>
    </form>
    <a  onclick="closeModal()" class="btn thema-btn modal-btn" href="#">odeslat</a>
    `
	burgerInput.checked = false
}
btnLetter.addEventListener('click', () => {
	modalWin.style.display = 'flex'
	modalWin.innerHTML = `
    <div class="modal_header">
    <h2>ONLINE APLIKACE</h2>
    <img  src="img/close.png" class="btn-close">
    </div>
    <form action="">
    <div class="inputs">
    <input type="text" placeholder="Jméno" />
    <input type="text" placeholder="Telefon" />
    <input type="text" placeholder="E - mail" />
    </div>
    <textarea
    class="modal-area"
    cols="75"
    rows="5"
    id=""
    placeholder="Komentář k objednávce"
    ></textarea>
    </form>
        <a  onclick="closeModal()" class="btn thema-btn modal-btn" href="#">odeslat</a>

    `
	burgerInput.checked = false
})

function closeModal() {
	modalWin.style.display = 'none'
}

modalWin.addEventListener('click', (event) => {
	if (event.target.classList.contains('btn-close')) {
		closeModal()
	}
})
