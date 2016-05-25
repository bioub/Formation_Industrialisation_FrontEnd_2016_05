

describe('MyString', function() {

  describe('method length', function() {

    // var contact;

    beforeEach(function() {
      // init
      // contact = new Contact();
    });

    it('should indicate the correct length', function() {
      expect(MyString.length('Romain'), 6);
    });

    it('should throw an error is not string', function() {

    });

  });
});