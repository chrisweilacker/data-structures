describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add string to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should add numbers to a set', function() {
    set.add(55);
    set.add(75);
    expect(set.contains(55)).to.equal(true);
    expect(set.contains(75)).to.equal(true);
  });

  it('should add objects to a set', function() {
    set.add({key: 'value'});
    expect(set.contains({key: 'value'})).to.equal(true);
  });

  it('should not add the same value twice', function() {
    set.add('Danny Glover');
    set.add('Danny Glover');
    set.remove('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(false);
    set.add(5);
    set.add(5);
    set.remove(5);
    expect(set.contains(5)).to.equal(false);
    set.add({key: 'value'});
    set.add({key: 'value'});
    set.remove({key: 'value'});
    expect(set.contains({key: 'value'})).to.equal(false);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
    set.add(3);
    set.remove(3);
    expect(set.contains(3)).to.equal(false);
    set.add({key: 'value'});
    set.remove({key: 'value'});
    expect(set.contains({key: 'value'})).to.equal(false);
  });

});
