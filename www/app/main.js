var NOWTV = NOWTV || {};

NOWTV.app = {

	start: function() {

		this.models = {
			allmovies: new MovieCollection(),
			searchresults: new MovieCollection()
		},

		this.views = {
			searchpreview: new SearchPreviewView({
				el: '#searchResultsContainer',
				collection: this.models.searchresults
			}),
			moviedetail: new MovieDetailView({
				el: '#viewContainer'
			}),
			searchresults: new SearchResultsView({
				el: '#viewContainer',
				collection: this.models.searchresults
			})
		},

		this.controllers = {
			searchcontroller: new SearchController(this, this.views.searchpreview)
		},

		this.router = new AppRouter(this);

		Backbone.history.start();

		this.init();
	},

	init: function() {
		// populate the all movies collection
		this.models.allmovies.fetch();
	}

};

$(document).ready(function() {
	// start the application
	NOWTV.app.start();	
});
