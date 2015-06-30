'use strict';

module.exports = function (opts) {

	var gulp = require('gulp'),
		minifyHTML = require('gulp-minify-html'),
		templateCache = require('gulp-angular-templatecache');

	gulp.task('templateCache', function () {
			return gulp.src(opts.src)
			.pipe(minifyHTML())
			.pipe(templateCache({
				'moduleSystem': 'Browserify',
				'standalone': true
			}))
			.pipe(gulp.dest(opts.dest));
	});
};