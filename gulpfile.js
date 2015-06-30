var gulp = require('gulp'),
    browserSync = require('browser-sync');

/**
 *  --- Settings --- 
 */

var tasksPath = './gulp/tasks',
    basePath = './src',
    distPath = './dist',
    libs = [
<<<<<<< HEAD
        'angular',
        'angular-route',
        'jquery'
=======
        'angular'
>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68
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

<<<<<<< HEAD
require(tasksPath+'/templateCache.js')({
    'src': basePath+'/app/**/*.tpl.html',
    'dest': basePath+'/app'
});

=======
>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68
/**
 *  --- Dev --- 
 */

<<<<<<< HEAD
gulp.task('dev', ['templateCache', 'browserifyVendorDev', 'browserifyBundleDev', 'less', 'browserSync'], function() {
    
    gulp.watch(basePath+'/index.html', browserSync.reload);
    
    gulp.watch(basePath+'/**/*.tpl.html', ['templateCache']);
=======
gulp.task('dev', ['browserifyVendorDev', 'browserifyBundleDev', 'less', 'browserSync'], function() {
    
    gulp.watch(basePath+'/**/*.html', browserSync.reload);
>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68
    
    gulp.watch(basePath+'/less/main.less', ['less']);

    gulp.watch([ 
        basePath+'/css/**/*.css',
        '!'+basePath+'/css/main.css'
    ], function(ev) {
<<<<<<< HEAD
        gulp.src(ev.path,{
            'read': false
        }).pipe(browserSync.stream());
=======
        gulp.src(ev.path, {read: false})
            .pipe(browserSync.stream());
>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68
    });
});

/**
 *  --- Test --- 
 */

<<<<<<< HEAD
gulp.task('test', ['templateCache']);
=======
gulp.task('test', function() {});
>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68

/**
 *  --- Build --- 
 */

gulp.task('build', ['html', 'browserifyVendorProd', 'browserifyBundleProd', 'less', 'css']);