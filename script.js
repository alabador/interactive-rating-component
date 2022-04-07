//button variables
const buttons = document.querySelectorAll('#button-container .button');
const submit = document.querySelector('.submit');
const rate = document.querySelector('#rate-us');
const thanks = document.querySelector('#thank-you');
const ratingValue = document.querySelector('#ratingValue');
let value = 0;

// get and set style declarations from css
const styles = window.getComputedStyle(document.body);
const orange = styles.getPropertyValue('--orange');
const mediumGray = styles.getPropertyValue('--medium-gray');
const darkBlue = styles.getPropertyValue('--dark-blue');

for (let button of buttons) {    
    button.addEventListener('click', function(e) {
        //iterates through buttons and removes active state
        buttons.forEach(button => {
            button.classList.remove('orange');
        });
        //adds active state to current button
        e.target.classList.add('orange');
        //saves the value of the rating selected
        value = button.value;
        ratingValue.innerText = value;
        submit.disabled = false;
    })
} 


submit.addEventListener('click', function(e) {
    rate.style.display = "none";
    thanks.style.display= "flex";
})