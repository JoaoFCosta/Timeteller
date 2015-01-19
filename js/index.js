var bgcolors = ['#16304B', '#FFC23C', '#F05E35', '#2A9E79', '#FFFFFF'];
var tmcolors = ['#FFC23C', '#2A9E79', '#FFFFFF', '#16304B', '#F05E35'];

// Get current date and time
var now = new Date();
var msleft = ( 59 - now.getSeconds() + 1 ) * 1000;
var hours, minutes, rand;

function setTime () {
  // Get current date and time
  now = new Date();

  // Calculat miliseconds left
  msleft = ( 59 - now.getSeconds() + 1 ) * 1000;

  // Get hours
  hours = now.getHours();
  hours = hours < 10 ? ('0' + hours) : hours;

  // Get minutes
  minutes = now.getMinutes();
  minutes = minutes < 10 ? ('0' + minutes) : minutes;

  // Update time
  document.getElementById('time').innerHTML = hours + ':' + minutes;
}

// Change colors
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
  setColors();
}, msleft );