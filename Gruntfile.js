/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({
        autoprefixer: {
            compile: {
                src: 'src/grid.css',
                dest: 'css/flexboxgrid.css'
            }
        },
        cssmin: {
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Default task.
    grunt.registerTask('default', ['autoprefixer', 'cssmin']);

};
