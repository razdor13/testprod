"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Cкільки фільмів ви подивились?");
    while (
        numberOfFilms == "" ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
    ) {
        numberOfFilms = +prompt("Cкільки фільмів ви подивились?");
    }
}
start();
1;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один з останніх фільмів що дивились ?").trim();
        const b = prompt("На скільки його оціните?");

        if (a != null && b != null && a != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("мало");
    } else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
        console.log("непогано");
    } else if (personalMovieDB.count >= 30) {
        console.log("Багато подивився, красень");
    } else {
        console.log("якась помилка");
    }
}
detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYouGenres();
