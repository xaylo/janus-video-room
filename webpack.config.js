const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const svgToMiniDataURI = require('mini-svg-data-uri');



module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'index.js',
        libraryTarget: "umd",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new VueLoaderPlugin(),
        // janus.js does not use 'import' to access to the functionality of webrtc-adapter,
        // instead it expects a global object called 'adapter' for that.
        // Let's make that object available.
        new webpack.ProvidePlugin({ adapter: ['webrtc-adapter', 'default'] })
    ],
    module: {
        rules: [
            // janus.js does not use 'export' to provide its functionality to others, instead
            // it creates a global variable called 'Janus' and expects consumers to use it.
            // Let's use 'exports-loader' to simulate it uses 'export'.
            {
                test: require.resolve('janus-gateway'),
                loader: 'exports-loader',
                options: {
                    exports: 'Janus',
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    }
}