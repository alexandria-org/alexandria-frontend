const path = require('path')
const pkg = require('./package')

module.exports = {
	entry: [
		'src/polyfills.js',
		'src/index.js'
	],
	html: {
		title: pkg.productName,
		description: pkg.description,
		template: path.join(__dirname, 'index.ejs')
	},
	postcss: {
		plugins: [
			// Your postcss plugins
		]
	},
	presets: [
		require('poi-preset-bundle-report')(),
		require('poi-preset-offline')({
			pwa: './src/pwa.js', // Path to pwa runtime entry
			pluginOptions: {} // Additional options for offline-plugin
		})
	],
	env: process.env.NODE_ENV == "production" ? {
		// Production environemnt variables
		ALEXANDRIA_API: "https://api.alexandria.org"
	} : {
		// Dev and test environemnt variables
		ALEXANDRIA_API: "http://localhost:8080"
	}
}
