/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dz/test_repo_git/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});