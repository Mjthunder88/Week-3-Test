console.log("hello world");
let duck = document.querySelector('img')


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully');
}

function complimentUser () {
	alert('Looking like a 5 course meal')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

duck.addEventListener('mouseover', complimentUser)