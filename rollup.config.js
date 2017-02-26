export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/ng2-emojis.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'ng2-emojis',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'rxjs': 'Rx'
	}
}
