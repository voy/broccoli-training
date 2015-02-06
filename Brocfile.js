var esTranspiler = require('broccoli-6to5-transpiler');
var uglify = require('broccoli-uglify-js');
var pickFiles = require('broccoli-static-compiler');
var concat = require('broccoli-concat');
var mergeTrees = require('broccoli-merge-trees');

var scripts;
scripts = pickFiles('lib', {
    srcDir: '/',
    files:  ['**/*.js'],
    destDir: '/js'
});
scripts = esTranspiler(scripts);
scripts = concat(scripts, {
    inputFiles: ['js/**/*.js'],
    outputFile: '/js/bundle.js'
});
scripts = uglify(scripts);

var html = pickFiles('lib', {
    srcDir: '/',
    files:  ['*.html'],
    destDir: '/'
});

module.exports = mergeTrees([scripts, html]);
