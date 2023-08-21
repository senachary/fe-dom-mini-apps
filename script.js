const jokeButton = document.getElementById("joke-button");
const jokeList = document.getElementById("new-joke");

async function fetchJoke() {
  const response = await fetch("https://opentdb.com/api.php?amount=10", {
    headers: {
      Accept: "application/json",
    },
  });
  return response.json();
}

//fetchJoke();

async function clickButton() {
  const data = await fetchJoke();
  jokeList.textContent = data.results[0].question;
}

jokeButton.addEventListener("click", clickButton);
