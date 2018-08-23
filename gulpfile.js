const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync').create();


gulp.task('styles', function() {
  return gulp.src('app/blocks/**/*.+(css)')
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('app/blocks/**/*.+(css)', ['styles']);
  gulp.watch('*.html', browserSync.reload);
});
