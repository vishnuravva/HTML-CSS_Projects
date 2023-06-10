
let music = new Audio('bg.mp3')
let turnTune = new Audio('message.mp3')
let gameover = new Audio('game_over.mp3')
let turn = 'X'
let isGameOver = false

const reset = document.getElementById('reset')
// function to change turn
const changeTurn = () => {

    return turn === 'X'?'0':'X'
}

// function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
let wins = [
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [2,5,8,15,15,90],
    [1,4,7,5,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
    
]
wins.forEach(e => {
   if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
      (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[0]].innerText !== '')){
        document.querySelector('.info').innerText = boxtext[e[0]].innerHTML + ' Won'
        isGameOver = true 
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'

        document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector('.line').style.width = '20vw';

      }
})
}
// music.play()
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {

    let boxText = element.querySelector('.boxtext')
    element.addEventListener('click',(e) => {
        if(boxText.innerText === ''){
            boxText.innerText = turn
            turn = changeTurn()
            turnTune.play()
            checkWin()


            if(!isGameOver){
            document.querySelector('.info').innerHTML = 'Turn for '+turn
            }
        }

    })
})

reset.addEventListener('click',(e) => {
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(e => {
        e.innerText = ''
    });
    turn = 'X'
    isGameOver = false
    document.getElementsByClassName('info')[0].innerText = 'Turn for '+turn

    document.querySelector('.line').style.opacity = 0;
})