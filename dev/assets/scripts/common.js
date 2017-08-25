jQuery(document).ready(function ($) {
$(function() {
	
	$('#map__marker').draggable({
		containment: ".map__image"
	});
$('.slick').slick({
   vertical: true,
   verticalSwiping: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: null,
   nextArrow: $(".button__next"),
   dots: true,
   appendDots: $(".more__dots"),
   autoplay: true,
   responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        vertical: false,
  			verticalSwiping: false,

      }
    }
      ],
  });	
$('.review__secondary-block').slick({
   slidesToShow: 2,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: null,
   nextArrow: $(".button__next-image"),
   dots: true,
   appendDots: $(".more__image-dots"),
   autoplay: true,
   responsive: [
    {
    	breakpoint: 1200,
    	settings: {
    		slidesToShow: 1
    	}
    },
    {
    	breakpoint: 992,
    	settings: {
    		slidesToShow: 2
    	}
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
      ],
});

});
//------Currency Dropdown menu-------
$('.currency__list').css('display', 'none');
$(document).on('click', '.currency', function(){
	$(this).toggleClass('currency--open');
	$(this).children('.currency__list').slideToggle();
});
$(document).on('click', '.currency__item', function(){
	$(this).children('span').prependTo($('.currency'));
	$('.currency').children().next('span').prependTo(this);
	$(this).children().next().remove();

});
//-----------------------------------

//-----------Quote-review------------
	$('.js-close-link').css('display', 'none');
	$('.js-hidden-text').each(function() { 
		if ($(this).height() < 55) {
			$(this).css('height', 55);
			$(this).next().css('visibility', 'hidden');
		} else {
			$(this).addClass('quote__text--overflow');
		};
	});
	$(document).on('click','.js-open-link', function(){
		$(this).prev().removeClass('quote__text--overflow');
		$(this).css('visibility', 'hidden');
		$(this).next().css('display', 'block');
	});
	$(document).on('click','.js-close-link', function(){
		$(this).prev().prev().addClass('quote__text--overflow');
		$(this).css('display', 'none');
		$(this).prev().css('visibility', 'visible');
	});
//--------------------------------------------

//-------------Gallery-overlay----------------
	$('.trip__content').css('display', 'none');
	$(document).on('click','.js-trip-link', function(){
		$(this).parent().toggleClass('image-overlay--open');
		$(this).parent().children('.trip__content').slideToggle();
		$(this).parent().children('.trip__price--bg').delay(200).slideToggle(600);
	});
//--------------------------------------------		
//----------------Footer Nav------------------
if ($(document).width() < 768) {
		$('.footer__nav').css('display', 'none');
		$(document).on('click','.footer__heading', function(){
			$(this).next('.footer__nav').slideToggle();
		});
	};
//--------------------------------------------
//-----------------Map Marker-----------------

//--------------------------------------------

});
jQuery(window).on('load', function () {
	mobileNav.init('.header__menu');
});

var mobileNav = {
	className: '.js_mobile-nav',
	mobileMenuClassName: '.mobile-nav__menu',
	activeClass: 'open',
	init: function (mainMenuClassName) {
		if (!$(this.mobileMenuClassName).children().length) {
			$(mainMenuClassName).children().clone().prependTo(this.mobileMenuClassName);
		}
		$(document).on('click', '.burger', function () {
			mobileNav.toggle();
			$('.header__burger').fadeToggle(0);
			$('.header__logo').fadeToggle(800);
		});
	},
	open: function () {
		$(this.className).addClass(this.activeClass);
	},
	close: function () {
		$(this.className).removeClass(this.activeClass);
	},
	toggle: function () {
		$(this.className).hasClass(this.activeClass) ? this.close() : this.open();
	}


};
