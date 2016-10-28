var webpack = require('webpack')
var path = require('path');
module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:3000/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				plugins : ['transform-decorators-legacy']
			}
		},
		{ test: /\.css$/, loader: "style-loader!css-loader" },
		{ test: /\.png$/, loader: "url-loader", query:{mimetype: 'image/png'}}
		]
	},
	resolve: {
		moduleDirectories: ['node_modules','src','styles'],
		extensions: ['', '.js', '.css', '.jsx']	
	},
	devServer: {
		inline: true,
		port: 3000
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}