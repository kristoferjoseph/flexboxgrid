/*global module:false*/
var reworkCustomMedia = require('rework-custom-media');

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
          'dist/flexboxgrid.css': 'src/css/flexboxgrid.css'
        }
      }
    },
    rework: {
      compile: {
        expand: true,
        cwd: 'css',
        src: ['*.css', '!*.min.css'],
        dest: 'css',
        ext: '.css'
      },
      release: {
        files: {
          'src/css/flexboxgrid.css': 'src/css/flexboxgrid.css'
        }
      },
      options: {
        use: [
          reworkCustomMedia
        ]
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
      },
      release: {
        expand: true,
        cwd: 'dist',
        src: ['*.css', '!*.min.css'],
        dest: 'dist',
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
  grunt.loadNpmTasks('grunt-rework');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task.
  grunt.registerTask('default', ['cssmin:concat',
    'rework',
    'myth',
    'cssmin:minify',
    'cssmin:release',
    'uglify',
    'processhtml',
    'htmlmin'
  ]);
  grunt.registerTask('reload', ['watch']);

};
