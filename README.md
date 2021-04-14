# COFFEE O'CLOCK

This is a simple low quality website to learn and practice some basic JavaScript. I might update this website by adding a shopping cart and payout athentication when I have the skills required. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview



### Screenshot

![](C:\Users\CARLOS\Pictures\h\screen-shot.JPG)


### Links

- Live Site URL: [https://coffee-oclock-qo5la1wse-ayoub1dev.vercel.app/](https://coffee-oclock-qo5la1wse-ayoub1dev.vercel.app/)

## My process
  I have done the only the desktop version because my goal was to practice JS and I didn't want to spend too long on the layout and design.

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Desktop-first workflow
- JavaScript


### What I learned

I have learnt that the first code is not always the best as I have simplified. I have simplified 55 lines of code into 22 lines that can be used for larger data without any additional code - this by just spending 30 mins more thinking how to make the code more functional for future updates


```js
	for (let i = 0; i < CUPS_LIST.length; i++) {
    CUPS_LIST[i].addEventListener("click", function () {
        id = CUPS_LIST[i].id;

        switch (id) {
            // the role of this switch statement is to give the 'transform'
            // property to the clicked mug.

            case `cup-${i}`:
                console.log("switch working");

                CUPS_PARENT.style.removeProperty("transform");
                CUPS_PARENT.style.transform = `rotate(${i * 45}deg)`;
                // The  template literal above is to change the turning degree
                // according to the clicked id. This way it will always rotate clock-wise.

                // Below there is the code to change the data on the properties container so that
                // when a coffee mug is pressed the correct info is displayed.
                coffeeTitle.innerHTML = coffeProps[`cup-${i}`].title;

                coffeeDescription.innerHTML =
                    coffeProps[`cup-${i}`].description;

                coffeImage.innerHTML = coffeProps[`cup-${i}`].image;

                angle = i * 45;
                // the anle variable will be updated to what angle the div is so when the footer
                //  buttons are pressed the correct updates take place.
                console.log(`rotation ${i * 45} deg`);
        }
    });
}
```

### Continued development

I would like to learn how to use data structures in real life projects. This could happen if I update this project to make it a e-comerce website with logins or by making another project specifically for this.

Currently I started learning basics of algorithms.


## Author

- Me


