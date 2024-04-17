const userName = prompt ("Scrivi il tuo nome");
const userSurname = prompt ("Scrivi il tuo cognome");
const userAge = prompt ("Scrivi la tua eta`");
const userkm = prompt ("Scrivi i kilometri che dovrai percorrere");

let priceForKm = 0.21
//let ticketPrice = "" 
let ticketPrice = priceForKm * userkm
let juniorDiscount = ticketPrice-ticketPrice*20/100
let seniorDiscount = ticketPrice-ticketPrice*40/100



if ((userAge > 18) || (userAge < 65)) {

    let ticketPrice = priceForKm * userkm 
    
} else if (userAge < 18) {

    let ticketPrice = juniorDiscount
} else if (userAge > 65) {

    let ticketPrice = seniorDiscount
}



























document.getElementById("name").innerHTML = userName
document.getElementById("surname").innerHTML = userSurname
document.getElementById("age").innerHTML = userAge
document.getElementById("km-t").innerHTML = userkm
document.getElementById("price").innerHTML = ticketPrice


