

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
      expect(function() {
        MyString.length(12);
      }).toThrowError("str must be a string");
    });

  });
});