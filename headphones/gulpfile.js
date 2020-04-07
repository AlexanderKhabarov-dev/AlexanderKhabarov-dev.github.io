var gulp            = require('gulp');
var sass            = require('gulp-sass');
var pug             = require('gulp-pug');
var imagemin        = require('gulp-imagemin');
const del           = require('del');
var autoprefixer    = require('gulp-autoprefixer');
var browserSync     = require('browser-sync').create();

// сжатие изображений
function compress(done){
    gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
    done();
}

// транспилирование в css
function buildCSS () {
   return gulp.src('src/scss/main.scss')
   .pipe(sass())
   .pipe(gulp.dest('build/css/'))
   .pipe(browserSync.stream())
 };

// транспилирование в html
function buildHTML() {
   let data = {
      revision: new Date().getTime()
   };  
   return gulp.src('src/pug/*.pug')
   .pipe(pug({
      locals: data,
      pretty: true
   }))
   .pipe(gulp.dest('build/'))						
   .pipe(browserSync.reload({
       stream: true						
   }));
};

//автопрефиксер
// function autoprefix(done){
//    gulp.src('src/css/*.css')
//    .pipe(autoprefixer({
//        cascade: false
//    }))
//    .pipe(gulp.dest('build/css/'))
//    done();
// }

//удаление файлов
function clean(done) {
   return del(['build/css/*','build/*.html','build/img/*' ])
   done();
}

// автоматические изменения
function watch(){
   browserSync.init({
      server:{
         baseDir:'build/'
      }
   })
   gulp.watch('./src/pug/**/*.pug', gulp.series('views'));
   gulp.watch('./src/scss/**/*.scss', buildCSS);
   gulp.watch('build/index.html').on('change', browserSync.reload);
}

gulp.task('del', clean);
gulp.task('imageminIMG', compress);
gulp.task('sass', buildCSS);
gulp.task('views', buildHTML);
gulp.task('watch', watch);
//gulp.task('autoprefix', autoprefix);

gulp.task('default',gulp.series(
   'del',
   'imageminIMG',
   'sass',
   'views',
   //'autoprefix',
   'watch'
));