
let QUESTIONS = [
  ["Quelle est la capitale de la France ?", "Paris"],
  ["Combien font 2 + 2 ?", "4"],
  ["Quelle est la couleur du ciel en journée ?", "Bleu"],
  ["Quelle langue parle-t-on au Maroc ?", "Arabe"],
  ["Combien de jours y a-t-il dans une semaine ?", "7"]
];


function lancerQuiz() {
  let score = 0; 
  for (let i = 0; i < QUESTIONS.length; i++) {
    let question = QUESTIONS[i][0];
    let bonneReponse = QUESTIONS[i][1];

    let reponseUtilisateur = prompt(question);
    if (reponseUtilisateur !== null && reponseUtilisateur.trim().toLowerCase() === bonneReponse.toLowerCase()) {
      alert("Réponse juste !");
      score++;
    } else {
      alert("Réponse fausse !");
    }
  }
  alert("Vous avez répondu correctement à " + score + " question(s) sur " + QUESTIONS.length + ".");
}