module.exports = (api) => {
	api.cache(true)
	const presets = [
		[
			"@babel/env",
			{
				loose:true,
				modules: false,
				targets: {
					esmodules: true,
				},
			},
		],
		"@babel/preset-typescript",
		"@babel/preset-react",
	];

	return {
		presets
	}
}
