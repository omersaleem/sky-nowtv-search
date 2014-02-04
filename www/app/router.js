
var AppRouter = Backbone.Router.extend({

    initialize : function(app) {
        this.app = app;

    },

    routes : {
        '' : 'startApp',
        'searchresults' : 'showSearchResults',
        'movie/:id' : 'showMovie'
    },

    startApp: function() {
        console.log('Starting app...');
    },

    showSearchResults: function() {
        console.log('Showing search results view...');
        this.app.views.searchresults.render();
    },

    showMovie: function(id) {
        console.log('Showing movie details:', id);
        this.app.views.moviedetail.setMovie(this.app.models.allmovies.get(id));
        this.app.views.moviedetail.render();
    }

});
