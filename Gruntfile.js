/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({
        autoprefixer: {
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
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['cssmin:concat', 'autoprefixer', 'cssmin:minify', 'uglify']);
    grunt.registerTask('release', ['autoprefixer:release', 'cssmin', 'uglify']);
    grunt.registerTask('reload', ['watch']);

};
