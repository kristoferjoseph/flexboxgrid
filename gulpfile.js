var gulp         = require('gulp');
var sass         = require('gulp-sass');
var htmlmin      = require('gulp-htmlmin');
var processhtml  = require('gulp-processhtml');
var livereload   = require('gulp-livereload');
var postcss      = require('gulp-postcss');
var uglify       = require('gulp-uglify');
var autoprefixer = require('autoprefixer-core');
var mqpacker     = require('css-mqpacker');
var morecss      = require('gulp-more-css');

gulp.task('default', ['css', 'min', 'js', 'html']);

gulp.task('css', function() {
  var preprocessors = [
    autoprefixer,
    mqpacker
  ];
  return gulp.src('./src/sass/flexboxgrid.scss')
    .pipe(sass())
    .pipe(postcss(preprocessors))
    .pipe(gulp.dest('./css/'))
    .pipe(livereload());
});

gulp.task('min', function() {
  return gulp.src()
    .pipe(morecss())
    .pipe('./dist');
});

gulp.task('js', function() {
  return gulp.src('./src/js/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js/'))
    .pipe(livereload());
});

gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe(processhtml())
    .pipe(htmlmin())
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**/*.{scss,js,html}', ['css','js','html']);
});

