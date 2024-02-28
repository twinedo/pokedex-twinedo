module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			'babel-preset-expo',
			// '@babel/preset-env',
			// 'react-native',
			// 'module:metro-react-native-babel-preset',
			// 'module:react-native-dotenv',
		],
		env: {
			production: {
				plugins: ['transform-remove-console'], //removing consoles.log from app during release (production) versions
			},
		},
		plugins: [
			// ['@babel/plugin-transform-class-properties', { loose: true }],
			// ['@babel/plugin-transform-private-methods', { loose: false }],
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
					alias: {
						tests: ['./tests/'],
						'@assets': './assets',
						'@components': './src/components',
						'@navigations': './src/navigations',
						'@screens': './src/screens',
						'@services': './src/services',
						'@stores': './src/stores',
						'@styles': './src/styles',
						'@utils': './src/utils',
					},
				},
			],
		],
	};
};
