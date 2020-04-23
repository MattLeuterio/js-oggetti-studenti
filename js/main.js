 /**
  * 
  * Esercizio di oggi: Oggetti
  * Descrizione:
  * Creare un oggetto che descriva uno studente
  * lo studente avrà  le seguenti proprietà: nome, cognome e età.
  * Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
  * 
  */

// Creo oggetto
var student = {
    name: 'Regina',
    surname: 'Elisabetta',
    age: '94'
};

// Stampo oggetto

console.log('----STUDENT----');


for ( var key in student) {
    console.log(key + ': ' + student[key]);    
};

console.log('-----------------');
 