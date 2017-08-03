var gulp = require('gulp');
var spawn = require('child_process').spawn;
var node;

gulp.task('default', function () {
    console.log('This is a default task');
});

gulp.task('server', function () {
    if (node) node.kill();
    node = spawn('node', ['./server/server.js'], {stdio: 'inherit'});
});