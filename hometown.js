let randomBtn = document.getElementById('random-btn')


function randomFoodSelector () {
    let newArr = ['Subway', 'Mi Lindo Guadalajar', 'Fizz']
     let random = Math.floor(Math.random() * newArr.length)
    alert(newArr[random])
}


randomBtn.addEventListener('click',randomFoodSelector)