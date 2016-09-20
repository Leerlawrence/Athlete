var Athlete = {
  hydrated:100,
  distance:0,
  // fill: function 100
  fill: function() {
    this.volume=100
  },
  
run: function(){
  this.distance += 5;
  this.hydrated -= 5;
  console.log("Distance increased, hydration decreased!")
},

runDry: function(){
  this.hydrated -= 95;
  if (this.hydrated == 0) {
    console.log("Too dry to run - get yoursel\' a wee drink!")
  }
},

  rehydrate: function(){
    this.hydrated += 100;
    console.log("Full rehydration achieved!")
}
 
 };


module.exports = Athlete;