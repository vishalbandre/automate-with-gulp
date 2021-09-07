const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');


// Task 1: Converting SASS to CSS
function sassify() {
    return gulp.src('app/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
}

gulp.task('sass_task', async function() {
    sassify();
});

// Task2: Image Optimization
function img() {
    return gulp
        .src("./app/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./app/minified/images"));
}

gulp.task("img_task", img);

// Task 3: Browser Prefixes
function prefixify() {
    gulp.src('app/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'))
}

gulp.task('prefix_task', async function() {
    prefixify()
});

gulp.task("watch", () => {
    gulp.watch("./app/images/*", img);
    gulp.watch("./app/sass/*", sassify).on('change', function() {
        gulp.watch("./app/css/*", prefixify);
    });
});

gulp.task("default", gulp.series("img_task", "sass_task", "prefix_task", "watch"));