// Le pont JS -> page. À recopier tel quel dans chaque projet S7 à S9.
const sortie = document.querySelector("#sortie");
function afficher(html) {
  sortie.innerHTML += html;
}
// fizzbuzz function
function fizzBuzz() {
  const fizzMsg = `<p class="fizz">Fizz</p>`;
  const buzzMsg = `<p class="buzz">Buzz</p>`;
  const fizzBuzzMsg = `<p class="fizzbuzz">FizzBuzz</p>`;
  let i = 1;
  while (i <= 100) {
    // Cas spécial : divided by 3 and by 5
    if (i % 3 === 0 && i % 5 === 0) {
      afficher(fizzBuzzMsg);
    } else if (i % 3 === 0) {
      afficher(fizzMsg);
    } else if (i % 5 === 0) {
      afficher(buzzMsg);
    } else {
      // If the number is not divided by 3 or by 5
      console.log(i);
    }
    i++;
  }
}
fizzBuzz();
