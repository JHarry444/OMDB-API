const KEY = "335035be";
const searchBar = document.getElementById("searchBar");
const output = document.getElementById("output");


function search() {
    fetch("http://www.omdbapi.com/?apikey=" + KEY + "&s=" + searchBar.value)
        .then(res => res.json())
        .then(json => renderFilms(json))
        .catch(err => console.error(err));
}

function emptyFilms() {
    output.innerHTML = "";
}

function renderFilms(json) {
    emptyFilms();
    json.Search.forEach(film => {
        console.log(film);
        let card = document.createElement("div");
        card.addEventListener('click', () => window.location.href = './film.html?id=' + film.imdbID);
        card.className = "card col-3 m-3";
        let title = document.createElement('h3');
        title.innerText = film.Title;
        title.className = "card-title";
        card.appendChild(title);
        let poster = document.createElement("img");
        poster.src = film.Poster;
        poster.className = "card-image";
        card.appendChild(poster);
        let body = document.createElement("p");
        body.innerText = "";
        body.className = "card-body";
        card.appendChild(body);
        let footer = document.createElement("small");
        footer.innerText = "Released: " + film.Year;
        footer.className = "card-footer";
        card.appendChild(footer);
        output.appendChild(card);
    });
}