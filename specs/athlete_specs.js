var assert = require('assert');
var bottle = require('../water_bottle');
var athlete = require('../athlete');

  describe('Athlete', function(){


it("should be distance increased and lose water", function(){
  athlete.run();
assert.equal(95, athlete.hydrated);
assert.equal(5, athlete.distance);
})

it("should not run when dehydrated", function(){
  athlete.runDry();
assert.equal(0, athlete.hydrated);
// assert.equal(5, athlete.distance);
})

it("should increase hydration by drinking from water bottle", function(){
  bottle.drink();
  athlete.rehydrate();
assert.equal(100, athlete.hydrated);
// assert.equal(5, athlete.distance);
})


// it("should go to 100 when filled", function(){
// bottle.fill();
// assert.equal(100, bottle.volume)
// })

// it("should go to 10 when drank", function(){
// bottle.fill();
// bottle.drink();
// assert.equal(90, bottle.volume)
// })

// it("should go to 0 when emptied", function(){
// bottle.emptyBottle();
// assert.equal(0, bottle.volume)
// })


  })