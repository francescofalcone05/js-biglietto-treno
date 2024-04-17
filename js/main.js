const userName = prompt ("Scrivi il tuo nome");
const userSurname = prompt ("Scrivi il tuo cognome");
let userAge = prompt ("Scrivi la tua eta`");
let userkm = prompt ("Scrivi i kilometri che dovrai percorrere");

//userAge = Number(userAge)
//userkm = Number(userkm)


let priceForKm = 0.21
//let ticketPrice = "" 
let ticketPrice = priceForKm * userkm
let juniorDiscount = ticketPrice-ticketPrice*20/100
let seniorDiscount = ticketPrice-ticketPrice*40/100



if ((userAge > 18) && (userAge < 65)) {

    ticketPrice = priceForKm * userkm 
    console.log("prezzo intero")
} else if (userAge < 18) {

     ticketPrice = juniorDiscount
     console.log("prezzo junior")

} else if (userAge > 65) {

     ticketPrice = seniorDiscount
    console.log("prezzo senior")

}


/*let num = 4.6;
let numeroArrotondato = Math.round(num);
console.log(numeroArrotondato);*/

























document.getElementById("name").innerHTML = userName
document.getElementById("surname").innerHTML = userSurname
document.getElementById("age").innerHTML = userAge
document.getElementById("km-t").innerHTML = userkm
document.getElementById("price").innerHTML = ticketPrice


