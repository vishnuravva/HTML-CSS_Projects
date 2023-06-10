const rspBtns = document.querySelectorAll('.rps');
const buttons = document.querySelectorAll('.rps')
const playerScore = document.querySelector('.playerScore')
const botScore = document.querySelector('.botScore')
const vsDiv = document.querySelector('.vs')
const winner = document.querySelector('.winner')
const startingNewGame = document.getElementById('startingNewGame')
const allResetAtOnce = document.querySelectorAll('#reset')
const allResetAtOnce1 = document.querySelectorAll('#reset1')

const rspVals = Array.from(rspBtns, button => button.textContent);
// rspBtns.forEach((val) => {
//     rspVals.push(val.textContent);
// });

// for resetting the whole game all at once
function reset() {
    allResetAtOnce.forEach((reset) => reset.innerHTML = '')
    allResetAtOnce1.forEach((reset) => reset.innerHTML = 0)
    startingNewGame.innerHTML = ''
}
function endGame(playerscore,botscore){
    const message = playerscore === botscore ? 'Scores are Tied' :
                    playerscore < botscore ? 'Bot Won' : 'You Won';
    winner.innerHTML = message;
                
    startingNewGame.textContent = `New Game starting in 2 seconds`
                
    setTimeout(function(){
        // playerscore & botscore = 0 becoz we are resetting the whole game and starting it from scratch 
        // if not made 0
        playerscore = 0
        botscore = 0
        reset()
    },2000)
}
function userSelection() {
    let botscore = 0;
    let playerscore = 0;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {

            const botSelected = rspVals[Math.floor(Math.random() * rspVals.length)]
            vsDiv.innerHTML = `🙍‍♂️${button.textContent} vs 🤖${botSelected}`

            // If both user and bot selected is the same then
            if (button.textContent === botSelected) {
                playerScore.innerHTML = playerscore
                botScore.innerHTML = botscore
            }

            else if (button.textContent === '✊' && botSelected === '✌️' ||
                   button.textContent === '✋' && botSelected === '✊' ||
                   button.textContent === '✌️' && botSelected === '✋') {

                playerScore.innerHTML = ++playerscore
            
            }
            else {
                botScore.innerHTML = ++botscore
            }

            if ((playerscore + botscore) == 10) {
                endGame(playerscore,botscore)
            }
        })
    })
}
userSelection()



// else if (button.textContent == '✊' && botSelected == '✌️') {
            //     playerScore.innerHTML = ++playerscore
            // }

            // else if (button.textContent == '✋' && botSelected == '✊') {
            //     playerScore.innerHTML = ++playerscore
            // }

            // else if (button.textContent == '✌️' && botSelected == '✋') {
            //     playerScore.innerHTML = ++playerscore
            // }


            
// function updateScores() {
//     playerScore.innerHTML = playerScoreCount;
//     botScore.innerHTML = botScoreCount;
// }

// function endGame() {
//     const message = playerScoreCount === botScoreCount ? 'Scores are Tied' :
//                     playerScoreCount < botScoreCount ? 'Bot Won' : 'You Won';
//     winner.innerHTML = message;
//     startingNewGame.textContent = 'New Game starting in 2 seconds';
//     setTimeout(() => {
//         playerScoreCount = 0;
//         botScoreCount = 0;
//         updateScores();
//         reset();
//     }, 2000);
// }

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const botSelected = rspVals[Math.floor(Math.random() * rspVals.length)];
//         vsDiv.innerHTML = `🙍‍♂️${button.textContent} vs 🤖${botSelected}`;
//         if (button.textContent === botSelected) {
//             updateScores();
//         } else if (button.textContent === '✊' && botSelected === '✌️' ||
//                    button.textContent === '✋' && botSelected === '✊' ||
//                    button.textContent === '✌️' && botSelected === '✋') {
//             playerScoreCount++;
//             updateScores();
//         } else {
//             botScoreCount++;
//             updateScores();
//         }
//         if (playerScoreCount + botScoreCount === 10) {
//             endGame();
//         }
//     });
// });

