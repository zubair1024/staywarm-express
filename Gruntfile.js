'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  var config = {

    watch: {
      babel: {
        files: ['**/*.es6.js', '!test/**/*.es6.js'],
        tasks: ['babel']
      },
      express: {
        files: ['**/*.js', '!**/*.es6.js', 'bin/www'],
        tasks: ['express:dev'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      staticFiles: {
        files: ['public/**/*.css', 'public/**/*.js'],
        options: {
          livereload: true
        }
      }
    },

    express: {
      options: {
        port: 3000,
        debug: true
      },
      dev: {
        options: {
          script: 'bin/www'
        }
      }
    },

    babel: {
      options: {
        plugins: ['uglify:after'],
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: './',
          src: ['**/*.es6.js', '!test/**/*.es6.js'],
          dest: './',
          ext: '.js'
        }]
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            'public/**/*.map',
            'public/**/*.js',
            '!node_modules/**/*',
            '!public/**/*',
            '!**/*.es6.js',
            '!Gruntfile.js',
            './*.tgz'
          ]
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        '**/*.es6.js'
      ]
    },
    mochaTest: {
      all: {
        options: {
          require: 'babel/register'
        },
        src: ['test/**/*.es6.js']
      }
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/dist/main.min.css': [
            'public/css/bootstrap.min.css',
            'public/css/font-awesome.min.css',
            'public/css/linearicons.css',
            'public/css/ionicons.min.css',
            'public/css/magnific-popup.css',
            'public/css/owl.carousel.css',
            'public/css/preset.css',
            'public/css/scroll-animation.css',
            'public/css/style.css'
          ]
        }
      }
    },
    uglify: {
      dist: {
        options: {
          sourceMap: true
        },
        files: {
          'public/dist/main.min.js': [
            'public/js/jquery.min.js',
            'public/js/bootstrap.min.js',
            'public/js/jquery.waypoints.min.js',
            'public/js/jquery.magnific-popup.min.js',
            'public/js/owl.carousel.min.js',
            'public/js/plugins.js',
            'public/js/gmap.js',
            'public/js/custom-animations.js',
            'public/js/theme.js',
            'public/js/sweetalert2.min.js'
          ],
        }
      }
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('test', [
    'babel',
    'jshint',
    'mochaTest'
  ]);

  grunt.registerTask('build', [
    'clean',
    'babel',
    'cssmin',
    'uglify'
  ]);

  grunt.registerTask('css', [
    'cssmin'
  ]);

  grunt.registerTask('js', [
    'uglify'
  ]);


  grunt.registerTask('default', [
    'test',
    'build'
  ]);

  grunt.registerTask('serv', [
    'express:dev',
    'watch'
  ]);
};
