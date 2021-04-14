document.querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complements")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".complement").innerText = data.complements;
      })
      .catch(function(err) {
        console.error(err);
      });
  });


