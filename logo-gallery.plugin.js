/**
	plugin: Logo Gallery
	version: 01
	website: Squareplugs.com
	description: Logo Gallery for Squarespace
*/

function initLogoGallery(a, b) {
	void 0 === a ? console.error("Logo gallery parameters is undefined.") :
		(initSlickSlider(a, b), $(window).on("popstate", function (i, t) {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				initSlickSlider(a, b), $(this).off("DOMSubtreeModified")
			})
		}), $("body").on("click", "a", function () {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				initSlickSlider(a, b), $(this).off("DOMSubtreeModified")
			})
		}))
}

function initSlickSlider(slideShow, autoplay) {
	$.getScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js', function () {
	$('.gallery').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: slideShow,
		autoplay: autoplay,
		infinite: true,
		responsive: [{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: slideShow,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: slideShow
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: slideShow,
				}
			}
		]
	});
	});
}
