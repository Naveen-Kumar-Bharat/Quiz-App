

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("text"));

let questionCount = 0
let currentQuestion = {}
let Answers = true
let score = 0
let availableQuestions = []

let questions = []

fetch('questions.json')
.then(res => {
    return res.json()
})  
.then(loadedQuestions => {
    questions = loadedQuestions
    console.log(questions)
    game()
})  

const points = 10
const maxQuestions = 5

const game = () => {
    questionCount = 0
    score = 0
    availableQuestions = [...questions]
    console.log(availableQuestions)   
    getQuestions();
}

const getQuestions = () => {
    if(availableQuestions.length === 0 || questionCount >= maxQuestions) {
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign("/end.html")
    }
    questionCount++
    const ques= document.getElementById("questionCounter")
    ques.innerText = `Question: ${questionCount}/${maxQuestions}`

    const progress = document.getElementsByClassName("progress-bar-full")
    progress[0].style.width = `${(questionCount/maxQuestions)*100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionIndex, 1)
    console.log(availableQuestions)
    Answers = true
}


choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!Answers) return
        
        Answers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]
        console.log(selectedAnswer)

        const ch_container = document.getElementsByClassName("ch-container")
        if(selectedAnswer == currentQuestion.answer) {
            ch_container[selectedAnswer-1].style.border = " 2px solid green"
            selectedChoice.innerText = "Correct Answer" 
            console.log("correct")
            score+=points
        }
        else {
            ch_container[selectedAnswer-1].style.border = " 2px solid red"
            selectedChoice.innerText = "Wrong Answer"
            console.log("wrong")
        }
    
        const marks= document.getElementById("score")
        marks.innerText = `${score}`

        setTimeout(() => {
            ch_container[selectedAnswer-1].style.border = '2px solid #ccc'
            getQuestions()
        },1000)
        
    })
})

// game();