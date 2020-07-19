class App{
    constructor(questions){
        this.quiz = new Quiz(questions);
        this.ui = new UI();

        document.querySelector('.grid').innerHTML = this.ui.resetTemplate();

        // store all the questions
        this.questions = questions;
        this.questionText = document.getElementById("question");
        this.buttonsDiv = document.getElementById("buttons");

        // create quiz
        this.questionText.innerHTML = "Tryk for at starte spillet!";
        this.buttonsDiv.innerHTML = '<button id="startbtn"><span>Start Spillet</span></button>';
        this.onStartGame();
        
    }

    onStartGame(){
        document.getElementById('startbtn').onclick = () => {
            this.fetchAnswerButtons();
            this.startGame();
        }

    }

    startGame(){

        // display quiz
        this.populate();
    }

    populate() {
        if(this.quiz.isEnded()) {
            this.showScores();
        }
        else {
            // show question

            this.fetchAnswerButtons();

            // show options for current question
            let choices = this.quiz.getQuestionIndex().choices;
            console.log(choices);

            for(let i = 0; i < choices.length; i++) {
                let element = document.getElementById("choice" + i);
                element.innerHTML = choices[i];
                this.onGuess("btn" + i, choices[i]);
            }

            this.showProgress();
        }
    }

    onGuess(id, guess) {
        let button = document.getElementById(id);
        button.onclick = () => {
            this.quiz.guessQuestion(guess);
            this.populate();
        }
    }

    showProgress() {
        let currentQuestionNumber = this.quiz.questionIndex +1;
        let element = document.getElementById("progress");
        element.innerHTML = "Spørgsmål " + currentQuestionNumber + " af " + this.quiz.questions.length;
    }

    showScores() {
        let gameOverTemplate = this.ui.gameOverTemplate(this.quiz.score);
        let element = document.getElementById("question");
        element.innerHTML = gameOverTemplate;
        this.buttonsDiv.innerHTML = '';
        this.onResetGame();

    }

    onResetGame(){
        document.getElementById("resetbtn").addEventListener("click", () => {
            this.quiz.reset();
            this.populate();
        });
    }

    fetchAnswerButtons(){
        let element = document.getElementById("question");
        console.log(element);
        // return;
        element.innerHTML = this.quiz.getQuestionIndex().text;
        let choices = this.quiz.getQuestionIndex().choices;
        this.buttonsDiv.innerHTML = this.ui.answerButtons(choices);
    }
}

// create questions
let questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework"),
    new Question("Who was Birdyman ?", ["A singer", "A goat"], "A goat"),

     // new Question("Hvem er Den sejeste?", ["Sultan", "Rania","Rami", "Malika"], "Sultan"),
     // new Question("Hvem er Den Smukkeste?", ["Sultan", "Rania","Rami", "Malika"], "Rania"),
     // new Question("Hvem er Den Sødeste?", ["Sultan", "Rania","Rami", "Malika"], "Malika"),
     // new Question("Hvem er Den mest fjollede?", ["Sultan", "Rania","Rami", "Malika"], "Rami"),
     // new Question("Hvem høre aldrig efter?", ["Sultan", "Rania","Rami", "Malika"], "Sultan"),
     // new Question("Hvem laver den bedste mad?", ["Sultan", "Rania","Rami", "Malika"], "Rania"),
     // new Question("Hvem ved mest om computere ?", ["Sultan", "Rania","Rami", "Malika"], "Rami"),
     // new Question("Hvem prutter hele tiden ?", ["Sultan", "Rania","Rami", "Malika"], "Rania"),
     // new Question("Hvem vil helst ikke snakke om morgenen ?", ["Sultan", "Rania","Rami", "Malika"], "Rami"),
     // new Question("hvem har 1000 spørgsmål om minecraft ?", ["Sultan", "Rania","Rami", "Malika"], "Rami"),
     // new Question("Hvem snakker hele tiden om Corona ?", ["Sultan", "Rania","Asma", "Malika"], "Asma"),
];

let app = new App(questions);

