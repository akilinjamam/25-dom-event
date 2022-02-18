// 1. this is for red button
function makingRed() {
    document.body.style.backgroundColor = 'red';
}


// 2. this is for blue button
const blueButton = document.getElementById('make-it-blue')

// just set the name of the function

blueButton.onclick = makingBlue   /* dont give first bracket in the function name */

function makingBlue() {
    document.body.style.backgroundColor = 'blue'
}

// 3. this is for making button green with annonymous function
const greenButton = document.getElementById('make-it-green');

greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// 4. this is for making button golden rod using funtion with event listener
const buttonGoldenRod = document.getElementById('make-it-goldenrod');

buttonGoldenRod.addEventListener('click', makingGolden);

function makingGolden() {
    document.body.style.backgroundColor = 'goldenRod';
}


// 5. this is for button hot pink using function under event listener
const buttonPink = document.getElementById('make-it-hotpink');
buttonPink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'HotPink'
})

//  6. this is for button light blue using function under event listener in direct way

const lightblueButton = document.getElementById('make-it-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})