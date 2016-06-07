  var canvas = document.getElementById('myCanvas');
  canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
maxW = window.innerWidth;
maxH = window.innerHeight;
      // var maxW = $(window).width(); /
      // canvas.width = maxW;
      // var maxH = $(window).height() 
      // canvas.height = maxH;

    
  var ctx = canvas.getContext("2d");
//random images
function drawImg(x,y){
  base_image = new Image();
  base_image.src = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVSw-DzNcICRqBWyeV-GnlpJ-0zehjT5V7KjFTnFZ5S5jnj1uc8g';
  base_image.onload = function(){
    ctx.drawImage(base_image, x, y);
  }
}
for (var i=0;i<100;i++){
 drawImg(rand(maxW),rand(maxH));
}

function rand(num) {
  return (Math.round(Math.random()*num));
}

function randColor() {
  return 'rgba(' + rand(255) + ',' + rand(255) + ',' + rand(255) + ',1)';
}
//random lines
for (var i=0; i<5; i++) {
  var a = rand(maxW), b = rand(maxH);
  for (j=0; j<1000; j++) {
  ctx.beginPath();
  ctx.moveTo(a, b);
  ctx.lineTo(rand(maxW),rand(maxH));
  ctx.strokeStyle = randColor();
  ctx.stroke();
}
}
//random circles
for (i=0; i<100; i++) {
  ctx.strokeStyle = randColor();
  ctx.beginPath();
  ctx.arc(rand(maxH),rand(maxW),rand(250),0,Math.PI*2,true); // Outer circle
  ctx.stroke();
}
