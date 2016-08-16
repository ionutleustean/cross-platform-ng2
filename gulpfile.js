
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

gulp.task('build', function () {
  return gulp
    .src('/')
    .pipe(shell('ng build --prod --output-path=build'))
});

gulp.task('serve', function () {
  return gulp
    .src('/')
    .pipe(shell('ng serve --output-path=build'))
});


gulp.task('clean', function () {
  return gulp
    .src('build/*')
    .pipe(clean());
});

gulp.task('cordova:browser', gulp.series('clean', 'clean-cordova', 'build', 'copy-cordova', 'prepare:cordova:browser'));
gulp.task('cordova:android', gulp.series('clean', 'clean-cordova', 'build', 'copy-cordova', 'prepare:cordova:android'));
gulp.task('cordova:ios', gulp.series('clean', 'clean-cordova', 'build', 'copy-cordova', 'prepare:cordova:ios'));


gulp.task('electron', gulp.series('clean', 'clean-electron', 'build', 'copy-electron', 'prepare:electron'));
gulp.task('electron:mac', gulp.series('clean', 'clean-electron', 'build', 'copy-electron', 'prepare:electron:mac'));
gulp.task('electron:win', gulp.series('clean', 'clean-electron', 'build', 'copy-electron', 'prepare:electron:win'));


