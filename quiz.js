class Quiz {
	constructor(questions){
		this.score = 0;
		this.questions = questions;
		this.questionIndex = 0; 
	}

	getQuestionIndex(){
		// console.log(this.questions[this.questionIndex]);
		return this.questions[this.questionIndex];
		// console.log(this.questionIndex);
	}

	isEnded(){
		return this.questionIndex === this.questions.length;
	}

	guessQuestion(answer){
		// if correct guess increment score
		if (this.getQuestionIndex().isCorrectAnswer(answer)) {
			this.score++;
		}

		this.questionIndex++;
	}

	reset(){
		this.score = 0;
		this.questionIndex = 0; 
	}

}