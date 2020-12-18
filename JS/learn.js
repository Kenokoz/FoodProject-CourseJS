const personalMovieDB = {
    count: 0,
    movies: {},
    actors: [],
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Какое количество фильмов вы посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Какое количество фильмов вы посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        }else if (personalMovieDB.count >= 30){
            console.log("Вы киноман");
        }else {
            console.log("Error");
        }
    },
    writeYourGeners: function() {
        for (let i = 1; i < 2; i++){
            const geners = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (geners != null && geners != "" && isNaN(geners)){
                personalMovieDB.genres = geners.split(", ");
                personalMovieDB.genres.sort();
            }else{
                i--;
                console.log("Enter correct gener");
            }
        }
        personalMovieDB.genres.forEach((gener, index) => {
            console.log(`Любимый жанр №${index + 1} - это ${gener}`);
        });
    },
    showDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.private ? personalMovieDB.private = false : personalMovieDB.private = true;
    }
};

personalMovieDB.writeYourGeners();


