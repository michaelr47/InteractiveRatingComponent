const ratingBtns = document.getElementsByClassName('rating');
const numberRatingSpan = document.getElementById('ratingNum');
const submitBtn = document.getElementById('submitButton');


for (const button of ratingBtns) {
    
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#7c8798';
        button.style.color = 'white';
        numberRatingSpan.innerText = button.innerText;
        
    });
   
};


submitBtn.addEventListener('click', () => {

    document.getElementsByClassName('main-container')[0].style.display = 'none';
    document.getElementsByClassName('thankYouContainer')[0].classList.remove('hidden');

})



