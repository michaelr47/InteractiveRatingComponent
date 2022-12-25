const ratingBtns = document.getElementsByClassName('rating');
const numberRating = document.getElementById('ratingNum');
const submitBtn = document.getElementById('submitButton');


    for (const button of ratingBtns) {
        button.addEventListener('click', () => {
            numberRating.innerText = button.innerText;

            document.getElementsByClassName('main-container')[0].style.display = 'none';
            document.getElementsByClassName('thankYouContainer')[0].style.display = 'block';
            let thankStyle = document.getElementsByClassName('thankYouContainer')[0].style;

            thankStyle.display = 'flex';
            thankStyle.flexDirection = 'column'; 
            thankStyle.alignItems = 'center'; 
            thankStyle.justifyContent = 'space-around';
            thankStyle.backgroundColor = 'var(--darkBlue)';
            thankStyle.width = 29 + '%';
            thankStyle.height = 50 + '%';
            thankStyle.borderRadius = 35 + 'px';
            thankStyle.padding = 25 + 'px ' + 20 + 'px ' + 25 + 'px ' + 25 + 'px'; 
            
        });
    };
