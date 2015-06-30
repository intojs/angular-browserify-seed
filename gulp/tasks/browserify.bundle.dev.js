module.exports = function(opts) {

	var gulp = require('gulp'),
	 	browserify = require('browserify'),
		browserSync = require('browser-sync'),
		source = require('vinyl-source-stream'),
<<<<<<< HEAD
		watchify = require('watchify'),
		babelify = require("babelify");
		
=======
		watchify = require('watchify');

>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68
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
<<<<<<< HEAD
	        w.transform(babelify)
	        	.bundle()
=======
	        w.bundle()
>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68
	            .pipe(source(opts.source))
	            .pipe(gulp.dest(opts.dest))
	            .pipe(browserSync.reload({
	                stream: true
<<<<<<< HEAD
	            }));
	    })

	    return 	b.transform(babelify)
		    		.bundle()
		        	.pipe(source(opts.source))
		        	.pipe(gulp.dest(opts.dest));
=======
	            }))
	    })

	    return b.bundle()
	        .pipe(source(opts.source))
	        .pipe(gulp.dest(opts.dest));
>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68
	});
};