// coffe table animation


const CUPS_PARENT = document.querySelector(".coffee-table-container");
            // Left the parent alone so I can easily add a style to it later
const CUPS_LIST = CUPS_PARENT.children;

// Previous and Next buttons
 const BEFORE = document.querySelector('.before');
 const AFTER = document.querySelector('.after');
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


// the below for looop is to rotate the mugs when clicked
for( let i=0; i<CUPS_LIST.length; i++){
    CUPS_LIST[i].addEventListener("click", function(){
        
        id = CUPS_LIST[i].id;

        switch (id){
            // the role of this switch statement is to give the 'transform' 
            // property to the clicked mug.

            case `cup-${i}`:
                console.log('switch working')

                CUPS_PARENT.style.removeProperty('transform');
                CUPS_PARENT.style.transform = `rotate(${i * 45}deg)`; 
                    // The  template literal above is to change the turning degree  
                    // according to the clicked id. This way it will always rotate clock-wise.

                console.log(`rotation ${i*45} deg`)
        }
        
    })
}

// The code below is for the footer buttons to rotate the coffe table.

// Still in progress!!
let sub = -45;
BEFORE.addEventListener('click', function(){
    
    CUPS_PARENT.style.transform = `rotate(${sub}deg)`; 
    sub -= 45;
    console.log('1111');
    
})

let add = 45;
AFTER.addEventListener('click', function(){
    
    CUPS_PARENT.style.transform = `rotate(${add}deg)`; 
    add += 45;
    console.log('222');
})







