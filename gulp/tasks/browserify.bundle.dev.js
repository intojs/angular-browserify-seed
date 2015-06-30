module.exports = function(opts) {

	var gulp = require('gulp'),
	 	browserify = require('browserify'),
		browserSync = require('browser-sync'),
		source = require('vinyl-source-stream'),
		watchify = require('watchify'),
		babelify = require("babelify");
		
	gulp.task('browserifyBundleDev', function () {

	    var b = browserify({
	            'debug': true,
	            'cache': {},
	            'packageCache': {}
	        });

	    b.add(opts.entries);

	    opts.excludeLibs.forEach(function(lib) {
	        b.exclude(lib);
	    });

	    var w = watchify(b);

	    w.on('update', function () {
	        w.transform(babelify)
	        	.bundle()
	            .pipe(source(opts.source))
	            .pipe(gulp.dest(opts.dest))
	            .pipe(browserSync.reload({
	                stream: true
	            }));
	    })

	    return 	b.transform(babelify)
		    		.bundle()
		        	.pipe(source(opts.source))
		        	.pipe(gulp.dest(opts.dest));
	});
};