module.exports = function (opts) {

    var gulp = require('gulp'),
        browserSync = require('browser-sync');

    gulp.task('browserSync', function() {
        browserSync({
            server: {
                baseDir: opts.baseDir
            },
            port: opts.port,
            browser: opts.browser
        });
    });
};
