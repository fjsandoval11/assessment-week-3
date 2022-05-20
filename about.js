console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Ya form got submited brotha');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);



const pictureHover = () => {
	alert('Chu crazy brah chu crazy')
}

const duckster = document.querySelector('.ducky')

duckster.addEventListener('mouseover', pictureHover)