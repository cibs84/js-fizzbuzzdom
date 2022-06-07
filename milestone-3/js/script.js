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

// SELEZIONO L'ELEMENTO UL
const allBoxes = document.querySelector('.all-boxes');

// CICLO FOR PER CREAZIONE ELEMENTI LI
for (let i = 1; i <= 100; i++) {
    // SE i è MULTIPLO DI 3 E 5
    if (i % 3 === 0 && i % 5 === 0) {
        let contentBox = 'FizzBuzz';
        let classBox = 'multiple-3-5';
        allBoxes.innerHTML += `<li class="box ${classBox}">${contentBox}</li>`;
    // SE i è MULTIPLO DI 3
    } else if (i % 3 === 0) {
        let contentBox = 'Fizz';
        let classBox = 'multiple-3';
        allBoxes.innerHTML += `<li class="box ${classBox}">${contentBox}</li>`;
    // SE i è MULTIPLO DI 5
    } else if (i % 5 === 0) {
        let contentBox = 'Buzz';
        let classBox = 'multiple-5';
        allBoxes.innerHTML += `<li class="box ${classBox}">${contentBox}</li>`;
    // ALTRIMENTI
    } else {
        allBoxes.innerHTML += `<li class="box">${i}</li>`;
    }
};