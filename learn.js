const numberOfFilms = +prompt("Какое количество фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: [],
    genres: [],
    private: false
};

const lastMovie1 = prompt("Один из последних просмотренных фильмов?");
const rateMovie1 = prompt("На сколько оцените его?");
const lastMovie2 = prompt("Один из последних просмотренных фильмов?");
const rateMovie2 = prompt("На сколько оцените его?");

personalMovieDB.movies[lastMovie1] = rateMovie1;
personalMovieDB.movies[lastMovie2] = rateMovie2;

console.log(personalMovieDB);
