const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		'additional-style': path.resolve(
			process.cwd(),
			`src/additional-style.js`
		),
	},
};
