"use strict";
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.count = +prompt("Cкільки фільмів ви подивились?");

for (let i = 0; i < 2; i++) {
    const a = prompt("Один з останніх фільмів що дивились ?");
    const b = prompt("На скільки його оціните?");

    if (a != null && b != null && a != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("мало");
} else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
    console.log("непогано");
} else if (personalMovieDB.count >= 30) {
    console.log("Багато подивився, красень");
} else {
    console.log("якась помилка");
}

console.log(personalMovieDB);
