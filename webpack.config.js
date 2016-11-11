var webpack = require('webpack');
var path = require('path');

function path_for(_path){
	//兼容 Windows 环境
	return path.resolve(__dirname,_path);
}

var config = {
	entry: {
		app: path_for('./source/_js/app.js')
	},
	output: {
		path: path_for('./source/js'),
		filename:'[name].js'
	},
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
