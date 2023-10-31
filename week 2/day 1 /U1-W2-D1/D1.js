/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
/I principali datatype in JavaScript prevedono cinque tipi di dati primitivi e un tipo di dato complesso:gli oggetti.
Quest ultimi,comprendono qualsiasi altro elemento(array,funzioni...)nel quale noi possiamo andare ad inserire delle proprietà
(attributo/valore) e/o metodi (funzioni).
I tipi di dati primitivi si suddivono invece in:
-tipo di dato stringa:viene delimitato sempre da apici singoli o doppi, esempio:"mi chiamo Martin"-'Mi chiamo Martin';
-tipo di dato numerico:non sono presenti apici,è formato da numeri(interi,decimali,negativi),esempio:var interoPositivo = 345,
var numeroDecimale = 0.234;
-tipo di dato booleano:ha solo due valori possibili ->true|false;
-tipo di dato null: prevede un solo valore possibile->null esempio var x = null;
-tipo di dato undefined: rappresenta un valore che non esiste, non ha nessun valore. */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Martin';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12;
let b = 20;
console.log((a += b)) //addizione// risultato atteso -->32


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Sesenna"; 
const PI = 3.14; 
// PI = 3; ->non posso aggiornarenil valore di una costante
// const PI= 3 -> non si posso ridichiararla (si comporta come let)


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let subtraction = 4 - x;
console.log(subtraction);        // sottrazione // risultato atteso -> 8


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"

console.log ('name1 e name2 sono uguali:',name1 === name2);
console.log ('name1 e name2 in lowercase sono uguali:', name1.toLowerCase() === name2.ToLowerCase())


