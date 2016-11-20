sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("nad.controller.Main", {
		onSearch: function(oEvent) {
			var query = oEvent.getParameter("query");
			jQuery.oViewref1 = this;
			var url = "https://itunes.apple.com/search?term=" + encodeURI(query) + "&media=music&entity=song&callback=?";
			$.ajax({
				url: url,
				jsonpCallback: 'getJSON',
				contentType: "application/json",
				dataType: 'json',
				success: function(data, textStatus, jqXHR) {
					var oJson = {
						results: []
					};
					oJson.results = data.results;
					var oModel = new JSONModel(oJson);
					jQuery.oViewref1.getView().setModel(oModel);
					var omod = jQuery.oViewref1.getView().getModel();
					// var srView = that.getView("SearchResult");
					// srView.setModel(oModel);

					// var oTblmusic = sap.ui.getCore().byId("idTable");
					// // oTblmusic.setModel(oModel1);
					// oTblmusic.bindRows("/modelData");
				}
			});
		}
	});

});
