// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.
// MILESTONE 2
// Per ogni numero, data una ul nel DOM, aggiungete un elemento html li con il numero o la stringa corretta (seguendo le regole della Milestone 1).

const allBoxes = document.querySelector('.all-boxes');

// CICLO FOR
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        allBoxes.innerHTML += `<li class="box">FizzBuzz</li>`;
    } else if (i % 3 === 0) {
        allBoxes.innerHTML += `<li class="box">Fizz</li>`;
    } else if (i % 5 === 0) {
        allBoxes.innerHTML += `<li class="box">Buzz</li>`;
    } else {
        allBoxes.innerHTML += `<li class="box">${i}</li>`;
    }
};