var myQuestions = [
	{
		question: "Qual é a origem do ballet clássico?",
		answers: {
			a: 'Inglaterra',
			b: 'Itália',
			c: 'França'
		},
		correctAnswer: 'b'
	},
	{
		question: "Qem inventou as sapatilhas de pontas?",
		answers: {
			a: 'Iadora Duncan',
			b: 'Carlota Grisi',
			c: 'Felipe Taglione',
			d: 'Carlo Blasis'
		},
		correctAnswer: 'c'
	},
	{
		question: "Qual o nome do movimento que as pernas são dobradas minimamente?",
		answers: {
			a: 'Demi-Plié',
			b: 'Grand Plié',
			c: 'Plié',
			d: 'Fondu'
		},
		correctAnswer: 'a'
    },
    {
		question: "Quem foi o autor dos ballets: A Bela Adormercida, Quebra-Nozes e o lago dos Cisnes?",
		answers: {
			a: 'Roudolf Laban',
			b: 'Marius Petipa',
			c: 'Tchaikowsky'
		},
		correctAnswer: 'b'
	},
	{
		question: "Qual a posiição que a coxa é levantada paara cima e que a ponta do pé fica encostada levemente no joelho?",
		answers: {
			a: 'Passé',
			b: 'Tendu',
			c: 'Retiré',
			d: 'Plié'
		},
		correctAnswer: 'c'
	},
	{
		question: "Qual é a bailarina que inmortalizou o solo A Morte do Cisne?",
		answers: {
			a: 'Anna Pavlova',
			b: 'Ruth St Denis',
			c: 'Cecília Karche',
			d: 'Catarina de Mésici'
		},
		correctAnswer: 'a'
	}
];

var quizContainer = document.getElementById('perguntas');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; 
		
		// para cada questão
		for(var i=0; i<questions.length; i++){
			
			
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + 'acertos' + ' de '+ questions.length+'erros';
		}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
