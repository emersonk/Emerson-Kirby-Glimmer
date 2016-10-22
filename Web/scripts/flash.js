$(document).ready(function() {
  //Start by setting everything invisible & the background-image to screenstatic
  $("#bgimg").css("visibility", "hidden");
  $("#navdiv").css("visibility", "hidden");
  $("#hi").css("visibility", "hidden");
  $("#details").css("visibility", "hidden");

  document.getElementsByTagName("html")[0].style.visibility = "visible";    //Everything is initially hidden via css
  allStatic();

  //Initiate launch sequence
  var firstTimer = window.setTimeout(whiteOut, 1500);

  $(".me").lettering();

});

  function allStatic(){
    $("body").css("background-image", "url(images/screenstatic.gif)");
  }
  function whiteOut(){
    $("body").css("background-color", "white");
    $("body").css("background-image", "none");
    window.setTimeout(booter1, 100);
  }
  function booter1(){
    $("body").css("background-image", "none");
    $("body").css("background-color", "black");
    $("#bgimg").css("background-image", "url(images/boot1.png)");
    $(".me").css("visibility", "hidden");
    $("#bgimg").css("visibility", "visible");
    window.setTimeout(allStatic2, 400);
  }
  function allStatic2(){
    $("#bgimg").css("visibility", "hidden");
    $(".me").css("visibility", "hidden");
    $("body").css("background-image", "url(images/screenstatic.gif)");
    window.setTimeout(booter2, 1000);
  }
  function booter2(){
    $("body").css("background-image", "none");
    $("body").css("background-color", "black");
    $("#bgimg").css("background-image", "url(images/boot2.png)");
    $(".me").css("visibility", "hidden");
    $("#bgimg").css("visibility", "visible");
    window.setTimeout(blackout, 400);
  }
  function blackout(){
    $("body").css("background-image", "none");
    $("body").css("background-color", "black");
    $(".me").css("visibility", "hidden");
    $("#bgimg").css("visibility", "hidden");
    window.setTimeout(borderExplode, 5);
  }

  function borderExplode(){
    var $navbarinv = $('#navbarinv');
    // black out the border to start
    $(".navbar-inverse").css("border-style", "none");
    $(".navbar-inverse").css("border-image", "none");
    $(".navbar-inverse").css("visibility", "visible");
    //Add the filled class to get the fill left to right effect
    $navbarinv.addClass('filled');
    //Takes .6 of a second for the bar to cross, so call next effect after 600 ms
    window.setTimeout(goTime, 1000);
  }

  function goTime(){
    $("#bgimg").css("background-image", "url(images/play.gif)");
    $("#bgimg").css("visibility", "visible");
    $(".me").css("visibility", "visible");
    $("#details").css("visibility", "visible");
    $("#hi").css("visibility", "visible");
    $("body").css("background-image", "none");
    $("body").css("background-color", "white");
    $("#navdiv").css("visibility", "visible");
    $(".navbar-inverse").css("border-style", "solid");
    $(".navbar-inverse").css("border-image", "linear-gradient(to left, white 25%, #DDF8E8 100%)");
    $(".navbar-inverse").css("border-image-slice", "1");

    //Call light the candle quickly afterwards
    lightTheCandle();
  }

  function lightTheCandle(){
    var $e = $('.char1');
    var $m = $('.char2');
    var $e2 = $('.char3');
    var $r = $('.char4');
    var $s = $('.char5');
    var $o = $('.char6');
    var $n = $('.char7');
    var $k = $('.char9');
    var $i = $('.char10');
    var $r2 = $('.char11');
    var $b = $('.char12');
    var $y = $('.char13');

    var name = [$e,$m,$e2,$r,$s,$o,$n,$k,$i,$r2,$b,$y];

    //Grab each letter one by one and flicker to life
    window.setTimeout(function(){$e.addClass("meNeon")}, 1000);
    window.setTimeout(function(){$m.addClass("meNeon")}, 2000);
    window.setTimeout(function(){$e2.addClass("meNeon")}, 3000);
    window.setTimeout(function(){$r.addClass("meNeon")}, 3700);
    window.setTimeout(function(){$s.addClass("meNeon")}, 4400);
    window.setTimeout(function(){$o.addClass("meNeon")}, 5000);
    window.setTimeout(function(){$n.addClass("meNeon")}, 5200);
    window.setTimeout(function(){$k.addClass("meNeon")}, 5400);
    window.setTimeout(function(){$i.addClass("meNeon")}, 5550);
    window.setTimeout(function(){$r2.addClass("meNeon")}, 5654);
    window.setTimeout(function(){$b.addClass("meNeon")}, 5725);
    window.setTimeout(function(){$y.addClass("meNeon")}, 5799);

    window.setTimeout(function(){
        //Remove all neon as it slows down the speed of the page
        var i=0;
        while(i < 12){
          name[i].removeClass("meNeon");
          i++;
        };
    }, 7000);


    //Add an on hover to turn neon on?
  }
