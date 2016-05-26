var gulp = require('gulp');

var coffee = require('gulp-coffee');
var del = require('del');

gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('compile', ['clean'], function () {
  return gulp
    .src('app/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('dist/app'));
});

gulp.task('build', ['compile']);
gulp.task('default', ['build']);
