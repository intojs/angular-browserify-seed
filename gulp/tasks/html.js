module.exports = function (opts) {

    var gulp = require('gulp'),
    	minifyHTML = require('gulp-minify-html'),
    	plumber = require('gulp-plumber');
 
    gulp.task('html', function() {

        return gulp.src(opts.src)
	        .pipe(plumber({
		    	handleError: function (err) {
		            console.log(err);
		            this.emit('end');
		        }
		    }))
            .pipe(minifyHTML())
            .pipe(gulp.dest(opts.dest));
    });
};