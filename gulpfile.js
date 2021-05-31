const gulp      = require('gulp');
const uglifycss = require('gulp-uglifycss');
const sass      = require('gulp-sass');


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


gulp.task('uglifycss', function () {
  return gulp.src('*.css')
    .pipe(uglifycss({
      // "maxLineLen": 200,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});


gulp.task("run", gulp.series('sass', 'uglifycss'));

gulp.task('watch', function() {
    gulp.watch('./sass/*.sass', gulp.series('sass'));
    gulp.watch('*.css', gulp.parallel('uglifycss'));
});

gulp.task('default', gulp.parallel('run','watch'));
