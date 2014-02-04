suite('Search Preview View', function() {

    setup(function() {
        this.collection = new MovieCollection(allMovies, {parse: true});

        this.view = new SearchPreviewView({
            // Pass in a jQuery in memory <div> for testing the view rendering
            el: $('<div>'),
            collection: this.collection
        });
    });

    teardown(function() {
        this.view = null;
        this.collection = null;
    });

    test('should exist', function() {
        expect(this.view).to.be.ok;
        expect(this.collection.length).to.be.above(5);
    });

    test('render() has max 5 results', function() {
        this.view.render();
        expect(this.view.$el.find('.search-item').length).to.equal(5);
    });
    
});
