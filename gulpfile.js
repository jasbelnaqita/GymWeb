const gulp = require('gulp');

gulp.task('hello', function (done) {
  console.log('Hello, from Gulp');
  done();
});

gulp.task('default', gulp.series('hello'));
