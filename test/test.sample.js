/*global describe,it*/
/*jshint expr:true */

// load configuration
var sample = require('../');

describe('#sayHello', function(){
  it('should return atsumo hello! when the value is atsumo', function(done) {
    sample.sayHello('atsumo').should.equal('atsumo hello??');
    done();
  });

  it('should return atsumo goodbye when the value is atsumo', function(done) {
    sample.sayGoodBye('atsumo').should.equal('atsumo goodbye!');
    done();
  });
});
