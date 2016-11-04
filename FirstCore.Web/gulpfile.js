/// <binding BeforeBuild='script' />
//var gulp = require('gulp');
var del = require('del');

////yol
//var paths = {
//    scripts: ['script/**/*.js', 'script/**/*.ts', 'script/**/*.map'],
//};

//gulp.task('clean', function () {
//    return del(['wwwroot/js/**/*']);
//});

//gulp.task('default', function () {
//    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/js'))
//});





var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');  // Requires separate installation 

//yol
var paths = {
    scripts: ['script/**/*.js', 'script/**/*.ts', 'script/**/*.map'],
};
gulp.task('clean', function () {
    return del(['wwwroot/js/**/*.ts','wwwroot/js/**/*.js', 'script/**/*.js', 'script/**/*.map']);
});
gulp.task('script', function () {
    var tsResult = gulp.src(paths.scripts)
        .pipe(ts({
            declaration: true
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest('wwwroot/js/ts')),
        tsResult.js.pipe(gulp.dest('wwwroot/js/'))
    ]);
});