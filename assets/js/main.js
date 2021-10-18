//Snack 1: l'utente inserisce 2 numeri in successione e visualizzo a schermo il maggiore
/*
STRUMENTI

-parseInt
-prompt
-console.log
-if
-querySelector
*/

/* let firstNumber = parseInt(prompt('Inserisci il primo numero'));
console.log(firstNumber);

let secondNumber = parseInt(prompt('Inserisci il secondo numero'));
console.log(secondNumber);

if (firstNumber > secondNumber) {
    document.querySelector('.snack_1').innerHTML = 'Il numero maggiore è il primo: ' + firstNumber;

} else if (secondNumber > firstNumber) {
    document.querySelector('.snack_1').innerHTML = 'Il numero maggiore è il secondo: ' + secondNumber;
} else {
    document.querySelector('.snack_1').innerHTML = 'I numeri selezionati sono pari';
} */

//Snack 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
/*
STRUMENTI

-length
-prompt
-console.log
-if
-querySelector
*/

/* let firstWord = prompt('Inserisci la prima parola')
console.log(firstWord.length);

let secondWord = prompt('Inserisci la seconda parola')
console.log(secondWord.length);

if (firstWord.length > secondWord.length) {
    document.querySelector('.snack_2short').innerHTML = 'La parole più corta è: ' + secondWord;
    document.querySelector('.snack_2long').innerHTML = 'La parole più lunga è: ' + firstWord;
} else if (firstWord.length < secondWord.length) {
    document.querySelector('.snack_2short').innerHTML = 'La parole più corta è: ' + firstWord;
    document.querySelector('.snack_2long').innerHTML = 'La parole più lunga è: ' + secondWord;
} else {
    document.querySelector('.snack_2').innerHTML = 'La parole hanno la stessa lunghezza';
} */

//Snack 3: Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
/*
STRUMENTI

-parseInt
-prompt
-console.log
-for
-querySelector
*/

//Dichiaro la variabile somma fuori dal ciclo per farci riferimento anche al di fuori del ciclo
let sommaNum = 0;

for (let index = 0; index < 10; index++) {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    sommaNum += userNumber;
}
document.querySelector('.snack_3').innerHTML = 'La somma dei numeri inseriti è: ' + sommaNum;

