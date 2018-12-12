var cards = document.getElementsByClassName('card');

for (var i = 0; i < cards.length; i++) {
  var button = cards[i].querySelector('.card-button');


  button.addEventListener('click', function (e) {
    e.preventDefault();
    var currentButton = e.target;
    var currentCard = currentButton.parentNode;
    var currentAnswer = currentCard.querySelector('.card-answer');
    // console.log(currentButton.innerHTML);
    // console.log(currentAnswer.innerHTML);
    // console.log(currentCard);

    if (currentButton.innerHTML == 'Show') {
      currentButton.innerHTML = 'Hide';
      currentAnswer.style.display = "block";
    } else if (currentButton.innerHTML == 'Hide') {
      currentButton.innerHTML = 'Show';
      currentAnswer.style.display = "none";
    }
  })
}
