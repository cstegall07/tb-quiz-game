var countDownTimer;
var timerInterval;
var arrayOfQuestions = [];
var gameScore = 0;
const maxTime = 5 * 60; //time in seconds
function setCountDownTimer() {
    countDownTimer = maxTime;
    console.log("countDownTimer: ", countDownTimer);
}

//when the person clicks the begin button the timer starts
//start time
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    console.log("startTimer: ", timerInterval);
}

function updateTimer() {
        countDownTimer--;
        presentTimer();
        console.log("updateTimer: countDownTimer", countDownTimer);
}

function doGame(){
    setCountDownTimer();
    startTimer();
    showScoreBoard();
    hideWelcome();
    presentScore();
    prepareQuestionAndAnswers();
    getQuestion('quest0');
}

function presentTimer(){
    let currentTime = document.getElementById("timer");
    currentTime.innerText = countDownTimer;
    console.log("presentTimer: currentTime", currentTime)
}

function showScoreBoard(){
    let scoreBoard = document.getElementById("score-board");
    console.log("showScoreBoard: scoreBoard", scoreBoard);
    // scoreBoard.classList.toggle('hide', false);
    scoreBoard.classList.toggle('hide');

}

function presentScore(){
    let currentScore = document.getElementById('score');
    currentScore.innerText = gameScore;
}

function hideWelcome(){
    let welcome = document.getElementById("welcome");
    // console.log("showScoreBoard: scoreBoard", scoreBoard);
    // scoreBoard.classList.toggle('hide', false);
    welcome.classList.add('hide');
}

//Question
function SetupQuestions() {
    let question1 = {
        id: "quest0",
        question: "To select elements with a specific class:",
        answer1: "write a semicolon (;) character, followed by",
        answer2: "write a period (.) character, followed by the class",
        answer3: "write a period (.) character",
        answer4: "write a comma (,) character",
        correctanswer: 2
};
    let question2 = {
        id: "quest1",
        question: "In Css, a color can be specified by using a ",
        answer1: "yes",
        answer2: "no",
        answer3: "null",
        answer4: "null",
        correctanswer: 1
};

    arrayOfQuestions.push(question1);
    arrayOfQuestions.push(question2);
    console.log("SetupQuestions arrayofQuestions:", arrayOfQuestions);
}
    
function getQuestion(questionId) {
    console.log('getQuestion questionId', questionId);

    let found = false;

    for( let i = 0; i<arrayOfQuestions. length; i++); {
       if(questionId == arrayOfQuestions[i].id){
            prepareQuestionAndAnswers(i);
       }
    }
}
            
function prepareQuestionAndAnswers(questionIndex) {
    let questionSection = document.getElementById('question');
    let newQuestion = document.createElement('div');
    newQuestion.id = arrayOfQuestions[questionIndex].id;
    // newQuestion.innerText = arrayOfQuestions[questionIndex].question;
    newQuestion.classList.add('question');
    questionSection.appendChild(newQuestion);


    if(arrayOfQuestions[questionIndex].answer1){
        let answer = document.createElement("div");
        answer.innerText = arrayOfQuestions[questionindex].answer1
        answer.classList.add('answer');
        answer.id = `${arrayOfQuestions[questionIndex].id}_answer1`;
        questionSection.appendChild(answer);
    }

    if(arrayOfQuestions[questionIndex].answer2){
        let answer = document.createElement("div");
        answer.innerText = arrayOfQuestions[questionindex].answer1
        answer.classList.add('answer');
        answer.id = `${arrayOfQuestions[questionIndex].id}_answer2`;
        questionSection.appendChild(answer);
    }


}
        //if question is correct next question and add points and goto the next question
        //if question is incorrect put a time penalty
        //once all questions have been answered give options
        //once all question have been answered give options to save score
        //if user chooses to save score show the scoreboard