const userName = prompt ("Scrivi il tuo nome");
const userSurname = prompt ("Scrivi il tuo cognome");
const userAge = prompt ("Scrivi la tua eta`");
const userkm = prompt ("Scrivi i kilometri che dovrai percorrere");

let priceForKm = 0.21
let ticketPrice = priceForKm * userkm 


if ((userAge > 18) || (userAge < 65)) {

    let ticketPrice = priceForKm * userkm 
    
} else if (userAge < 18) {

    let ticketPrice = ticketPrice - ticketPrice*20/100
}



























document.getElementById("name").innerHTML = userName
document.getElementById("surname").innerHTML = userSurname
document.getElementById("age").innerHTML = userAge
document.getElementById("km-t").innerHTML = userkm
document.getElementById("price").innerHTML = ticketPrice


