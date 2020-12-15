let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Какое количество фильмов вы посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Какое количество фильмов вы посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: [],
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    }else {
        console.log("Error");
    }
}
detectPersonalLevel();

function writeYourGeners() {
    for (let i = 1; i < 4; i++){
        const gener = prompt(`Ваш любимы жанр по номером ${i}`);
        if (gener != null && gener != "" && isNaN(gener)){
            personalMovieDB.genres[i - 1] = gener;
            console.log("Gener is written");
        }else{
            i--;
            console.log("Enter correct gener");
        }
    }
}
writeYourGeners();

function showDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showDB(personalMovieDB.private);

