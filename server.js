const express = require("express");
const path = require("path");
const port = process.env.port || 8080;


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

  const facts = [
    "You love pasta",
    "You love shrimp",
    "You love black",
    "You love Nicki Minaj",
    "You a thick joint!",
    "You love pepperoni pizza",
    "You love Britney Spears"
  ];

function getRandomComplement() {
  const randomComplement = Math.floor(Math.random() * complements.length);
  return complements[randomComplement];
}
function getRandomInsult() {
    const randomInsult = Math.floor(Math.random() * insults.length);
    return insults[randomInsult];
  }
  function getRandomFact() {
    const randomFact= Math.floor(Math.random() * facts.length);
    return facts[randomFact];
  }
const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
//In this case, we're getting the whole path to it so Express can find it. __dirname is a special Node variable that's the folder of where the server.js file is. We know that index.html is in the same folder, so we're saying serve the index.html file found in the same directory as server.js.

app.get("/complement.html", function(req, res) {
  res.sendFile(path.join(__dirname + '/complement.html'));
});
app.get("/babyliza.html", function(req, res) {
    res.sendFile(path.join(__dirname + '/babyliza.html'));
  });
//Creates a new route that is pulling from the html file of same name

app.get("/insults", function(req, res) {
    res
      .json({
        insult: getRandomInsult()
      })
      .end();
  });

  app.get("/complements", function(req, res) {
    res
      .json({
        complements: getRandomComplement()
      })
      .end();
  });

  app.get("/facts", function(req, res) {
    res
      .json({
        facts: getRandomFact()
      })
      .end();
  });

app.use("/public", express.static("./public"));

app.listen(port);
console.log("listening on http://localhost:3000");