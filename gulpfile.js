const gulp      = require('gulp');
const uglifycss = require('gulp-uglifycss');
const sass      = require('gulp-sass');

sass.compiler = require('node-sass')
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.src/css/'));
});


gulp.task('uglifycss', function () {
  return gulp.src('./src/css/*.css')
    .pipe(uglifycss({
      // "maxLineLen": 200,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});


gulp.task("run", gulp.series('sass', 'uglifycss'));

gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/css/*.css', gulp.parallel('uglifycss'));
});

gulp.task('default', gulp.parallel('run','watch'));
