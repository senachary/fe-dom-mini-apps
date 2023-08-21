

// const jokes = []


// const jokesList = document.getElementById("new-joke");

// function addJoke(joke) {
//     const newJoke = document.createElement("li")
//     newJoke.innerText = joke
//     jokesList.innerText(newJoke)
// }

// jokes.forEach(addJoke)

// const jokeButton = document.getElementById("joke-button")

// jokeButton.addEventListener("click", (mouseEvent) => {
//     addJoke("testJoke")
// })

const jokeButton = document.getElementById("joke-button")
const jokeList = document.getElementById("new-joke")

async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    })
    return response.json()

};

//fetchJoke();

async function clickButton() {
    const { joke } = await fetchJoke()
    jokeList.textContent = joke
}

jokeButton.addEventListener("click", clickButton)