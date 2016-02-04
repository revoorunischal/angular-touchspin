'use strict';


var conf = require('./conf');
var del = require('del');
var gulp = require('gulp');
var path = require('path');

gulp.task('build', ['scripts:build']);
gulp.task('build:dev', ['scripts:build']);
gulp.task('clean', function() {
    return del([path.join(conf.paths.dist, '/')]);
});