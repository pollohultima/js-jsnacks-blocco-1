//Snack 1: l'utente inserisce 2 numeri in successione e visualizzo a schermo il maggiore
/*
STRUMENTI

-parseInt
-prompt
-console.log
-if
-querySelector
*/

let firstNumber = parseInt(prompt('Inserisci il primo numero'));
console.log(firstNumber);

let secondNumber = parseInt(prompt('Inserisci il secondo numero'));
console.log(secondNumber);

if (firstNumber > secondNumber) {
    document.querySelector('.snack_1').innerHTML = 'Il numero maggiore è il primo: ' + firstNumber;

} else if (secondNumber > firstNumber) {
    document.querySelector('.snack_1').innerHTML = 'Il numero maggiore è il secondo: ' + secondNumber;
} else {
    document.querySelector('.snack_1').innerHTML = 'I numeri selezionati sono pari';
}



//Snack 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
/*
STRUMENTI

-length
-prompt
-console.log
-if
-querySelector
*/

let firstWord = prompt('Inserisci la prima parola')
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
}



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



/* Snack 4:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const userName = prompt('Inserisci la tuo nome');
const guestList = ['Matteo', 'Gennaro', 'Enrico', 'Astrid', 'Joshua'];


if (guestList.indexOf(userName) >= 0) {
    document.querySelector('.snack_4').innerHTML = 'Ingresso consentito, buona serata!';

} else {
    document.querySelector('.snack_4').innerHTML = 'Spiacente ma non sei nella lista, alza i tacchi';
}



/* Snack 5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. */
let array = [];
for (let index = 0; index < 6; index++) {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    if (userNumber % 2 != 0) {
        array.push(userNumber)
    } else {

    }
}
document.querySelector('.snack_5').innerHTML = 'Nel tuo array ci sono i numeri dispari: ' + array;

/*
Snack 6: Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
 */
const userElevated = []
const userNum = parseInt(prompt('Inserisci un numero'))

for (let index = 1; index < userNum; index++) {
    let elevated = Math.pow(index, 3)
    userElevated.push(elevated)
}
document.querySelector('.snack_6').innerHTML = 'I cubi dei numeri fra 0 e ' + userNum + ' sono: ' + userElevated;




/*
Snack 7: Stampa le potenze di 2 fino a 1000.
*/
let extract = []
for (let index = 1; index < 10; index++) {
    let powa = Math.pow(2, index);
    extract.push(powa);

}
document.querySelector('.snack_7').innerHTML = 'La somma delle potenze di 2 fino a 1000: ' + extract;



/* Snack 8: Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
 */
const userNumbers = prompt('Inserisci un numero di 4 cifre');

let somDigit = 0
for (let index = 0; index < 4; index++) {
    const digit = parseInt(userNumbers.charAt(index));
    somDigit += digit;
}
document.querySelector('.snack_8').innerHTML = 'La somma dei numeri digitati è: ' + somDigit;



/* Snack 9: Calcola la somma e la media dei primi 10 numeri.
 */
const somma = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
document.querySelector('.snack_9').innerHTML = 'La somma dei primi 10 numeri è ' + somma;
const media = somma / 10
document.querySelector('.snack_9').innerHTML = 'La somma dei primi 10 numeri è ' + media;
