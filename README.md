# Automate With Gulp

<pre>
sudo npm install gulp -g

npm init
npm install gulp --save-dev
npm install sass gulp-sass --save-dev
npm install --save-dev gulp-imagemin@5.0.3
npm install --save-dev gulp-autoprefixer

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', async function() {
    return gulp.src('app/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});

// If getting imagemin import issue, use older version
npm install --save-dev gulp-imagemin@5.0.3

### References
<a href="https://www.freecodecamp.org/news/how-to-minify-images-with-gulp-gulp-imagemin-and-boost-your-sites-performance-6c226046e08e/">FreeCodeCamp</a>

### Tested on:
Ubuntu 20.04
Node v10.24.1
npm 7.22.0
</pre>