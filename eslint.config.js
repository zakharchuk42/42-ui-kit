import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import React from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
	{
		plugins: {
			'react-hooks': reactHooks,
			react: React,
			'react-refresh': reactRefresh,
			prettier: prettierPlugin,
		},
	},
	{
		ignore: ['node_modules', 'dist'],
	},
	js.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
				...globals.es2021,
			},
			parserOptions: React.configs.recommended.parserOptions,
		},
	},
	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			...eslintPluginPrettier.rules,
		},
	},
]
