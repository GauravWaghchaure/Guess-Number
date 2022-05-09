
const magicNumber = Math.trunc(Math.random()*20)+1;
console.log(magicNumber);

let score = 5;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    let guessedNum = Number(document.querySelector('.guess').value);
    
    if (guessedNum) {
        if (guessedNum <= 20 && guessedNum >= 1) {
            if (guessedNum === magicNumber) {
                document.querySelector('.message').textContent = 'You won!!!';
                document.querySelector('.number').textContent = magicNumber;
                HighScore();
            }
            else {
                document.querySelector('.message').textContent = 'You loosed';
                if(score){
                    score--;
                document.querySelector('.score').textContent = score;
                }
                else{
                    document.querySelector('.message').textContent = 'You loosed tha game';
                    disableButton(); 
                }
            }
        } else {
            document.querySelector('.message').textContent = 'Please select number btw 1 - 20';
        }
    }
    else {
        document.querySelector('.message').textContent = 'Please Select A Number!';

    }
})

function disableButton(){
    document.getElementById('check').disabled = true;
    document.getElementById('guess').disabled = true;
}


document.querySelector('.again').addEventListener('click', function(){
    document.getElementById('check').disabled = false;
    document.getElementById('guess').disabled = false;
    score=5;
    document.querySelector('.score').textContent = score;
})

function HighScore(){
    highscore++;
    document.querySelector('.highscore').textContent =highscore
}