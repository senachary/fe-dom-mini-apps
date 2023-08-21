const startButton = document.getElementById("start-button");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const questionList = document.getElementById("new-question");
const score = document.getElementById("quiz-score");



//fetching question data
async function fetchQuestion() {
  const response = await fetch("https://opentdb.com/api.php?amount=10&type=boolean", {
    headers: {
      Accept: "application/json",
    },
  });
  return response.json();
}



//call the startQuiz function
async function startQuiz() {
    const data = await fetchQuestion();
    let currentScore = 0;
    let currentQuestion = 0;
    score.textContent = currentScore
    showQuestion()
}

//Function to display the Questions
function showQuestion() {
    //determine if question number is less than question array length
    if (currentQuestion < data.results.length) {
        const question = data.results[currentQuestion].question;
        const correctAnswer = data.results[currentQuestion].correct_answer;

        questionList.textContent = question;
        //user clicks true
        trueButton.addEventListener('click', function () {
            checkAnswer("True", correctAnswer)
        });
        //user clicks false
        falseButton.addEventListener('click', function () {
            checkAnswer("False", correctAnswer)
        });

    } else {
        questionList.textContent = "Quiz Comepleted"
    }
    
}
//TODO
//write checkAnswer function

function checkAnswer(answerGiven, correctAnswer) {
    
}

//start the quiz with start button
startButton.addEventListener("click", startQuiz);


/*Other functionality:
Use category to display image
Change to multichoice (A, B, C, D)
Add more players (1-4)
*/