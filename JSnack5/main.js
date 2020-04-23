// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente


// Chiedere all'utente di digitare un numero N qualsiasi
var numero_utente = parseInt(prompt('Digita un numero qualsiasi'));
// console.log(numero_utente);

// Inserire in un array tanti numeri quanto è la N digitata dall'utente
var numeri_array = [];

for (var i = numero_utente; i > 0; i--) {
    // numeri_array.push(i + 1);
    var numero = i;
    var cubo = numero **3;
    console.log(cubo);
}







// console.log(numeri_array);
//
// // Calcolare il cubo per ogni numero dentro l'array
// for (var i = 0; i < numeri_array.length; i++) {
//     var cubo = numeri_array[i] ** 3;
//     console.log(cubo);
// }






// Stampare i cubi dei numeri dentro l'array
