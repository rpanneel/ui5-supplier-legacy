sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	const BaseComponent = UIComponent.extend("be.rpan.epm.suppliers.base.BaseComponent", /** @lends be.rpan.epm.suppliers.base.BaseComponent.prototype */ {

	});

	BaseComponent.prototype.init = function () {
		UIComponent.prototype.init.apply(this, arguments);

		const router = this.getRouter();
		router.initialize();
	};

	return BaseComponent;
});
