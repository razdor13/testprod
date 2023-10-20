const numberOfFilms = +prompt("Cкільки фільмів ви подивились?");

const personalMovieDB = {
    count: 1,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("останній фільм що дивились ?"),
    b = prompt("як оціните його?"),
    c = prompt("останній фільм що дивились ?");
d = prompt("як оціните його?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
