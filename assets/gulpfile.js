// Archivo gulpfile.json

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

gulp.task('default', ['uglify', 'scss', 'watch']);

gulp.task('uglify', function() {
    gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('min_js'));
});

gulp.task('scss', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['uglify']);
    gulp.watch('scss/**/*.scss', ['scss']);
});