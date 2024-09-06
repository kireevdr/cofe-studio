'use strict';

const gulp = tars.packages.gulp;
const gutil = tars.packages.gutil;
const chokidar = tars.packages.chokidar;
const watcherLog = tars.helpers.watcherLog;

/**
 * This is an example of watcher
 */
module.exports = function () {
    return chokidar.watch(
        'markup/static/js/vendor.js',
        Object.assign(tars.options.watch, {
            // Options set bellow will override default from tars.options.watch
            // If you need default options, you can use just tars.options.watch
            ignored: '/* String of path pattern or array of strings to ignore. If nothing to igonre — just set it with empty string */',
            persistent: true,
            ignoreInitial: true
        })
    ).on('all', function (event, watchedPath) {
        watcherLog(event, watchedPath);
        // You could start as many tasks as you need
        gulp.start('vendor-js');
    });
};
