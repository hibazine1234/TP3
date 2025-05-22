
let nombreADeviner = Math.floor(Math.random() * 10) + 1;

let tentative;
let cmpt = 0;

do {
  tentative = parseInt(prompt("Devinez un nombre entre 1 et 10 :"));
  cmpt++;

  if (tentative < nombreADeviner) {
    alert("Trop petit !");
  } else if (tentative > nombreADeviner) {
    alert("Trop grand !");
  } else if (tentative === nombreADeviner) {
    alert("Bravo ! Vous avez trouvé le nombre en " + cmpt + " tentative(s).");
  } else {
    alert("Veuillez entrer un nombre valide !");
  }

} while (tentative !== nombreADeviner);