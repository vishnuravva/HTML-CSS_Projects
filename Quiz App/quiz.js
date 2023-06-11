const questions = [
    {
        question:'Which is the largest animal in the world?',
        answers:[
            {text:'Shark',correct:false},
            {text:'Blue whale',correct:true},
            {text:'Elephant',correct:false},
            {text:'Giraffe',correct:false}

        ]
    },
    {
        question:'Which is smallest country in the world?',
        answers:[
            {text:'Vatican City',correct:true},
            {text:'Bhutan',correct:false},
            {text:'Nepal',correct:false},
            {text:'Sri Lanka',correct:false}

        ]
    },
    {
        question:'Which is largest desert in the world?',
        answers:[
            {text:'Kalahari',correct:false},
            {text:'Gobi',correct:false},
            {text:'Sahara',correct:false},
            {text:'Antarctica',correct:true}

        ]
    },
    {
        question:'Which is smallest continent in the world?',
        answers:[
            {text:'Asia',correct:false},
            {text:'Australia',correct:true},
            {text:'Arctic',correct:false},
            {text:'Africa',correct:false}
        ]
    }
]

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nxtBtn = document.getElementById('nxtBtn')

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nxtBtn.innerHTML = 'Next'
    showQuestion();
}

function resetState(){
    nxtBtn.style.display = 'none'
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }

}
function showQuestion(){

    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + '. '+currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButtons.appendChild(button)

        if(answer.correct){
            button.dataset.correct = answer.correct
            console.log(answer.correct)
        }

        button.addEventListener('click',(e) => {
            const selectedBtn = e.target
             const isCorrect  = selectedBtn.dataset.correct === 'true'
             console.log(isCorrect)

             if(isCorrect){
                selectedBtn.classList.add('correct')
                score++
             }else{
                selectedBtn.classList.add('incorrect')
             }

             Array.from(answerButtons.children).forEach(button =>{
                if(button.dataset.correct === 'true'){
                    button.classList.add('correct')
                }
                button.disabled = 'true'
             })
             nxtBtn.style.display = 'block'
        })
    })
}

function handleNxtButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}
nxtBtn.addEventListener('click',() => {
    if(currentQuestionIndex < questions.length){
        handleNxtButton()
    }else{
        startQuiz()
    }
})
function showScore(){
    resetState()
    questionElement.innerHTML = `Your Score ${score} out of ${questions.length}`
    nxtBtn.innerHTML = 'Play Again'
    nxtBtn.style.display = 'block'
}
startQuiz()


