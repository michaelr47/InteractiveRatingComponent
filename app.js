const ratingBtns = document.querySelectorAll('.rating');
const numberRatingSpan = document.getElementById('ratingNum');
const submitBtn = document.getElementById('submitButton');


ratingBtns.forEach(btn => {
    
    btn.addEventListener('click', () => {

        btn.style.backgroundColor = 'hsl(25, 97%, 53%)';
        btn.style.color = 'white';
        numberRatingSpan.innerText = btn.innerText;
    })
})
 
   



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




