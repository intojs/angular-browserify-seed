var base = 'src/';

var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    browserify = require('browserify'),
    exorcist = require('exorcist'),
    fs = require('fs'),
    path = require('path');

var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var source = require('vinyl-source-stream');
var rename = require('gulp-rename');

gulp.task('less', function () {
    return gulp.src(base+'less/main.less')
        .pipe(less())
        .pipe(gulp.dest(base+'css'));
});

gulp.task('browserify', function () {

    return browserify({
            debug: true
        })
        .add(base+'app/app.js')
        .bundle()
        .pipe(exorcist(base+'bundle.js.map'))
        .pipe(exorcist('bundle.js.map'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(base));
});

gulp.task('dev', ['browserify', 'less'], function() {
    browserSync({
        server: {
            baseDir: 'src',
            routes: {
				'/bower_components': 'bower_components'
			}
        },
        port: 4000,
        browser: "google chrome"
    });
    
    gulp.watch(base+'index.html', reload);
    gulp.watch(base+'less/main.less', ['less', reload]);
    //gulp.watch(base+'app/**/*.js', ['browserify', reload]);
});