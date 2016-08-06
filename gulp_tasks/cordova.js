
const gulp = require('gulp');
const shell = require('gulp-shell');
const clean = require('gulp-clean');


gulp.task('copy-cordova', function () {
  return gulp
    .src('build/**/*')
    .pipe(gulp.dest('www'));
});

gulp.task('clean-cordova', function () {
  return gulp
    .src('www/*')
    .pipe(clean());
});


gulp.task('prepare:cordova:browser', function () {
  return gulp
    .src('/')
    .pipe(shell('cordova run browser'))
});

gulp.task('prepare:cordova:ios', function () {
  return gulp
    .src('/')
    .pipe(shell('cordova run ios'))
});

gulp.task('prepare:cordova:android', function () {
  return gulp
    .src('/')
    .pipe(shell('cordova run android'))
});
