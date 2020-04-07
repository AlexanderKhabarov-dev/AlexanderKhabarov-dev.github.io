var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//из SCSS в CSS
function buildCSS(){
    return gulp.src('scss/*.scss')
   .pipe(sass())
   .pipe(gulp.dest('css/'))
   .pipe(browserSync.stream())
}

//Лайв сервер
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('scss/**/*.scss', buildCSS);
    gulp.watch('*.html').on('change', browserSync.reload);
};

//таски
gulp.task('sass', buildCSS);
gulp.task('watch', watch)
gulp.task('default',gulp.parallel('sass', 'watch'));