module.exports = function(grunt) {

  grunt.initConfig({
    minified : {
      files: {
        src: [
          'js/*.js',
          'views/js/*.js'
        ],
        dest: 'js/min/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-minified');
  grunt.registerTask('default', ['minified']);

};
