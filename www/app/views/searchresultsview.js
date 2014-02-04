var SearchResultsView = Backbone.View.extend({

    events : {
    },

    initialize : function() {
        this.template = Handlebars.compile($('#searchResultsTemplate').html());
    },

    render: function(options) {
        var data = {
            'results': this.collection.toJSON(),
            'resultcount': this.collection.length,
            'searchterm': this.collection.searchterm.toUpperCase()
        }

        this.$el.html(this.template(data));
        return this;
    }
    
});
