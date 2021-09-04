const films = [
  {
    title: 'Malcolm & Marie',
    image: './image/film-2.png',
    date: '2021',
  },
  {
    title: 'Framing Britney...',
    image: './image/film-3.png',
    date: '2021',
  },
  {
    title: 'Wonder Woman...',
    image: './image/film-4.png',
    date: '2020',
  },
  {
    title: 'News of the World',
    image: './image/film-5.png',
    date: '2021',
  },
  {
    title: 'The Little Things',
    image: './image/film-6.png',
    date: '2021',
  },
  {
    title: 'Iron Man',
    image: './image/film-7.png',
    date: '2008',
  },
  {
    title: 'Iron Man 3',
    image: './image/film-8.png',
    date: '2013',
  },
  {
    title: 'Iron Man 2',
    image: './image/film-9.png',
    date: '2010',
  },
  {
    title: 'The Invincible Iron...',
    image: './image/film-10.png',
    date: '2010',
  },
];

const tvs = [
  {
    title: 'The Equalizer',
    image: './image/tv-2.png',
    date: '2021',
  },
  {
    title: 'Attack on Titan',
    image: './image/tv-3.png',
    date: '2020',
  },
  {
    title: 'Crime Scene...',
    image: './image/tv-4.png',
    date: '2020',
  },
  {
    title: 'Invisible City',
    image: './image/tv-5.png',
    date: '2021',
  },
];

const movieContainer = document.querySelector('.movie__section--cards');
const tvContainer = document.querySelector('.tv__section--cards');

function movieAddtoHtml(film) {
  const html = `
     <span class="movie__section--card">
        <img src="${film.image}" alt="film-1">
        <span class="movie__card--title">${film.title}</span>
        <span class="movie__card--premier">${film.date}</span>
    </span>
  `;
  movieContainer.innerHTML += html;
}

function tvAddtoHtml(tv) {
  const html = `
    <span class="movie__section--card">
        <img src="${tv.image}" alt="film-1">
        <span class="movie__card--title">${tv.title}</span>
        <span class="movie__card--premier">${tv.date}</span>
    </span>
  `;
  tvContainer.innerHTML += html;
}

for (let film of films) {
  movieAddtoHtml(film);
}

for (let tv of tvs) {
  tvAddtoHtml(tv);
}
