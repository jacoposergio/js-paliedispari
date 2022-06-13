// !    Pari e Dispari
// !    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// !    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// !    Sommiamo i due numeri
// !    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// !    Dichiariamo chi ha vinto.

function computerNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber) + 1;
}

function sommaDueNumeri (num1, num2){
    const sum = num1 + num2;
    console.log("somma",sum);
    return sum;
}


// chiediamo all'utente se sceglie pari o dispari
const userChoice = prompt('pari o dispari?');
const userNumber =  parseInt(prompt('Dimmi un numero da 1 a 5'));

console.log("",userChoice);
console.log("",userNumber);


let somma = sommaDueNumeri (userNumber, computerNumber(5))
console.log("",somma);

computerNumber();