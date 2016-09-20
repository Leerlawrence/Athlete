var assert = require('assert');
var bottle = require('../water_bottle');

  describe('Water Bottle', function(){

//if you want to fill the bottle each time

// beforeEach(function())

it("should be empty", function(){
assert.equal(0, bottle.volume)
})

it("should go to 100 when filled", function(){
bottle.fill();
assert.equal(100, bottle.volume)
})

it("should go to 10 when drank", function(){
bottle.fill();
bottle.drink();
assert.equal(90, bottle.volume)
})

it("should go to 0 when emptied", function(){
bottle.emptyBottle();
assert.equal(0, bottle.volume)
})


  })


  // water bottle should be empty(X)
  // 2. should go to 100 when filled
  // 3. should go down by 10 when drank
  // 4. should go to 0 when emptied
  // 5. should not be able to go below 0