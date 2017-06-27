/**
	plugin: Back to Top
	version: 01
	website: Squareplugs.com
	description: Back to top for Squarespace
*/
function initBackToTop(e) {
  void 0 === e ? console.error("Back to top parameter is undefined.") : 
	(backToTopFn(e), $(window).on("popstate", function (i, t) {
		$("body div:last-child div:nth-child(3)").bind("DOMSubtreeModified", function () {
			backToTopFn(e), $(this).off("DOMSubtreeModified")
		})
	}), $("body div:last-child div:nth-child(3)").on("click", "a", function () {
		$("body").bind("DOMSubtreeModified", function () {
			backToTopFn(e), $(this).off("DOMSubtreeModified")
		})
	}))
}

function backToTopFn(value) {
	if ($('#back-to-top').length) {
		var scrollTrigger = value,
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
}
