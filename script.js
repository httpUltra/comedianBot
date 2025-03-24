const jokeButton = document.getElementById('requestJokeButton');
let jokeIndex = 0;
const jokes = [
    ["What did Cinderella say when she got to the ball?", "*gags*"],
    ["Why are ghosts such bad liars?", "They are easy to see through"]
];

const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";
  
    const avatar = document.createElement("div");
    avatar.className = "fas fa-robot message-avatar";
  
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;
  
    messageDiv.append(avatar, contentDiv);
    chatContent.appendChild(messageDiv);
  
    chatContent.scrollTop = chatContent.scrollHeight;
  }

appendBotMessage(
    "Hello. Want to hear a joke?"
);

function requestJoke(){
    appendUserMessage();
    if (jokeIndex >= jokes.length){
        appendBotMessage("Sorry, I'm out of jokes for now!");
        return;
    }
    jokeButton.style.display = "none";
    setTimeout(function () {
        appendBotMessage("Ok, got one.");
    }, 1000);

    setTimeout(function() {
        appendBotMessage(jokes[jokeIndex][0]);
    }, 1500);

    setTimeout(function() {
        appendBotMessage(jokes[jokeIndex][1])
        jokeIndex = jokeIndex + 1;
        jokeButton.style.display = "inline-block";
    }, 2000)
}

function appendUserMessage() {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message user-message";

    const avatar = document.createElement("div");
    avatar.className = "fas fa-smile message-avatar";

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = ("Tell me a joke!");

    messageDiv.append(avatar, contentDiv);
    chatContent.appendChild(messageDiv);
}