const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp
    .src(['./dist/runtime.js', './dist/polyfills.js', './dist/main.js'])
    .pipe(concat('test-two.js'))
    .pipe(gulp.dest('./dist'));
});
