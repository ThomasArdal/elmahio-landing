$(document).ready(function(){

	// Landing page - testimonial slider
	$(".testimonial-wrapper").owlCarousel({
		items: 1,
		itemElement: "div.item",
		loop: true,
		autoplay: true,
		autoplayHoverPause: true
	});

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		console.log(this);
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - 64)
				}, 500);
				return false;
			}
		}
	});

	// Scrollspy
	$('body').scrollspy({
		target: '.navbar-special',
		offset: 65
	});

	// Enable popovers
	$('[data-toggle="popover"]').popover({
		container: 'body'
	});

});
