const buttons = document.querySelectorAll('#button-container .button');

// get and set style declarations from css
const styles = window.getComputedStyle(document.body);
const orange = styles.getPropertyValue('--orange');
const mediumGray = styles.getPropertyValue('--medium-gray');


for (let button of buttons) {
    button.addEventListener('click', function() {
        
    })
} 