sap.ui.define(
	["be/rpan/epm/suppliers/base/BaseController", "sap/base/Log"],
	function(BaseController, Log) {
		"use strict";
		const ListController = BaseController.extend(
			"be.rpan.epm.suppliers.controller.List",
			/** @lends be.rpan.epm.suppliers.controller.List.prototype */ {}
		);

		ListController.prototype.onPressListItem = function(event) {
			Log.info(this.getView().getControllerName(), "onPressListItem");

			var bindingContext = event.getSource().getBindingContext();

			this.getOwnerComponent()
				.getRouter()
				.navTo(
					"detail",
					{
						id: bindingContext.getProperty("Id"),
						"child*": encodeURIComponent("/productsForSupplier/" + bindingContext.getProperty("Id"))
					},

				);
		};

		return ListController;
	}
);
