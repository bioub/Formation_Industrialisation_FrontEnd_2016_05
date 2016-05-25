// Exercice 1
// Créer la config pour déplacer fonts de bower_components/bootstrap
// dans dist

// Exercice 2
// Inclure le plugin grunt-contrib-clean
// Créer une config pour supprimer dist au début du build
// Créer une config pour supprimer .tmp à la fin du build

module.exports = function (grunt) {
  grunt.initConfig({
    useminPrepare: {
      html: 'index.html'
    },
    usemin: {
      html: 'dist/index.html'
    },
    copy: {
      build: {
        files: [
          { expand: true, src: 'index.html', dest: 'dist' },
          { expand: true, cwd: 'bower_components/bootstrap', src: 'fonts/*', dest: 'dist' },
        ]
      }
    },
    clean: {
      preBuild: ['dist'],
      postBuild: ['.tmp']
    },
    rev: {
      files: {
        src: ['dist/js/app.min.js', 'dist/css/app.min.css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-rev');

  grunt.registerTask('build', [
    'clean:preBuild',
    'useminPrepare',
    'copy:build',
    'concat:generated',
    'uglify:generated',
    'cssmin:generated',
    'rev',
    'usemin',
    'clean:postBuild'
  ]);
};