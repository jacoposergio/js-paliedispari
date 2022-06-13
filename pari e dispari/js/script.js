// !    Pari e Dispari
// !    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// !    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// !    Sommiamo i due numeri
// !    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// !    Dichiariamo chi ha vinto.

// ! funzione per calcolare il numero casuale del computer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


 // !  funzione per sommare il numero dell'utente a quello del pc
function sommaDueNumeri (num1, num2){
    const sum = parseInt( num1 + num2);
    console.log("somma",sum);
    return sum;
}


// chiediamo all'utente se sceglie pari o dispari
const userChoice = prompt('pari o dispari?');
const userNumber =  parseInt(prompt('Dimmi un numero da 1 a 5'));

console.log("",userChoice);
console.log("",userNumber);


let somma = sommaDueNumeri (userNumber,getRndInteger(1,5))
console.log("",somma);


// ! funzione per verificare se il numero è pari o dispari
function isEvenOrOdd(somma) {
    let evenOrOdd;
    // se il number % 2 da resto 0 -> evenOrOdd = 'even'
    // altrimenti evenOrOdd = 'odd'
    if(somma % 2 === 0) {
        evenOrOdd = 'pari'
    } else {
        evenOrOdd = 'dispari';
    }

    return evenOrOdd;
}


if(userChoice === evenOrOdd) {
    alert('Hai vinto');
} else {
    alert('Hai perso');
}
