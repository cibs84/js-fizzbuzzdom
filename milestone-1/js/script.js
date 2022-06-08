// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.

// CICLO FOR PER SCORRERE I NUMERI DA 1 A 100 IN CONSOLE
for (let i = 1; i <= 100; i++) {
    // CREO VARIABILE 'contentBox' PER IL MESSAGGIO DA VISUALIZZARE IN CONSOLE
    let contentBox;

    // SE 'i' E' MULTIPLO DI 3 E 5 STAMPO FIZZBUZZ
    if (i % 3 === 0 && i % 5 === 0) {
        contentBox = "FizzBuzz";
    // SE 'i' E' MULTIPLO DI 3 STAMPO FIZZ
    } else if (i % 3 === 0) {
        contentBox = "Fizz";
    // SE 'i' E' MULTIPLO DI 5 STAMPO BUZZ
    } else if (i % 5 === 0) {
        contentBox = "Buzz";
    // ALTRIMENTI STAMPO IL NUMERO CONTENUTO NELLA VARIABILE 'i'
    } else {
        contentBox = i;
    }
    
    // STAMPO IN CONSOLE IL MESSAGGIO CONTENUTO NELLA VARIABILE 'contentBox'
    console.log(contentBox);
};
