'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            main: {
                src: ['src/**/*.rt.js']
            }
        },
        eslint: {
            all: {
                src: [
                    'src/**/*.js',
                    '!src/**/*.rt.js'
                ]
            }
        },
        watch: {
            rt: {
                files: [
                    'src/**/*.rt'
                ],
                tasks: ['rt'],
                options: {
                    spawn: false
                }
            }
        },
        reactTemplates: {
          dist: {
            src: ['src/**/*.rt'],
            modules: 'amd',
            format: 'stylish',
            targetVersion: '0.15.0'
          }
        }
    });

    grunt.loadNpmTasks('grunt-react-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('rt', ['react-templates']);
    grunt.registerTask('default', ['eslint', 'rt']);
    grunt.registerTask('test', []);

    grunt.registerTask('all', ['default', 'test']);
};
