var gulp = require('gulp');

//压缩js代码
var uglify = require('gulp-uglify');

//合并js文件
var concat = require('gulp-concat');

var paths = {
    scripts: ['src/index.js']
}

gulp.task('default', function() {
    gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('magic.min.js'))
        .pipe(gulp.dest('dist'));
});