const boxes = document.querySelectorAll('.box');
const playbutton = document.querySelector('.play');
const score = document.querySelector('.score');
const success = document.querySelector('.correct-tone');
const fail = document.querySelector('.wrong-tone')

let chosenNumber;
let pickedNumber;
let totalOptions = 9;
let totalGuesses = 0


// disable buttons
boxes.forEach(box=> {
    box.disabled = true
})


function percentage(){
    let percentage = (totalOptions-totalGuesses)/totalOptions * 100;
    return parseInt(percentage) ;
}

function generateRandom(){
    boxes.forEach(box=> {
        box.disabled = false
        box.style.background = 'white'

    });    
     chosenNumber = Math.floor(Math.random()*(10 - 1) + 1);
     return chosenNumber
}
function pickNumber(){
 pickedNumber = parseInt(this.value);

 if(pickedNumber === chosenNumber){
     percentage() >= 50? score.style.color = 'Green': score.style.color = 'red' 
     score.textContent= `${percentage()}`;
    success.play()
    boxes.forEach(box=> {
        box.disabled = true;
        box.style.background = 'green'
        totalGuesses = 0;
    })
    
 }
 else{
     fail.play();
     totalGuesses++;
 }
}



boxes.forEach(box => box.addEventListener('click',pickNumber));
playbutton.addEventListener('click',generateRandom);