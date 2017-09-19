/**
	plugin: Testimonial Slider
	version: 01
	website: Squareplugs.com
	description: Testimonial Slider for Squarespace
*/

function initSlider(a,b,c){
	void 0 === a ? console.error("Tabs parameters is undefined.") : 
	(testimonialSlider(a,b,c), $(window).on("popstate", function (i, t) {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			testimonialSlider(a,b,c), $(this).off("DOMSubtreeModified")
		})
	}), $("body").on("click", "a", function () {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			testimonialSlider(a,b,c), $(this).off("DOMSubtreeModified")
		})
	}))
}

function testimonialSlider(id, slideSpeed, autoPlay) {
	$.getScript('https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.js', function () {
		$("#" + id).owlCarousel({
			navigation: false,
			slideSpeed: slideSpeed,
			paginationSpeed: 800,
			singleItem: true,
			autoPlay: autoPlay,
			autoplayTimeout: slideSpeed,
			smartSpeed: slideSpeed
		});
	});
}
