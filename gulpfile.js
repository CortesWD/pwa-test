var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'), 
	rename = require('gulp-rename'),
  minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
  path = require('path'),
  swPrecache = require('sw-precache');


/*Recarga server con cambios*/
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'publication'
    },
  })
});

//para concatenar JS
var jsLibs = ['publication/js/libs/underscore-min.js',
              'publication/js/libs/angular.min.js', 
              'publication/js/libs/angular-route.min.js'];

gulp.task('jslibs', function() {  
     return gulp.src(jsLibs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('publication/js'));
});


//Concatenar CSS
gulp.task('css', function() {
  return gulp.src('publication/css/**/*.css')
  .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('publication/css'))



} );

gulp.task('watch', ['browserSync'], function (){

  // Reloads the browser whenever HTML or JS files change
  gulp.watch('publication/*.html', browserSync.reload); 
  gulp.watch('publication/js/**/*.js', browserSync.reload); 

});

/*Generar Service Worker*/
gulp.task('generate-service-worker', function(callback) {
  var rootDir = 'publication';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir
  }, callback);
});