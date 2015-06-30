module.exports = function(opts) {

	var gulp = require('gulp'),
	 	browserify = require('browserify'),
		source = require('vinyl-source-stream'),
		buffer = require('vinyl-buffer'),
 		uglify = require('gulp-uglify');

	gulp.task('browserifyBundleProd', function () {

	    var b = browserify({
	            'debug': false
	        });

	    b.add(opts.entries);

	    opts.excludeLibs.forEach(function(lib) {
	        b.exclude(lib);
	    });

<<<<<<< HEAD
	    return b
	    	.bundle()
=======
	    return b.bundle()
>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68
	        .pipe(source(opts.source))
	    	.pipe(buffer())
	        .pipe(uglify())
	        .pipe(gulp.dest(opts.dest));
	});
};