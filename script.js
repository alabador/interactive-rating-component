const buttons = document.querySelectorAll('#button-container .button');

// get and set style declarations from css
const styles = window.getComputedStyle(document.body);
const orange = styles.getPropertyValue('--orange');
const mediumGray = styles.getPropertyValue('--medium-gray');
const darkBlue = styles.getPropertyValue('--dark-blue');


// for (let button of buttons) {    
//     button.addEventListener('click', function() {
//         button.style.backgroundColor = `${orange}`;
//         button.style.color = '#ffffff'
//     })
// } 