/* eslint-disable no-undef */
const { series, src, dest } = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const distFolder = './dist';
const srcFolder = './src';

function clean() {
    return import('del')
        .then(del => del.deleteSync([`${distFolder}/**`]));
}

function build() {
    return src(`${srcFolder}/*.js`)
        .pipe(dest(distFolder));
}

function minify() {
    return src(`${distFolder}/*.js`)
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest(distFolder));
}

exports.clean = clean;
exports.default = series(clean, build, minify);