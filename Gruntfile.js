module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dist: {
                src: 'readme.txt',
                dest: 'README.md'
            }
        },
        /*
        curl: {
            'google-fonts-source': {
                src: 'https://www.googleapis.com/webfonts/v1/webfonts?key=*******',
                dest: 'wp-content/themes/eport/library/vendor/google-fonts-source.json'
            }
        },
        makepot: {
            target: {
                options: {
                    include: [
                        'path/to/some/file.php'
                    ],
                    type: 'wp-plugin' // or `wp-theme`
                }
            }
        },
        */
        jshint: {
            files: [
                'wp-content/themes/eport/library/js/filename.js',
                'wp-content/themes/eport/library/js/**/*.js'
            ],
            options: {
                expr: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        /*
        phpdocumentor: {
            dist: {
                options: {
                    ignore: 'node_modules'
                }
            }
        },
        */
        sass: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> style.min.css <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'wp-content/themes/eport/library/scss',
                    src: [
                        '*.scss'
                    ],
                    dest: 'wp-content/themes/eport/library/css',
                    ext: '.min.css'
                }]
            },
            dev: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> style.css <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'wp-content/themes/eport/library/scss',
                    src: [
                        '*.scss'
                    ],
                    dest: 'wp-content/themes/eport/library/css',
                    ext: '.css'
                }]
            }
        },
        /*
        libsass: {
            options: {
              loadPath: ['wp-content/themes/eport/bower_components/foundation/scss']
            },
            files: [
                {
                    expand: true,
                    cwd: 'wp-content/themes/eport/library/scss',
                    src: [
                        '*.scss'
                    ],
                    dest: 'wp-content/themes/eport/library/css',
                    ext: '.css'
                }
            ],
        },
        */
        /*
        compass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    httpPath: '/',
                    
                    watch: true,
                    sassDir: 'wp-content/themes/eport/library/scss',
                    cssDir: ['wp-content/themes/eport/library/css/'],
                    imagesDir: 'wp-content/themes/eport/library/images',
                    javascriptsDir: 'wp-content/themes/eport/library/js'    
                }
            },
            dev: {
                options: {
                    outputStyle: 'expanded',//'compressed',
                    httpPath: '/',
                    watch: true,
                    sassDir: 'wp-content/themes/eport/library/scss',
                    cssDir: ['wp-content/themes/eport/library/css/'],
                    imagesDir: 'wp-content/themes/eport/library/images',
                    javascriptsDir: 'wp-content/themes/eport/library/js'    
                }
            }
        },
        */

        uglify: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> scripts.min.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    //report: 'gzip',
                    mangle: false
                },
                files: {
                    'wp-content/themes/eport/library/js/scripts.min.js' : [
                        'wp-content/themes/eport/bower_components/foundation/js/vendor/jquery.js',
                        'wp-content/themes/eport/bower_components/foundation/js/vendor/modernizr.js',
                        'wp-content/themes/eport/bower_components/foundation.min.js',
                        'wp-content/themes/eport/library/js/**/*.js'
                    ]
                }
            },
            dev: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> scripts.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    //beautify: true,
                    //compress: false,
                    mangle: false
                },
                files: {
                    'wp-content/themes/eport/library/js/scripts.js' : [
                        'wp-content/themes/eport/bower_components/foundation/js/vendor/jquery.js',
                        'wp-content/themes/eport/bower_components/foundation/js/vendor/modernizr.js',
                        'wp-content/themes/eport/bower_components/foundation.min.js',
                        'wp-content/themes/eport/library/js/**/*.js'
                    ]
                }
            }
        },

        watch: {
            //Livereload
            scripts: {
                files: 'wp-content/themes/eport/**/*.js',
                tasks: ['uglify:dev', 'uglify:dist'],
            },
            sass: {
                files: 'wp-content/themes/eport/library/scss/**/*.scss',
                tasks: ['sass:dev', 'sass:dist'],
            },
            options: {
                livereload: 35729
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-libsass');
    //grunt.loadNpmTasks('grunt-curl');
    //grunt.loadNpmTasks('grunt-phpdocumentor');
    //grunt.loadNpmTasks('grunt-wp-i18n');
 
    grunt.registerTask('default', [
       // 'jshint',
        'uglify:dev',
        'uglify:dist',
        'sass:dev',
        'sass:dist',
        'watch',
        //'libsass',
        //'compass:dev',
        //'compass:dist',
        //'makepot',
        'copy'
    ]);
    /*
    grunt.registerTask('docs', [
        'phpdocumentor:dist'
    ]);
    */
    /*
    grunt.registerTask('googlefonts', [
        'curl:google-fonts-source'
    ]);
    */
 
};