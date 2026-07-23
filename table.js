const sortieTab = document.querySelector("#tab");
function afficher(html) {
  sortieTab.innerHTML += html;
}
const multiTab = document.querySelector("#multitab");
function afficherMulti(html) {
  multiTab.innerHTML += html;
}

// table de multiplication
function tableMultiplication(num) {
  // Initialition du multiplicateur
  let i = 1;
  //   la valeur de la derniere multiplication
  let answer = 0;
  while (i <= 10) {
    // Multiplication du nombre fois l'indice
    answer = num * i;
    // Affichage de chaque ligne de table
    // console.log(`${num} fois ${i} font : ${answer}`);
    // variable output table
    const showTabOfNumber = `<p class='tab-num'>${num} fois ${i} = <strong>${answer}</strong></p>`;
    afficher(showTabOfNumber);
    // Iteration pour passer a l'indice suivant
    i++;
  }
  return answer;
}
// Test de la fonction avec le nombre 5
tableMultiplication(5);

// CORRECTION DE VOTRE FONCTION MULTITABLE
function multiTable() {
  let answer = 0;

  // Boucle principale de 1 à 9
  for (let i = 1; i < 10; i++) {
    // 1. On commence à construire la carte pour la table en cours
    let carteHTML = `<div class="carte-table">`;
    carteHTML += `<h4>Table de ${i}</h4>`;

    // Boucle interne de 1 à 10 pour générer les lignes de calcul
    for (let numberToMultiply = 1; numberToMultiply < 11; numberToMultiply++) {
      answer = i * numberToMultiply;
      // On ajoute chaque ligne de calcul à l'intérieur de la carte
      carteHTML += `<p>${i} x ${numberToMultiply} = <strong>${answer}</strong></p>`;
    }

    // 2. On ferme la balise de la carte
    carteHTML += `</div>`;

    // 3. On injecte la carte complète dans le conteneur HTML
    afficherMulti(carteHTML);
  }
}

// Exécution de la fonction
multiTable();
