// (1)
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
