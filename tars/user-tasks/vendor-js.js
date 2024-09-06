'use strict';

//

const gulp = tars.packages.gulp;
const plumber = tars.packages.plumber;
const notifier = tars.helpers.notifier;
const rigger = require('gulp-rigger');
var uglify = require('gulp-uglify');
const browserSync = tars.packages.browserSync;

const tarsConfig = tars.config;
// Include browserSync, if you need to reload browser:
//

/**
 * Task description
 */
module.exports = function () {

    return gulp.task('vendor-js', /*['required-task-name'],*/ function (done) {
        return gulp.src('markup/static/js/vendor.js')

            .pipe(rigger())
            .pipe(uglify())
            .pipe(gulp.dest('build/static/js'))
            .pipe(browserSync.reload({ stream: true }))
            .pipe(
                notifier.success('Fonts\'ve been moved')
            );

    });
};
