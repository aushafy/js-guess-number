let resultsMsgEle = document.getElementById('results-msg');
let matchedMsgEle = document.getElementById('match-msg');
let noMatchMsgEle = document.getElementById('no-match-msg');
let limitMsgEle = document.getElementById('limit-msg');
let numberToGuessEle = document.getElementById('number-to-guess');
let guessInputEle = document.getElementById('number-guessed');
let testButtonEle = document.getElementById('test-button');
let numberLimit = document.getElementById('limit-number');

testButtonEle.addEventListener('click', checkInput); // event tiap ada user yang melakukan click
function checkInput(e){ // function yang dijalankan kalau terdapat event
matchedMsgEle.style.display = 'none';
noMatchMsgEle.style.display = 'none';
resultsMsgEle.style.display = 'none';
    let getInputVal = parseInt(guessInputEle.value);
    if (!isNaN(getInputVal) && getInputVal > 0 && getInputVal <= 10) {

        resultsMsgEle.style.display = 'block';
        let numberToGuess = Math.floor(Math.random() * 10 + 1);
        
        // check nilai input dan nilai random
        if (getInputVal == numberToGuess) {
            matchedMsgEle.style.display = 'inline';

        }else{
            noMatchMsgEle.style.display = 'inline';

        }
        numberToGuessEle.innerHTML = numberToGuess;
    }
}