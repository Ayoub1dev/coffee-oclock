// coffe table animation

const CUPS_PARENT = document.querySelector(".coffee-table-container");
// Left the parent alone so I can easily add a style to it later
const CUPS_LIST = CUPS_PARENT.children;

// Previous and Next buttons
const BEFORE = document.querySelector(".before");
const AFTER = document.querySelector(".after");
// below there is the code to rotate coffee table when the coffee mugs are clicked

/*

for (let i = 0; i < CUPS_LIST.length; i++) {
    // the for loop below was the first try to make the mugs rotate towards the properties table
    // when clicked. My new shorter version is below this lOoOong for loop.

    CUPS_LIST[i].addEventListener("click", function () {
         console.log(CUPS_LIST[i].id );
         
         id = CUPS_LIST[i].id;
         
         switch (id){
            case 'cup-1':
                
                CUPS_PARENT.style.removeProperty('transform');
                CUPS_PARENT.style.transform = `rotate(90deg)`; 
                break;

            case 'cup-2':
                
                CUPS_PARENT.style.removeProperty('transform');
                CUPS_PARENT.style.transform = `rotate(45deg)`;
                
                break;
            case 'cup-3':
                
                CUPS_PARENT.style.removeProperty('transform');
                CUPS_PARENT.style.transform = `rotate(0deg)`; 
                break;

            case 'cup-4':
                CUPS_PARENT.style.removeProperty('transform');
                CUPS_PARENT.style.transform = `rotate(315deg)`;
                break;

            case 'cup-5':
                CUPS_PARENT.style.removeProperty('transform');
                CUPS_PARENT.style.transform = `rotate(270deg)`; 
                break;

            case 'cup-6':
                CUPS_PARENT.style.removeProperty('transform');
                CUPS_PARENT.style.transform = `rotate(225deg)`;
                break;

            case 'cup-7':
                CUPS_PARENT.style.removeProperty('transform');
                CUPS_PARENT.style.transform = `rotate(180deg)`; 
                break;

            case 'cup-8':
                CUPS_PARENT.style.removeProperty('transform');
                CUPS_PARENT.style.transform = `rotate(135deg)`;
                break;
        }
         
    });
}
*/

// The code below is to change the coffee properties container content respectively to what
// coffee mug was clicked.
const coffeProps = {
    // the key name is the same as the id of the coffee mugs on the coffee table
    "cup-0": {
        title: "AMERICANO",
        description:
            "Caffè Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee. The strength of an Americano varies with the number of shots of espresso and the amount of water added",
        image: `<img src="images/americano.png"
                        alt="americano coffee mug"
                         style="
                           display: block;
                            margin: auto;
                            width: 230px;"
                    />`,
    },
    "cup-1": {
        title: " ESPRESSO MACHIATO",
        description:
            "Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans. Espresso coffee can be made with a wide variety of coffee beans and roast degrees.",
        image: `<img src="images/espresso-machiato.png"
                        alt="ESPRESSO MACHIATO"
                         style="
                           display: block;
                            margin: auto;
                            width: 230px;"
                    />`,
    },
    "cup-2": {
        title: "ESPRESSO",
        description:
            "Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans. Espresso coffee can be made with a wide variety of coffee beans and roast degrees.",
        image: `<img src="images/espresso.png"
                        alt="espresso coffee "
                         style="
                           display: block;
                            margin: auto;
                            width: 230px;"
                    />`,
    },
    "cup-3": {
        title: "CAFE MOCHA",
        description:
            "A caffè mocha, also called mocaccino, is a chocolate-flavoured variant of a caffè latte, commonly served in a glass. Other commonly used spellings are mochaccino and also mochachino. The name is derived from the city of Mocha, Yemen, which was one of the centers of early coffee trade",
        image: `<img src="images/cafe-mocha.png"
                        alt="cafe mocha"
                         style="
                           display: block;
                            margin: auto;
                            width: 230px;"
                    />`,
    },
    "cup-4": {
        title: "LATTE",
        description:
            "Caffe latte is a coffee drink made with espresso and steamed milk. The term comes from the Italian caffè e latte, caffelatte or caffellatte, which means 'coffee & milk'. In English, it is often shortened to just latte; either or both words sometimes have an accent on the final e.",
        image: `<img src="images/latte.png"
                        alt="latte coffee "
                         style="
                           display: block;
                            margin: auto;
                            width: 230px;"
                    />`,
    },
    "cup-5": {
        title: "CAPUCCINO",
        description:
            "A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milks, and flavoring with cinnamon or chocolate powder.",
        image: `<img src="images/cappuccino.png"
                        alt="cappuccino"
                         style="
                           display: block;
                            margin: auto;
                            width: 230px;"
                    />`,
    },
    "cup-6": {
        title: "CAFE BREVE",
        description:
            "Caffè breve is an espresso-based drink that's made like a cappuccino, but with steamed half-and-half instead of milk. ... You will also see it called the breve latte, cafè breve, and breve coffee. Breve means 'short' in Italian",
        image: `<img src="images/cafe-breve.png"
                        alt="CAFE BREVE"
                         style="
                           display: block;
                            margin: auto;
                            width: 230px;"
                    />`,
    },
    "cup-7": {
        title: "TURKISH COFFEE",
        description:
            "Coffee and water, usually with added sugar, is brought to the boil in a special pot called cezve in Turkey, and often called ibrik elsewhere. As soon as the mixture begins to froth, and before it boils over, it is taken off the heat; it may be briefly reheated twice more to increase the desired froth.",
        image: `<img src="images/turkish-coffee.png"
        alt="turkish coffee"
         style="
           display: block;
            margin: auto;
            width: 230px;"
    />`,
    },
};

let coffeeTitle = document.querySelector(".coffee-title");
let coffeeDescription = document.querySelector(".coffee-description");
let coffeImage = document.querySelector(".coffee-image-container");

// the below for looop is to rotate the mugs when clicked
let angle = 0;

//
coffeeTitle.innerHTML = coffeProps[`cup-0`].title;
coffeeDescription.innerHTML = coffeProps[`cup-0`].description;
coffeImage.innerHTML = coffeProps[`cup-0`].image;

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

// The code below is for the footer buttons to rotate the coffe table.

BEFORE.addEventListener("click", function () {
    angle -= 45;
    CUPS_PARENT.style.transform = `rotate(${angle}deg)`;
});

AFTER.addEventListener("click", function () {
    angle += 45;
    CUPS_PARENT.style.transform = `rotate(${angle}deg)`;
});

// ORDER OF COFFE IMAGES:
//  1 Americano >
//  2 Turkish >
//  3 Espresso >
//  4 Caffe Mocha >
//  5 Latte >
//  6 Capuccino >
//  7 Caffee Breve   >
//  8 Espresso Machiatto
