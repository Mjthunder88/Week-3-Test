let favColorBtn = document.getElementById('color')
let placeBtn = document.getElementById('place')
let ritualBtn = document.getElementById('ritual')

function favColorAlert () {
    alert('Red')
}
function favPlaceAlert () {
    alert('Florida')
}
function favRitualAlert () {
    alert('Canyon drives')
}





favColorBtn.addEventListener('click', favColorAlert)
placeBtn.addEventListener('click', favPlaceAlert)
ritualBtn.addEventListener('click', favRitualAlert)