//button variables
const buttons = document.querySelectorAll('#button-container .button');
const button1 = document.querySelector('#button-1');
const button2 = document.querySelector('#button-2');
const button3 = document.querySelector('#button-3');
const button4 = document.querySelector('#button-4');
const button5 = document.querySelector('#button-5');

// get and set style declarations from css
const styles = window.getComputedStyle(document.body);
const orange = styles.getPropertyValue('--orange');
const mediumGray = styles.getPropertyValue('--medium-gray');
const darkBlue = styles.getPropertyValue('--dark-blue');



for (let button of buttons) {    
    button.addEventListener('click', function() {
        // console.log(getComputedStyle(button).backgroundColor);
        if (getComputedStyle(button).backgroundColor == mediumGray) {
            button.style.backgroundColor = orange;
            button.style.color = '#ffffff';
        }

        else if (getComputedStyle(button).backgroundColor == orange) {
            button.style.backgroundColor = darkBlue;
            button.style.color = mediumGray;
        }

        // if (`'${getComputedStyle(button).backgroundColor}'` == darkBlue.trim()) {
        //     console.log('this works');
        //     button.style.backgroundColor = `${orange}`;
        //     button.style.color = '#ffffff'
        // }

        // else {
        //     console.log('this does not work');
        // }

        // button.style.backgroundColor = `${orange}`;
        // button.style.color = '#ffffff'
    })
} 