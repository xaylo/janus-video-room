const mix = require('laravel-mix');

mix.js('src/index.js', 'dist/index.js');

mix.autoload({
    'webrtc-adapter': ['webrtc-adapter', 'default'],
    Janus: 'exports-loader?exports=Janus!janus-gateway'
});

mix.webpackConfig({
    output: {
        libraryTarget: "umd"
    },
});