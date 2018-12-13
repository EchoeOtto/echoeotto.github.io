var gulp = require('gulp');
var sass = require('gulp-sass');

var sassFiles = 'src/scss/*.scss';
var cssDest = 'src/css/';

gulp.task('build', function() {
  return gulp.src(sassFiles)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(cssDest));
});

gulp.task('default', function() {
  gulp.watch(sassFiles, gulp.series('build'));
});
