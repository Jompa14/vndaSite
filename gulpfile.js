const gulp      = require('gulp');
const uglifycss = require('gulp-uglifycss')


gulp.task('uglifycss', function () {
  return gulp.src('*.css')
    .pipe(uglifycss({
      // "maxLineLen": 200,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

// quando houverem mais tasks podem ser add dentro da series():
gulp.task("run", gulp.series("uglifycss"));

gulp.task('watch', function() {
    gulp.watch('*.css', gulp.parallel('uglifycss'));
});

gulp.task('default', gulp.parallel('run','watch'));
