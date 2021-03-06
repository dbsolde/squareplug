/**
	plugin: Logo Gallery
	version: 01
	website: Squareplugs.com
	description: Logo Gallery for Squarespace
*/

function initLogoGallery(a, b, c) {
	void 0 === a ? console.error("Logo gallery parameters is undefined.") :
		(initSlickSlider(a, b, c), $(window).on("popstate", function (i, t) {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				initSlickSlider(a, b, c), $(this).off("DOMSubtreeModified")
			})
		}), $("body").on("click", "a", function () {
			$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
				initSlickSlider(a, b, c), $(this).off("DOMSubtreeModified")
			})
		}))
}

function initSlickSlider(showImage ,slideShow, autoplay) {
	$.getScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js', function () {
	$('.gallery').slick({
		dots: true,
		slidesToShow: showImage,
		slidesToScroll: slideShow,
		autoplay: autoplay,
		infinite: true,
		responsive: [{
				breakpoint: 1024,
				settings: {
				slidesToShow: showImage,
				slidesToScroll: slideShow,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: showImage,
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
