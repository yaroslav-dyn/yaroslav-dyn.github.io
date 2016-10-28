var gulp = require('gulp');

var browserSync = require('browser-sync').create();

	
// Static Server + watching css/html files
gulp.task('serv', function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("*.html" ).on('change', browserSync.reload);
    gulp.watch("css/*.css" ).on('change', browserSync.reload);
    gulp.watch("libs/*.js" ).on('change', browserSync.reload);
});





