var homeDisplay = document.querySelector(".startPage");
var quizDisplay = document.querySelector(".questionContainer");
var answerDisplay = document.querySelector(".answerContainer");
var startBtn = document.querySelector(".startButton");
var timer = document.getElementById("#timeCounter");

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

var questionText = document.getElementById("#question");
var aText = document.getElementById("#a");
var bText = document.getElementById("#b");
var cText = document.getElementById("#c");
var dText = document.getElementById("#d");

var currentQuestion = 0;


function startGame() {

    homeDisplay.setAttribute("style", "display:none;");
    quizDisplay.setAttribute("style", "display:show;");
    answerDisplay.setAttribute("style", "display:show;");
    startBtn.setAttribute("style", "display:none; border:none;");

    console.log("Game has started.");

    var currentQuestionShown = quizQuestions[currentQuestion];

    console.log(currentQuestionShown);


    questionText.innerHTML = currentQuestionShown.question;
    aText.innerHTML = currentQuestionShown.a;
    bText.innerHTML = currentQuestionShown.b;
    cText.innerHTML = currentQuestionShown.c;
    dText.innerHTML = currentQuestionShown.d;
};

startBtn.addEventListener("click", function() {
    startGame();
});

