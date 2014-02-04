var MovieDetailView = Backbone.View.extend({

    events : {
    },

    initialize : function() {
        this.template = Handlebars.compile($('#movieDetailTemplate').html());
    },

    render: function() {
        var data = this.model.toJSON();
        this.$el.html(this.template(data));
        return this;
    },

    setMovie: function(model) {
        this.model = model;
    }
    
});
