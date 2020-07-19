class UI{

	resetTemplate(){
		return `<div id="quiz">
            <h1>Quiz</h1>
            <hr style="margin-bottom: 20px">

            <p id="question"></p>

            <div class="buttons" id="buttons">
            </div>

            <hr style="margin-top: 50px">
            <footer>
                <p id="progress"></p>
            </footer>
        </div>`;
	}

	gameOverTemplate(score){
		return `
		<h1>Score Resultater</h1>
		<h2 id='score'> Your scores: ${score} </h2>
		<button id="resetbtn">
			<span>Prøv igen</span>
		</button>`;
	}

	answerButtons(choices){
		// console.log(choices);
		let buttons = "";

		choices.forEach((choice, i) => {
			 buttons += `<button id="btn${i}"><span id="choice${i}">${choice}</span></button>`;
		});

		return buttons;

	}

	scoreTable(){
		return `<table class="table">
				  <thead>
				    <tr>
				      <th scope="col">Spørgsmål</th>
				      <th scope="col">Rigtige svar</th>
				      <th scope="col">Dit Svar</th>
				    </tr>
				  </thead>
				  <tbody>
				   ${this.tableRow()}
				  </tbody>
				</table>`;
	}

	tableRow(questions){
		questions.forEach((question, index) => {
			return `<tr>
				      <th>Question</th>
				      <td>Answer</td>
				      <td>rigtige svar her</td>
				    </tr>`;
		});
	}
}