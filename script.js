//button variables
const buttons = document.querySelectorAll('#button-container .button');

// get and set style declarations from css
const styles = window.getComputedStyle(document.body);
const orange = styles.getPropertyValue('--orange');
const mediumGray = styles.getPropertyValue('--medium-gray');
const darkBlue = styles.getPropertyValue('--dark-blue');


for (let button of buttons) {    
    button.addEventListener('click', function(e) {
        buttons.forEach(button => {
            button.classList.remove('orange');
        });

        e.target.classList.add('orange');

        // console.log(getComputedStyle(button).backgroundColor);
        // if (getComputedStyle(button).backgroundColor == darkBlue) {
        //     button.style.backgroundColor = orange;
        //     button.style.color = '#ffffff';
        // }

        // else if (getComputedStyle(button).backgroundColor == orange) {
        //     button.style.backgroundColor = darkBlue;
        //     button.style.color = mediumGray;
        // }
    })
} 

// for (let i=0; i<buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         this.classList.add('orange');
//         let currentButton = i;
//     })
// }