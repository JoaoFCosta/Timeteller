var bgcolors = ['#16304B', '#FFC23C', '#F05E35', '#2A9E79', '#FFFFFF'];
var tmcolors = ['#FFC23C', '#2A9E79', '#FFFFFF', '#16304B', '#F05E35'];
var hours, minutes, rand;

function setTime () {

  var oldm = minutes;
  var now = new Date();
  // Get hours
  hours = now.getHours();
  hours = hours < 10 ? ('0' + hours) : hours;
  // Get minures
  minutes = now.getMinutes();
  minutes = minutes < 10 ? ('0' + minutes) : minutes;


  // Update time and colors
  if ( oldm != minutes )
  {
    document.getElementById('time').innerHTML = hours + ':' + minutes;
    setColors();
  }
}

function setColors () {
  var oldr = rand;
  do { rand = Math.floor( Math.random() * 5 ) } while ( rand == oldr );

  var newBGColor = bgcolors[rand];
  var newTMColor = tmcolors[rand];
  $('body').animate({ backgroundColor: newBGColor });
  $('#time').animate({ color: newTMColor });
  $('#header').animate({ color: newTMColor });
  $('#footer-text').animate({ color: newTMColor });
  $('#creator-link').animate({ color: newTMColor });
}

window.setInterval( function() {
  setTime();
}, 10000 );