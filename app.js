function populate(){
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var questionNumber = quiz.questionIndex+1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + questionNumber + "of " + quiz.questions.length;
}

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";
     gameOverHtml += "<h2 id='score'>Your Score: " + quiz.score + "</h2>";  
     var element = document.getElementById("quiz");
     element.innerHTML = gameOverHtml; 
};

var questions = [
    new Question("which one is not an OOP language?", ["Java","C#","C++","C"],"C"),
    new Question("which language is used for styling web page?", ["Javascript","HTML","CSS","PHP"],"CSS"),
    new Question("which language is used for web apps?", ["Javascript","All","PHP","Python"],"All"),
    new Question("React is library of _______?", ["Java","C#","Javascript","C"],"Javascript"),
    new Question("MVC is a ______?", ["Language","Library","Framework","All"],"All")
];

var quiz = new Quiz(questions);

populate();