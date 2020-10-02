// // находим кнопку внутри карточки
// const btn = document.querySelector('.products__button')

// // навешиваем на нкнопку обработчик событий
// btn.addEventListener('click', function(event) {

// 	//находим ближайшую обертку с нужным классом и добавляем ей класс-мод --active
// 	const productItem = event.target.closest('.products__item')
// 	productItem.classList.toggle('products__item--active')
// })


// вешаем обр событий на окно
window.addEventListener('click', function(event) {
	
	const btn = event.target.hasAttribute('data-action')
	const wrapper = event.target.closest('.products__item')
	wrapper.classList.toggle('products__item--active')
	
	

})