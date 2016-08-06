
const gulp = require('gulp');
const shell = require('gulp-shell');
const clean = require('gulp-clean');


gulp.task('copy-electron', function () {
  return gulp
    .src('build/**/*')
    .pipe(gulp.dest('electron/application'));
});

gulp.task('clean-electron', function () {
  return gulp
    .src('electron/application/*')
    .pipe(clean());
});


gulp.task('prepare:electron:mac', function () {
  return gulp
    .src('/')
    .pipe(shell('node_modules/.bin/build -m'))
});

gulp.task('prepare:electron:win', function () {
  return gulp
    .src('/')
    .pipe(shell('node_modules/.bin/build -w'))
});


gulp.task('prepare:electron', function () {
  return gulp
    .src('/')
    .pipe(shell('./node_modules/.bin/electron ./electron/'))
});

