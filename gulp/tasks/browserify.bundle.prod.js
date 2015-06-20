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

	    return b.bundle()
	        .pipe(source(opts.source))
	    	.pipe(buffer())
	        .pipe(uglify())
	        .pipe(gulp.dest(opts.dest));
	});
};