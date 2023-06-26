var questions = [
    {
        question: 'What is a collection of multiple values stored within a variable called?',
        answer: [
            {text:"array", correct: true},
            {text:"function", correct: false},
            {text:"browser", correct: false},
            {text:"element", correct: false},
        ]
    },
    {
        question: 'Which primitive value type is always written in quotation marks?',
        answer: [
            {text:"boolean", correct: false},
            {text:"number", correct: false},
            {text:"string", correct: true},
            {text:"null", correct: false},
        ]
    },
    {
        question:'How do Windows users access the command line?',
        answer: [
            {text:"node", correct: false},
            {text:"Git Bash", correct: true},
            {text:"VSCode", correct: false},
            {text:"None of these options", correct: false},
        ]
    },
    {
        question: 'What is the symbol for an id in CSS?',
        answer: [
            {text:"$", correct: false},
            {text:"*", correct: false},
            {text:"@", correct: false},
            {text:"#", correct: true},
        ]
    },
    {
        question: 'What is a collection of key/value pairs in JavaScript called?',
        answer: [
            {text: "object", correct: true},
            {text: "array", correct: false},
            {text: "class", correct: false},
            {text: "boolean", correct: false},
        ]
    }
]

var startQuizButton = document.getElementById("start-quiz-btn");
var questionContainer = document.getElementById('questions-container');
var questionElement = document.getElementById('questions');
var answerButtons = document.getElementById('.answer-button');
var nextButton = document.getElementById('next-btn');
var answerResult = document.getElementById("answer-text");
var timer = document.getElementById("timer");

var currentQuestionIndex= 0;
let score = 0;
var clockId = 0;
var timeLeft = questions.length * 15;

startQuizButton.addEventListener('click', startQuiz);

function startQuiz(){
    clockId = setInterval(countdown, 1000);
    console.log('Started the quiz');
    startQuizButton.classList.add('hide-element');
    questionContainer.classList.remove('hide-element');
    nextButton.classList.remove('hide-element');
    currentQuestionIndex = 0;
    score=0;
    currentQuestion()

}

function countdown(){
    timer.textContent = timeLeft--;
}

function currentQuestion(){
    var presentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = presentQuestion.question;
    answers.innerHTML = "";
    presentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.setAttribute("data-correct", answer.correct);
        button.classList.add('answer-button');
        answers.appendChild(button);
        button.addEventListener("click", nextQuestion);
        nextButton.addEventListener("click", nextQuestion);
    });
    }

startQuiz()

function nextQuestion(){
    
    var answer = this.getAttribute("data-correct");
    if (answer===true){
        answerResult.textContent = "Correct";
    } else {
        answerResult.textContent = "Incorrect";
    }
    console.log(answerResult.textContent);
    currentQuestionIndex++;
    setTimeout(currentQuestion, 1000);

}


