const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp
    .src([
      './dist/runtime-es2015.js',
      './dist/polyfills-es2015.js',
      './dist/main-es2015.js'
    ])
    .pipe(concat('test-two.js'))
    .pipe(gulp.dest('./dist'));
});
