const carName = document.querySelector('.choose-name'),
	carImg = document.querySelector('.choose-img'),
	carSelect = document.querySelector('.choose-select')
function change() {
	let carSelectVal = document.querySelector('.choose-select').value
	console.log(carSelectVal)

	console.log(500)

	switch (carSelectVal) {
		case 'volkswagenT1':
			console.log('aaa')
			carImg.src = 'img/volkswagen-1.png'
			carName.textContent = 'Volkswagen Type 1'
			break

		case 'volkswagenT2':
			console.log('bbb')

			carImg.src = 'img/volkswagen-2.png'
			carName.textContent = 'Volkswagen Type 2'
			break
		case 'porsche':
			console.log('ccc')

			carImg.src = 'img/porsche-356.png'
			carName.textContent = 'Porsche-356'

			break

		default:
			break
	}
}
