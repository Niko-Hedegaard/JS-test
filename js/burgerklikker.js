let num = 0
let burgerklik = document.getElementById('burgerklikker-burger')
let point = document.getElementById('point')
let kurv = document.getElementById('kurv')

/* alle kouponer */
let soda = document.getElementById('sodakoup')
let cocio = document.getElementById('cociokoup')
let pommes = document.getElementById('pomfkoup')
let cct = document.getElementById('chilikoup')
let burger = document.getElementById('burgkoup')
let sandwich = document.getElementById('sandkoup')

let kurvarray = [soda, cocio, pommes, cct, burger, sandwich]

function klikburger() {
    num += 1

    point.innerHTML = "Point: " + num
}

function sodavand() {
        console.log(kurvarray[0])
        kurv.innerHTML += kurvarray[0].innerHTML
        kurvarray[0].classList.add('active')

        num = num - 1
        point.innerHTML = "Point: " + num
}

function burgerkoup() {
    if (num >= 5) {
        kurv.innerHTML += kurvarray[4]

        num = num - 5
        point.innerHTML = "Point: " + num
    }
}