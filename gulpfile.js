var gulp = require('gulp'); // deklarujemy zmienna ktora powie ze bedziemy korzystac z paczki gulp ktora zainstalowalismy.
var sass = require('gulp-sass'); // -------------------------""----------------------------- sass gulp

// var sassOptions = {};

gulp.task('sass', function() { // tworzymy taska sass
  return gulp // zwraca funkcje
  .src('sass/**/*.scss') // podajemy zrodlo z ktorego wrzucamy do rury plik scss, kazemu mu przeszikac w nim wszysko
  .pipe(sass({outputStyle:''}).on('error', sass.logError)) // sass powoduje uruchomienia maszyny kompilujacej a nastepne mozemy ustawic parametr np. expanded jesli kompilator natrafi na blad wywali nam blad
  .pipe(gulp.dest('css/')) // podajemy katalog do ktorego ma wyleciec z rury przetworzony plik css

});

gulp.task('watch', ['sass'], function (){ // tworzymy task wach ktory obserwuje czy zachodza zmiany w pliku style.scss a jesli tak to ...
  gulp.watch('sass/**/*.scss', ['sass']); // ma automatycznie zmienic style.css

})
