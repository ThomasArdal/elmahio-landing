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

	$('a.js-scroll-trigger-docs[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - 0)
				}, 500);
				return false;
			}
		}
	});

	// Scrollspy
	if ($('.navbar-special').length){
		$('body').scrollspy({
			target: '.navbar-special',
			offset: 65
		});
	}
	if ($('.sidebar-docs').length){
		$('body').scrollspy({
			target: '.sidebar-docs',
			offset: 10
		});
	}

	// Enable popovers
	$('[data-toggle="popover"]').popover({
		container: 'body'
	});

	// Hljs
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
	$('code.hljs.linenumber').each(function(i, block) {
        hljs.lineNumbersBlock(block);
    });

});
