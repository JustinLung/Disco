window.addEventListener("load", function() {
  var myName = document.getElementById('myName');
  var letters = ["J", "u", "s", "t", "i", "n", " ","L", "u", "n", "g"];
  var colors =   ['blue', 'red', 'green', 'pink', 'purple', 'white'];

  var active = 0;
  var muziek = new Audio();
  muziek.src = "media/jinsang - egyptian pools.mp3";
  muziek.play();

  function animatie() {
    myName.innerHTML ="";
        for ( i = 0; i < letters.length; i++) {
          var text = document.createElement("span");
          text.innerHTML = letters[i];
          text.style.color = 'rgb('+ rndGetal()+',' +rndGetal()+',' + rndGetal()+')';
          myName.appendChild(text);

        }
  };
  setInterval(animatie,100);
  setInterval(function(){
  document.querySelector('div').style.background = colors[active];
  active++;
  if (active == colors.length) active = 0;
}, 1000);

})



function rndGetal() {
return Math.floor((Math.random() * 255) + 1);
}
