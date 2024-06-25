const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.status(200).send("Hello Mike's World!");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
});
app.get("/emeril", (request, response) => {
  response.send("Bam!");
});
app.get("/batman", (request, response) => {
  response.send("Do you bleed? You will!");
});
app.get("/tony_stark", (request, response) => {
  response.send("I am Iron-Man");
});
app.get("/jay_z", (request, response) => {
  response.send("I'm not a businessman, I'm a Business MAN!");
});
app.get("/naz", (request, response) => {
  response.send("If I Ruled The World");
});
app.get("/scarface", (request, response) => {
  response.send("Say hello to my little friend");
});
app.get("/kevin_hart", (request, response) => {
  response.send("Say it with your chest!!");
});
app.get("/yoda", (request, response) => {
  response.send("The force is strong in this one!");
});

const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic8", (request, response) => {
  response.send(
    `<h1>${
      magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }</h1>`
  );
});

module.exports = app;
