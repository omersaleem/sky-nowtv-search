var MovieModel = Backbone.Model.extend({

	initialize: function() {
	},

	parse: function(response, options) {
		// force the id to be the temporary id from backbone
		response.id = this.cid;

		// generate a thumbnail url based on id
		response.thumbnail = 'thumbnail?id=' + response.id;
		return response;
	}

});
