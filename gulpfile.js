/* eslint-disable no-undef */
const { series, src, dest } = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const rollupStream = require('@rollup/stream');
const jsdoc2md = require('jsdoc-to-markdown');

const distFolder = './dist';
const srcFolder = './src';
const docsFolder = './docs';
const fileName = 'infiniteScrollManager';

/**
 * @type {import('rollup').RollupOptions}
 */
const rollupConfig = {
    input: `${srcFolder}/${fileName}.js`,
    output: {
        format: 'esm',
        file: `${fileName}.js`,
    },
}

function clean() {
    return import('del')
        .then(del => del.deleteSync([`${distFolder}/**`]));
}

function build() {
    return rollupStream(rollupConfig)
        .pipe(source(`${fileName}.js`))
        .pipe(dest(distFolder));
}

function minify() {
    return src(`${distFolder}/*.js`)
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest(distFolder));
}

function generateDocs() {
    const md = jsdoc2md.renderSync({
        files: `${distFolder}/*.js`,
    })

    const stream = source(`${fileName}.md`);
    stream.end(md);

    return stream.pipe(dest(docsFolder));
}

exports.clean = clean;
exports.generateDocs = generateDocs;
exports.default = series(clean, build, minify, generateDocs);