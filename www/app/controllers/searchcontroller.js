
function SearchController(app) {
	var that = this;
	this.app = app;

	$('#searchField').on('blur', function(e) {
		console.log('Search field lost focus');
		setTimeout(function() {
			that.app.views.searchpreview.$el.html('');
		}, 200);
	});

	$('#searchField').on('input focus', function(e) {
		var textEntered = $('#searchField').val().trim();
		if(textEntered.length>2) {
			// if the text length is 3 or more, search the collection
			var results = that.app.models.allmovies.search(textEntered);

			if( results.length===0 ) {
				// no results, ensure the popout is not displayed
				that.app.views.searchpreview.$el.html('');
			} else if ( $('#searchResults').length===0 ) {
				// we have results and no popout, render it
				that.app.views.searchpreview.render();
			}

			// set the results in the model, changes in the collection
			// will trigger the elements being added/removed
			that.app.models.searchresults.searchterm = textEntered;
			that.app.models.searchresults.set(results);
		} else {
			// search text too short, ensure collection is empty and
			// popout not rendered
			that.app.models.searchresults.reset();
			if( $('#searchResults').length )
				that.app.views.searchpreview.$el.html('');
		}
	});

	$('#searchField').on('keydown', function(e) {
		// handle supported key events
		switch(e.keyCode) {
			case 38: {
				that.app.views.searchpreview.selectPrevious();
				e.stopPropagation();
			} break;
			case 40: {
				that.app.views.searchpreview.selectNext();
				e.stopPropagation();
			} break;
			case 27: {
				// esc key
				$('#searchField').blur();
			} break;
			case 13: {
				// enter
				that.app.views.searchpreview.selectCurrent();
			}
			default:
				break;
		}
	});

	this.app.views.searchpreview.on('selectmovie', function(movieid) {
		location.href = '#/movie/' + movieid;
		$('#searchField').blur();
	});

	this.app.views.searchpreview.on('showresults', function() {
		// if the search results page is already showing we need trigger a re-render
		if( location.href.indexOf('#/searchresults')>=0 ) {
			that.app.views.searchresults.render();
		}
	});

}
