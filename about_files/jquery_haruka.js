

$(function() {
  /*
  var $win = $(window),
      $main = $('#intro'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });*/
});


$(function() {
  //$('h3').fadeOut(2000);
});


// JavaScript Document
window.onload = function() {

	// ABOUT ME MODAL
	$('#open').on('click', function() {
		$('#overlay, #modalWindow').fadeIn();
	});

	$('#close').on('click', function() {
		$('#overlay, #modalWindow').fadeOut();
	});

	locateCenter();
	$(window).resize(locateCenter);

	function locateCenter() {
		let w = $(window).width();
		let h = $(window).height();

		let cw = $('#modalWindow').outerWidth();
		let ch = $('#modalWindow').outerHeight();

		$('#modalWindow').css({
			'left': ((w - cw) / 2) + 'px',
			'top': ((h + 70 - ch) / 2) + 'px'
		});
	}

	// MENU FIXED PC
	var $win = $(window),
      $main = $('.index-main-content'),
      $nav = $('.global-pc-header__wrapper'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });

	// MENU FIXED SP
	var $winsp = $(window),
			$mainsp = $('.index-main-content'),
			$navsp = $('.global-sp-header__wrapper'),
			navHeightsp = $nav.outerHeight(),
			navPossp = $navsp.offset().top,
			fixedClasssp = 'is-fixed-sp';

	$winsp.on('load scroll', function() {
		var value = $(this).scrollTop();
		if ( value > navPossp ) {
			$navsp.addClass(fixedClasssp);
			$mainsp.css('margin-top', navHeight);
		} else {
			$navsp.removeClass(fixedClasssp);
			$mainsp.css('margin-top', '70');
		}
	});

	// HEADER LOGO ANIMATION
	$('#camera, #camera-sp').hover(
	function(){$(this).addClass('fluffy');},
	function(){$(this).removeClass('fluffy');}
	);

	// SCROLL
	$('a[href^=#]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

	// SP MENU BUTTON
  $('.menu-trigger').on('click',function(){
    $(this).toggleClass('active');
		if($( this ).hasClass( "active" )){
			$('#menu-text').text('CLOSE');
		}else{
			$('#menu-text').text('MENU');
		}
    $('.global-sp-header-nav').slideToggle();
  });



	// FADE-IN ANIMATION
	scroll_effect();

	  $(window).scroll(function(){
	    scroll_effect();
	  });


	function scroll_effect(){
		$('.effect-fadein').each(function(){
	    var elemPos = $(this).offset().top;
	    var scroll = $(window).scrollTop();
	    var windowHeight = $(window).height();
	    if (scroll > elemPos - windowHeight + 140){
	      $(this).addClass('effect-scroll');
	    }
	 });
	}

	// FLOW NAVI SCROLL
	$(window).on('load scroll', function(){
	  if ($(window).scrollTop() > 200) {
	    $('.is_flow').fadeIn(400);
	  } else {
	    $('.is_flow').fadeOut(400);
   }
	});

};
