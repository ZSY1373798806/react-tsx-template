module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		"react-app",
		"react-app/jest",
		"eslint:recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
	rules: {
		// 常规规则
		"no-console": "warn", // 禁止使用 console，只发出警告
		"no-unused-vars": "error", // 禁止未使用的变量，并将其视为错误
		"no-var": "error", // 禁止使用 var 关键字，必须使用 let 或 const
		"prefer-const": "error", // 更喜欢使用 const 而不是 let，除非必须重新赋值
		"import/prefer-default-export": "off", // 关闭要求使用默认导出的规则
		// TypeScript 相关规则
		"@typescript-eslint/no-unused-vars": "error", // 禁止未使用的变量，并将其视为错误
		"@typescript-eslint/explicit-module-boundary-types": "off", // 关闭要求导出函数和类的返回值类型必须显式定义的规则
	},
	overrides: [
		{
			files: [
				"**/__tests__/*.{j,t}s?(x)",
				"**/tests/unit/**/*.spec.{j,t}s?(x)",
			],
			env: {
				jest: true,
			},
		},
	],
	ignorePatterns: ["**/dist/*"],
};

// 如果 同一个目录下有多个配置，ESLint 只会使用一个。优先级顺序如下：

// .eslintrc.js
// .eslintrc.yaml
// .eslintrc.yml
// .eslintrc.json
// .eslintrc
// package.json
