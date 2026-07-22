// table de multiplication
function tableMultiplication(num) {
  // Initialition du multiplicateur
  let i = 1;
  //   la valeur de la derniere multiplication
  let answer;
  while (i <= 10) {
    // Multiplication du nombre fois l'indice
    answer = num * i;
    // Affichage de chaque ligne de table
    console.log(`${num} fois ${i} font : ${answer}`);
    // Iteration pour passer a l'indice suivant
    i++;
  }
  return answer;
}
// Test de la fonction avec le nombre 5
// console.log(tableMultiplication(5));

// Functionc to generate the table 1 to 9
function multiTable() {
  // init of var answer
  let answer = 0;

  //  loop to define table from 1 to 9
  for (let i = 1; i < 10; i++) {
    console.log(`Debut de la table de multiplication de ${i}`);
    for (
      let numberToMutltiply = 1;
      numberToMutltiply < 11;
      numberToMutltiply++
    ) {
      answer = i * numberToMutltiply;
      console.log(`${i} * ${numberToMutltiply} = ${answer}`);
    }
    console.log(`fin de la table de multiplication de ${i}\n`);
  }
}

multiTable();
