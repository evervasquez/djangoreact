const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'assets/js/index.js'),
        //contact: path.resolve(__dirname, 'src/js/contact.js')
    },
    output: {
        path: path.resolve(__dirname, 'djangoreact/static/dist'),
        filename: '[name].js'
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

    ]
}