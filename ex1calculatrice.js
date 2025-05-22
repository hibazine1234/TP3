
let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
let operation = prompt("Entrez l'opération (+, -, *, /) :");

let resultat;

if (isNaN(nombre1) || isNaN(nombre2)) {
  resultat = "Veuillez entrer deux nombres valides.";
} else if (operation === "+") {
  resultat = nombre1 + nombre2;
} else if (operation === "-") {
  resultat = nombre1 - nombre2;
} else if (operation === "*") {
  resultat = nombre1 * nombre2;
} else if (operation === "/") {
  if (nombre2 !== 0) {
    resultat = nombre1 / nombre2;
  } else {
    resultat = "Division par zéro impossible.";
  }
} else {
  resultat = "Opération non reconnue.";
}

console.log("Le résultat est : " + resultat);
