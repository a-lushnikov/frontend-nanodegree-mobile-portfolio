var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    del = require('del');

// removes already existing build dir
gulp.task('clean', function () {
    del('build');
    del('views/css/*.min.css');
    del('css/*.min.css');
})

// copies src to deploy folder
gulp.task('deploy', function() {
    return gulp.src(['./**/*', '!node_modules', '!node_modules/**/*'])
        .pipe(gulp.dest('build'))
        .on('end', function () {
            del('build/gulpfile.js');
            del('build/package.json');
        });
});

gulp.task('min-css1', function() {
  return gulp.src('css/*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css/'));
});

gulp.task('min-css2', function() {
  return gulp.src('views/css/*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('views/css/'));
});

gulp.task('min-css', ['min-css1', 'min-css2']);