const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];
const insults = [
    "You'r ugly",
    "You'r Fat",
    "Damn nigga put the burder down"
  ];

function getRandomComplement() {
  const randomComplement = Math.floor(Math.random() * complements.length);
  return complements[randomComplement];
}
function getRandomInsult() {
    const randomInsult = Math.floor(Math.random() * insults.length);
    return insults[randomInsult];
  }
const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
//In this case, we're getting the whole path to it so Express can find it. __dirname is a special Node variable that's the folder of where the server.js file is. We know that index.html is in the same folder, so we're saying serve the index.html file found in the same directory as server.js.

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.get("/insults", function(req, res) {
    res
      .json({
        insult: getRandomInsult()
      })
      .end();
  });

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");