document.addEventListener("DOMContentLoaded", function (event) {
rating();
});

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
		$(this).parent().children('.trip__content').slideToggle(700);
		$(this).parent().children('.trip__price--bg').fadeToggle(690);
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

//Stars
function rating() {
	var stars 				= document.querySelectorAll('.rating__stars'),
			starsRated		=	document.querySelectorAll('.rating__fill'),
			rating 				= 0,
			fillWidth			= 0,
			rate = {
				name: ['0','0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.8','0.9','1','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','2','2.1','2.2','2.3','2.4','2.5','2.6','2.7','2.8','2.9','3','3.1','3.2','3.3','3.4','3.5','3.6','3.7','3.8','3.9','4','4.1','4.2','4.3','4.4','4.5','4.6','4.7','4.8','4.9','5'],
				subname: ['0','4.00','6.00','7.00','8.00','9.10','10.00','11.00','12.00','14.00','18.00','24.40','26.40','27.40','28.40','29.50','30.40','31.40','32.40','34.40','38.40','44.80','46.80','47.80','48.80','50.00','50.80','51.80','52.80','54.80','58.80','65.20','67.20','68.20','69.20','70.40','71.20','72.20','73.20','75.20','79.20','85.60','87.60','88.60','89.60','90.80','91.60','92.60','93.60','95.60','100.00']
				};
		for (var i = 0; i < stars.length; i++) {
			rating = stars[i].getAttribute("data-ratingValue");
			var elem = rate.name.indexOf(rating);
			fillWidth = rate.subname[elem];
			starsRated[i].style.width = fillWidth + '%';
		}		
}