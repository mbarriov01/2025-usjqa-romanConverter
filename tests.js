// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('integerToRoman', function() {
  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('should convert 2 to II', function() {
    expect(integerToRoman(2)).to.equal('II');
  });

  it('should convert 3 to III', function() {
    expect(integerToRoman(3)).to.equal('III');
  });

  it('should convert 4 to IV', function() {
    expect(integerToRoman(4)).to.equal('IV');
  });

  it('should convert 6 to VI', function() {
    expect(integerToRoman(6)).to.equal('VI');
  });

  it('should convert 8 to VIII', function() {
    expect(integerToRoman(8)).to.equal('VIII');
  });

  it('should convert 9 to IX', function() {
    expect(integerToRoman(9)).to.equal('IX');
  });

  it('should convert 19 to XIX', function() {
    expect(integerToRoman(19)).to.equal('XIX');
  });

  it('should convert 29 to XXIX', function() {
    expect(integerToRoman(29)).to.equal('XXIX');
  });

  it('should convert 33 to XXXIII', function() {
    expect(integerToRoman(33)).to.equal('XXXIII');
  });

  it('should convert 39 to XXXIX', function() {
    expect(integerToRoman(39)).to.equal('XXXIX');
  });

  it('should convert 43 to XLIII', function() {
    expect(integerToRoman(43)).to.equal('XLIII');
  });

  it('should convert 49 to XLIX', function() {
    expect(integerToRoman(49)).to.equal('XLIX');
  });

  it('should convert 64 to LXIV', function() {
    expect(integerToRoman(64)).to.equal('LXIV');
  });

  it('should convert 88 to LXXXVIII', function() {
    expect(integerToRoman(88)).to.equal('LXXXVIII');
  });

  it('should convert 89 to LXXXIX', function() {
    expect(integerToRoman(89)).to.equal('LXXXIX');
  });

  it('should convert 99 to XCIX', function() {
    expect(integerToRoman(99)).to.equal('XCIX');
  });

  it('should convert 177 to CLXXVII', function() {
    expect(integerToRoman(177)).to.equal('CLXXVII');
  });

  it('should convert 249 to CCXLIX', function() {
    expect(integerToRoman(249)).to.equal('CCXLIX');
  });

  it('should convert 333 to CCCXXXIII', function() {
    expect(integerToRoman(333)).to.equal('CCCXXXIII');
  });

  it('should convert 390 to CCCXC', function() {
    expect(integerToRoman(390)).to.equal('CCCXC');
  });

  it('should convert 399 to CCCXCIX', function() {
    expect(integerToRoman(399)).to.equal('CCCXCIX');
  });

  it('should convert 409 to CDIX', function() {
    expect(integerToRoman(409)).to.equal('CDIX');
  });

  it('should convert 523 to DXXIII', function() {
    expect(integerToRoman(523)).to.equal('DXXIII');
  });

  it('should convert 756 to DCCLVI', function() {
    expect(integerToRoman(756)).to.equal('DCCLVI');
  });

  it('should convert 888 to DCCCLXXXVIII', function() {
    expect(integerToRoman(888)).to.equal('DCCCLXXXVIII');
  });

  it('should convert 894 to DCCCXCIV', function() {
    expect(integerToRoman(894)).to.equal('DCCCXCIV');
  });

  it('should convert 899 to DCCCXCIX', function() {
    expect(integerToRoman(899)).to.equal('DCCCXCIX');
  });

  it('should convert 909 to CMIX', function() {
    expect(integerToRoman(909)).to.equal('CMIX');
  });

  it('should convert 1256 to MCCLVI', function() {
    expect(integerToRoman(1256)).to.equal('MCCLVI');
  });

  it('should convert 1999 to MCMXCIX', function() {
    expect(integerToRoman(1999)).to.equal('MCMXCIX');
  });

  it('should convert 2674 to MMDCLXXIV', function() {
    expect(integerToRoman(2674)).to.equal('MMDCLXXIV');
  });

  it('should convert 3859 to MMMDCCCLIX', function() {
    expect(integerToRoman(3859)).to.equal('MMMDCCCLIX');
  });

  it('should convert 3999 to MMMCMXCIX', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('should throw an error for numbers less than 1', function() {
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for numbers less than 1', function() {
    expect(() => integerToRoman(-40)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for numbers greater than 3999', function() {
    expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for other inputs that are not numbers', function() {
    expect(() => integerToRoman('Veinte')).to.throw("Please enter a valid integer number.");
  });
});

describe('romanToInteger', function() {
  it('should convert V to 5', function() {
    expect(romanToInteger('V')).to.equal(5);
  });

  it('should convert VIII to 8', function() {
    expect(romanToInteger('VIII')).to.equal(8);
  });

  it('should convert XL to 40', function() {
    expect(romanToInteger('XL')).to.equal(40);
  });

  it('should convert XCIV to 94', function() {
    expect(romanToInteger('XCIV')).to.equal(94);
  });

  it('should convert CDXLIV to 444', function() {
    expect(romanToInteger('CDXLIV')).to.equal(444);
  });

  it('should convert MMXXIV to 2024', function() {
    expect(romanToInteger('MMXXIV')).to.equal(2024);
  });

  it('should convert MMMCMXCIX to 3999', function() {
    expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
  });

  it('should convert I to 1', function() {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('should throw an error for other letters not contained in the roman alphabet', function() {
    expect(() => romanToInteger('ABCD')).to.throw("The Roman numeral contains invalid characters.");
  });

  it('should throw an error for breaking the rules of the roman numbers', function() {
    expect(() => romanToInteger('IIII')).to.throw("The Roman numeral is not in canonical form.");
  });
});

