module.exports = function (opts) {

    var gulp = require('gulp'),
    	minifyHTML = require('gulp-minify-html');
 
    gulp.task('html', function() {

        return gulp.src(opts.src)
            .pipe(minifyHTML())
            .pipe(gulp.dest(opts.dest));
    });
};