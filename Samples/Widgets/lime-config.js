﻿SystemJS.config({
	authorization: true,
	transpiler: false,
	meta: {
		"*": {
			authorization: true
		}
	},
	map: {
		"@angular/common": "node_modules/@angular/common/bundles/common.umd.js",
		"@angular/common/http": "node_modules/@angular/common/bundles/common-http.umd.js",
		"@angular/compiler": "node_modules/@angular/compiler/bundles/compiler.umd.js",
		"@angular/core": "node_modules/@angular/core/bundles/core.umd.js",
		"@angular/forms": "node_modules/@angular/forms/bundles/forms.umd.js",
		"@angular/platform-browser": "node_modules/@angular/platform-browser/bundles/platform-browser.umd.js",
		"@angular/platform-browser-dynamic": "node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
		"tslib": "scripts/vendor/tslib.js",
		"@infor/sohoxi-angular": "scripts/soho/index",
		"@infor/sohoxi-angular/": "scripts/soho/",
		"lime": "scripts/lime/core/lime.js",
		"lime/core": "scripts/lime/core/index",
		"lime.common": "scripts/lime/common/common.module-aot",
		"main": "scripts/lime/core/main-aot.js",
		"rxjs/operators/": "node_modules/rxjs/operators/",
		"rxjs/operators": "node_modules/rxjs/operators/index.js",
		"rxjs/": "node_modules/rxjs/",
		"rxjs": "node_modules/rxjs/index.js",
		"rxjs-compat/": "node_modules/rxjs-compat/",
		"sample-shared-usercontext": "infor.sample.sharedmodule/sample-shared-usercontext"
	},
	paths: {
		"@infor/sohoxi-angular/*": "scripts/soho/*.js"
	},
	packages: {
		"scripts": {
			defaultExtension: "js"
		},
		"scripts/soho": {
			main: "index.js",
			defaultExtension: "js"
		},
		"node_modules": {
			defaultExtension: "js"
		},
		"infor.sample.angular.banner": {
			defaultExtension: "js"
		},
		"infor.sample.angular.cardlist": {
			defaultExtension: "js"
		},
		"infor.sample.angular.contenttranslation": {
			defaultExtension: "js"
		},
		"infor.sample.angular.contextparameters": {
			defaultExtension: "js"
		},
		"infor.sample.angular.contextviewer": {
			defaultExtension: "js"
		},
		"infor.sample.angular.dialogs": {
			defaultExtension: "js"
		},
		"infor.sample.angular.findwidgets": {
			defaultExtension: "js"
		},
		"infor.sample.angular.helloworld": {
			defaultExtension: "js"
		},
		"infor.sample.angular.lifecycle": {
			defaultExtension: "js"
		},
		"infor.sample.angular.quicknote": {
			defaultExtension: "js"
		},
		"infor.sample.angular.responsive": {
			defaultExtension: "js"
		},
		"infor.sample.angular.settings.ui.metadata": {
			defaultExtension: "js"
		},
		"infor.sample.angular.submenu": {
			defaultExtension: "js"
		},
		"infor.sample.ionapi.m3": {
			defaultExtension: "js"
		},
		"infor.sample.ionapi.social": {
			defaultExtension: "js"
		},
		"infor.sample.minify": {
			defaultExtension: "js"
		},
		"infor.sample.mobile": {
			defaultExtension: "js"
		},
		"infor.sample.sharedmodule": {
			defaultExtension: "js"
		},
		"infor.sample.sharedmodule2": {
			defaultExtension: "js"
		},
		"infor.sample.w2wsender": {
			defaultExtension: "js"
		},
		"infor.sample.w2wreceiver": {
			defaultExtension: "js"
		},
		"infor.sample.ids.test": {
			defaultExtension: "js"
		}
	}
});