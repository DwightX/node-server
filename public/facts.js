document.querySelector(".request-fact")
.addEventListener("click", function() {
  fetch("/facts")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      document.querySelector(".fact").innerText = data.facts;
    })
    .catch(function(err) {
      console.error(err);
    });
});