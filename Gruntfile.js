module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });
    grunt.initConfig({
        sass: {
          dist: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['*.scss'],
              dest: '../css',
              ext: '.css'
            }]
          }
        },//Escuchar cambios
        watch:{
            files:['css/*.scss'],
            tasks:['css']
        },//Escuchar cambios y recarga la pagina
        browserSync:{
            dev:{
                bsFiles:{
                    src:[
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },            
                options:{
                    watchTask: true,
                    server:{
                        baseDir:'./'
                    }
                }                
            }       
        },
        imagemin:{
            dynamic:{
                files:[
                    {
                        expand:true,
                        cwd: './',
                        src: 'assets/img/*.{png,gif,jpg,jpge}',
                        dest: 'dist/'
                    }
                ]
            }

        },
        copy:{
            html:{
                files:[{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src:['*.html'],
                    dest: 'distri'
                }]
            }
        },
        clean:{
            build:{
                src:['distri']
            }
        },
        cssmin:{
            dist:{}
        },
        uglify:{
            dist:{}
        },
        filerev:{
            options:{
                encoding:'utf8',
                algorithm:'md5',
                length:20
            },
            release:{
                files:[{
                    src:['distri/js/*.js','distri/css/*.css']
                }]
            }
        },
        concat:{
            options:{
                separator:';'
            },
            dist:{}
        },
        useminPrepare:{
            foo:{
                dest:'distri',
                src:['index.html','precios.html','contacto.html']
            },
            options:{
                flow:{
                    steps:{
                        css:['cssmin'],
                        js:['uglify']
                    },
                    post:{
                        css:[{
                            name:'cssmin',
                            createConfig: function (context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments:0,
                                    rebase:false
                                }
                            }
                        }]
                    }
                }
            }
        },
        usemin:{
            html:[
                'distri/index.html',
                'distri/precios.html',
                'distri/contacto.html'
            ],
            options:{
                assetsDir:[
                    'distri',
                    'distri/css',
                    'distri/js'
                ]
            }
        }
      });
      /* grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-browser-sync');
      grunt.loadNpmTasks('grunt-contrib-imagemin'); */  
      grunt.registerTask('css', ['sass']);
      grunt.registerTask('default', ['browserSync','watch']);
      grunt.registerTask('imagemin:compress', ['imagemin']);
      grunt.registerTask('build', [
          'clean',
          'copy',
          'imagemin',
          'concat',
          'uglify',
          'filerev',
          'usemin'
        ]);


};