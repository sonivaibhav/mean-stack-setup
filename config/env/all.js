'use strict';

module.exports = {
    app: {
        title: 'MEAN.JS',
        description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
        keywords: 'mongodb, express, angularjs, node.js, mongoose, passport'
    },
    port: process.env.PORT || 3000,
    templateEngine: 'swig',
    sessionSecret: 'MEAN',
    sessionCollection: 'sessions',
    log: {
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: 'combined',
        // Stream defaults to process.stdout
        // Uncomment to enable logging to a log on the file system
        options: {
            stream: 'access.log'
        }
    },
    assets: {
        lib: {
            css: [
                'public/libs/bootstrap/dist/css/bootstrap.css',
                'public/libs/bootstrap/dist/css/bootstrap-theme.css'
            ],
            js: [
                'public/libs/angular/angular.js',
                'public/libs/angular-resource/angular-resource.js',
                'public/libs/angular-animate/angular-animate.js',
                'public/libs/angular-ui-router/release/angular-ui-router.js',
                'public/libs/angular-ui-utils/ui-utils.js',
                'public/libs/angular-bootstrap/ui-bootstrap-tpls.js'
            ]
        },
        css: [
            'public/modules/**/css/*.css'
        ],
        js: [
          /*  'public/config.js',
            'public/application.js',*/
            'public/app.js',
            //'public/modules/*/*.js',
            //'public/dist/*/*.js',
            'public/js/*/*.js'
            //'public/modules/*/*[!tests]*/*.js'
        ],
        tests: [
            'public/libs/angular-mocks/angular-mocks.js',
            'public/modules/*/tests/*.js'
        ]
    }
};