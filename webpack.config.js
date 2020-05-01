var path = require('path');

module.exports = {
    target: 'web',
    mode: 'production',
    entry: './src/DataListInput.jsx',
    output: {
        path: path.resolve('lib'),
        library: 'PlainDataListInput',
        libraryTarget: 'umd',
        filename: 'DataListInput.js',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
        ]
    },
    externals: {
        react: 'umd react',
        'react-dom' : 'umd react-dom'
    }
}

