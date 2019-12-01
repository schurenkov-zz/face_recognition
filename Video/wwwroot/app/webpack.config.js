const path = require('path');

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, '../js'),
};

module.exports = {
    context: PATHS.src,
    entry: {
        index: ['./index.tsx'],
    },
    output: {
        path: PATHS.dist,
        publicPath: '/',
        filename: 'site.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
        ],
    },
}
