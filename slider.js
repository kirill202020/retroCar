const slider = document.querySelector('.slider')
const dotsContainer = document.querySelector('.slider-dots')
const cards = document.querySelectorAll('.card')
const cardWidth = document.querySelector('.card').offsetWidth
let index = 0

function updateDots() {
	dotsContainer.innerHTML = ''
	cards.forEach((_, i) => {
		const dot = document.createElement('div')
		dot.classList.add('dot')
		if (i === index) dot.classList.add('active')
		dot.addEventListener('click', () => goToSlide(i))
		dotsContainer.appendChild(dot)
	})
}

function goToSlide(i) {
	index = i
	slider.style.transform = `translateX(${-index * cardWidth}px)`
	updateDots()
}

updateDots()
