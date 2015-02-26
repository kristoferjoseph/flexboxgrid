var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var processhtml = require('gulp-processhtml');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var uglify = require('gulp-uglify');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minify = require('gulp-clean-css');
var preprocessors = [
  autoprefixer,
  mqpacker
];

gulp.task('default', [
  'sass',
  'css',
  'js',
  'html'
]);

gulp.task('sass', function() {
  return gulp.src('src/sass/flexboxgrid.scss')
    .pipe(sass())
    .pipe(postcss(preprocessors))
    .pipe(gulp.dest('dist'))
    .pipe(minify())
    .pipe(rename('flexboxgrid.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src(['src/vendor/normalize.css', 'src/css/style.css', 'dist/flexboxgrid.css'])
    .pipe(postcss(preprocessors))
    .pipe(concat('index.css'))
    .pipe(minify())
    .pipe(rename('index.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(processhtml())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**/*.{scss,css,js,html}', ['default']);
});
