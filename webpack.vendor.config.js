const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'djangoreact/static/dist'),
        filename: '[name].js',
        library: '[name]'
    },
    module: {
        rules: [
            // Aquí van los loaders
            {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    },
    plugins: [
        // aquí van los plugins
        new webpack.DllPlugin({
            name: "[name]",
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ]
}