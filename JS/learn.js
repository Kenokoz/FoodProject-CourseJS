let numberOfFilms;
while (!numberOfFilms) {
    numberOfFilms = +prompt("Какое количество фильмов вы посмотрели?", "");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: [],
    genres: [],
    private: false
};

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
}else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
}else {
    console.log("Error");
}

for (let i = 0; i < 2; i++) {
    const lastMovie = prompt("Один из последних просмотренных фильмов?");
    const rateMovie = +prompt("На сколько оцените его?");

    if(lastMovie != null && rateMovie != "" && lastMovie != "" && rateMovie != null && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = rateMovie;
        console.log("done");
    }else {
        i--;
        console.log("error");
    }
}

console.log(personalMovieDB);
