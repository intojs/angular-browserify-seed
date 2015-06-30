module.exports = function(opts) {

	var gulp = require('gulp'),
 		browserify = require('browserify'),
 		source = require('vinyl-source-stream'),
 		buffer = require('vinyl-buffer'),
 		uglify = require('gulp-uglify');

	gulp.task('browserifyVendorDev', function() {

	    var b = browserify();

	    opts.libs.forEach(function(lib) {
	        b.require(lib);
	    });

<<<<<<< HEAD
	    return 	b
	    	.bundle()
	        .pipe(source(opts.source))
	        .pipe(buffer())
=======
	    return b.bundle()
	        .pipe(source(opts.source))
	        .pipe(buffer())
	        .pipe(uglify())
>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68
	        .pipe(gulp.dest(opts.dest));
	});
};