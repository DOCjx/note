var gulp = require('gulp');
var less= require('gulp-less');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var dot = require('gulp-seajs-dot');
var css = require('gulp-seajs-css');
var del = require('del');

var DIST = './dist/';
var DIST_APP = DIST + 'app/';
var DIST_PUB = DIST + 'public/';
var SRC = './src/';
var APP = SRC + 'app/';
var SRC_PUB = SRC + 'public/';

gulp.task('less', handleLess);
function handleLess(path) {
    path = typeof path === 'string' ? path : SRC_PUB + '**/*.less';
    console.log(path);
    gulp.src(path,{base: SRC_PUB+'/less'})
        .pipe(less())
        .pipe(css({prefix: 'css_'}))
        .pipe(rename(function(path){
            path.basename = 'css_'+path.basename;
        }))
        .pipe(gulp.dest(DIST_PUB+'/css'));
};

gulp.task('clean', function () {
    del.sync(DIST);
    gulp.src(['./src/index.html', './src/lib/**/*', './src/vendor/**/*',SRC_PUB+'json/**/*',SRC_PUB+'images/**/*'], {base: './src/'})
        .pipe(gulp.dest(DIST));
});

gulp.task('copy', handleCopy);
function handleCopy(path) {
    path = typeof path === 'string' ? path : APP + '**/*.js';
    gulp.src(path, {base: APP})
        .pipe(gulp.dest(DIST_APP));
}

function handleDelete(path){
    if(typeof path === 'string'){
        path = path.substr(path.lastIndexOf(SRC.replace('/', '\\'))).replace(SRC.replace('/', ''), DIST);
        var pathArr = path.split('\\');
        var arr = pathArr[pathArr.length - 1].split('.');
        if(path.indexOf('.html') != -1) {
            pathArr[pathArr.length - 1] = 'tpl_' + arr[0] + '.js';
        } else if (path.indexOf('.css') != -1) {
            pathArr[pathArr.length - 1] = 'css_' + arr[0] + '.js';
        }
        path = pathArr.join('\\');
    } else {
        path = DIST_APP + '**/*.js';
    }
    del.sync(path);
}
gulp.task('js',handleJs);
function handleJs(path){
    path = typeof path === 'string' ? path : SRC + '**/*.js';
    console.log(path);
    gulp.src(path, {base: SRC})
        .pipe(uglify({
            mangle: {except: ['require' ,'exports' ,'module' ,'$','archive','log']}
        }))
        .pipe(gulp.dest(DIST));
}
// CSS压缩、包装成seajs module
// gulp.task('css', handleCss);
// function handleCss(path) {
//     console.log(DIST_PUB);
//     path = typeof path === 'string' ? path : SRC_PUB + '**/*.css';
//     gulp.src(path, {base: SRC_PUB})
//         .pipe(css({prefix: 'css_'}))
//         .pipe(rename(function(path){
//             path.basename = 'css_'+path.basename;
//         }))
//         .pipe(gulp.dest(DIST_PUB));
// }

// doT模板预编译、包装成seajs module
gulp.task('dot', handleDoT);
function handleDoT(path) {
    path = typeof path === 'string' ? path : APP + '**/*.html';
    gulp.src(path, {base: APP})
        .pipe(dot({prefix: 'tpl_'}))
        .pipe(rename(function (path) {
            path.basename = 'tpl_' + path.basename;
        }))
        .pipe(gulp.dest(DIST_APP));
}

gulp.task('watch', function (){
    gulp.watch([SRC + '**/*.json',SRC + '**/*.webp',SRC+'**/*.png'], function (vinyl) {
        console.log('watch copy', vinyl);
        switch ( vinyl.type ){
            case 'added' :
            case 'changed' : handleCopy(vinyl.path); break;
            case 'deleted' : handleDelete(vinyl.path); break;
        }
    });
    gulp.watch(SRC + '**/*.js',function(vinyl){
        console.log('watch js',vinyl);
        switch( vinyl.type ){
            case 'added' :
            case 'changed' : handleJs(vinyl); break;
            case 'deleted' : handleDelete(vinyl.path); break;
        }
    })
    gulp.watch(SRC + '**/*.html', function (vinyl) {
        console.log('watch Dot', vinyl);
        switch ( vinyl.type ){
            case 'added' :
            case 'changed' : handleDoT(vinyl); break;
            case 'deleted' : handleDelete(vinyl.path); break;
        }
    });
    // gulp.watch(SRC_PUB + '**/*.css', function (vinyl) {
    //     console.log('watch Css', vinyl);
    //     switch ( vinyl.type ) {
    //         case 'added' :
    //         case 'changed' : handleCss(vinyl); break;
    //         case 'deleted' : handleDelete(vinyl.path); break;
    //     }
    // });
    gulp.watch(SRC_PUB + '**/*.less', function (vinyl) {
        console.log('watch Less', vinyl,'\n');
        switch ( vinyl.type ) {
            case 'added' :
            case 'changed' : handleLess(vinyl.path); break;
            case 'deleted' : handleDelete(vinyl.path); break;
        }
    });
});

gulp.task('default', ['clean', 'copy', 'dot', 'less', 'js']);