/**
	plugin: Logo Gallery
	version: 02
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

function initSlickSlider(ShowImage,NextImage,autoplaySlide){
$.getScript('https://kenwheeler.github.io/slick/slick/slick.js', function () {
		$('.slides').slick({
	        dots: true,
	        infinite: true,
	        slidesToShow: ShowImage,
	        slidesToScroll: NextImage,
	        autoplay: autoplaySlide,
	        autoplaySpeed: 5000,
	        arrows: true,
	        responsive: [{
            breakpoint: 1024,
            settings: {
            slidesToShow: ShowImage,
            slidesToScroll: NextImage,
            infinite: true,
            dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: NextImage
            }
          },
          {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: NextImage,
            }
          }
			  ]
		});    
    });
	}
