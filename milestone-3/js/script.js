// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.
// MILESTONE 2
// Per ogni numero, data una ul nel DOM, aggiungete un elemento html li con il numero o la stringa corretta (seguendo le regole della Milestone 1).
// MILESTONE 3
// Per ogni numero, dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (seguendo le regole della Milestone 1).
// Per questa Milestone avete lo screenshot allegato al messaggio.

// SELEZIONO L'ELEMENTO ul
const allBoxes = document.querySelector('.all-boxes');

// CICLO FOR PER LA CREAZIONE DI 100 ELEMENTI li DA APPENDERE ALL'ELEMENTO ul.all-boxes
for (let i = 1; i <= 100; i++) {
    // CREO VARIABILI 'contentBox' PER IL MESSAGGIO DA INSERIRE NELL'ELEMENTO li E 'classBox' PER LE CLASSI DA ATTRIBUIRE AGLI ELEMENTI li NELLE SEGUENTI CONDIZIONI
    let contentBox;
    let classBox;

    // SE 'i' è MULTIPLO DI 3 E 5 STAMPO FIZZBUZZ
    if (i % 3 === 0 && i % 5 === 0) {
        contentBox = 'FizzBuzz';
        classBox = 'multiple-3-5';
    // SE 'i' è MULTIPLO DI 3 STAMPO FIZZ
    } else if (i % 3 === 0) {
        contentBox = 'Fizz';
        classBox = 'multiple-3';
    // SE 'i' è MULTIPLO DI 5 STAMPO BUZZ
    } else if (i % 5 === 0) {
        contentBox = 'Buzz';
        classBox = 'multiple-5';
        // ALTRIMENTI STAMPO IL NUMERO CONTENUTO IN 'i'
    } else {
        contentBox = i;
        classBox = '';
    }

    // CREO UN NUOVO BOX (ELEMENTO li) NELLA VARIABILE 'newBox' CON IL MESSAGGIO DELLA VARIABILE 'contentBox' E LA CLASSE CONTENUTA NELLA VARIABILE 'classBox'
    const newBox = `<li class="box ${classBox}">${contentBox}</li>`
    
    // INSERISCO NELL'ELEMENTO ul IL NUOVO BOX (ELEMENTO li)
    allBoxes.innerHTML += newBox;
};