var gulp = require('gulp'),
    browserSync = require('browser-sync');

/**
 *  --- Settings --- 
 */

var tasksPath = './gulp/tasks',
    basePath = './src',
    distPath = './dist',
    libs = [
        'angular'
    ];

/**
 *  --- Tasks --- 
 */

require(tasksPath+'/browserSync.js')({
    'baseDir': basePath,
    'port': 4000,
    'browser': 'google chrome'
});

require(tasksPath+'/browserify.bundle.dev.js')({
    'entries': [basePath+'/app/app.js'],
    'excludeLibs': libs,
    'source': 'bundle.js',
    'dest': basePath
});

require(tasksPath+'/browserify.bundle.prod.js')({
    'entries': [basePath+'/app/app.js'],
    'excludeLibs': libs,
    'source': 'bundle.js',
    'dest': distPath
});

require(tasksPath+'/browserify.vendor.dev.js')({
    'libs': libs,
    'source': 'vendor.js',
    'dest': basePath
});

require(tasksPath+'/browserify.vendor.prod.js')({
    'libs': libs,
    'source': 'vendor.js',
    'dest': distPath
});

require(tasksPath+'/less.js')({
    'src': basePath+'/less/main.less',
    'dest': basePath+'/css'
});

require(tasksPath+'/css.js')({
    'src': basePath+'/css/**/*.css',
    'dest': distPath+'/css'
});

require(tasksPath+'/html.js')({
    'src': basePath+'/index.html',
    'dest': distPath
});

/**
 *  --- Dev --- 
 */

gulp.task('dev', ['browserifyVendorDev', 'browserifyBundleDev', 'less', 'browserSync'], function() {
    
    gulp.watch(basePath+'/**/*.html', browserSync.reload);
    
    gulp.watch(basePath+'/less/main.less', ['less']);

    gulp.watch([ 
        basePath+'/css/**/*.css',
        '!'+basePath+'/css/main.css'
    ], function(ev) {
        gulp.src(ev.path, {read: false})
            .pipe(browserSync.stream());
    });
});

/**
 *  --- Test --- 
 */

gulp.task('test', function() {});

/**
 *  --- Build --- 
 */

gulp.task('build', ['html', 'browserifyVendorProd', 'browserifyBundleProd', 'less', 'css']);