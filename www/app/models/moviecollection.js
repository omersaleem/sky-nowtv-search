var MovieCollection = Backbone.Collection.extend({

	model: MovieModel,

	initialize: function(model, options) {
		this.url = NOWTV.params.URL;
	},

	fetch: function(options) {
		console.log('fetching movies');

		return Backbone.Collection.prototype.fetch.call(this, options);
	},

	parse: function(response, options) {
		console.log('parsing...', response);
		return response;
	},

	search: function(searchText) {
		var results = [];

		// loop through the whole collection, matching the search text,
		// for every match add the model to the array, make everything
		// lowercase to ensure case insensitivity, the search field
		// is confgiured in params.js in case the field wants to change
		for( var ii=0; ii<this.length; ++ii ) {
			var model = this.at(ii);
			var modelText = model.get(NOWTV.params.SEARCHFIELD).toLowerCase();
			// @todo if we have several words, split the words and search indivdually and use regex
			if( modelText.indexOf(searchText.toLowerCase())>=0 ) {
				results.push(model);
			}
		}

		console.log('Search results count:', results.length);
		return results;
	}

});
