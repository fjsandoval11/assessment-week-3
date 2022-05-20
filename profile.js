

const alertColor = () => {
    alert(`Check it out yall, my fav color is black, why? cause it's slimming`)
}
const alertPlace = () => {
    alert(`Check it out yall, my fav place is Tacos Locos, why? cause the tacos there are BOMB!`)
}
const alertRitual = () => {
    alert(`Check it out yall, my fav ritual is ordering subs on Wednesdays`)
    
}

const favColor = document.getElementById('color')
const favPlace = document.getElementById('place')
const favRitual = document.getElementById('ritual')

favColor.addEventListener('click', alertColor)
favPlace.addEventListener('click', alertPlace)
favRitual.addEventListener('click', alertRitual)
