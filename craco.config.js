const path = require("path");
const CracoEnvPlugin = require("craco-plugin-env");
const CracoLessPlugin = require("craco-less");
const dotenv = require("dotenv");
const pkg = require("./package.json");
const { BannerPlugin } = require("webpack");
/* 移动端配置 */
// const pxtoViewPort = require("postcss-px-to-viewport");

const isDev = process.env.NODE_ENV === "development";
let envPath = ".env.development";
if (!isDev) {
	const modeIndex = process.argv.indexOf("--mode");
	const mode = modeIndex !== -1 ? process.argv[modeIndex + 1] : "production";
	envPath = `.env.${mode}`;
}

dotenv.config({
	path: path.resolve(__dirname, envPath),
});
module.exports = {
	devServer: {
		port: 3003,
		open: false,
	},
	style: {
		/* 移动端配置 */
		// postcss: {
		// 	mode: "extends",
		// 	loaderOptions: {
		// 		postcssOptions: {
		// 			ident: "postcss",
		// 			plugins: [
		// 				pxtoViewPort({
		// 					unitToConvert: "px",
		// 					viewportWidth: 375,
		// 					unitPrecision: 5,
		// 					propList: ["*"],
		// 					viewportUnit: "vw",
		// 					fontViewportUnit: "vw",
		// 					selectorBlackList: [],
		// 					minPixelValue: 1,
		// 					mediaQuery: false,
		// 					replace: true,
		// 					exclude: undefined,
		// 					include: undefined,
		// 					landscape: false,
		// 					landscapeUnit: "vw",
		// 					landscapeWidth: 568,
		// 				}),
		// 			],
		// 		},
		// 	},
		// },
	},
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
		},
		plugins: {
			add: [
				new BannerPlugin({
					banner: new Date().toString(),
					entryOnly: true,
				}),
			],
		},
		configure: (webpackConfig) => {
			webpackConfig.output = {
				...webpackConfig.output,
				filename: "js/app.js",
				chunkFilename: "js/[name]-[chunkhash:6].js",
				publicPath: process.env.REACT_APP_PUBLIC_URL,
				library: pkg.name,
				libraryTarget: "umd",
			};
			webpackConfig.devtool = isDev ? "source-map" : false;
			return webpackConfig;
		},
	},
	plugins: [
		{
			// 配置less
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {},
						javascriptEnabled: true,
					},
				},
			},
		},
		{
			// 配置环境变量
			plugin: CracoEnvPlugin,
			options: {
				variables: {},
			},
		},
	],
};
