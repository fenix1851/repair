var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var cleanHTML = require('gulp-htmlmin')
var tinypng = require('gulp-tinypng-compress')

gulp.task('default', defaultTask);

function defaultTask(done){
    done();
}

gulp.task('minify-css', function(done)  {
    return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))

    .pipe(gulp.dest('dist/css/'))

    done();
});

gulp.task('move-js', function(done)  {
    return gulp.src('./src/js/*.js')
    
    .pipe(gulp.dest('dist/js/'))

    done();
});

gulp.task('minify-html', function(done)  {
    return gulp.src('./*.html')
    .pipe(cleanHTML({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))

    done();
});

gulp.task('img-compress', function(done)  {
    return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'VqLGJjw5pwypvDMvSNWqtggyfcwRMY30',
        }))
        .pipe(gulp.dest('./src/img/'));
        done();
});
    
