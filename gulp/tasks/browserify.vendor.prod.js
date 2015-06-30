module.exports = function(opts) {

	var gulp = require('gulp'),
 		browserify = require('browserify'),
 		source = require('vinyl-source-stream'),
 		buffer = require('vinyl-buffer'),
 		uglify = require('gulp-uglify');

	gulp.task('browserifyVendorProd', function() {

	    var b = browserify();

	    opts.libs.forEach(function(lib) {
	        b.require(lib);
	    });

	    return 	b
	    	.bundle()
	        .pipe(source(opts.source))
	        .pipe(buffer())
	        .pipe(uglify())
	        .pipe(gulp.dest(opts.dest));
	});
};