const startButton = document.getElementById("start-button");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const questionList = document.getElementById("new-question");
const score = document.getElementById("quiz-score");
const questionNumber = document.getElementById("quiz-question");
const categoryImage = document.getElementById("category");

let currentScore = 0;
let currentQuestion = 0;
let data;

//fetching question data
async function fetchQuestion() {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&type=boolean`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  return response.json();
}

//call the startQuiz function
async function startQuiz() {
  data = await fetchQuestion();
  currentScore = 0;
  currentQuestion = 1;
  score.innerText = currentScore;
  questionNumber.innerText = currentQuestion;
  const categoryType = data.results[currentQuestion].category;
  if (categoryType.startsWith("Enter")) {
    categoryImage.src = `./images/entertainment.png`;
  }
  if (categoryType.startsWith("General")) {
    categoryImage.src = `./images/general.png`;
  }
  if (categoryType.startsWith("Science")) {
    categoryImage.src = `./images/science.png`;
  }
  if (categoryType.startsWith("Politics")) {
    categoryImage.src = `./images/politics.png`;
  }
  if (categoryType.startsWith("Animals")) {
    categoryImage.src = `./images/animals.png`;
  }
  if (categoryType.startsWith("Sports")) {
    categoryImage.src = `./images/sports.png`;
  }

  trueButton.addEventListener("click", answerButtonClick);
  falseButton.addEventListener("click", answerButtonClick);
  showQuestion();
}

function answerButtonClick(event) {
  const answerGiven = event.target.id === "true-button" ? "True" : "False";
  const correctAnswer = data.results[currentQuestion].correct_answer;
  checkAnswer(answerGiven, correctAnswer);
}

//Function to display the Questions
function showQuestion() {
  //determine if question number is less than question array length
  console.log(data.results[currentQuestion]);
  if (currentQuestion < data.results.length) {
    const question = data.results[currentQuestion].question;
    const correctAnswer = data.results[currentQuestion].correct_answer;
    const categoryType = data.results[currentQuestion].category;
    if (categoryType.startsWith("Enter")) {
      categoryImage.src = `./images/entertainment.png`;
    }
    if (categoryType.startsWith("General")) {
      categoryImage.src = `./images/general.png`;
    }
    if (categoryType.startsWith("Science")) {
      categoryImage.src = `./images/science.png`;
    }
    if (categoryType.startsWith("Politics")) {
      categoryImage.src = `./images/politics.png`;
    }
    if (categoryType.startsWith("Animals")) {
      categoryImage.src = `./images/animals.png`;
    }
    if (categoryType.startsWith("Sports")) {
      categoryImage.src = `./images/sports.png`;
    }

    questionList.innerText = question;
  } else {
    questionList.innerText = "Quiz Completed";
  }
}
//TODO
//write checkAnswer function

function checkAnswer(answerGiven, correctAnswer) {
  if (answerGiven === correctAnswer) {
    currentScore += 1;
  }
  currentQuestion += 1;
  score.innerText = currentScore;
  questionNumber.innerText = currentQuestion;
  showQuestion();
}

//start the quiz with start button
startButton.addEventListener("click", startQuiz);

/*Other functionality:
Use category to display image
Change to multichoice (A, B, C, D)
Add more players (1-4)
*/
