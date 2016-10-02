const { root } = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',
    
    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: root('src', 'client', 'app'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                include: root('src', 'client', 'app'),
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                exclude: root('src', 'client', 'app'),
                loader: 'null'
            },
            {
                test: /\.scss$/,
                include: root('src', 'client', 'app'),
                loaders : ['raw', 'sass']
            }
        ]
    },

    plugins: [

    ]
};
