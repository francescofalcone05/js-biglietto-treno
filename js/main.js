const userName = prompt ("Scrivi il tuo nome");
const userSurname = prompt ("Scrivi il tuo cognome");
const userAge = prompt ("Scrivi la tua eta`");
const userkm = prompt ("Scrivi i kilometri che dovrai percorrere");

//convertire stringa in numero
//userAge = Number(userAge)
//userkm = Number(userkm)


const priceForKm = 0.21
//let ticketPrice = "" 
let ticketPrice = priceForKm * userkm
let juniorDiscount = ticketPrice-ticketPrice*20/100
//let juniorDiscount = ticketPrice * 0.2;
let seniorDiscount = ticketPrice-ticketPrice*40/100
//let seniorDiscount = ticketPrice * 0.4;




if ((userAge > 17) && (userAge < 66)) {

    ticketPrice = priceForKm * userkm 
    console.log("prezzo intero")
} else if (userAge < 18) {

     ticketPrice = juniorDiscount
     console.log("prezzo junior")

} else if (userAge > 65) {

     ticketPrice = seniorDiscount
    console.log("prezzo senior")

}


//funziona solo in console
console.log(ticketPrice.toFixed(2))




document.getElementById("name").innerHTML = userName
document.getElementById("surname").innerHTML = userSurname
document.getElementById("age").innerHTML = userAge
document.getElementById("km-t").innerHTML = userkm
document.getElementById("price").innerHTML = ticketPrice


