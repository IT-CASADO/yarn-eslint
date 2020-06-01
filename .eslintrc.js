module.exports = {
	extends: ['airbnb-typescript/base', 'prettier', 'prettier/@typescript-eslint'],
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['import', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
			},
		},
	},
};
