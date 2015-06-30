module.exports = function(opts) {

	var gulp = require('gulp'),
    	less = require('gulp-less'),
    	browserSync = require('browser-sync');

	gulp.task('less', function() {
		return gulp.src(opts.src)
       		.pipe(less())
        	.pipe(gulp.dest(opts.dest))
        	.pipe(browserSync.stream());
	});
};