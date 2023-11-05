/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

var pets = ['dog', 'cat', 'hamster', 'redfish'];
for (i=0; i<pets.length; i++) {
  console.log (pets[i]);

}



/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
  pets = ['dog', 'cat', 'hamster', 'redfish']; {
  pets.sort();
  console.log(pets);
}


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
  pets = ['dog', 'cat', 'hamster', 'redfish']; {
  pets.reverse ();
  console.log(pets)
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
  pets = ['dog', 'cat', 'hamster', 'redfish']; 
var removedElement =pets.shift();
console.log(pets);
///
pets.push("dog");
console.log(pets)


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
cars [0].licensePlate = "JWJOEIV";
cars [1].licensePlate = "SJS73K0";
cars [2].licensePlate = "OEJRJR7";
console.log(cars);



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push(
  {
  brand: 'Audi',
  model: 'A1',
  color: 'purple',
  trims: ['Titanium', 'style', 'GT'],
  
}
);
cars[3].licensePlate="JSJSD8J"
console.log(cars);

var trims = [ ['Titanium', 'st', 'active'],['allure', 'GT'],['life', 'style', 'r-line'],['Titanium', 'style', 'GT']];
trims.forEach(trims => {
  trims.pop();
});
console.log(trims);



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

var trims = [ ['Titanium', 'st', 'active'],['allure', 'GT'],['life', 'style', 'r-line'],['Titanium', 'style', 'GT']];
justTrims.push(trims [0][0], trims [1][0], trims [2][0], trims [3] [0]);
console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  let y = cars [i];
  let x = y.color;
  if (x.substr(0,1) == "b")
  {console.log("Fizz")}
  else
  {console.log("Buzz")}
}
    

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
var i = 0;
while (numericArray[i] !== 66) {
  console.log(numericArray[i]);
  i++;
}

  
  
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
var lettere = [];
for (var i=0; i < charactersArray.length; i++ ) {
  let y = charactersArray[i];
  switch(true) {
    case y === "a":
      lettere.push(1);
      break;
    case y === "b":
      lettere.push(2);
      break;
    case y === "c":
      lettere.push(3);
      break;
    case y === "d":
      lettere.push(4);
      break;
    case y === "e":
      lettere.push(5);
      break;
    case y === "f":
      lettere.push(6);
      break;
    case y === "g":
      lettere.push(7);
      break;
    case y === "h":
      lettere.push(8);
      break;
    case y === "i":
      lettere.push(9);
      break;
    case y === "j":
      lettere.push(10);
      break;
    case y === "k":
      lettere.push(11);
      break;
    case y === "l":
      lettere.push(12);
      break;
    case y === "m":
      lettere.push(13);
      break;
    case y === "n":
      lettere.push(14);
        break; 
    case y === "o":
      lettere.push(15);
        break; 
    case y === "p":
      lettere.push(16);
        break; 
    case y === "q":
      lettere.push(17);
        break;
    case y === "r":
      lettere.push(18);
        break; 
    case y === "s":
      lettere.push(19);
        break; 
    case y === "t":
      lettere.push(20);
        break;
    case y === "u":
      lettere.push(21);
        break; 
    case y === "v":
      lettere.push(22);
        break; 
    case y === "w":
      lettere.push(23);
        break;
    case y === "x":
      lettere.push(24);
        break;
    case y === "y":
      lettere.push(25);
        break;
    case y === "z":
      lettere.push(26);
        break;
    
  }
  }
  console.log(lettere);

