const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	mode: "development",
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /.vue$/,
				use: 'vue-loader'
			},
			{
				test: /.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [new VueLoaderPlugin()]
}