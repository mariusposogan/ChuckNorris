$(onHtmlLoaded);
function onHtmlLoaded() {
    var jokesRootUrl = 'https://api.chucknorris.io/jokes/random';
    var newButton = document.getElementById("new-joke");
    var count = 1;
    
    getJokeFromAPI(jokesRootUrl, count);
    newButton.addEventListener("click", function(event) {
        count++;
        getJokeFromAPI(jokesRootUrl, count);
    });
}

function getJokeFromAPI(jokesRootUrl, count) {
    $.ajax({
        url: jokesRootUrl,
        method: 'GET', 
    })
    .then(insertJoke)
    .then(counter(count));
    
}

function insertJoke(response) {
    var jokeText = document.getElementById("joke-text");
    jokeText.innerHTML = response.value;
}

function counter(count) {
    console.log("In this sesssion you've read " + count + " Chuck Norris jokes!")
}



