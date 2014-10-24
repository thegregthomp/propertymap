module.exports = function(grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 7070,
                    base: 'dev'
                }
            }
        },
        bower: {
            dev: {
                dest: 'dev/',
                js_dest: 'dev/automated/js/',
                css_dest: 'dev/automated/css/',
                options: {
                    expand: false,
                    keepExpandedHierarchy: false,
                    packageSpecific: {
                        'bootstrap': {
                            keepExpandedHierarchy: false,
                            dest: 'dev/automated/fonts/',
                            css_dest: 'dev/automated/css/'
                        }
                    }
                }
            }
        },
        watch: {
            js: {
                files: 'dev/assets/js/**/*.js',
                tasks: [],
                options: {
                    livereload: true,
                },
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', [
        'bower:dev',
        'connect',
        'watch'
    ]);

}