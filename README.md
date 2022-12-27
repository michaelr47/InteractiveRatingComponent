# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)


### The challenge
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/InteractiveRatingComponent%20SS.png);
![](./images/IRC-hover%26activeState.png);
### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript 


### What I learned

never used root before so this is my first using css variables

```css
:root {
    --primary: hsl(25, 97%, 53%);
    --white: hsl(0, 0%, 100%);
    --lightGray: hsl(217, 12%, 63%);
    --mediumGray:  hsl(216, 12%, 54%);
    --darkBlue: hsl(213, 19%, 18%);
    --veryDarkBlue:  hsl(216, 12%, 8%);
}
```
this for of loop to add an event listener to each button to add the gray bg
```js
for (const button of ratingBtns) {
    
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#7c8798';
        button.style.color = 'white';
        numberRatingSpan.innerText = button.innerText;
        
    });
   
};

```

### Continued development

Media queries are something I want to play around with and get the content ui looking nicer.


## Author

- Website - [Michael Reyes](https://michaelr47.github.io/bootstrap-project2/)
- Frontend Mentor - same @ as github

