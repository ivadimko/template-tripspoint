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
  });	

});
	$('.quote__text').each(function() { 
	if ($(this).height() < 50) {
		$(this).next().css('display', 'none');
	} else {
		$(this).addClass('quote__text--overflow');
	};
});
$(document).on('click','.quote__link', function(){
	$(this).prev().removeClass('quote__text--overflow');
	$(this).css('display','none');
});
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
