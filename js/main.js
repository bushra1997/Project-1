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
let score = 0;
function flipCard() {
  this.classList.add("flip");
  if (!cardFlipped) {
    cardFlipped = true;
    firstCard = this;
  } else {
    cardFlipped = false;
    secondCard = this;
  }

  if(firstCard.dataset.card === secondCard.dataset.card){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    score = score +10;
    document.getElementById("score").innerHTML = score;
    firstCard = null;
    secondCard = null;
  }else{
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      firstCard = null;
      secondCard = null;
    }, 1500)
  }
// error in shuffling the cards
  if(score == 50){
    cards.forEach(card =>{
      let numberOfOrder = Math.floor(Math.random() * 10);
      card.style.order = numberOfOrder;
    })
  }
}
cards.forEach((card) => card.addEventListener("click", flipCard));
