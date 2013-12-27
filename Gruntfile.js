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
                    'css/flexboxgrid.css': 'src/flexboxgrid.css'
                }
            }
        },
        cssmin: {
            concat: {
                files: {
                    'css/index.css': ['vendor/css/normalize.css', 'src/style.css', 'src/flexboxgrid.css']
                }
            },
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['cssmin:concat', 'autoprefixer', 'cssmin:minify']);
    grunt.registerTask('release', ['autoprefixer:release', 'cssmin']);

};
