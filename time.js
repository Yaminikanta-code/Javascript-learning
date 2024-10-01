const clock = document.querySelector('#clock');

//setInterval runs takes a method and run it continously in each given interval
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
}, 1000);