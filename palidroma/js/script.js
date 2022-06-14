// TODO  Chiedere all’utente di inserire una parola
// TODO  Creare una funzione per capire se la parola inserita è palindroma

    // chiedo una parola all'utente
const userChoice = prompt('dimmi una parola');


isPalindromeuserChoice(userChoice);


function isPalindromeuserChoice(originalWord){

    


    // const useruserChoice = prompt('dimmi una parola');
    // creo un array vuoto 


    // const useruserChoiceArray = [];
    // const finaluserChoiceArray = [];

    // chiedo una parola all'utente
    // pusho la parola dell'utente nell 'array 
    // dividendola in singole lettere con la funzione split

    // useruserChoiceArray.push(useruserChoice);
    // console.log("useruserChoicearray",useruserChoiceArray); 

    // uso il ciclo for per capovolgere l'array
    // let elementFound = false;

    let BackwardsuserChoice = "";
    for (let i = originalWord.length - 1; i >= 0; i--) {
        BackwardsuserChoice += originalWord[i];
        console.log("Parola al contrario",BackwardsuserChoice);
    }
        // finaluserChoiceArray.push(BackwardsuserChoice);
        // console.log("array final",finaluserChoiceArray);

        let isPalindrome;

        if(originalWord === BackwardsuserChoice) {
            isPalindrome = true;
        }else{
            isPalindrome = false;
        }

        // }console.log("",elementFound);
    }




// function isPalindrome(UseruserChoice) {
//     let backwarduserChoice = "";
//     for (let i = UseruserChoice.length - 1; i >= 0; i--) {
//         backwarduserChoice += UseruserChoice[i];
//     }
//     console.log("useruserChoice",UseruserChoice);
//     return UseruserChoice;
// }

// isPalindrome('hello');
// console.log("is palindrome func",isPalindrome);



// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// reverseString('icao');
// console.log("",reverseString);

