const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');

gulp.task('clean', function (done) {
  if (fs.existsSync('./dist/')) {
    return gulp.src('./dist/', { read: false }).pipe(clean({ force: true }));
  }
  done();
});

gulp.task('html', function () {
  return gulp
    .src('./src/*.html')
    .pipe(
      fileInclude({
        refix: '@@',
        basepath: '@file',
      })
    )
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('images', function () {
  return gulp.src('./src/img/**/*').pipe(gulp.dest('./dist/img/'));
});

const serverOptions = {
  livereload: true,
  open: true,
};

gulp.task('server', function () {
  return gulp.src('./dist/').pipe(server(serverOptions));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('./src/**/*.html', gulp.parallel('html'));
  gulp.watch('./src/img/**/*', gulp.parallel('images'));
});
