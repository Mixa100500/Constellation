module.exports = {
	root: true,
  env: {
    browser: true,
    es2020: true,
    "vitest-globals/env": true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:vitest-globals/recommended',
  ],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh', 'import'],
	rules: {
    'import/no-unresolved': [2],
    // 'import/named': 2,
    "import/no-named-as-default": "off",
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
		'react/jsx-no-target-blank': 'off',
    "no-console": 0,
    "arrow-spacing": [
      "error", { "before": true, "after": true }
  ],
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
}
