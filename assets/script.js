var questions = [
    {
        question: 'What is a collection of multiple values stored within a variable called?',
        answer: [
            {text:"array", correct: 1},
            {text:"function", correct: 0},
            {text:"browser", correct: 0},
            {text:"element", correct: 0},
        ]
    },
    {
        question: 'Which primitive value type is always written in quotation marks?',
        answer: [
            {text:"boolean", correct: 0},
            {text:"number", correct: 0},
            {text:"string", correct: 1},
            {text:"null", correct: 0},
        ]
    },
    {
        question:'How do Windows users access the command line?',
        answer: [
            {text:"node", correct: 0},
            {text:"Git Bash", correct: 1},
            {text:"VSCode", correct: 0},
            {text:"None of these options", correct: 0},
        ]
    },
    {
        question: 'What is the symbol for an id in CSS?',
        answer: [
            {text:"$", correct: 0},
            {text:"*", correct: 0},
            {text:"@", correct: 0},
            {text:"#", correct: 1},
        ]
    },
    {
        question: 'What is a collection of key/value pairs in JavaScript called?',
        answer: [
            {text: "object", correct: 1},
            {text: "array", correct: 0},
            {text: "class", correct: 0},
            {text: "boolean", correct: 0},
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
var timeFinished = document.getElementById("time-over");
var score = document.getElementById("score");

var currentQuestionIndex= 0;
var clockId = 0;
var timeLeft = questions.length * 5;
var correctAnswers = [];


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

function currentQuestion(){
    var presentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = presentQuestion.question;
    answers.innerHTML = "";
    answerResult.classList.add('hide-element');
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

function nextQuestion(){
    
    var answer = this.getAttribute("data-correct");
    if (answer == 1){
        alert("Correct!");
        answerResult.classList.remove('hide-element');
        answerResult.textContent = "Good Job!";
        correctAnswers.push(answer);
        console.log(correctAnswers);
    } else {
        alert("Incorrect!");
        answerResult.classList.remove('hide-element');
        answerResult.textContent = "Keep Trying!";
    }
    // console.log(answerResult.textContent);
    currentQuestionIndex++;
    setTimeout(currentQuestion, 1000);
    function points(){
        var article = document.createElement("article");
        // console.log(correctAnswers);
        // article.innerHTML = correctAnswers.length;
        score.innerHTML = correctAnswers.length;
        score.setAttribute("#score");
        points.appendChild(article);

    }

}

function countdown(){
    timer.textContent = timeLeft--;
    if (timeLeft < 0){
        timeFinished.textContent = "Time has run out.";
        nextButton.classList.add('hide-element');
        clearInterval(clockId);
    } 
}


