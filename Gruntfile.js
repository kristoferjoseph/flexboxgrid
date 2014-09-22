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
				options: {
				   sourcemap: true	
			    },	
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
      autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: 'src/css/flexboxgrid.css'
      }
     }, 
      less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'flexboxgrid.css.map',
          sourceMapFilename: 'src/css/flexboxgrid.css.map'
        },
        files: {
          'src/css/flexboxgrid.css': 'less/flexboxgrid.less'
        }
      }},
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
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    
    // Default task.
    grunt.registerTask('default',
      ['less',
       'autoprefixer',
       'cssmin:concat',
       'myth',
       'cssmin:minify',
       'uglify',
       'processhtml',
       'htmlmin'
       ]);
    grunt.registerTask('reload', ['watch']);

};
