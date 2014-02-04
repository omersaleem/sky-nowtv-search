suite('Movie Collection', function() {

    setup(function() {
        this.collection = new MovieCollection(allMovies, {parse: true});
    });

    teardown(function() {
        this.collection = null;
    });

    test('should exist', function() {
        expect(this.collection).to.be.ok; // Tests this.user is truthy
    });

    test('should have a search() method', function() {
        expect(typeof this.collection.search).to.equal('function');
    });

    test('should have a 11 models', function() {
        expect(this.collection.length).to.equal(11);
    });

    test('should have 1 search result for "pir"', function() {
        expect(this.collection.search('pir').length).to.equal(1);
    });

    test('should have 1 search result for "PIR"', function() {
        expect(this.collection.search('pir').length).to.equal(1);
    });

    test('should have 7 search results for "sun"', function() {
        expect(this.collection.search('sun').length).to.equal(7);
    });

    test('should have an id value set', function() {
        expect(this.collection.at(0).id).to.exist;
    });

    test('should have thumbnail urls set', function() {
        expect(this.collection.at(0).get('thumbnail')).to.have.length.above(3);
    });
});
