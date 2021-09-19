const films = [
  {
    title: 'Bliss',
    image: './image/film-1.png',
    date: 2021,
  },
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
    title: 'WandaVision',
    image: './image/tv-1.png',
    date: '2021',
  },
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
  {
    title: 'Rick and Morty',
    image: './image/tv-6.jpg',
    date: '2013',
  },
  {
    title: 'Lucifer',
    image: './image/tv-7.jpg',
    date: '2015',
  },
  {
    title: 'Money Heist',
    image: './image/tv-8.jpg',
    date: '2017',
  },
  {
    title: 'Dexter',
    image: './image/tv-9.jpg',
    date: '2006',
  },
  {
    title: 'Breaking Bad',
    image: './image/tv-10.jpg',
    date: '2008',
  },
];

const movieContainer = document.querySelector('.movie__section--cards');
const tvContainer = document.querySelector('.tv__section--cards');

function movieAddToHtml(film) {
  const html = `
     <span class="movie__section--card">
        <img src="${film.image}" alt="film-1">
        <span class="movie__card--title">${film.title}</span>
        <span class="movie__card--premier">${film.date}</span>
    </span>
  `;
  movieContainer.innerHTML += html;
}

function tvAddToHtml(tv) {
  const html = `
    <span class="movie__section--card">
        <img src="${tv.image}" alt="film-1">
        <span class="movie__card--title">${tv.title}</span>
        <span class="movie__card--premier">${tv.date}</span>
    </span>
  `;
  tvContainer.innerHTML += html;
}

films.forEach(film => {
  movieAddToHtml(film);
});

tvs.forEach(tv => {
  tvAddToHtml(tv);
});

// * Search app
const searchInput = document.querySelector('.movie__section--search');
const searchIcon = document.querySelector('.search-icon');

const search = event => {
  const searchText = event.target.value.toLowerCase();
  const newFilms = films.filter(function (film) {
    return film.title.toLowerCase().indexOf(searchText) !== -1;
  });

  movieContainer.innerHTML = null;

  newFilms.forEach(film => {
    console.log(film);
    movieAddToHtml(film);
  });
};

searchInput.addEventListener('change', search);
searchIcon.addEventListener('click', search);

// * Auto change
const imgs = [
  {
    image: './image/banner3.png',
    title: "Zack Snyder's Justice League",
    description:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
  },
  {
    image: './image/banner2.png',
    title: 'Wonder Woman 1984',
    description:
      'A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.',
  },
  {
    image: './image/banner.jpg',
    title: 'Godzilla vs. Kong',
    description:
      'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
  },
];
