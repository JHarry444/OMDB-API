const KEY = "335035be";
const output = document.getElementById("output");
const id = new URLSearchParams(window.location.search).get('id');

function findByID() {
    fetch("http://www.omdbapi.com/?apikey=" + KEY + "&i=" + id)
        .then(res => res.json())
        .then(json => renderFilm(json))
        .catch(err => console.error(err));
}

function renderFilm(json) {
    console.log(json);
    let card = document.createElement("div");
    card.className = 'card w-50 m-auto mt-5';
    let title = document.createElement('h3');
    title.className = 'card-title pl-1 pt-1';
    title.innerText = json.Title;
    card.appendChild(title);
    let image = document.createElement('img');
    image.className = 'card-image-left';
    image.src = json.Poster;
    card.appendChild(image);
    let body = document.createElement('div');
    body.className = 'card-body';
    let content = document.createElement('ul');
    content.className = 'list-group list-group-flush';
    for (let k in json) {
        let item = document.createElement('li');
        item.className = 'list-group-item';
        item.innerText = `${k}: ${json[k]}`;
        content.appendChild(item);
    }
    body.appendChild(content);
    card.appendChild(body);
    let footer = document.createElement('div');
    footer.className = 'card-footer';
    output.appendChild(card);
}