"use strict"

const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const minifyCSS = require('gulp-minify-css')
const svgo = require('gulp-svgo')
const svgSymbols = require('gulp-svg-symbols')
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
gulp.task('svg', function () {
  gulp.src('icon/*.svg')
    .pipe(svgo())
    .pipe(gulp.dest('svgo'))
})

gulp.task('svg-sprite', function () {
  gulp.src('svgo/*.svg')
    .pipe(svgSymbols({
      id: 'icon-%f',
      title: false
    }))
    .pipe(gulp.dest('./svg-sprite'))
})

gulp.task('build-less', function () {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css'))
})
gulp.task("watch", function () {
  gulp.watch('less/**/*.less', ['build-less'])
})
gulp.task('minImage', () =>
    gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
gulp.task("pack", function () {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css'))
})