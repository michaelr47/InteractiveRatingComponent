const ratingBtns = document.querySelectorAll('.rating');

const numberRatingSpan = document.getElementById('ratingNum');
const submitBtn = document.getElementById('submitButton');

let currentClickedButton = null;

ratingBtns.forEach(function(button) {
  button.addEventListener("click", function() {
    let currentBtn = this;
    ratingBtns.forEach(function(btn) {
      btn.style.backgroundColor = "hsl(216, 12%, 8%)";
      btn.style.color = "hsl(216, 12%, 54%)";
    });
    currentBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
    currentBtn.style.color = "white";
   numberRatingSpan.innerText = currentBtn.innerText;
  });
});


let click = false;
ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (submitBtn.clicked === true) {
          return;
        } 
        else {
            submitBtn.addEventListener('click', () => {
                click = true;
                document.getElementsByClassName('main-container')[0].style.display = 'none';
                document.getElementsByClassName('thankYouContainer')[0].classList.remove('hidden');
                
            });
        }     
    }) 
})




