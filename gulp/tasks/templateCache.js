'use strict';

module.exports = function (opts) {

	var gulp = require('gulp'),
		minifyHTML = require('gulp-minify-html'),
		templateCache = require('gulp-angular-templatecache'),
		plumber = require('gulp-plumber');

	gulp.task('templateCache', function () {
			return gulp.src(opts.src)
			.pipe(plumber({
		        handleError: function (err) {
		            console.log(err);
		            this.emit('end');
		        }
		    }))
			.pipe(minifyHTML())
			.pipe(templateCache({
				'moduleSystem': 'Browserify',
				'standalone': true
			}))
			.pipe(gulp.dest(opts.dest));
	});
};