var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    browserify = require('browserify'),
    browserifyShim = require('browserify-shim'),
    exorcist = require('exorcist'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify');

var base = 'src/';

gulp.task('less', function () {
    return gulp.src(base+'less/main.less')
        .pipe(less())
        .pipe(gulp.dest(base+'css'))
        .pipe(browserSync.stream());
});

gulp.task('browserify-libs', function() {

    var libs = [
        'angular'
    ];

    var b = browserify();

    libs.forEach(function(lib) {
        b.require(lib);
    });

    return b.bundle()
        .pipe(source('vendor.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(base));
});

gulp.task('browserify', function () {
    return browserify({
            debug: true
        })
        .add(base+'app/app.js')
        .bundle()
        // .pipe(exorcist(base+'bundle.js.map'))
        // .pipe(exorcist('bundle.js.map'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(base));
});

gulp.task('dev', ['browserify-libs', 'browserify', 'less'], function() {
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
    gulp.watch(base+'less/main.less', ['less']);
    gulp.watch(base+'app/**/*.js', ['browserify', reload]);
});