/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({
        myth: {
            compile: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.css'
            },
            release: {
                files: {
                    'css/flexboxgrid.css': 'src/css/flexboxgrid.css'
                }
            }
        },
        cssmin: {
            concat: {
                files: {
                    'css/index.css': ['vendor/css/normalize.css', 'src/css/style.css', 'src/css/flexboxgrid.css']
                }
            },
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            }
        },
        uglify: {
            release: {
                files: {
                    'js/index.js': 'src/js/index.js'
                }
            }
        },
        processhtml: {
            dist: {
                options: {
                    process: true
                },
                files: {
                    'index.html': ['src/index.html']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': ['index.html']
                }
            }
        },
        watch: {
            css: {
                files: 'src/**/*',
                tasks: ['default'],
            },
            livereload: {
                options: {
                    livereload: true,
                },
                files: [
                        'index.html',
                        'css/*.css',
                        'js/*.js',
                        'img/*'
                ]
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-myth');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Default task.
    grunt.registerTask('default',
      ['cssmin:concat',
       'myth',
       'cssmin:minify',
       'uglify',
       'processhtml',
       'htmlmin'
       ]);
    grunt.registerTask('reload', ['watch']);

};
