import { movies } from "./new_database.js";

let container = document.getElementById("movies");

function show(movies) {
  container.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    const element = movies[i];

    let card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    let decor = document.createElement("div");
    decor.classList.add("cir", "cir1");
    card.appendChild(decor);

    let rate = document.createElement("h1");
    decor.appendChild(rate);
    rate.textContent = Math.floor(element.vote_average * 10) / 10;

    let decor1 = document.createElement("div");
    decor1.classList.add("cir", "cir2");
    card.appendChild(decor1);

    let bottom_left = document.createElement("h1");
    decor1.appendChild(bottom_left);
    bottom_left.textContent = element.release_date.split("-")[0];

    let img = document.createElement("img");
    card.appendChild(img);
    img.src = `https://image.tmdb.org/t/p/w342${element.poster_path}`;

    let moviename = document.createElement("p");
    card.appendChild(moviename);
    moviename.textContent = element.title;
  }
}

document.getElementById("btn_all").addEventListener("click", () => {
  show(movies);
});
document.getElementById("btn_action").addEventListener("click", () => {
  show(movies.filter((e) => e.genre_ids.includes(28)));
});
document.getElementById("btn_comedy").addEventListener("click", () => {
  show(movies.filter((e) => e.genre_ids.includes(35)));
});
document.getElementById("btn_drama").addEventListener("click", () => {
  show(movies.filter((e) => e.genre_ids.includes(18)));
});
document.getElementById("btn_horror").addEventListener("click", () => {
  show(movies.filter((e) => e.genre_ids.includes(27)));
});
document.getElementById("btn_scfiction").addEventListener("click", () => {
  show(movies.filter((e) => e.genre_ids.includes(878)));
});
document.getElementById("btn_anima").addEventListener("click", () => {
  show(movies.filter((e) => e.genre_ids.includes(16)));
});
document.getElementById("btn_count").addEventListener("click", () => {
  show(movies.filter((e) => e.vote_average > 7));
});
document.getElementById("btn_recent").addEventListener("click", () => {
  show(movies.filter((e) => e.release_date > "2023"));
});

show(movies);
