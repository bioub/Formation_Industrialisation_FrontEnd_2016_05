
(function(global) {

  function stringLength(str) {
    if (typeof str !== 'string') {
      throw new Error('str must be a string');
    }

    return str.length;
  }



  global.MyString = {};
  global.MyString.length = stringLength;

}(this));

// MyString.length('Romain')