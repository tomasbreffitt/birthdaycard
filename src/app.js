import './sass/style.scss'
import $ from 'jquery';
const ScrollMagic = require('ScrollMagic');
require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');

$(function() {
  var controller = new ScrollMagic.Controller();

  var images = [
    "img/sequence/frame_00.png",
    "img/sequence/frame_01.png",
    "img/sequence/frame_02.png",
    "img/sequence/frame_03.png",
    "img/sequence/frame_04.png",
    "img/sequence/frame_05.png",
    "img/sequence/frame_06.png",
    "img/sequence/frame_07.png",
    "img/sequence/frame_08.png",
    "img/sequence/frame_09.png",
    "img/sequence/frame_10.png",
    "img/sequence/frame_11.png",
    "img/sequence/frame_12.png",
    "img/sequence/frame_13.png",
    "img/sequence/frame_14.png",
    "img/sequence/frame_15.png",
    "img/sequence/frame_16.png",
    "img/sequence/frame_17.png",
    "img/sequence/frame_18.png",
    "img/sequence/frame_19.png",
    "img/sequence/frame_20.png"
  ];

  // TweenMax can tween any property of any object. We use this object to cycle through the array
  var obj = {curImg: 0};

  // create tween
  var tween = TweenMax.to(obj, 2,{
    curImg: images.length - 1,	// animate propery curImg to number of images
    roundProps: "curImg",				// only integers so it can be used as an array index
    repeat: 0,									// repeat 3 times
    immediateRender: true,			// load first image automatically
    ease: Linear.easeNone,			// show every image the same ammount of time
    onUpdate: function () {
      $(".envelope-wrapper > img").attr("src", images[obj.curImg]); // set the image source
    }
  });

  new ScrollMagic.Scene({
    triggerElement: '.envelope',
      duration: "3000",
      triggerHook: "onLeave"
    })
    .setTween(tween)
    .setPin(".envelope-wrapper")
    .addTo(controller);

  for (var i = 1; i < 8; i++) {
    // create a scene
    new ScrollMagic.Scene({
      triggerElement: '#page-wrapper-' + i,
    		duration: 200,
        triggerHook: "onLeave"
    	})
    	.setPin("#page-" + i)
    	.addTo(controller);
  }
});
