# Automate With Gulp

## System Prerequisites:
- Ubuntu 20.04
- Node v10.24.1
- npm 7.22.0 - (Node Package Manager)

## Gulp prerequisites:
<pre>
// Install Gulp command line utility:
npm install gulp --save-dev
</pre>

## Install required packages according to your needs
<pre>
npm install --save-dev sass gulp-sass
npm install --save-dev gulp-imagemin@5.0.3
npm install --save-dev gulp-autoprefixer
</pre>

# Sample code
## Hello World
<pre>
var gulp = require('gulp');

gulp.task('task0', async function() {
    console.log('It Works.')
});
</pre>

## Sample Tasks
<pre>
// Import necessary libraries/packages
const gulp = require('gulp');

// Will provide image optimization features
const imagemin = require('gulp-imagemin');

// Will provide sass features
var sass = require('gulp-sass')(require('sass'));

// Browser (Vendor specific) autoprefixer
const autoprefixer = require('gulp-autoprefixer');

// Tasks

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
</pre>
# References
<pre>
- <a href="https://www.freecodecamp.org/news/how-to-minify-images-with-gulp-gulp-imagemin-and-boost-your-sites-performance-6c226046e08e/">FreeCodeCamp</a>
- <a href="https://gulpjs.com/docs/en/getting-started/quick-start">Gulp Documentation</a>
- <a href="https://stackoverflow.com/questions/37651084/gulp-watch-no-gulpfile-found">Troubleshooting (If gulpfile is missing)</a>
</pre>

# What's next?
<pre>
- If you have any suggestions and improvements please let us know.
- If you've something to contribute to this project, like, you can add more tasks, or ideas - you might be working on, etc. Just raise a PR.
- Also, you can improve this README.md.
</pre>