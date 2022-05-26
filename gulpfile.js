const { src, dest, task, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemap = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');

const path = {
    scss: {
        src: ['resources/scss/**/*.scss'],
        dest: ['public/styles'],
    },
    js: {
        src: ['resources/scripts/**/*.js'],
        dest: ['public/scripts'],
    },
    adminDir: {
        src: 'admin2/dist/assets/**/*',
        dest: 'public/dist/assets',
    },
};

task('scss', () => {
    return src(path.scss.src)
        .pipe(sourcemap.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                cascade: false,
                grid: true,
            }),
        )
        .pipe(cssnano())
        .pipe(concat('app.min.css'))
        .pipe(sourcemap.write('.'))
        .pipe(dest(path.scss.dest));
});

task('watch', () => {
    return watch(path.scss.src, series('scss'));
});

task('moveAdminDirToPublic', () => {
    return src(path.adminDir.src).pipe(
        dest(path.adminDir.dest),
    );
});
task('default', series('scss', 'watch'));
