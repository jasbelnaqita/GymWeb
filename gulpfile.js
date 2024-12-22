const gulp = require('gulp');

require('./gulp/dev.js');

gulp.task(
  'default',
  gulp.series(
    'clean',
    gulp.parallel('html', 'sass', 'images', 'fonts', 'files', 'js'),
    gulp.parallel('server', 'watch')
  )
);
