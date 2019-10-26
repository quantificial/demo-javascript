// sync

var buger = buyBuger(),
    junk = eatBurger(buger);
throwTheJunk(junk);

function buyBuger() {
  console.log('buy burger');
  return { bread: 'bun', vegetable: 'lettuce', meat: 'beaf' };
}
function eatBurger(buger) {
  console.log('eat burger ' + buger.bread + ' ' + buger.vegetable + ' ' + buger.meat);
  return { waste: 'lettuce' };
}
function throwTheJunk(junk) {
  console.log('throw ' + junk.waste);
}

// Output:
// "buy burger"
// "eat burger bun lettuce beaf"
// "throw lettuce"



// async

buyBuger(function(buger) {
	eatBurger(buger, throwTheJunk);
});
playMobile();

function buyBuger(callback) {
  console.log('buy burger');
  setTimeout(function() {
    callback({ bread: 'bun', vegetable: 'lettuce', meat: 'beaf' });
  }, 1000);
}
function eatBurger(buger, callback) {
  console.log('eat burger' + buger.bread + ' ' + buger.vegetable + ' ' + buger.meat);
  setTimeout(function() {
  	callback({ waste: 'lettuce' });
  }, 1000);
}
function throwTheJunk(junk) {
  setTimeout(function() {
    console.log('throw ' + junk.waste);
  }, 1000);
}
function playMobile() {
  console.log('play mobile');
}


