var browraise = 83//83
var eyesize = 10//10
var mouth_open =104//104
var blush = 80//80,, not above 120
var skinny = 140//140,, no less than 100

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  fill(255, 165, 97)//orange
  stroke(265, 175, 107)//light orange outline
  ellipse(100,155,skinny,50);//booty

  fill(242, 228, 189);//skin
  stroke(242, 221, 162);//skinline
  ellipse(55,45,30,30);//left ear
  ellipse(145,45,30,30);//right ear

  fill(255, 232, 249);//inner ear colour
  ellipse(55,45,15,15);//left inner ear
  ellipse(145,45,15,15);//right inner ear

  stroke(101, 166, 86);//green line
  fill(121, 186, 106);//green
  ellipse(100,25,8,30);//stem


  fill(255, 165, 97)//orange
  stroke(265, 175, 107)//light orange outline
  arc(100, 150, skinny, 250,175, PI + PI);//body

  stroke(101, 166, 86);//green line
  fill(121, 186, 106);//green
  triangle(100, 45, 105, 25, 95, 25);//middle leaf
  triangle(95,26,80,40,90,26);//left leaf
  triangle(105,26,120,40,110,26);//right leaf
 
  fill(242, 228, 189);//skin
  stroke(242, 221, 162);//skinline
  ellipse(100,90,90,60);//face base

  stroke(0);
  ellipse(75,browraise,20,10); //left brow
  stroke(242, 228, 189);//skin
  ellipse(75,browraise+1,22,10);//left brow cover

  stroke(0);
  ellipse(125,browraise,20,10); //left brow
  stroke(242, 228, 189);//skin
  ellipse(125,browraise+1,22,10);//left brow cover

  fill(255, 138, 102,blush);//blush colour
  strokeWeight(0);
  ellipse(70,97,blush/5,blush/5);//left blush
  ellipse(130,97,blush/5,blush/5);//right blush

   fill(242, 228, 189);//skin
  stroke(242, 221, 162);//skinline
  strokeWeight(2);
  ellipse(60,130,30,15);//left arm
  ellipse(140,130,30,15);//right arm
  ellipse(70,170,35,30);//left leg
  ellipse(130,170,35,30);//right leg

  fill(242, 221, 162);//nosecolour
  stroke(232, 211, 152);//nose outline
  ellipse(100,100,40,25);//nose base

  fill(0);
  stroke(0);
  strokeWeight(2);
  ellipse(100,106,22,5);//bottom mouth

  stroke(242, 221, 162);
  fill(242, 221, 162);
  ellipse(100,mouth_open,22,5);//mouth cover

  stroke(0);
  fill(0);
  ellipse(100,95,15,10);//nose

  stroke(0);
  strokeWeight(2);
  line(100,100,100,108);//nose to mouth

  stroke(0);
  strokeWeight(0.75);
  fill(255);
  line(74,90,70,83);//left middle-most eyelash
  line(72,90,68,85);//left center
  line(73,90,69,84);//left outside
  ellipse(75,90,eyesize,eyesize);//left eye base
  line(126,90,130,83);//right middle-most eyelash
  line(128,90,132,85);//right outside
  line(127,90,131,84);//right middle
  ellipse(125,90,eyesize,eyesize);//right eye base
fill(0);
  ellipse(75,90,eyesize-5,eyesize-5);//left pupil
  ellipse(125,90,eyesize-5,eyesize-5);//right pupil
if(mouseY>100);{
stroke(255);
fill(255);
ellipse(75,88,eyesize-5,eyesize-5);//left pupil
ellipse(125,88,eyesize-5,eyesize-5);//right pupil
fill(0);
  ellipse(75,90,eyesize-5,eyesize-5);//left pupil
  ellipse(125,90,eyesize-5,eyesize-5);//right pupil
  }
}