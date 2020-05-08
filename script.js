function fetchData(url) {
  document.querySelector(".container").innerHTML = "<div>Loading data... This may take a while the first time...</div>";
  fetch(url)
    .then(
      function (response) {
        if (response.status !== 200) {
          document.querySelector(".container").innerHTML = "Problem encountered: Status Code " + response.status;
          return;
        }
        response.json().then(function (data) {
          displayHTML(data);
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

//start app with all 100 movies
fetchData('https://jsroutes.oluwatisheelesi.repl.co/');


function displayHTML(texting) {
  var textingContainer = document.querySelector(".container");
  var textingHTML = '';
  texting.forEach(function (texting) {
    textingHTML = textingHTML + `
    <div class="card">
      <div class="texting-info">
        <div class="texting-title">${texting.title}</div>
        <div class="texting-year">${texting.year}</div>
        <div class="texting-description">${texting.description}</div>
      </div>
      <div class="texting-meta">Average Cost: ${texting.avg_cost}
      </div>
	  </div>
  `
  });

  textingContainer.innerHTML = textingHTML;
}