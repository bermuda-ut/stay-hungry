exports.files = {
    javascripts: {
        joinTo: {
            'vendor.js': /^(?!app)/,
            'app-blog.js': [
                'app/mss/*.js',
            ],
            'app-game.js': [
                'app/mss/*.js',
                'app/mss-game/*.js',
            ],
        }
    },
    stylesheets: {
        joinTo: {
            'app-blog.css': [
                'app/css/font.css',
                'app/css/blog.css',
            ],
            'app-game.css': [
                'app/css/font.css',
                'app/css/game.css',
            ],
        }
    },
};

exports.plugins = {
    babel: {
        presets: ['latest']
    },
    cssnano: {
        autoprefixer: {
            add: true
        }
    },
    uglify: {
        mangle: true,
        compress: {
            global_defs: {
                DEBUG: false
            }
        }
    }
};
