'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp.src('./src/sass/*.scss')
   .pipe(concat('custom.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./src/css/'));
});

gulp.task('sass:watch', function () {
   gulp.watch('./src/sass/*.scss',gulp.series('sass') );
   // gulp.watch('./src/html/*.html',gulp.series('html') );
});
