const flipCard = document.querySelector('.content');
flipCard.addEventListener('click', function(){
    console.log('flip');
    flipCard.classList.toggle('flip');
});