# Automate With Gulp

// sudo npm install gulp -g

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

// Upgrade node to 12
sudo apt-get purge --auto-remove nodejs
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs

// References
https://www.freecodecamp.org/news/how-to-minify-images-with-gulp-gulp-imagemin-and-boost-your-sites-performance-6c226046e08e/

### Tested on:
Ubuntu 20.04
Node v10.24.1
npm 7.22.0