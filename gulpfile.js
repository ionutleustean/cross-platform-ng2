const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series(gulp.parallel('other', 'webpack:dist')));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);


gulp.task('cordova:browser', gulp.series('clean', 'clean-cordova', 'build', 'copy-cordova', 'prepare:cordova:browser'));
gulp.task('cordova:android', gulp.series('clean', 'clean-cordova', 'build', 'copy-cordova', 'prepare:cordova:android'));
gulp.task('cordova:ios', gulp.series('clean', 'clean-cordova', 'build', 'copy-cordova', 'prepare:cordova:ios'));


gulp.task('electron', gulp.series('clean', 'clean-electron', 'build', 'copy-electron', 'prepare:electron'));
gulp.task('electron:mac', gulp.series('clean', 'clean-electron', 'build', 'copy-electron', 'prepare:electron:mac'));
gulp.task('electron:win', gulp.series('clean', 'clean-electron', 'build', 'copy-electron', 'prepare:electron:win'));



function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
  done();
}
