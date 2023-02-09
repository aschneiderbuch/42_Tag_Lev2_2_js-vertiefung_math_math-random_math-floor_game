console.log("tes");


/* 
Zufallszahl 1-10

Eingabe per prompt mit Vergleichszahl



*/

setInterval(() => {
// zufallszahl 1-10
let zufallzahl = 0;
zufallzahl = Math.floor((Math.random()*(11-1)+1))
console.log(zufallzahl);


// Eingabe zahl User
let inputUser = 0;
inputUser = Number(prompt(`Bitte gib eine Zahl zwischen 1 und 10 ein \n mal schauen ob die zahl erraten kannst, \n viel Glück`))
console.log(inputUser);


// zahlen vergleich 
let zahlenvergleich = 
zufallzahl == inputUser
? alert(`Du hast gewonnen !!! die Zahl war ${zufallzahl}`)
: alert(`😢 Du hast verloren 👎 !!! die Zahl war ${zufallzahl}`);

}, 2000);
