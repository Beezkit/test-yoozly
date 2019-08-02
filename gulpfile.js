// Require de Gulp
var gulp = require('gulp');
// Require de Sass
var sass = require('gulp-sass');
// Require de useref
var useref = require('gulp-useref');
// Require Uglify
var uglify = require('gulp-uglify');
// Require csso
var csso = require('gulp-csso');
// Require Gulp-if
var gulpIf = require('gulp-if');

var pipeline = require('readable-stream').pipeline;

gulp.task('sass', function() {

    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('uglify', function () {
  return gulp.src('app/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('csso', function () {
    return gulp.src('app/css/**/*.css')
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {

    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('app/js/**/*.js', gulp.series('uglify'));
    gulp.watch('app/css/**/*.css', gulp.series('csso'));
});

gulp.task('useref', function() {

    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.css', csso()))
        .pipe(gulp.dest('dist'))
});
