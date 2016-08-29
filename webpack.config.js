var webpack = require('webpack');
var path = require('path');

var env = env || (process.env.NODE_ENV || 'development');
var debug = env === 'development';
console.log('======= '+ debug ? 'development' : 'production' +' =======');

function path_for(_path){
	//兼容 Windows 环境
	return path.resolve(__dirname,_path);
}

var plugins = [
	new webpack.DefinePlugin({
		__DEV__: debug
	}),
	// new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
	// new webpack.ProvidePlugin({
	// 	$: "jquery",
	// 	jQuery: "jquery",
	// 	"window.jQuery": "jquery"
	// }),
	new webpack.BannerPlugin('This file is created by eeve.'),
	new webpack.NoErrorsPlugin()
];

if(!debug){
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			test: /(\.jsx|\.js)$/,
			compress: {
				warnings: false
			},
			// mangle: false
		})
	);
}

var config = {
	entry: {
		app: path_for('./source/_js/app.js')
	},
	output: {
		path: path_for('./source/js'),
		filename:'[name].js'
	},
	plugins: plugins,
	module:{
		loaders:[
			{ test: /\.css$/, loader: 'style!css' }
		]
	},
	resolve: {
		extensions: ['', '.js']
	}
};

module.exports = config;
