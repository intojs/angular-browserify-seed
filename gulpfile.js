var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    gulpSequence = require('gulp-sequence');

/**
 *  --- Settings --- 
 */

var tasksPath = './gulp/tasks',
    basePath = './src',
    distPath = './dist',
    libs = [
        'angular',
        'angular-route',
        'angular-resource',
        'angular-messages',
        'ngstorage',
        'jquery'
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

require(tasksPath+'/templateCache.js')({
    'src': basePath+'/app/**/*.tpl.html',
    'dest': basePath+'/app'
});

gulp.task('watch', function() {
    
    gulp.watch(basePath+'/index.html', browserSync.reload);
    
    gulp.watch(basePath+'/**/*.tpl.html', ['templateCache']);
    
    gulp.watch(basePath+'/**/*.less', ['less']);

    gulp.watch([ 
        basePath+'/css/**/*.css',
        '!'+basePath+'/css/main.css'
    ], function(ev) {
        gulp.src(ev.path,{
            'read': false
        }).pipe(browserSync.stream());
    });
});

/**
 *  --- Dev --- 
 */

gulp.task('dev', gulpSequence(
    ['templateCache', 'less'], 
    ['browserifyVendorDev', 'browserifyBundleDev'], 
    ['browserSync'],
    ['watch']
));

/**
 *  --- Test --- 
 */

gulp.task('test', ['templateCache']);

/**
 *  --- Build --- 
 */

gulp.task('build', ['html', 'browserifyVendorProd', 'browserifyBundleProd', 'less', 'css']);