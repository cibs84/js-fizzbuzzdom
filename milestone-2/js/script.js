// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.
// MILESTONE 2
// Per ogni numero, data una ul nel DOM, aggiungete un elemento html li con il numero o la stringa corretta (seguendo le regole della Milestone 1).

// SELEZIONO L'ELEMENTO ul
const allBoxes = document.querySelector('.all-boxes');

// CICLO FOR PER LA CREAZIONE DI 100 ELEMENTI li DA APPENDERE ALL'ELEMENTO ul.all-boxes
for (let i = 1; i <= 100; i++) {
    // CREO VARIABILE 'contentBox' PER IL MESSAGGIO DA INSERIRE NELL'ELEMENTO li
    let contentBox;

    // SE 'i' è MULTIPLO DI 3 E 5 STAMPO FIZZBUZZ
    if (i % 3 === 0 && i % 5 === 0) {
        contentBox = 'FizzBuzz';
    // SE 'i' è MULTIPLO DI 3 STAMPO FIZZ
    } else if (i % 3 === 0) {
        contentBox = 'Fizz';
    // SE 'i' è MULTIPLO DI 5 STAMPO BUZZ
    } else if (i % 5 === 0) {
        contentBox = 'Buzz';
    // ALTRIMENTI STAMPO IL NUMERO CONTENUTO IN 'i'
    } else {
        contentBox = i;
    }
    
    // CREO UN NUOVO BOX (ELEMENTO li) NELLA VARIABILE 'newBox' CON IL MESSAGGIO DELLA VARIABILE 'contentBox'
    const newBox = `<li class="box">${contentBox}</li>`;

    // INSERISCO NELL'ELEMENTO ul IL NUOVO BOX (ELEMENTO li)
    allBoxes.innerHTML += newBox;
};