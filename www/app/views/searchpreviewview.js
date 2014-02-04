var SearchPreviewView = Backbone.View.extend({

    events : {
        'mouseover .search-item': 'handleHover',
        'click .search-item': 'handleItemClick',
        'click #showResultsBtn': 'handleShowResults'
    },

    initialize : function() {
        this.template = Handlebars.compile($('#searchPreviewTemplate').html());
        this.movielistitem = Handlebars.compile($('#searchItemTemplate').html());

        this.collection.on('add', this.addMovie, this);
        this.collection.on('remove', this.removeMovie, this);
    },

    render: function() {
        this.$el.html(this.template());

        for( var ii=0; ii<this.collection.length; ++ii ) {
        	this.addMovie(this.collection.at(ii), this.collection);
        }
        return this;
    },

    addMovie: function(model, collection) {
    	// only add max 5 movies
    	if(this.$el.find('.search-item').length < NOWTV.params.MAXITEMS) {
	    	var data = model.toJSON();
	    	this.$el.find('#searchList').append(this.movielistitem(data));
	    }
    },

    removeMovie: function(model, collection) {
    	this.$el.find('#'+model.cid).remove();
    },

    handleHover: function(e) {
    	this.$el.find('.search-item').removeClass('highlight');
    	this.$el.find('#' + e.currentTarget.id).addClass('highlight');
    },

    handleItemClick: function(e) {
    	console.log('item selected:', e.currentTarget.id);
    	this.selectItem(e.currentTarget.id);
    },

    selectItem: function(id) {
    	this.trigger('selectmovie', id);
    },

    selectNext: function() {
    	var selectedItem = this.$el.find('.highlight');
    	if(selectedItem.length) {
    		// an element already selected, move to next
    		var nextEl = selectedItem.next();
    		if(nextEl.length) {
    			this.$el.find('.search-item').removeClass('highlight');
    			nextEl.addClass('highlight');
    		}
    	} else {
    		// no item selected, select first
    		this.$el.find('#' + this.collection.at(0).id).addClass('highlight');
    	}
    },

    selectPrevious: function() {
    	var selectedItem = this.$el.find('.highlight');
    	if(selectedItem.length) {
    		// an element already selected, move to previous
    		var nextEl = selectedItem.prev();
    		if(nextEl.length) {
    			this.$el.find('.search-item').removeClass('highlight');
    			nextEl.addClass('highlight');
    		}
    	} else {
    		// no item selected, select last
    		this.$el.find('.search-item').last().addClass('highlight');
    	}
    },

    selectCurrent: function() {
    	var item = this.$el.find('.highlight');
    	if(item.length) {
    		// we have a select item
    		this.selectItem(item[0].id);
    	}
    },

    handleShowResults: function() {
    	this.trigger('showresults');
    }
    
});

