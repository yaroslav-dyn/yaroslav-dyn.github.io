var gulp = require('gulp');

	var browserSync = require('browser-sync').create();
	var less = require('gulp-less');
	//var path = require('path');
    var uglify = require('gulp-uglifyjs');


//Compile less
gulp.task('less', function () {
  	gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'));
});

//minify js
// gulp.task('uglify', function() {
//   gulp.src('js/*function.js')
//     .pipe(uglify('flexbox-gallery.min.js'))
//     .pipe(gulp.dest('app/js'));
// });

//concat js
var concat = require('gulp-concat');
gulp.task('concatjs', function() {
  return gulp.src('js/*.js')
    .pipe(concat('flexGallery.js'))
    .pipe(gulp.dest('app/js/'));
});
	
// Static Server + watching css/html/js files + compile less
gulp.task('serv', function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch('js/*.js',['concatjs'] ).on('change', browserSync.reload);
    gulp.watch("app/**/*.css" ).on('change', browserSync.reload);
    gulp.watch('less/*.less',['less']).on('change', browserSync.reload);
});

// gulp.task('watch', function(){
// 	gulp.watch('less/*.less');
// })



