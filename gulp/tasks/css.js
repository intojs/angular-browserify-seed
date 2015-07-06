module.exports = function(opts) {

	var gulp = require('gulp'),
		minifyCss = require('gulp-minify-css'),
		sourcemaps = require('gulp-sourcemaps'),
		plumber = require('gulp-plumber');
	 
	gulp.task('css', function() {
	  return gulp.src(opts.src)
	  	.pipe(plumber({
	        handleError: function (err) {
	            console.log(err);
	            this.emit('end');
	        }
	    }))
	    .pipe(sourcemaps.init())
	    .pipe(minifyCss({
	    	'compatibility': 'ie8'
	    }))
	    .pipe(sourcemaps.write())
	    .pipe(gulp.dest(opts.dest));
	});
};