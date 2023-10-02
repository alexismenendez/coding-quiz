var homeDisplay = document.querySelector(".startPage");
var quizDisplay = document.querySelector(".questionContainer");
var answerDisplay = document.querySelector(".answerContainer");
var startBtn = document.querySelector(".startButton");
var timerEl = document.getElementById("timeCounter");
var startBtnContainer = document.querySelector(".buttonContainer");
var answerBoxes = document.querySelector(".answerBoxes");


var quizQuestions = [
    {
        question: "Which of the following is an example of a String?",
        a: "1",
        b: "True",
        c: "'Hello World!'",
        d: "False",
        correctAn: "c",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Color Style Sticker",
        c: "Candy Shop Stocker",
        d: "Crazy Style Selector",
        correctAn: "a",
    },
    {
        question: "Which of the following languages is used for Web Development?",
        a: "Python",
        b: "C#",
        c: "Lua",
        d: "JavaScript",
        correctAn: "d",
    }
];

var questionText = document.getElementById("question");
var aText = document.getElementById("a");
var bText = document.getElementById("b");
var cText = document.getElementById("c");
var dText = document.getElementById("d");

var currentQuestion = 0;
var timer;
var timerCount;
var currentQuestionShown;

function startGame() {

    homeDisplay.setAttribute("style", "display:none;");
    quizDisplay.setAttribute("style", "display:show;");
    answerDisplay.setAttribute("style", "display:show;");
    startBtnContainer.setAttribute("style", "display:none;");
    startBtn.innerHTML = "Start Quiz";


    console.log("Game has started.");


    console.log(currentQuestionShown);


  
    updateDisplay(currentQuestionShown);
    startTimer();
    answerSelect(currentQuestionShown);

};

function updateDisplay() {
    currentQuestionShown = quizQuestions[currentQuestion];

    questionText.innerHTML = currentQuestionShown.question;
    aText.innerHTML = currentQuestionShown.a;
    bText.innerHTML = currentQuestionShown.b;
    cText.innerHTML = currentQuestionShown.c;
    dText.innerHTML = currentQuestionShown.d;
}

function startTimer() {
    timerCount = 10;
    timerEl.textContent = timerCount
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

var headerText = document.querySelector("h1");
var subtext = document.getElementById("subtext");
var pText = document.getElementById("pText");
var score = 0;

function endGame() {

    homeDisplay.setAttribute("style", "display:show;");
    quizDisplay.setAttribute("style", "display:none;");
    answerDisplay.setAttribute("style", "display:none;");
    pText.setAttribute("style", "display:none;")
    subtext.setAttribute("style", "display:show;");
    startBtnContainer.setAttribute("style", "display:show;");

    headerText.innerHTML = "Finished!";
    subtext.innerHTML = "Your Results = " + score;
    startBtn.innerHTML = "Try Again";
}

function answerSelect () {
    
    answerBoxes.addEventListener("click", function(event) {
        if (!event.target.id) {
            return;
        }
        if (event.target.id === currentQuestionShown.correctAn) {
            console.log("yay!");
            console.log("current question", currentQuestionShown)
            score += 10;
        } else {
            console.log("lol dumbass");
        }
        currentQuestion++;
        updateDisplay();
        console.log(currentQuestionShown.correctAn);
        
    })
}

startBtn.addEventListener("click", function() {
    startGame();
});

