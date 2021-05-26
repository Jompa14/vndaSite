const gulp      = require('gulp');
const uglifycss = require('gulp-uglifycss')


gulp.task('uglifycss', function () {
  gulp.src('*.css')
    .pipe(uglifycss({
      // "maxLineLen": 200,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

// quando houverem mais tasks podem ser add neste array:
// gulp.task('run', ['uglifycss']);

// gulp.task('watch', function() {
//   gulp.watch('*.css', ['uglifycss'])
// });

// gulp.task('default', 'uglifycss');
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
