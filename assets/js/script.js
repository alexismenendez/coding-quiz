var homeDisplay = document.querySelector(".startPage");
var quizDisplay = document.querySelector(".questionContainer");
var answerDisplay = document.querySelector(".answerContainer");
var startBtn = document.querySelector(".startButton");
var timerEl = document.getElementById("timeCounter");
var startBtnContainer = document.querySelector(".buttonContainer");
var answerBoxes = document.querySelector(".answerBoxes");
var viewScoreBoard = document.querySelector(".highscores");
var scoreContainer = document.querySelector(".scoreContainer");
var initialsForm = document.querySelector(".hiScoreInput");
var hiScoreList = document.querySelector(".hiScoreList");



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
    headerText.setAttribute("style", "display:show;");
    quizDisplay.setAttribute("style", "display:show;");
    answerDisplay.setAttribute("style", "display:show;");
    startBtnContainer.setAttribute("style", "display:none;");
    startBtn.innerHTML = "Start Quiz";
    scoreContainer.setAttribute("style", "display:none;");
    initialsForm.setAttribute("style", "display:none;");
    hiScoreList.setAttribute("style", "display:none;");

    initialsEntered.value = "";



    console.log("Game has started.");


    console.log(currentQuestionShown);


  
    updateDisplay();
    startTimer();

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
        if (timerCount < 0 || timerCount === 0) {
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
    headerText.setAttribute("style", "display:none;");
    quizDisplay.setAttribute("style", "display:none;");
    answerDisplay.setAttribute("style", "display:none;");
    pText.setAttribute("style", "display:none;")
    subtext.setAttribute("style", "display:show;");
    startBtnContainer.setAttribute("style", "display:show;");
    scoreContainer.setAttribute("style", "display:show;");
    initialsForm.setAttribute("style", "display:show;");
    hiScoreList.setAttribute("style", "display:none;");


    subtext.innerHTML = "Finished! Your Results = " + score;
    startBtn.innerHTML = "Try Again";
    currentQuestion = 0;
    clearInterval(timer);
    timerEl.textContent = 0;


}

var initialsEntered = document.getElementById("initialsInput");



function storeScore() {
    var quizResults = {
      initials: initialsEntered.value,
      score: score,
    };
  
    var scoreArray = [];
    var previousScores = JSON.parse(localStorage.getItem("quizResults"));
    if (previousScores) {
      console.log("concat!");
      scoreArray = scoreArray.concat(previousScores);
    }

    scoreArray.push(quizResults);
  
    localStorage.setItem("quizResults", JSON.stringify(scoreArray));
  };


function getScore() {
    var storedScoresJSON = localStorage.getItem("quizResults");
    var storedScores = JSON.parse(storedScoresJSON);
    console.log(storedScores);
    return storedScores;
};


function displayScores() {
    hiScoreList.innerHTML = "";
  
    var highScores = getScore();
    highScores.sort((a,b) => b.score - a.score);
    var topScores = highScores.slice(0, 3);
  
  
    topScores.forEach(function (element) {
      var listItem = document.createElement("li");
      listItem.textContent = element.initials + " scored: " + element.score;
      hiScoreList.appendChild(listItem);
    });
  };

var initialSubmit = document.querySelector(".initialSubmit");

function initialSubmission() {
    subtext.innerHTML = "High Scores!";
    initialsForm.setAttribute("style", "display:none;");
    hiScoreList.setAttribute("style", "display:show;");

    storeScore();
    displayScores();    
};

initialSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    initialSubmission();
    displayScores();
  });

answerBoxes.addEventListener("click", function(event) {
    if (!event.target.id) {
        return;
    }
    if (event.target.id === currentQuestionShown.correctAn) {
        score += 10;
    } else {
        score -= 10;
        timerCount -= 5;
    }
    currentQuestion++;
    if (currentQuestion === quizQuestions.length) {
        endGame();
    } else {
    updateDisplay();
}});

startBtn.addEventListener("click", function() {
    startGame();
    score = 0;
});

viewScoreBoard.addEventListener("click", function() {
    endGame();
    displayScores();
    subtext.innerHTML = "High Scores!";
    initialsForm.setAttribute("style", "display:none;");
    hiScoreList.setAttribute("style", "display:show;");
});



