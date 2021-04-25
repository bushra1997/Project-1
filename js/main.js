const cards = document.querySelectorAll(".content");

// function timer() {
//     console.log('play')
//     setInterval(function(){ 
//         document.getElementsByClassName("front").style.transform = "rotateY(180deg)";
//         document.getElementsByClassName("back").style.transform = "none";
//      }, 3000);
// }

let cardFlipped = false;
let firstCard, secondCard;
function flipCard() {
  this.classList.add("flip");
  if (!cardFlipped) {
    cardFlipped = true;
    firstCard = this;
    firstCard.removeEventListener("click", flipCard)
    console.log(cardFlipped, firstCard)
  } else {
    cardFlipped = false;
    secondCard = this;
    secondCard.removeEventListener("click", flipCard)
    console.log(cardFlipped, secondCard)
  }
//   if the cards are match??
const image = document.querySelectorAll('.front>img');

  
}
cards.forEach((card) => card.addEventListener("click", flipCard));
