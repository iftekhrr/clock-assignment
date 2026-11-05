$(document).ready(function() {

  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var h = window.innerHeight - 160;
    console.log(hours + ":" + minutes + ":" + seconds);

    $('#clock').text(pad(hours) + ":" + pad(minutes) + ":" + pad(seconds));
    $('#hours').css('top', 100 + hours * (h/23));
    $('#minutes').css('top', 100 + minutes * (h/59));
    $('#seconds').css('top', 100 + seconds * (h/59));
  }

  displayTime();
  setInterval(displayTime, 1000);

})
