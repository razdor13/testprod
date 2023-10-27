"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Cкільки фільмів ви подивились?");
        while (
            personalMovieDB.count == "" ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt("Cкільки фільмів ви подивились?");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("мало");
        } else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
            console.log("непогано");
        } else if (personalMovieDB.count >= 30) {
            console.log("Багато подивився, красень");
        } else {
            console.log("якась помилка");
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    togleVisibleMB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYouGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш улюблений жанр під номером ${i}`);
            if (genre === "" || genre === null) {
                console.log(
                    "Ви нічого не ввели , або ввели не коректні данні."
                );
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр #${i + 1} це - ${item}`);
        });
    },
};
