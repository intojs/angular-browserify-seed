var base = 'src/';

var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('less', function () {
    return gulp.src(base+'less/main.less')
        .pipe(less())
        .pipe(gulp.dest(base+'css'));
});
     
gulp.task('dev', ['less'], function() {
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
    gulp.watch(base+'app/**/*.js', ['less', reload]);   
}); 