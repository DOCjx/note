module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                flatten: true,
                cwd: 'src',
                src: ['**/*.js', '**/*.css', '*.*'],
                dest: 'dist/',
            },
            file: {
                expand: true,
                cwd: 'src',
                src: 'icon/*',
                dest: 'dist/'
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: [{
                    expand:true,
                    cwd:'dist/',
                    src:['*.js'],
                    dest:'dist/'
                }]
            }
        },
        uglify: {
            options: {
                mangle: true,
                comments: 'false'
            },
            dist: {
                files: [{
                    expand:true,
                    cwd:'dist/',
                    src:['*.js'],
                    dest: 'dist/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy','babel','uglify']);

};