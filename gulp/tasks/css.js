module.exports = function(opts) {

	var gulp = require('gulp'),
		minifyCss = require('gulp-minify-css'),
		sourcemaps = require('gulp-sourcemaps');
	 
	gulp.task('css', function() {
	  return gulp.src(opts.src)
	    .pipe(sourcemaps.init())
	    .pipe(minifyCss({
	    	'compatibility': 'ie8'
	    }))
	    .pipe(sourcemaps.write())
	    .pipe(gulp.dest(opts.dest));
	});
};