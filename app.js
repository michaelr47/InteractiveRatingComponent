const ratingBtns = document.getElementsByClassName('rating');

for (const button of ratingBtns) {
    button.addEventListener('click', () => {
        document.getElementsByClassName('main-container')[0].style.display = 'none';
        document.getElementsByClassName('thankYouContainer')[0].style.display = 'inline';
        let thankStyle = document.getElementsByClassName('thankYouContainer')[0].style;

        thankStyle.display = 'flex';
        thankStyle.display.flexDirection = 'column'; 
        thankStyle.display.justifyContent = 'space-around';
        thankStyle.display.backgroundColor = 'white';
        thankStyle.display.width = 29 + '%';
        thankStyle.display.height = 55 + '%';
        thankStyle.display.borderRadius = 35 + 'px';
        thankStyle.display.padding = 25 + 'px ' + 20 + 'px ' + 25 + 'px ' + 25 + 'px'; 
        
    });

};

